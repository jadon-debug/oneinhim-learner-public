-- Canonical copy of the learner onboarding schema used by the live project.
-- Account security emails are sent by Supabase Auth/custom SMTP.
create schema if not exists oih_private;
revoke all on schema oih_private from public, anon, authenticated;

create table public.oih_learner_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  first_name text not null default '' check (length(first_name) <= 80),
  language text not null default 'en' check (language in ('en','nl')),
  preferred_medium text not null default 'read' check (preferred_medium in ('watch','read','listen')),
  onboarding_emails boolean not null default false,
  consent_version text not null default 'onboarding-v1' check (length(consent_version) <= 80),
  consent_updated_at timestamptz not null default now(),
  verified_at timestamptz not null,
  email_suppressed boolean not null default false,
  unsubscribe_token uuid not null default gen_random_uuid()
);
alter table public.oih_learner_profiles enable row level security;
grant select (id,first_name,language,preferred_medium,onboarding_emails,consent_version,consent_updated_at,verified_at) on public.oih_learner_profiles to authenticated;
grant update (first_name,language,preferred_medium,onboarding_emails,consent_version) on public.oih_learner_profiles to authenticated;
create policy learner_profile_read on public.oih_learner_profiles for select to authenticated using ((select auth.uid()) = id);
create policy learner_profile_update on public.oih_learner_profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);

create table public.oih_learner_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  progress jsonb not null default '{"completed":[],"completedPieces":[],"completedPracticals":[],"completedReviews":[]}',
  last_route text not null default '#view=stageDetailView&stage=startFollowing',
  first_started_at timestamptz,
  first_completed_at timestamptz,
  last_active_at timestamptz not null default now()
);
alter table public.oih_learner_progress enable row level security;
grant select,insert,update on public.oih_learner_progress to authenticated;
create policy learner_progress_read on public.oih_learner_progress for select to authenticated using ((select auth.uid()) = user_id);
create policy learner_progress_insert on public.oih_learner_progress for insert to authenticated with check ((select auth.uid()) = user_id);
create policy learner_progress_update on public.oih_learner_progress for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

create table oih_private.email_consent_log (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  opted_in boolean not null,
  version text not null,
  recorded_at timestamptz not null default now()
);
create table public.oih_email_jobs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  step text not null check (step in ('welcome','day2','day4','day7')),
  status text not null default 'pending' check (status in ('pending','sending','sent','skipped','failed','uncertain')),
  attempts integer not null default 0,
  locked_at timestamptz,
  sent_at timestamptz,
  provider_id text,
  error_code text,
  unique(user_id, step)
);
alter table public.oih_email_jobs enable row level security;
revoke all on public.oih_email_jobs from anon,authenticated;
grant all on public.oih_learner_profiles,public.oih_learner_progress,public.oih_email_jobs to service_role;

create function oih_private.create_learner_profile() returns trigger language plpgsql security definer set search_path = '' as $$
begin
  if new.email_confirmed_at is not null then
    insert into public.oih_learner_profiles(id, first_name, language, onboarding_emails, verified_at)
    values(new.id, left(coalesce(new.raw_user_meta_data->>'first_name',''),80),
      case when new.raw_user_meta_data->>'language'='nl' then 'nl' else 'en' end,
      coalesce(new.raw_user_meta_data->>'onboarding_emails','false')='true', new.email_confirmed_at)
    on conflict (id) do nothing;
  end if;
  return new;
end $$;
revoke all on function oih_private.create_learner_profile() from public,anon,authenticated;
create trigger oih_create_verified_learner after insert or update of email_confirmed_at on auth.users for each row execute function oih_private.create_learner_profile();

create function oih_private.record_learner_consent() returns trigger language plpgsql security definer set search_path = '' as $$
begin
  if tg_op='INSERT' or new.onboarding_emails is distinct from old.onboarding_emails then
    new.consent_updated_at := now();
    insert into oih_private.email_consent_log(user_id,opted_in,version) values(new.id,new.onboarding_emails,new.consent_version);
  end if;
  return new;
end $$;
revoke all on function oih_private.record_learner_consent() from public,anon,authenticated;
create trigger oih_log_learner_consent before insert or update of onboarding_emails on public.oih_learner_profiles for each row execute function oih_private.record_learner_consent();

