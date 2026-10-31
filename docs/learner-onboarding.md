# Learner accounts and welcome emails

## What this change provides

- Unlinked event sermons play the message and offer a separately labelled journey overview. They never imply that an unrelated module is a companion lesson.
- Learner sign-up, email confirmation, sign-in, reset/resend, password recovery and sign-out.
- Completed lessons merge across devices without losing offline completions. Guest progress is imported only when explicitly requested.
- Guest, learner A and learner B have separate local progress and note storage. Notes remain local; they are never sent to the email provider.
- Optional onboarding email consent, language and medium preferences, with a server-side consent audit trail.
- Account welcome plus optional Day 2 / Day 4 / Day 7 follow-ups. Completed and active users skip unnecessary prompts.
- English and Dutch HTML/plain-text templates, a monitored reply-to address, opt-out confirmation page and bounce/complaint suppression webhook.

## Current state and activation requirements

The additive `learner_accounts_and_onboarding` database migration has been applied to OIH App Test. Transactional test fixtures were rolled back; no test accounts or emails were retained.

**Public registration and account-email actions remain disabled.** The 31 October 2026 read-only check confirmed that Supabase permits email signup and requires confirmation. Custom SMTP, permitted redirects and real email delivery have not been verified: the dashboard requires sign-in, and the connected database tools do not expose those settings. No real emails were sent. `signupEnabled` and `authEmailEnabled` stay false until the checks below pass. Existing password sign-in and guest use remain available.

The dedicated `oneinhim_auth.html` callback waits for Supabase to consume the confirmation/recovery link before opening the app. This prevents the app's startup routing from overwriting auth fragments before the asynchronously loaded SDK reads them. Tokens are never copied into the learner app URL. Expired links and SDK timeout show a return-to-account action.

Account confirmation and password recovery need Supabase custom SMTP. Optional onboarding messages use the separate Edge Function worker; enabling that worker is **not** a prerequisite for account registration. Keep its delivery flag off until its own tests pass.

**The permission-tightening migration was approved and applied on 2026-10-17.** The SQL is `supabase/restrict-learner-privileges.sql`. It removes Supabase's default broad table grants on the new profile table while retaining explicit grants on editable columns. It also removes anonymous access grants on the new progress table. Existing owner-based RLS policies already isolate rows; this additional step prevents learners from changing delivery suppression or reading internal profile columns. Verified that profile reading/preference editing work while token reads, suppression edits and anonymous progress access are denied.

Source SQL files are reproducible migration records, ordered as:

1. `supabase/learner-onboarding.sql` (applied)
2. `supabase/restrict-learner-privileges.sql` (applied)

## Activation steps

1. Re-run privilege / RLS tests when deploying to a new environment.
2. Connect a Brevo Free account, authenticate the OIH sending domain and verify the sender. Choose an existing monitored reply mailbox; do not invent a new address that nobody receives.
3. Configure Supabase custom SMTP with Brevo's SMTP credentials. Set the account email rate limits and password policy; require email confirmation. Default Supabase demo SMTP must not be used for public signup.
4. Set the Supabase Site URL to `https://jadon-debug.github.io/oneinhim-learner-public/oneinhim_learner_app.html`. Allow this exact callback URL for signup/recovery: `https://jadon-debug.github.io/oneinhim-learner-public/oneinhim_auth.html`. It must match `authRedirectUrl` in the frontend config. The callback opens Account (password recovery opens the new-password form); sign-in resumes the saved route on the same device. Restrict additional preview callback URLs to known deployments. Replace old main-page redirects in newly sent emails; already-issued old links may need to be resent.
5. Apply `supabase/templates/confirmation.html` and `recovery.html`. Suggested subjects: `Confirm your email / Bevestig je e-mailadres` and `Reset your password / Herstel je wachtwoord`. The body chooses EN/NL from user metadata. Resends use Supabase's existing signup template.
6. For optional lifecycle delivery, deploy `supabase/functions/oih-onboarding` with its `deno.json` and `messages.mjs`. Steps 6–10 apply only to that separate worker. `verify_jwt=false` is intentional: the handler authenticates worker/webhook requests with separate private secrets; opt-outs use opaque per-user tokens. An anonymous request cannot process jobs.
7. Set private Edge Function secrets: `BREVO_API_KEY`, `OIH_EMAIL_FROM`, `OIH_EMAIL_REPLY_TO`, `OIH_EMAIL_WORKER_SECRET`, `OIH_EMAIL_WEBHOOK_SECRET`. Keep `OIH_EMAIL_ENABLED` unset until test delivery succeeds. Never put these in frontend config, commits or chat.
8. Configure Brevo hard-bounce, spam, blocked and unsubscribed events to POST to `https://jlrgfcadmaoigybvzdsx.supabase.co/functions/v1/oih-onboarding?event=1`, authenticating with `x-oih-secret: <webhook secret>`. Match by provider message ID; unknown IDs do not change users.
9. Configure an INSERT webhook on `oih_learner_profiles` to POST to the worker URL with `x-oih-secret: <worker secret>`. This invokes welcome processing after confirmation. The body is ignored; recipients and consent always come from the database. GitHub scheduling is the fallback, normally every 30 minutes, subject to GitHub scheduling delays.
10. In GitHub, add the private `OIH_EMAIL_WORKER_SECRET` Actions secret. Only after test sends pass, set the repository variable `OIH_EMAIL_ENABLED=true` and the matching Edge Function secret `OIH_EMAIL_ENABLED=true`.
11. Verify signup, email confirmation, returning on another device, password recovery, opted-in/opted-out reminders, unsubscribe and webhook authentication using an explicitly authorised test inbox. Verify current and expired links in both languages. Do not enable real recipients before these checks.
12. After account-email tests pass, set `signupEnabled: true` and `authEmailEnabled: true` in `oneinhim_team_sync_config.js`, publish the reviewed frontend and smoke-test on an actual mobile viewport. Until then the app clearly offers guest use and explains that registration is being prepared. Do not change table grants or RLS to solve an SMTP or redirect failure.

