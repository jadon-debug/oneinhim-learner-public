# Learner interface styling

Styles load in this order:

| File | Responsibility |
| --- | --- |
| `oneinhim_learner_styles.css` | Existing screen foundations, lessons, quizzes and shared layout |
| `oneinhim_media_home.css` | Content shelves and Discover layout |
| `oneinhim_app_chrome.css` | Shared header, logo, wordmark and header variants |
| `oneinhim_journey_ux.css` | Journey cards, progress, path labels and unit details |

Keep base component rules together, followed by phone and short-screen rules. Add a property to the existing selector instead of appending another override for the same selector and breakpoint. Shared brand changes belong in the header file, even if discovered on Journey.

Journey uses `--journey-ink`, `--journey-muted`, `--journey-accent` and `--journey-border` for its maintained components. Existing `!important` declarations bridge the older foundation stylesheet; do not increase specificity to fix a conflict without inspecting its source.

The foundation stylesheet still contains older styling for other screens. This change removes superseded Journey/header declarations; it does not replace lesson, quiz, account or media-player styling.

Run `npm test` before merging. The stylesheet check parses every CSS file and rejects duplicate selectors/declarations in the maintained Journey/header files or header rules placed in home/Journey components. Also verify Discover, Journey, unit details, a lesson, Account and both desktop/phone layouts in a browser. For a behavior-preserving refactor, compare computed dimensions and colors with the previous release.
