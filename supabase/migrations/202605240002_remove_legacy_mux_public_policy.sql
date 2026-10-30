-- Kept to mirror the live migration history. The policy may only exist on
-- older databases created before the admin-only intake rule was introduced.
drop policy if exists "Public can read mux video intake" on public.oih_mux_video_intake;
