# Velocity, Two-Channel MIDI & Performance Routing

## What Row 2 Does

Row 2 controls two related outputs:

- an analog **Velocity CV**
- MIDI **Velocity**

Depending on the selected Velocity mode, Row 2 can also determine how notes are distributed between two adjacent MIDI channels:

- the SAM's **base MIDI channel**
- the **next higher MIDI channel**

Example: if the SAM is set to MIDI Channel 4, the two-channel modes use Channels 4 and 5.

## The Seven Velocity Modes

Velocity modes are selected with **Option B positions 1–7**.

| Option | Mode | MIDI behavior |
| --- | --- | --- |
| B-1 | Normal | Base channel only |
| B-2 | Dual | Both channels simultaneously, same Velocity |
| B-3 | X-fade | Both channels simultaneously; base-channel Velocity is inverted relative to the second channel |
| B-4 | Split / reverse basic | Left half: base channel with inverted Velocity; right half: second channel normal |
| B-5 | Split / reverse second | Left half: base channel normal; right half: second channel inverted |
| B-6 | Split | Left half: base channel; right half: second channel; normal Velocity on both |
| B-7 | Split / interlaced | Velocity rises across the knob travel while MIDI channel alternates repeatedly between base and second channel |

The center detent belongs to the base channel in the Split modes.

## Chords on One Channel, Root on the Other

In **Dual (B-2)** and **X-fade (B-3)**, the second MIDI channel is monophonic in programmed-scale operation.

- Base channel: programmed note/chord.
- Second channel: only the **first-entered note** from that chord.

This creates a useful chord + bass architecture without requiring a second sequence.

### Example

Programmed chord: C–E–G  
First note entered: E

- MIDI Ch. 1: C–E–G
- MIDI Ch. 2: E

Change only the first-entered note and the chord can remain identical while the second-channel bass line changes.

## External Modulation of Row 2

The Row 2 **Add In** voltage is added to the physical Velocity-knob setting. This means an external CV can effectively move the Row 2 value for you.

In the Split modes, this can do more than change Velocity: because Row 2 can also select between the base and adjacent MIDI channels, modulation can create rhythmic switching between two synthesizers.

A useful SAM patch is:

1. Route an external modulation source such as an LFO into the SAM's I/O4 bus system.
2. Use Row 4 switches to decide which sequence steps receive that modulation.
3. Patch the switched/modulated signal into **Velocity Add In**.
4. Choose a Split Velocity mode.
5. Adjust modulation amount so selected steps move through the desired parts of the Row 2 range.

The result can alternate instruments, change Velocity, or do both, depending on the selected Velocity mode.

## Velocity CV Remains Continuous

The analog Velocity CV output does not inherit the special two-channel MIDI behavior. It continues to follow the Row 2 knob/Add-In voltage across its full range.

This makes it possible to use Row 2 for MIDI channel/Velocity performance while simultaneously using the analog Velocity CV for filter level, amplitude, or another continuous analog destination.

## Source notes

**Original manual:** Sections 2.2, 3.5.1 and 5.  
**Field workflow:** User-supplied MIDI-capabilities video transcript. It demonstrates using two polyphonic synths on adjacent MIDI channels and externally modulating Row 2 to create rhythmic channel/Velocity changes.
