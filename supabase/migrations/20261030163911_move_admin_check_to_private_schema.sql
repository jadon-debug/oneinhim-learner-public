-- Keep the RLS helper out of the exposed public schema, while granting only
-- the authenticated role enough access for policies that call it.
create schema if not exists oih_private;
create or replace function oih_private.is_oih_admin()
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.oih_admin_users admins
    where admins.user_id = auth.uid() and admins.active = true
  );
$$;
revoke all on schema oih_private from public, anon;
grant usage on schema oih_private to authenticated;
revoke all on function oih_private.is_oih_admin() from public, anon;
grant execute on function oih_private.is_oih_admin() to authenticated;

drop policy if exists "Admins can delete content packages" on public.oih_content_packages;
create policy "Admins can delete content packages" on public.oih_content_packages for delete to authenticated using (oih_private.is_oih_admin());
drop policy if exists "Admins can insert content packages" on public.oih_content_packages;
create policy "Admins can insert content packages" on public.oih_content_packages for insert to authenticated with check (oih_private.is_oih_admin());
drop policy if exists "Admins can update content packages" on public.oih_content_packages;
create policy "Admins can update content packages" on public.oih_content_packages for update to authenticated using (oih_private.is_oih_admin()) with check (oih_private.is_oih_admin());
drop policy if exists "Admins can read mux video intake" on public.oih_mux_video_intake;
create policy "Admins can read mux video intake" on public.oih_mux_video_intake for select to authenticated using (oih_private.is_oih_admin());
drop function if exists public.is_oih_admin();
