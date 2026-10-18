-- Run against the connected test project. All fixtures and queue claims roll back.
begin;
select set_config('oih.test_a',gen_random_uuid()::text,true),set_config('oih.test_b',gen_random_uuid()::text,true);
insert into auth.users(id,email,email_confirmed_at,raw_user_meta_data) values
  (current_setting('oih.test_a')::uuid,'oih-fixture-a@example.invalid',now()-interval '3 days','{"language":"nl","onboarding_emails":true}'),
  (current_setting('oih.test_b')::uuid,'oih-fixture-b@example.invalid',now()-interval '3 days','{}');
select set_config('request.jwt.claim.sub',current_setting('oih.test_a'),true);
set local role authenticated;
select public.oih_save_learning_progress('{"completed":["a"],"completedPieces":["a"],"completedPracticals":[],"completedReviews":[]}', '#view=moduleDetailView&stage=startFollowing&module=0',true);
select public.oih_save_learning_progress('{"completed":["b"],"completedPieces":["b"],"completedPracticals":[],"completedReviews":[]}', '#view=moduleDetailView&stage=startFollowing&module=1',true);
do $$ begin
  if (select jsonb_array_length(progress->'completedPieces') from public.oih_learner_progress where user_id=auth.uid())<>2 then raise exception 'Progress merge failed'; end if;
  if (select count(*) from public.oih_learner_profiles)<>1 then raise exception 'Profile isolation failed'; end if;
  if exists(select 1 from public.oih_learner_progress where user_id<>auth.uid()) then raise exception 'Progress isolation failed'; end if;
end $$;
reset role;
do $$ declare claimed_count integer; begin
  select count(*) into claimed_count from public.oih_claim_onboarding_jobs(0);
  if claimed_count<>0 then raise exception 'Zero batch limit ignored'; end if;
  perform public.oih_claim_onboarding_jobs(20);
  if (select count(*) from public.oih_email_jobs where user_id=current_setting('oih.test_a')::uuid and status='sending')<>1 then raise exception 'More than one message claimed for the same user'; end if;
  if exists(select 1 from public.oih_email_jobs where user_id=current_setting('oih.test_b')::uuid and step<>'welcome') then raise exception 'Opt-out ignored'; end if;
  perform public.oih_claim_onboarding_jobs(20);
  if (select count(*) from public.oih_email_jobs where user_id=current_setting('oih.test_a')::uuid and status='sending')<>1 then raise exception '24h limit ignored'; end if;
end $$;
rollback;
