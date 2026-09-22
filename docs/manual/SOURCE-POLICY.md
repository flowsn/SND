# Source policy and coverage

## Authority

The authoritative input for this edition is `SAM16_Master_Transkription_v1.0(2).txt`,
the original German manual transcription supplied in the SND Sam-16 project.
It identifies software version 2.05 and SND 2008. The project copy is read-only;
this repository contains editorial paraphrases, not a modified transcription.

Input SHA-256: `2E4BDD8D27B7B45372CBA720B022D15E7FAD1CB3F07940B8E22620D73D793259`.

Chapter source labels refer to the numbered sections in that transcription.
The body labels Song Position Pointer as 4.4 and timing discussion as 4.5;
the contents list does not match this numbering exactly. Follow the body headings.

German and English are maintained together in `src/data/manual.ts` and
`src/data/guides.ts`. The latter supplies a practical introduction, physical
location, actions, expected result and direct related links for every chapter.
PanelLocator is a simplified control-location drawing, not a scaled reproduction
or a claim about current switch positions. Technical
control names remain those printed on the hardware. Workflows combine documented
functions and are labeled as editorial procedures. Prior conversation and video
drafts are context, not a replacement authority for hardware claims.

## Published coverage

| Website section | Original sections |
| --- | --- |
| Connections, power, trigger/reset orientation | 1, 2, 9 |
| Pitch, Velocity, Xfader, I/O | 2.1–2.4 |
| Global priority and Transp. | 3, 3.1 |
| Cont. and controller reset values | 3.2, 9 |
| M.Ch., internal tempo table, shuffle | 3.3, 4.1.1, 9 |
| Option A and limits of the demonstration | 3.4, 3.7 |
| All four Option B parameter groups | 3.5.1–3.5.5 |
| MIDI remote and Program Change table | 3.5.4, 9 |
| Scale and chord programming | 3.6 |
| Align, 16th, var., gates, Note, SPP and latency | 3.7, 4–4.5 |
| Practical workflows | Editorial combinations of 2–5 |
| Analog levels, audio-rate clock, troubleshooting | 1, 6, 7, 9 |

## Verification policy

The public V1–V8 checklist records unverified behavior and source discrepancies.
Do not mark an item verified without a hardware observation including firmware,
clock, global settings, step settings and cabling. In particular:

- No invented recurring cycle for Option A 2–15.
- No invented reverse/pendulum sequence mode from Velocity's “reverse” labels.
- No asserted reset-step counting or exact ALIGN-boundary behavior.
- No invented intermediate knob thresholds for B9–B11 or Split modes.
- Do not silently reconcile Velocity 1–127 in §2.2 with 0–127 in the appendix,
  or the appendix's CC 61–75 range with the special Cont. 15 assignment.
- B-off resets four Option B parameter groups, not all memory/settings.
- Dual/X-fade's second channel is monophonic; do not extend that statement to
  unsupported channel-boundary behavior or other modes.

The existing interactive diagrams are deliberately limited teaching models.
The page identifies their scope before the diagrams. A passing website build
does not constitute a hardware verification pass.

## Reader-first editing

Start with the physical control, not an abstract parameter. Identify its row,
neighboring controls and whether it acts on one step or all steps. Give a short
action and observable result. Link directly to related procedures, especially
Pitch → chord entry. Use everyday wording (for example, “click position in the
middle”). Keep ranges, source caveats and deeper behavior available under the
chapter's expandable reference; do not make them the opening explanation.
