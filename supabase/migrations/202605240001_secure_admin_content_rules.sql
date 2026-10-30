-- Initial content publishing and administrator access model.
-- Later migrations move the admin predicate into oih_private.
create schema if not exists oih_private;

create table public.oih_admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  role text not null default 'admin' check (role in ('owner','admin','editor')),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create unique index oih_admin_users_email_key on public.oih_admin_users (lower(email));

create table public.oih_content_packages (
  package_id text primary key,
  payload jsonb not null,
  source_title text,
  updated_at timestamptz not null default now()
);

create table public.oih_mux_video_intake (
  asset_id text primary key,
  playback_id text,
  mux_status text not null default 'processing',
  title text,
  duration_seconds numeric,
  payload jsonb not null default '{}'::jsonb,
  last_event_type text,
  last_event_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.oih_admin_users enable row level security;
alter table public.oih_content_packages enable row level security;
alter table public.oih_mux_video_intake enable row level security;

create function public.is_oih_admin() returns boolean language sql stable security definer set search_path = 'public' as $$
  select exists (
    select 1 from public.oih_admin_users admins
    where admins.user_id = auth.uid() and admins.active = true
  );
$$;

grant select on public.oih_admin_users to authenticated;
grant select on public.oih_content_packages to anon;
grant select,insert,update,delete on public.oih_content_packages to authenticated;
grant select on public.oih_mux_video_intake to authenticated;
grant all on public.oih_admin_users,public.oih_content_packages,public.oih_mux_video_intake to service_role;

create policy "Admins can read their own admin profile"
  on public.oih_admin_users for select to authenticated
  using (user_id = auth.uid() and active = true);
create policy "Public can read content packages"
  on public.oih_content_packages for select to public using (true);
create policy "Admins can insert content packages"
  on public.oih_content_packages for insert to authenticated
  with check (public.is_oih_admin());
create policy "Admins can update content packages"
  on public.oih_content_packages for update to authenticated
  using (public.is_oih_admin()) with check (public.is_oih_admin());
create policy "Admins can delete content packages"
  on public.oih_content_packages for delete to authenticated
  using (public.is_oih_admin());
create policy "Admins can read mux video intake"
  on public.oih_mux_video_intake for select to authenticated
  using (public.is_oih_admin());
