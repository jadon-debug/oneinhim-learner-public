-- Applied with explicit user approval on 2026-10-17.
-- Supabase's broad default table grants must be removed before column grants.
revoke select,insert,update,delete,truncate,references,trigger on public.oih_learner_profiles from anon,authenticated;
revoke all on public.oih_learner_progress from anon;
grant select (id,first_name,language,preferred_medium,onboarding_emails,consent_version,consent_updated_at,verified_at) on public.oih_learner_profiles to authenticated;
grant update (first_name,language,preferred_medium,onboarding_emails,consent_version) on public.oih_learner_profiles to authenticated;
