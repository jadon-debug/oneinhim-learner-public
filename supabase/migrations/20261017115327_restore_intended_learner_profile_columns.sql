grant select (id,first_name,language,preferred_medium,onboarding_emails,consent_version,consent_updated_at,verified_at) on public.oih_learner_profiles to authenticated;
grant update (first_name,language,preferred_medium,onboarding_emails,consent_version) on public.oih_learner_profiles to authenticated;
