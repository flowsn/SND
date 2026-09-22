# Bilingual reference validation — 2026-09-22

- Astro production build passed (Astro 5.18.2, Node 24.19.0).
- Headless Edge browser loaded the generated HTML without JavaScript errors.
- All 17 reference sections render in German by default and English after selection;
  the other language is hidden and the document language updates.
- All local fragment links resolve to existing targets.
- Timing and Option A play/reset controls complete a smoke check without errors.
- At 390 × 844, the document has no horizontal page overflow. Desktop screenshots
  at 1440 × 1000 and mobile screenshots were inspected; long workflow/checklist
  tables use stacked rows on phones.
- Print media keeps the chosen reference language and hides the interactive demos.
- Git whitespace check passed.

These checks cover the website, not hardware behavior. No physical SAM-16 was
available for verification; the public V1–V8 checklist remains open. iPhone/Safari
and printed pagination were not independently tested.