## Rules for delivery

| Step | Eligibility | Destination |
| --- | --- | --- |
| Welcome | Verified new account, not suppressed | Saved route or journey overview; account information only |
| Day 2 | Opted in and no lesson started | First One Basics lesson; Watch if preferred, otherwise Read |
| Day 4 | Opted in, started, inactive for 24h | Resume unfinished lesson, or choose next step after completion |
| Day 7 | Opted in and inactive for 24h | Gentle check-in and invitation to reply |

An account receives at most one job per step and at most one attempted/delivered message in 24h. The sequence expires 14 days after verification. There is no automatic weekly/newsletter subscription.

The processor claims at most 20 jobs per invocation and 200 deliveries per UTC day. Brevo Free currently allows 300 email sends per day; the lower worker cap leaves some capacity for account mail, but does not guarantee capacity during a large signup spike. Monitor combined account and lifecycle usage. No paid upgrade is enabled by this code.

Sending uses a stable job ID and provider idempotency key. Jobs with ambiguous network/provider results become `uncertain`; they are **not** automatically retried. Check the provider log before a human changes their status. Explicit provider failures are retained as `failed`, not silently retried. A successful provider receipt is recorded. Do not claim exactly-once delivery across external systems.

The worker rechecks opt-in immediately before optional delivery. A tiny in-flight delivery race remains possible after the provider has accepted a message. GET requests to opt-out links show a confirmation page; only POST changes consent, preventing common link scanners from unsubscribing people.

## Replies

Use the selected shared or monitored OIH inbox. Assign an owner for technical questions and a separate appropriate owner for content/prayer responses. Only add an automatic receipt once the team has chosen an honest response window. This implementation does not create a mailbox, send AI pastoral replies, copy prayer content into marketing systems or promise a response time on behalf of the team.

## Validation

`npm test` covers the existing learner regression flow, unlinked sermon routing, closed registration, bilingual screens, separate accounts/local notes, all email variants and behaviour/consent suppression. `tests/registration.cjs` additionally exercises signup payloads, opt-in consent, preserving email after submission, safe errors, reset/resend redirects, single auth subscription, confirmation/recovery callbacks, expired links and callback timeout. These use a mocked auth transport; they do not prove SMTP delivery or the hosted redirect allowlist.

`npm ci` then `npx deno check --node-modules-dir=manual supabase/functions/oih-onboarding/index.ts`

`npx deno test --node-modules-dir=manual --allow-env supabase/functions/oih-onboarding/handler_test.ts`

Database transaction tests exercised verified-profile creation, progress union, row isolation, queue uniqueness and rate limits. All fixture changes are rolled back. Re-run the column permission assertions after applying both migrations; they must report false for anonymous progress reads, learner token reads and learner suppression updates.

Measure verified signup -> first lesson started -> first lesson completed -> return within seven days. Track unsubscribes, failed deliveries and daily usage. Keep private notes out of analytics. Tune timing from actual use rather than claiming this initial sequence is optimal.

The 31 October registration update was checked in a 390 × 844 browser preview. Signup/sign-in now precede the guest progress summary, password recovery precedes account preferences, and account submission uses dark text on a lighter orange button. No real email was submitted in this preview. Pending external checks: hosted SMTP delivery, real confirmation/recovery links and an actual-phone test.

## UI review, 18 October 2026

The [live-site audit](ui-review/index.html) contains ten captured screens from release 228 and findings tied to each step. Those are before screenshots. Additional review-branch fixes remove the inner-page header divider, correct mobile header icon and feed text contrast, let the current unit start at zero progress, point the journey progress card to Account, simplify closed registration, and improve search filter sizing/selection. The [static mobile review](mobile-ui-review.html) includes updated Account, Feed, Podcast Shows and starting-point markup/styles. Updated browser visual QA remains pending because the managed preview sandbox cannot mount `/proc`.
