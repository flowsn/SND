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

## Reader-first revision

- All 17 chapters now have bilingual location/action/result instructions and direct
  related links; control chapters include a highlighted schematic panel map.
- Pitch → “Enter a MIDI chord” navigation was clicked and checked in the browser.
- Technical details start collapsed and open on demand.
- Pitch and chord-programming guides were rendered; desktop and 390px mobile
  Pitch screenshots were visually inspected, including highlighted physical rows.
- Language switching, all fragment targets, playback/reset controls and mobile
  page width passed again after restructuring.
- Reader-facing “detent” was removed, including the older timing demo copy.
- Hardware verification remains outstanding; the teaching diagrams do not add
  hardware behavior beyond the source-backed reference.

## Compact Pitch / Velocity layout

- Pitch and Velocity use compact control-symbol bullets instead of introductory
  paragraphs and tutorial headings; German and English both checked.
- Shared symbols distinguish blue knobs, orange row switches, green global switches and neutral sockets.
- Global switch upper/lower labels were checked against the supplied hardware
  photo E159EC01-30DF-4FD0-8D0B-F7B454B35D0C.jpeg; Clock's middle var. label is shown.
- Desktop and mobile screenshots inspected; MIDI chord cross-link clicked;
  all chapter anchors and existing transport smoke checks pass.
- The rest of the manual retains the previous reading structure for now.

## Connection locations and colour separation

- Global switches use green, with matching green explanation boxes; knobs remain blue and row switches orange.
- Pitch and Velocity diagrams include the bottom-left control/Add In/Out groups. Pitch CV Out and rear MIDI Out have separate bullets.
- Physical positions checked against the German transcription (sections 2.1 and 3.1) and the manufacturer photograph: https://www.s-n-d.com/sam-16/sam-16big.jpg. The connection inset is schematic, not a complete panel drawing.
- Production build and bilingual compact-layout browser checks pass, including the chord link, 390px page width and absence of browser errors.
