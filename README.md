# LCM Dashboard

The "Dashboard – Filled" screen from the LegalFlow Figma file, built in Angular 21 with plain HTML and SCSS. No UI kit, no chart library, no backend. Everything on the screen comes from static mock data.

## Running it

You'll need Node 24 (there's an `.nvmrc`, so `nvm use` picks it up).

```bash
npm install
npm start          # dev server on http://localhost:4200
npm run build      # production build into dist/
npm test           # unit tests (Vitest)
```

## Stack

- Angular 21 with standalone components, signals (`input()`, `computed()`, `model()`, `linkedSignal()`) and the new control flow. Every component uses `OnPush`.
- SCSS only. Design tokens are CSS custom properties in `src/styles/_tokens.scss`, and type styles, breakpoints and other helpers are Sass mixins.
- Charts are hand-built. The grouped bar chart is HTML/CSS with heights calculated from the data, and the donut is an SVG ring using `stroke-dasharray`.
- No extra npm packages beyond what the Angular CLI installs.

## How it's put together

```
src/
  app/
    core/        layout (shell, sidebar, top bar, nav), constants, models, session mock
    shared/ui/   presentational building blocks: icon, button, card, badge, chips, legend, scroll panel
    features/
      dashboard/ the page, its widgets, models and mock data
  assets/icons/  SVG icons exported from Figma
  styles/        tokens, typography, mixins, base styles
```

A few choices worth explaining:

- **Icons are inline SVG.** The `.svg` files are imported as text (an esbuild loader set in `angular.json`) and rendered by `<app-icon>`. That way they inherit `currentColor` and don't need a request each. The registry is typed against an `IconName` union, so a typo fails the build.
- **Buttons and chips use attribute selectors** (`<button app-button>`, `<a app-link-chip>`). `aria-*`, `disabled`, `routerLink` and click handlers sit on the real element, so nothing has to be forwarded through inputs.
- **Shared components don't know about the data.** Legend dots and the tasks progress bar take their colours from CSS custom properties that each widget sets, so the shared legend has no idea what a "task" or a "matter" is.
- **No text in templates.** Copy comes from `dashboard.mock.ts`, and reusable labels (button text, aria labels, list names) come from `core/constants`. Dates and money are stored as raw values and formatted with Angular's locale helpers.

## Responsive behaviour

Only a 1440px desktop frame was provided, so everything below that is my call:

| Width         | What changes                                                                                                                                                                                        |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1280px and up | Matches the Figma frame. The » button collapses the sidebar to a 64px icon rail.                                                                                                                    |
| 768–1279px    | The sidebar turns into an off-canvas drawer opened from a menu button in the top bar. KPIs go 2×2 and the two dashboard columns stack.                                                              |
| Below 768px   | Smaller page padding, the AI Assistant button becomes icon-only (it keeps its accessible name), the donut stacks above the case list, chart bars shrink to fit and the week strip scrolls sideways. |
| Below 480px   | One KPI per row, activity chips drop under their text, and the tasks legend becomes a 2×2 grid.                                                                                                     |

The drawer moves focus inside when it opens, closes on Esc, on a backdrop click or when you pick a link, and hands focus back to the menu button. While it's open the rest of the page is `inert`, which keeps keyboard and screen reader focus inside it without a hand-rolled focus trap.

I checked the layout at 1440, 1280, 1024, 768 and 375px. There's no horizontal scroll at any of them.

## Accessibility

- Landmarks for the sidebar, the two navigations, the breadcrumb, the top bar and `main`, plus a skip link. Headings go `h1` → `h2` per card → `h3` inside cards.
- Every icon-only button has a label, nav groups use `aria-expanded`/`aria-controls`, the week strip uses `aria-pressed`, and the AI Summary toggle controls its card body.
- The bar chart is exposed as an image with a summary plus a visually hidden data table, and the donut has a text summary.
- All scrollable lists can be focused, so they can be scrolled with the keyboard. Every interactive element has a visible `:focus-visible` ring.
- Transitions only run when `prefers-reduced-motion` isn't set.
- axe-core reports no violations at desktop or mobile width.

### Colour changes for contrast

Some text colours in the design don't reach WCAG AA (4.5:1 for small text), so I darkened them as little as I could. Non-text elements (dots, bars, donut slices) keep the Figma colours.

| Where                    | Figma                              | Used instead                                         |
| ------------------------ | ---------------------------------- | ---------------------------------------------------- |
| Trend up / down          | green 500 (2.4:1), red 500 (3.7:1) | green 800, red 700                                   |
| Link chips, case numbers | brand 500 `#db7658` (3.1:1)        | `#b15f48`, halfway between brand 500 and 700 (4.6:1) |
| Selected week day        | white on brand 500 (3.1:1)         | white on `#b15f48`                                   |
| On Hold badge            | yellow 700 (2.5:1)                 | `#8e6d1f` (4.6:1)                                    |
| Active badge             | green 700 (3.7:1)                  | green 800 (5.0:1)                                    |
| Chart axis labels        | text 400 (2.5:1)                   | `#6d6d6d` (4.7:1)                                    |

## Design inconsistencies I ran into

- The week strip shows "11" for Friday, Saturday and Sunday. Day numbers are now worked out from real dates, so the week reads 7–13 September 2026.
- The donut says 53 cases, but the legend only adds up to 7 (Active 4, Draft 3). I kept 53 in the centre and sized the slices from the legend counts.
- Tasks Overview says "Total 21", but the legend adds up to 27. There's also a hidden "Completed 4" item. Same approach: the total is shown as designed, and the bar widths use the counts.
- The chart title says 112 activities, but the bars add up to 120.
- The dates don't agree with each other: the header says Sep 1 2026, the chart covers Oct 12–18, and events and tasks fall in September.
- The sidebar user is Hassan, but the greeting says Qasim. I left both as designed.
- Two KPI trends are red but have up arrows. I treated red as "down" and rotated the arrow.
- "how to handle the cae." is fixed to "case".
- "In progress" and "In Progress" both appear. Status labels now come from one map, so it's "In Progress" everywhere.
- Event times mix "01:50 PM" and "4:00 PM". They're all formatted the same way now.
- The last case number (#24494) is styled differently from the other four. I gave it the same style.
- Card radius is 12px on three cards and 16px on two, the header gap is 10px on one card and 8px elsewhere, and only Recent Cases has a shadow. I used 12px, 8px and no shadow everywhere.
- The main content starts 5px to the right of the sidebar edge. I lined it up with a straight 24px gutter instead.
- Tuesday shows four event dots but only three events are listed, and Thursday and Friday have dots with no events behind them. Dots are now counted from the events themselves, so I added four placeholder events to keep the counts the same as the design.
- The frame has hidden layers: a "Monthly" dropdown and a breadcrumb hover state. Neither is built.

## Placeholders

- The children of the Email, Matters and Manage Tenants groups are made up, since they're collapsed in the design.
- Only `/dashboard` exists. Every other link redirects back to it.
- Google Meet links point at `meet.google.com`, and the download buttons on file chips don't download anything yet.

## With more time

- Put the mock data behind a service so the widgets could switch to real API calls without changes.
- Build the breadcrumb hover state and the hidden Monthly filter.
- Add ESLint with the Angular rules, plus Playwright tests for the drawer and keyboard flows.
- Add visual regression tests against the Figma export so pixel drift gets caught automatically.
- Make the chart bars focusable with proper tooltips, instead of relying on the hidden table.
- Talk to the designer about the contrast changes and the inconsistencies above rather than deciding them on my own.
