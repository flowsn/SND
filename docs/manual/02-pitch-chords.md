# Pitch & Chord Programming

## Programmable Pitch Map

The SAM-16 Pitch row has two global maps:

- **Chromatic** — the Pitch knobs select chromatic notes.
- **Programmed** — each of the 12 Pitch-knob positions can contain a user-defined note or chord of up to seven notes.

The programmed map is shared by all 16 steps. A step selects one of the 12 stored note/chord positions with its Pitch knob.

## Programming a Note or Chord

### Before you start

- Stop the SAM-16.
- Connect a MIDI keyboard to **MIDI In**.
- Set the SAM to the MIDI channel you intend to use for programming and playback.

### Step by step

1. Put the **Scale switch into PROGRAM**. Program mode can only be selected while the SAM is stopped.
2. Use the **Step 1 Pitch knob** to select the Pitch position you want to program.
3. Play the desired note or chord from the MIDI keyboard. Up to seven notes can be stored.
4. While programming, the SAM provides software MIDI thru so the connected synthesizer can be heard.
5. Enter the complete chord before releasing the keys. When a held key is released, the current note set is written to the selected Pitch position.
6. Move the Step 1 Pitch knob to another position and repeat.
7. Leave PROGRAM mode when finished.

Programming a position again replaces the assignment stored at that Pitch position. Positions you do not reprogram retain their previous assignments.

## The First Note Matters

For a programmed chord, the **first note entered** has a special role.

The complete chord is sent polyphonically over MIDI, but the SAM's monophonic Pitch CV output can only represent one pitch. The first-entered note is therefore used as the analog Pitch CV note.

The same first-entered note is also used as the monophonic note on the second MIDI channel in the Dual and X-fade Velocity modes.

### Example

Same chord, different first note:

| Entry order | Stored chord | Monophonic / root output |
| --- | --- | --- |
| C → E → G | C–E–G | C |
| E → G → C | C–E–G | E |
| G → C → E | C–E–G | G |

This allows the chord voicing to remain unchanged while deliberately choosing the bass/root note used by an analog monosynth or the SAM's adjacent-channel monophonic output.

## Notes Outside the Programming Range

During programming, MIDI notes outside the middle three octaves (MIDI notes 36–72) are folded into that range. This preserves useful transposition headroom.

## Practical Workflow: Chords + Analog Bass

1. Program chords into several Pitch positions.
2. For each chord, press the desired bass/root note first.
3. Send the SAM's main MIDI channel to a polyphonic synth.
4. Patch **Pitch Out + Gate Out** to an analog monosynth.
5. Sequence the programmed Pitch positions across the 16 steps.

The poly synth receives the complete programmed chord while the analog monosynth follows the first-entered note.

## Source notes

**Original manual:** Sections 2.1 and 3.6.  
**Field workflow:** User-supplied video transcript, “how to enter chords into the SAM-16.” The video confirms the practical programming order, audible software-thru workflow, overwrite behavior, and first-note/root technique.
