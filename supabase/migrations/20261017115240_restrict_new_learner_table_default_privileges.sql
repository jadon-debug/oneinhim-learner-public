-- Remove broad defaults before restoring the intended profile-column contract.
revoke select,insert,update,delete,truncate,references,trigger on public.oih_learner_profiles from anon,authenticated;
revoke all on public.oih_learner_progress from anon;