insert into public.oih_learner_profiles(id,verified_at) select id,email_confirmed_at from auth.users where email_confirmed_at is not null on conflict do nothing;

create function public.oih_save_learning_progress(incoming jsonb, return_route text, has_started boolean default false) returns jsonb language plpgsql security invoker set search_path = '' as $$
declare merged jsonb := '{}'::jsonb; saved jsonb; field text; values_array jsonb;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  if octet_length(incoming::text)>262144 or jsonb_typeof(incoming)<>'object' then raise exception 'Invalid progress'; end if;
  insert into public.oih_learner_progress(user_id) values(auth.uid()) on conflict do nothing;
  select progress into saved from public.oih_learner_progress where user_id=auth.uid() for update;
  foreach field in array array['completed','completedPieces','completedPracticals','completedReviews'] loop
    if jsonb_typeof(incoming->field) is distinct from 'array' then raise exception 'Invalid progress field'; end if;
    if exists(select 1 from jsonb_array_elements(incoming->field) v where jsonb_typeof(v)<>'string' or length(v::text)>200) then raise exception 'Invalid progress value'; end if;
    select coalesce(jsonb_agg(distinct v),'[]'::jsonb) into values_array from jsonb_array_elements(coalesce(saved->field,'[]'::jsonb) || (incoming->field)) v;
    merged := jsonb_set(merged,array[field],values_array);
  end loop;
  if length(return_route)>1500 or return_route !~ '^#view=(moduleDetailView|moduleQuizView|stageDetailView|discoveryDetailView|accountView|gatewayView)' then return_route := '#view=stageDetailView&stage=startFollowing'; end if;
  update public.oih_learner_progress set progress=merged,last_route=return_route,last_active_at=now(),
    first_started_at=case when has_started then coalesce(first_started_at,now()) else first_started_at end,
    first_completed_at=case when jsonb_array_length(merged->'completedPieces')>0 then coalesce(first_completed_at,now()) else first_completed_at end
  where user_id=auth.uid();
  return merged;
end $$;
revoke all on function public.oih_save_learning_progress(jsonb,text,boolean) from public,anon;
grant execute on function public.oih_save_learning_progress(jsonb,text,boolean) to authenticated;

create function public.oih_claim_onboarding_jobs(batch_limit integer default 20) returns setof public.oih_email_jobs language plpgsql security invoker set search_path = '' as $$
declare remaining integer;
begin
  perform pg_advisory_xact_lock(746921013);
  update public.oih_email_jobs set status='uncertain',error_code='stale_delivery_check_provider' where status='sending' and locked_at<now()-interval '15 minutes';
  insert into public.oih_email_jobs(user_id,step)
  select p.id,s.step from public.oih_learner_profiles p cross join (values('welcome',interval '0 days'),('day2',interval '2 days'),('day4',interval '4 days'),('day7',interval '7 days')) s(step,delay)
  where not p.email_suppressed and p.verified_at>now()-interval '14 days' and now()>=p.verified_at+s.delay and (s.step='welcome' or p.onboarding_emails)
  on conflict do nothing;
  select greatest(0, 200-count(*)::integer) into remaining from public.oih_email_jobs where locked_at>=date_trunc('day',now()) and status in ('sending','sent','uncertain');
  return query with candidates as (
    select distinct on (j.user_id) j.id, j.user_id from public.oih_email_jobs j join public.oih_learner_profiles p on p.id=j.user_id
    where j.status='pending' and not p.email_suppressed and p.verified_at>now()-interval '14 days' and (j.step='welcome' or p.onboarding_emails)
      and not exists(select 1 from public.oih_email_jobs other where other.user_id=j.user_id and other.status in ('sending','sent','uncertain') and other.locked_at>now()-interval '24 hours')
    order by j.user_id,case j.step when 'welcome' then 0 when 'day2' then 1 when 'day4' then 2 else 3 end,j.id
    limit least(greatest(batch_limit,0),20,remaining)
  ) update public.oih_email_jobs j set status='sending',locked_at=now(),attempts=j.attempts+1 from candidates c where j.id=c.id returning j.*;
end $$;
revoke all on function public.oih_claim_onboarding_jobs(integer) from public,anon,authenticated;
grant execute on function public.oih_claim_onboarding_jobs(integer) to service_role;
