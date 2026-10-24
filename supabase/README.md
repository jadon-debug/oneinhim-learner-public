# Supabase schema and permission contract

## Current deployment state

The connected project has dashboard-applied migrations, including the learner
onboarding schema and the 17 October 2026 learner-profile privilege reduction.
The repository does not yet mirror that migration history in
`supabase/migrations/`; do not run a reset or create a preview database from
this directory as though it were a complete schema baseline.

Existing public tables keep their permissions when Supabase stops automatically
granting Data API access to newly created public tables on 30 October 2026.
The learner tables are already safe because their creation SQL specifies the
required grants:

| Object | Required application access |
| --- | --- |
| `oih_learner_profiles` | authenticated, selected profile columns only, `SELECT` and `UPDATE` |
| `oih_learner_progress` | authenticated, `SELECT`, `INSERT`, and `UPDATE`; progress is saved via `oih_save_learning_progress` |
| `oih_email_jobs` | service role only |
| `oih_content_packages` | anonymous read; authenticated administration is constrained by RLS |
| `oih_admin_users`, `oih_mux_video_intake` | authenticated administration, constrained by RLS |

## Before creating a public table

1. Add the table, `ENABLE ROW LEVEL SECURITY`, precise policies, and explicit
   role grants together in one reviewed migration. Start from
   `future-public-table-template.sql`.
2. Use `authenticated` only for an authenticated browser operation that needs
   it. Do not give anonymous access unless the app intentionally exposes the
   data.
3. Keep service-only queues inaccessible to `anon` and `authenticated`.
4. Run `tests/database-permissions.sql` in the Supabase SQL editor or with the
   deployment workflow. It rolls back its temporary probe table.
5. Before adopting resets or preview environments, export the live migration
   history into versioned `supabase/migrations/` so those environments replay
   the full schema and grants.
