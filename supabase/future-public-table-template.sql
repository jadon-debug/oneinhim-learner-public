-- Template for every NEW table in the public schema.
--
-- Supabase no longer automatically grants Data API privileges to new public
-- tables. Keep only the grants that the application actually needs, and pair
-- them with RLS policies. Do not grant a role merely to make a 403 disappear.
--
-- Replace <table_name>, the columns, and the policy predicates before use.

create table public.<table_name> (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade
);

alter table public.<table_name> enable row level security;

-- Grant the minimum Data API operation(s) required by the client.
grant select, insert, update on public.<table_name> to authenticated;

create policy "Users can read their own <table_name> rows"
  on public.<table_name> for select to authenticated
  using ((select auth.uid()) = owner_id);

create policy "Users can create their own <table_name> rows"
  on public.<table_name> for insert to authenticated
  with check ((select auth.uid()) = owner_id);

create policy "Users can update their own <table_name> rows"
  on public.<table_name> for update to authenticated
  using ((select auth.uid()) = owner_id)
  with check ((select auth.uid()) = owner_id);

-- Service-only jobs should receive no anon/authenticated grants. The service
-- role bypasses RLS; grant it explicitly only where a server-side client needs
-- it, for example:
-- grant select, insert, update on public.<table_name> to service_role;
