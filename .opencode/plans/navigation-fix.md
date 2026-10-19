# Fix sliding-window navigation + add browser tests

## Context

Site is a Hugo page (`hugo server`) whose frontend is a full-page 2D card grid:
- `html { scroll-snap-type: both mandatory; scroll-behavior: smooth }`, `body { overflow-x: scroll }` (assets/scss/main.scss:80-112)
- Grid built by `setupGrid()` (assets/ts/card-grid.ts): 2 `.stack` columns × 6 `section.card`s, ids `col/row`, direction data-attributes (`data-up/down/left/right`) pointing at neighbour cards (targets only set when the neighbour is a real, non-`__inserted` card)
- Fixed arrow nav `nav.stack-switcher` (layouts/_default/section.html:28, layouts/partials/nav.html) with 4 anchors (`a:has(.up|.left|.right|.down)`)
- `handleCardIntersect` (IO callback) decides the "active" card and calls `toggleNav(card)`, which shows/hides arrows via `.hidden` (opacity 0 + pointer-events none) and wires `onclick` scroll handlers

## Diagnosed bugs (verified with headless Chrome against hugo server)

1. **Arrows never update after a horizontal move (root cause)** — activation requires an IO entry whose `intersectionRatio` matches the computed ratio exactly, but IO only fires when a threshold is crossed. E.g. card `2/1` (h=938.8 in a 900px viewport) rests at ratio ≈0.9587, which falls between thresholds 48/51=0.9412 and 49/51=0.9608 → no entry fires at the resting snap position → card never becomes `.active` → `toggleNav` never runs → arrows keep the stale state of the previous card (clicking right from home: nothing happens; arrows stay wrong). Worse, entries that DO fire mid-scroll hit the early `return`s (partial width / <95% height) so they're discarded.
2. **Stuck `active` cards** — the `active`→`previous` deactivation code sits after the early `return`s, so a card that scrolls out (e.g. horizontally) is never deactivated → multiple `.active` cards (observed `1/2` + `2/2`).
3. **`setupNav()`'s IntersectionObserver is dead code** — it observes the fixed-position arrow divs with threshold 1.0 (always intersecting) and toggles `hidden` on the inner `div`s (unstyled), not the anchors. Useless; remove.
4. **Deep links don't scroll** — with `#metamodernism`, main.ts only logs "Init: Moving to …", never scrolls (no element has that id at load; browser can't resolve it).
5. **Hash writes trigger fragment navigation** — `window.location.hash = slug` (on activation) makes the browser do a fragment lookup; slugs can collide with element ids (card `1/2` slug `1` == column id `1`), risking scroll jumps; also pushes a history entry per move via navigation.
6. **Console noise** — `console.log`/`console.trace` spam in card-grid.ts on every move.
7. **Favicon 404s** (`/images/favicon.ico`, `-16.png`, `-32.png`) — generated files are gitignored; environmental, not a code bug (filter in tests, mention in report).

## Fix design (assets/ts/card-grid.ts + assets/ts/main.ts)

Deterministic "scroll settle" activation instead of threshold-ratio matching:

1. Keep the IO purely for the background shading effect (unchanged).
2. Add `setActiveCard(card)`: guard if already active; remove `active`/`previous` from all other cards; add `active`; update URL fragment via `history.pushState` (no fragment navigation, keeps back/forward); call `toggleNav(card)`.
3. Add settle detection: `scrollend` event where supported + debounced (150–200 ms) `scroll` fallback → pick the card with the largest visible area (getBoundingClientRect vs viewport; the snap-aligned card always dominates) → `setActiveCard`. Run once at init. This fixes bugs 1, 2 and works for arrows, menu links, scrolling and wraps (`1/6` → `2/1`).
4. `setupNav()`: drop the bogus IO; just start with all arrows hidden (existing CSS), `toggleNav` manages visibility. Keep API name (used by mock).
5. `toggleNav()`: keep show/hide + onclick scroll handler logic; remove trace/log spam.
6. main.ts init: if hash contains a slug that resolves via `findTarget()`, `scrollIntoView({ behavior: "instant" })` to it (settle handler then activates it and normalizes the hash); replace `window.location.hash = ""` with `history.replaceState` cleanup of directional hashes. Keep exports (`setupGrid`, `handleCardIntersect`, `setupNav`, …) so `Source Files/Mocks/card-grid` keeps working.
7. Run lint (`npm run lint`), `tsc` typecheck, and re-verify manually in headless Chrome (walk all four directions to both edges, confirm arrow states, hash, single `.active`).

## Frontend tests (Playwright)

- Add devDependency `@playwright/test` (+ `playwright.config.ts`, Chromium install), `npm run test:e2e` script; config `webServer` boots `hugo server --port 1313` automatically.
- `tests/navigation.spec.ts` (viewport 1400×900, baseURL localhost:1313):
  1. Initial: card `1/1` active; `up`+`left` hidden; `right`+`down` visible.
  2. `right` → card `2/1` (`light`) active, single `.active`; arrows: `left`+`down` visible, `up`+`right` hidden.
  3. `down` → `2/2` visible arrows `up`/`down`/`left`, `right` hidden.
  4. Walk to column-2 bottom `2/6` (`colophon`): `down`+`right` hidden, `up`+`left` visible; hidden arrow click is a no-op (pointer-events none).
  5. Wrap: from `1/6` `down` lands on `2/1`.
  6. `left` from column 2 → column 1 card active, arrows correct.
  7. Hash reflects active card slug after each move; back/forward returns to previous card.
  8. Deep link: load `/#metamodernism` → lands on that card, active + correct arrows.
  9. No console errors / pageerrors (favicon 404s filtered out).
- Favicon 404s filtered; document in test comments.

## Out of scope / notes

- Mobile viewports, keyboard navigation, DE locale specifics — can be added later.
- `previous` class and `dataset.ratio` are currently unused by CSS (vestigial) — keep writing `previous` for compatibility, drop if desired.
