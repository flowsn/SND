# Workflow: Chords, Two Synths, Modulation & Recording

This workflow combines several SAM-16 functions into one playable system.

## Goal

Use one SAM-16 sequence to:

- play programmed chords
- control a deliberate root/bass note
- distribute or crossfade material across two adjacent MIDI channels
- animate Row 2 with external modulation
- transpose the complete sequence
- capture the resulting MIDI performance for later editing

## Signal Setup

### MIDI

- MIDI keyboard → **SAM MIDI In**
- SAM MIDI Out → Synth A on the SAM's base MIDI channel
- Same MIDI stream → Synth B on the next higher MIDI channel

The second synth can be connected through the MIDI Thru of the first synth or another MIDI distribution method.

### Optional analog voice

- SAM **Pitch Out** → analog synth pitch input
- SAM **Gate Out** → analog synth gate/envelope input

The analog voice follows the first-entered note of programmed chords.

## 1. Build the Chord Bank

Enter PROGRAM mode and program several Pitch positions with notes or chords.

When entering each chord, press the note you want as the monophonic/root output first. The full chord remains polyphonic over MIDI; the first-entered pitch becomes the analog Pitch CV note and, in Dual/X-fade modes, the monophonic note on the adjacent MIDI channel.

## 2. Sequence the Chord Positions

Leave PROGRAM mode and use the 16 Pitch knobs to choose among the programmed Pitch positions.

A single programmed chord can be reused on many sequence steps, or each step can select a different chord.

## 3. Choose a Velocity Mode

Choose an Option B Velocity mode according to the performance you want:

- **B-2 Dual** — both MIDI channels together.
- **B-3 X-fade** — both channels together with opposed Velocity behavior.
- **B-4…B-7 Split variants** — Row 2 can determine which MIDI channel is heard as well as its Velocity behavior.

For a straightforward “two instruments across the Row 2 knob” performance, one of the Split modes is easiest to understand visually.

## 4. Animate Row 2

Row 2 can be played by hand or moved indirectly using **Velocity Add In**.

To make the modulation step-selective, use the SAM's Row 4 / I/O4 routing so only chosen sequence steps receive the external modulation signal.

This turns a static chord sequence into a performance in which instrument selection and/or Velocity changes rhythmically from step to step.

## 5. Transpose the Complete Sequence

The complete Pitch sequence can be transposed without rewriting the chord bank.

Depending on the desired workflow, use the SAM's Pitch transposition facilities / Pitch Add In or MIDI Remote transposition. The programmed relationships between the steps remain intact while the whole sequence moves.

## 6. Record the Performance

The SAM can output musical data on the base MIDI channel and the next higher channel at the same time.

A computer or hardware MIDI sequencer that records both channels simultaneously can therefore capture the resulting performance as separate MIDI-channel data. After recording, the material can be edited, rearranged, or further automated in the receiving sequencer.

This recording step is a workflow demonstrated in the user-supplied video; it is not presented in the original manual as a dedicated SAM function.

## Mental Model

Think of the system as four layers:

1. **Pitch row** — which programmed note/chord is selected?
2. **First-entered note** — which pitch becomes the monophonic/root voice?
3. **Velocity row** — how loud, and in some modes which adjacent MIDI channel?
4. **External modulation** — how does that Row 2 behavior move over time?

Those layers can be manipulated independently, which is why a simple repeating sequence can generate a much larger performance.

## Suggested online-manual graphic

A useful interactive diagram should show:

- the current programmed chord
- the first-entered/root note
- base MIDI channel and next-higher MIDI channel
- a Row 2 knob that visibly changes Velocity and channel behavior according to B-1…B-7
- an optional LFO/modulation input moving Row 2
- a small MIDI recorder view showing two simultaneously captured MIDI lanes

## Source notes

**Original manual:** Sections 2.1, 2.2, 3.5.1, 3.6 and 5.

**Field workflow:** Two user-supplied video transcripts: chord programming/root-note workflow and MIDI-capabilities/performance workflow.
