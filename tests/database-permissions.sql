-- Run against the connected Supabase test project after schema changes.
-- It verifies the live learner contract and simulates the post-30-Oct-2026
-- explicit-grant pattern. Everything in the probe transaction is rolled back.

do $$
begin
  if not has_table_privilege('authenticated', 'public.oih_learner_progress', 'select')
     or not has_table_privilege('authenticated', 'public.oih_learner_progress', 'insert')
     or not has_table_privilege('authenticated', 'public.oih_learner_progress', 'update') then
    raise exception 'Learner progress is missing an authenticated Data API grant';
  end if;

  if not has_column_privilege('authenticated', 'public.oih_learner_profiles', 'first_name', 'select')
     or has_column_privilege('authenticated', 'public.oih_learner_profiles', 'email_suppressed', 'select')
     or has_column_privilege('authenticated', 'public.oih_learner_profiles', 'email_suppressed', 'update') then
    raise exception 'Learner profile column permissions have drifted';
  end if;

  if not has_function_privilege('authenticated', 'public.oih_save_learning_progress(jsonb,text,boolean)', 'execute')
     or has_function_privilege('anon', 'public.oih_save_learning_progress(jsonb,text,boolean)', 'execute') then
    raise exception 'Learning-progress RPC permissions have drifted';
  end if;
end $$;

begin;

-- This is a representative newly-created public table. It must work because
-- of these explicit statements, not because of a Supabase default grant.
create table public.oih_permission_grant_probe (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  label text not null
);
alter table public.oih_permission_grant_probe enable row level security;
revoke all on public.oih_permission_grant_probe from anon, authenticated;
grant select (id, owner_id, label), insert (owner_id, label), update (label)
  on public.oih_permission_grant_probe to authenticated;
create policy "Probe owner access"
  on public.oih_permission_grant_probe for all to authenticated
  using ((select auth.uid()) = owner_id)
  with check ((select auth.uid()) = owner_id);

do $$
begin
  if not has_table_privilege('authenticated', 'public.oih_permission_grant_probe', 'select')
     or not has_table_privilege('authenticated', 'public.oih_permission_grant_probe', 'insert')
     or not has_table_privilege('authenticated', 'public.oih_permission_grant_probe', 'update')
     or has_table_privilege('anon', 'public.oih_permission_grant_probe', 'select') then
    raise exception 'Explicit post-change Data API grants failed';
  end if;
  if not (select relrowsecurity from pg_class where oid = 'public.oih_permission_grant_probe'::regclass)
     or not exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'oih_permission_grant_probe') then
    raise exception 'Probe is missing RLS or its policy';
  end if;
end $$;

rollback;
