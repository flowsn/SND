type Text = [string, string];
type Link = { to: string; label: Text };
export type Guide = {
  intro: Text; find: Text; rows?: string[]; globals?: string[];
  actions: Text[]; result: Text; links: Link[];
};
export const guides: Record<string, Guide> = {
  pitch: {
    intro: ['Mit dem Pitch-Knopf bestimmst du, welcher Ton in einem Schritt gespielt wird.', 'Use the Pitch knob to choose the note played at a step.'],
    find: ['Suche die oberste Reihe der großen Drehknöpfe, direkt unter den Trigger/Reset-Schaltern. Das sind die 16 Pitch-Knöpfe: einer pro Schritt. Der kleine Schalter direkt unter jedem Pitch-Knopf verschiebt dessen Ton nach oben oder unten.', 'Find the top row of large knobs, directly below the Trigger/Reset switches. These are the 16 Pitch knobs: one for each step. The small switch immediately below each Pitch knob shifts that step’s note up or down.'],
    rows: ['pitch','transpose'], globals:['Scale'],
    actions: [
      ['Für einzelne chromatische Töne: Den Scale-Schalter unten rechts auf chromatic stellen.', 'For individual chromatic notes: set the Scale switch at the bottom right to chromatic.'],
      ['Den obersten Trigger/Reset-Schalter eines Schritts nach unten auf trigger stellen. Seinen Pitch-Knopf auf 12 Uhr drehen: Diese Position wählt C. Die nächste Position im Uhrzeigersinn wählt Cis.', 'Set a step’s top Trigger/Reset switch down to trigger. Turn its Pitch knob to 12 o’clock: that position selects C. The next position clockwise selects C-sharp.'],
      ['Den Schalter direkt unter diesem Knopf zunächst in der Mitte lassen. Mit up oder down wird der Ton um das zuvor eingestellte Intervall verschoben.', 'Start with the switch directly below that knob in the middle. Selecting up or down shifts the note by the interval set for that direction.']
    ],
    result: ['Du änderst den Ton dieses Schritts. Für Akkorde bleibt es derselbe Pitch-Knopf: Nach dem Programmieren wählt jede seiner Positionen einen gespeicherten Akkord. Folge dafür „MIDI-Akkord eingeben“ direkt unten.', 'You change that step’s note. Chords use the same Pitch knob: after programming, each position selects a stored chord. Follow “Enter a MIDI chord” directly below.'],
    links:[{to:'scale-reference',label:['MIDI-Akkord eingeben →','Enter a MIDI chord →']},{to:'global-controls',label:['Wie groß ist up/down?','Set the up/down interval']},{to:'remote',label:['Die ganze Sequenz per MIDI verschieben','Transpose the whole sequence over MIDI']}]
  },
  velocity: {
    intro: ['Mit Velocity bestimmst du, wie stark eine Note angeschlagen wird. Wie sich das anhört, hängt vom angeschlossenen Klang ab.', 'Velocity sets how strongly a note is played. How that sounds depends on the connected synth patch.'],
    find: ['Die zweite Reihe großer Drehknöpfe ist Velocity. Sie liegt unter den kleinen Pitch-Transpose-Schaltern und über den Xfader-Knöpfen.', 'Velocity is the second row of large knobs, below the small Pitch transpose switches and above the Xfader knobs.'],
    rows:['velocity'],globals:['Option'],
    actions:[
      ['Für den einfachen Anfang Option B1 (Normal) wählen. Der Link unten zeigt, wie Option B eingestellt wird.', 'Start with Option B1 (Normal). The link below shows how to change Option B.'],
      ['Während die Sequenz läuft, den Velocity-Knopf eines aktiven Schritts nach links oder rechts drehen.', 'While the sequence runs, turn the Velocity knob for an active step left or right.'],
      ['Für einen mittleren Wert den Knopf bis zur spürbaren Klickposition in der Mitte drehen.', 'For a middle value, turn the knob to the click position in the middle.']
    ],
    result:['Dieser Schritt wird mit niedrigerer oder höherer Anschlagstärke gesendet. In den Zweikanal-Modi kann derselbe Knopf zusätzlich bestimmen, welcher Synthesizer spielt; die Modustabelle steht unten.', 'That step is sent with lower or higher velocity. In the two-channel modes, the same knob can also determine which synth plays; see the mode table below.'],
    links:[{to:'option-b',label:['Option B einstellen','Set Option B']},{to:'workflows',label:['Zwei Synthesizer spielen','Play two synths']},{to:'io',label:['Nur ausgewählte Schritte modulieren','Modulate selected steps']}]
  },
  xfader: {
    intro:['Xfader mischt zwei Eingangssignale. Für jeden Schritt stellst du ein eigenes Mischungsverhältnis ein.', 'Xfader mixes two input signals. Each step has its own mix setting.'],
    find:['Xfader ist die unterste Reihe großer Drehknöpfe. Dazu gehören die Buchsen InL, InR und 3-Out auf der Vorderseite.', 'Xfader is the bottom row of large knobs. Its front-panel sockets are InL, InR and 3-Out.'],
    rows:['xfader'],
    actions:[
      ['Für eine einfache Steuerspannung InL und InR frei lassen. 3-Out mit einem passenden Steuereingang des Synthesizers verbinden, etwa für den Filter.', 'For a simple control voltage, leave InL and InR unplugged. Connect 3-Out to a suitable synth control input, such as filter modulation.'],
      ['Clock auf 16th stellen und die Cont.-Zuweisung für Reihe 3 auf off setzen, wenn die Knöpfe nur die analoge Spannung steuern sollen.', 'Choose Clock 16th and set the Row 3 Cont. assignment to off if you want the knobs to control only the analog voltage.'],
      ['Die Xfader-Knöpfe verschieden einstellen und die Sequenz starten.', 'Set the Xfader knobs to different positions and start the sequence.']
    ],
    result:['Ohne Eingangskabel liefert 3-Out pro Schritt einen Wert zwischen 0 und +5 V. Mit zwei angeschlossenen Signalen mischt der Knopf stattdessen zwischen InL und InR. Im var.-Taktmodus bestimmt er außerdem die Schrittdauer.', 'With no input cables, 3-Out provides a value between 0 and +5 V per step. With two input signals connected, the knob mixes between InL and InR instead. In var. clock mode it also sets step duration.'],
    links:[{to:'controllers',label:['Zusatzfunktion der Knöpfe einstellen','Set the knobs’ extra function']},{to:'timing-sync',label:['Dieselben Knöpfe für Schrittlängen nutzen','Use these knobs for step duration']},{to:'analog-reference',label:['Pegel für CV und Audio','CV and audio levels']}]
  },
  io: {
    intro:['Mit I/O schaltest du ein Signal nur bei den Schritten durch, an denen du es brauchst.', 'Use I/O to pass a signal only on the steps where you want it.'],
    find:['I/O ist die unterste Reihe kleiner Schalter, direkt unter den Xfader-Knöpfen. Dazu gehören die A-/B-Buchsen und I/O4 auf der Vorderseite.', 'I/O is the bottom row of small switches, directly below the Xfader knobs. It uses the A/B sockets and I/O4 on the front panel.'],
    rows:['io'],
    actions:[
      ['Für schrittweise Velocity-Modulation einen LFO an I/O4 A anschließen. Ein LFO erzeugt eine langsam wechselnde Steuerspannung.', 'For step-selective velocity modulation, connect an LFO to I/O4 A. An LFO produces a slowly changing control voltage.'],
      ['I/O4 mit Add In 2 verbinden. Den zugehörigen Add-In-Regler zunächst auf einen kleinen Modulationsanteil einstellen.', 'Connect I/O4 to Add In 2. Start with a small modulation amount on its Add In control.'],
      ['Die I/O-Schalter der gewünschten Schritte nach oben stellen. Die anderen in der Mitte lassen: Dort wird kein Eingang durchgeschaltet.', 'Move the I/O switches up on the steps you want to modulate. Leave the others in the middle: no input is connected there.']
    ],
    result:['Der LFO beeinflusst nur die ausgewählten Schritte. Die untere Schalterstellung wählt B; ohne Kabel an B liegt dort +5 V an. Sie ist also nicht dasselbe wie „aus“.', 'The LFO affects only the selected steps. The down position selects B; with no cable connected, B carries +5 V. It is therefore not the same as “off.”'],
    links:[{to:'velocity',label:['Was die Modulation mit Velocity macht','How modulation affects Velocity']},{to:'pitch',label:['Stattdessen die Tonhöhe verändern','Change pitch instead']},{to:'analog-reference',label:['Geeignete Signalpegel','Suitable signal levels']}]
  },
  'global-controls': {
    intro:['Hier stellst du ein, um wie viele Halbtöne die kleinen Schalter unter den Pitch-Knöpfen einen Ton verschieben.', 'Here you set how many semitones the small switches below the Pitch knobs shift a note.'],
    find:['Unten rechts: Transp. ist der Schalter direkt links vom gemeinsamen Einstellknopf (Encoder). Nicht mit den 16 Transpose-Schaltern unter den Pitch-Knöpfen verwechseln.', 'At the bottom right, Transp. is the switch immediately left of the shared setting knob (encoder). It is separate from the 16 transpose switches below the Pitch knobs.'],
    rows:['transpose'],globals:['Transp.','Encoder'],
    actions:[
      ['Am gemeinsamen Einstellknopf beispielsweise 12 wählen. Dann Transp. auf up stellen: Das übernimmt den Wert für die Aufwärts-Verschiebung.', 'Choose 12 on the shared setting knob, for example. Then move Transp. to up: this stores the upward shift.'],
      ['Transp. wieder in die Mitte stellen. An einem Schritt den kleinen Schalter unter Pitch auf up stellen.', 'Return Transp. to the middle. On one step, move the small switch below Pitch to up.'],
      ['Für down einen eigenen Wert einstellen. Beide Richtungen können 0–15 Halbtöne verschieben.', 'Set a separate value for down. Either direction can shift by 0–15 semitones.']
    ],
    result:['Mit up = 12 spielt jeder Schritt mit Schalter auf up eine Oktave höher. Die globalen Werte bleiben nach dem Ausschalten gespeichert.', 'With up = 12, every step whose switch is set to up plays one octave higher. Global values are retained when power is switched off.'],
    links:[{to:'pitch',label:['Zurück zum Pitch-Knopf','Back to the Pitch knob']},{to:'option-b',label:['Warum der gemeinsame Einstellknopf manchmal nichts ändert','Why the shared knob may not change a setting']}]
  },
  controllers: {
    intro:['Die Xfader-Knöpfe und I/O-Schalter können zusätzlich MIDI-Befehle senden, etwa um einen Synthesizer-Parameter pro Schritt zu verändern.', 'The Xfader knobs and I/O switches can also send MIDI messages to change a synth parameter on each step.'],
    find:['Unten rechts liegt Cont. zwischen M.Ch. und Transp. Der gemeinsame Einstellknopf ganz rechts wählt die Funktion.', 'At the bottom right, Cont. is between M.Ch. and Transp. The shared setting knob at the far right chooses the function.'],
    rows:['xfader','io'],globals:['Cont.','Encoder'],
    actions:[
      ['Transp. in die Mitte stellen. Für einen einfachen Versuch am Einstellknopf 1 wählen und Cont. auf Row3 stellen.', 'Put Transp. in the middle. For a simple example, select 1 on the setting knob and move Cont. to Row3.'],
      ['Die Xfader-Knöpfe senden damit MIDI-Controller 1 (Modulation). Den Empfänger so einstellen, dass er darauf reagiert.', 'The Xfader knobs now send MIDI controller 1 (modulation). Set the receiving synth to respond to it.'],
      ['Für keine zusätzliche MIDI-Funktion off wählen und der betreffenden Reihe zuweisen. Ihre analogen Anschlüsse arbeiten weiter.', 'To remove the extra MIDI function, choose off and assign it to the relevant row. Its analog connections keep working.']
    ],
    result:['Die Reihe steuert den gewählten MIDI-Parameter. Cont. 15 ist eine Sonderfunktion für die Notenlänge; die Anleitung dazu ist direkt verlinkt.', 'The row controls the selected MIDI parameter. Cont. 15 is a special function for note length; its instructions are linked directly below.'],
    links:[{to:'timing-sync',label:['Gate / Notenlänge mit Cont. 15','Gate / note length with Cont. 15']},{to:'option-b',label:['Controller vor oder nach Noten senden','Send controllers before or after notes']}]
  },
  'midi-channel': {
    intro:['SAM und Synthesizer müssen denselben MIDI-Kanal verwenden, damit die Noten ankommen.', 'The SAM and synth must use the same MIDI channel for notes to get through.'],
    find:['Unten rechts: M.Ch. liegt zwischen Option und Cont. Zum Einstellen gehört der gemeinsame Drehknopf ganz rechts.', 'At the bottom right, M.Ch. is between Option and Cont. Use it with the shared setting knob at the far right.'],
    globals:['M.Ch.','Encoder'],
    actions:[
      ['SAM stoppen. Cont. und Transp. in die Mitte stellen, damit sie die Kanalwahl nicht blockieren.', 'Stop the SAM. Put Cont. and Transp. in the middle so they do not block channel selection.'],
      ['M.Ch. auf reset stellen und den Einstellknopf auf den gewünschten MIDI-Kanal drehen. off schaltet die MIDI-Ausgabe ab.', 'Set M.Ch. to reset and turn the setting knob to the desired MIDI channel. off disables MIDI output.'],
      ['Den Synthesizer auf denselben Kanal stellen. Bei zwei Synthesizern im Dual-/Split-Modus empfängt der zweite auf dem nächsthöheren Kanal.', 'Set the synth to the same channel. With two synths in Dual/Split modes, the second receives on the next higher channel.']
    ],
    result:['Die Noten erreichen den gewählten Empfänger. Achtung bei run: Ohne externe MIDI-Clock regelt der Knopf das interne Tempo; mit laufender MIDI-Clock regelt er Shuffle.', 'Notes reach the chosen receiver. Take care with run: without external MIDI clock, the knob sets internal tempo; with MIDI clock running, it sets shuffle.'],
    links:[{to:'timing-sync',label:['Tempo, Shuffle und Clock verstehen','Understand tempo, shuffle and clock']},{to:'velocity',label:['Zwei MIDI-Kanäle verwenden','Use two MIDI channels']}]
  },
  'alternating-reference': {
    intro:['Option A lässt die Sequenz auch bei Schritt 9 beginnen. So entstehen wechselnde Phrasen aus denselben 16 Schritten.', 'Option A lets the sequence start at step 9 as well. This creates changing phrases from the same 16 steps.'],
    find:['Unten rechts: Option ist der dritte Schalter von links in der globalen Schaltergruppe. Der Einstellknopf steht ganz rechts.', 'At the bottom right, Option is the third switch from the left in the global switch group. The setting knob is at the far right.'],
    globals:['Option','Encoder'],
    actions:[
      ['Für das dokumentierte Beispiel Clock 16th und Align 16/8 wählen; frühe Reset-Punkte entfernen.', 'For the documented example, choose Clock 16th and Align 16/8; remove early reset points.'],
      ['M.Ch., Cont. und Transp. in die Mitte stellen. Option auf A bringen und den Einstellknopf auf 1 drehen; Option anschließend wieder in die Mitte stellen.', 'Put M.Ch., Cont. and Transp. in the middle. Move Option to A and turn the setting knob to 1; then return Option to the middle.'],
      ['Die Sequenz starten. Zum normalen Betrieb Option kurz auf B stellen.', 'Start the sequence. To return to normal operation, briefly select Option B.']
    ],
    result:['In diesem Beispiel wechselt die Reihenfolge zwischen 1–16 und 9–16 → 1–8. off bedeutet hier „immer bei 9 starten“. Die weiteren Wiederholungen bei 2–15 müssen noch am Gerät geprüft werden.', 'In this example the order alternates between 1–16 and 9–16 → 1–8. Here, off means “always start at 9.” The later repetition pattern for 2–15 still needs hardware testing.'],
    links:[{to:'optionA',label:['Den Wechsel animiert ansehen','Watch the animated example']},{to:'align-reference',label:['Wie Align die Phrasenlänge bestimmt','How Align sets phrase length']},{to:'verification',label:['Offene Hardware-Fragen','Open hardware questions']}]
  },
  'option-b': {
    intro:['Option B ist der Zugang zu vier Einstellungen: Velocity-Modus, Zeitraster, Reihenfolge der MIDI-Daten und MIDI-Fernsteuerung.', 'Option B gives access to four settings: velocity mode, timing grid, MIDI message order and MIDI remote control.'],
    find:['Unten rechts den Option-Schalter suchen. B ist seine untere Stellung. Die Werte wählst du mit dem gemeinsamen Einstellknopf ganz rechts.', 'Find the Option switch at the bottom right. B is its down position. Choose values with the shared setting knob at the far right.'],
    globals:['Option','Encoder'],
    actions:[
      ['M.Ch., Cont. und Transp. in die Mitte stellen. Option zunächst ebenfalls neutral lassen.', 'Put M.Ch., Cont. and Transp. in the middle. Leave Option neutral for now too.'],
      ['Beispiel Dual: Den Einstellknopf zuerst in den Bereich 1–7 drehen. Dann Option auf B stellen und den Knopf auf 2 drehen.', 'For Dual, for example: first turn the setting knob into the 1–7 range. Then move Option to B and turn the knob to 2.'],
      ['Wenn der Knopf bereits auf 2 steht, innerhalb derselben Gruppe kurz auf einen anderen Wert und zurück drehen. Danach Option wieder neutral stellen.', 'If the knob is already at 2, move briefly to another value within the same group and back. Then return Option to neutral.']
    ],
    result:['B2 wählt Dual. Das Zeitraster und die anderen Gruppen behalten ihre Einstellungen. Beim Durchdrehen über Gruppengrenzen kannst du diese jedoch ungewollt ändern. B schaltet außerdem den alternierenden Betrieb aus.', 'B2 selects Dual. The timing grid and other groups keep their settings. Turning through another group can change it accidentally, however. Selecting B also switches off alternating operation.'],
    links:[{to:'velocity',label:['Was die sieben Velocity-Modi tun','What the seven velocity modes do']},{to:'timing-sync',label:['Zeitraster ausprobieren','Try the timing grids']},{to:'remote',label:['Optionen per MIDI umschalten','Change options over MIDI']}]
  },
  remote: {
    intro:['Mit einer MIDI-Tastatur kannst du die ganze Sequenz höher oder tiefer spielen, ohne die Pitch-Knöpfe zu verändern.', 'A MIDI keyboard can shift the whole sequence higher or lower without changing the Pitch knobs.'],
    find:['Die Tastatur kommt an MIDI In auf der Rückseite. Aktiviert wird die Fernsteuerung mit Option B14 unten rechts.', 'Connect the keyboard to MIDI In on the back. Enable remote control with Option B14 at the bottom right.'],
    globals:['Option','Encoder'],
    actions:[
      ['Den Sender auf den Basis-MIDI-Kanal des SAM stellen.', 'Set the sender to the SAM’s base MIDI channel.'],
      ['Option B14 wählen. Die Bedienfolge dafür steht unter „Option B einstellen“.', 'Select Option B14. See “Set Option B” for the physical steps.'],
      ['Noten im Bereich MIDI 36–72 senden. Mit B15 kannst du die Fernsteuerung wieder ausschalten.', 'Send notes in the MIDI 36–72 range. Select B15 to disable remote control again.']
    ],
    result:['Die Sequenz lässt sich bis zu eine Oktave nach unten oder zwei nach oben verschieben. Außerdem können MIDI-Programmwechsel die Optionen der Tabelle unten umschalten.', 'The sequence can shift up to one octave down or two octaves up. MIDI program changes can also select the options in the table below.'],
    links:[{to:'option-b',label:['Option B einstellen','Set Option B']},{to:'midi-channel',label:['Den passenden MIDI-Kanal wählen','Choose the matching MIDI channel']},{to:'verification',label:['Noch ungeklärtes Verhalten gehaltener Noten','Unverified held-note behavior']}]
  },
  'scale-reference': {
    intro:['Speichere einen Akkord in einer Pitch-Position. Danach kann jeder Schritt diesen Akkord mit seinem Pitch-Knopf auswählen.', 'Store a chord in a Pitch position. Any step can then select that chord with its Pitch knob.'],
    find:['Du brauchst den Scale-Schalter unten rechts und ausschließlich den Pitch-Knopf von Schritt 1: ganz links in der obersten Knopfreihe. Die MIDI-Tastatur wird hinten an MIDI In angeschlossen.', 'You need the Scale switch at the bottom right and only the step 1 Pitch knob: the far-left knob in the top knob row. Connect the MIDI keyboard to MIDI In on the back.'],
    rows:['pitch'],globals:['Scale'],
    actions:[
      ['SAM stoppen. Die MIDI-Tastatur auf denselben Kanal wie den SAM stellen.', 'Stop the SAM. Set the MIDI keyboard to the same channel as the SAM.'],
      ['Scale nach oben auf PROGRAM stellen. Mit dem Pitch-Knopf von Schritt 1 die Position auswählen, in der du den Akkord speichern willst.', 'Move Scale up to PROGRAM. Use the step 1 Pitch knob to choose the position where you want to store the chord.'],
      ['Bis zu sieben Noten spielen. Den Ton, den eine analoge Stimme oder die zweite MIDI-Stimme in Dual/X-fade spielen soll, zuerst drücken. Alle Akkordtöne eingeben, bevor du die erste Taste loslässt.', 'Play up to seven notes. Press first the note you want an analog voice, or the second MIDI voice in Dual/X-fade, to play. Enter all chord notes before releasing the first key.'],
      ['Beim Loslassen wird gespeichert. Für weitere Akkorde am selben Pitch-Knopf eine andere Position auswählen und wiederholen. Zum Spielen PROGRAM verlassen und die programmierte Scale wählen.', 'Releasing a key stores the notes. For more chords, select another position with the same Pitch knob and repeat. To play them, leave PROGRAM and select the programmed scale.']
    ],
    result:['Die Speicherposition enthält deinen Akkord. Beispiel: E zuerst, dann G und C ergibt C–E–G über MIDI; die einzelne CV-Stimme spielt E. Nicht neu beschriebene Positionen bleiben erhalten.', 'The position now holds your chord. Example: enter E first, then G and C for C–E–G over MIDI; the single CV voice plays E. Positions you do not rewrite keep their assignments.'],
    links:[{to:'chordProgramming',label:['Akkord-Eingabe als Bildfolge','See chord entry as a visual sequence']},{to:'pitch',label:['Gespeicherte Akkorde pro Schritt auswählen','Select stored chords per step']},{to:'velocity',label:['Akkord und einzelne Note auf zwei Synths','Send chord and single note to two synths']}]
  },
  'align-reference': {
    intro:['ALIGN heißt: An diesem Schritt warten, bis der nächste Takt beginnt. Die globale Align-Einstellung sagt dem SAM, wie lang ein Takt ist.', 'ALIGN means: wait at this step until the next measure starts. The global Align setting tells the SAM how long a measure is.'],
    find:['Es sind zwei Einstellungen: die globale Taktlänge unten rechts und die ganz rechte Stellung eines Xfader-Knopfs im var.-Modus.', 'There are two settings: the global measure length at the bottom right, and the fully clockwise position of a Xfader knob in var. mode.'],
    rows:['xfader'],globals:['Encoder'],
    actions:[
      ['SAM stoppen. Im Align-Programmiermodus mit dem gemeinsamen Einstellknopf die Taktlänge wählen: 8 bedeutet acht Achtel, also einen 4/4-Takt. off bedeutet 16 Achtel.', 'Stop the SAM. In Align programming mode, use the shared setting knob to choose measure length: 8 means eight eighth notes, or one 4/4 measure. off means sixteen eighth notes.'],
      ['Clock auf var. stellen. Einen Xfader-Knopf ganz nach rechts auf ALIGN drehen.', 'Set Clock to var. Turn one Xfader knob fully right to ALIGN.'],
      ['Die Schritte davor auf unterschiedliche Längen einstellen und starten.', 'Give the preceding steps different lengths and start.']
    ],
    result:['Der ALIGN-Schritt wartet auf das Taktende. SKIP überspringt dagegen einen Schritt; Reset begrenzt den Schritt-Ablauf. Das sind drei unterschiedliche Eingriffe.', 'The ALIGN step waits for the measure to end. SKIP instead skips a step; Reset limits step progression. These are three different operations.'],
    links:[{to:'timingDemo',label:['Warten und Überspringen ausprobieren','Try waiting and skipping']},{to:'alternating-reference',label:['Align bei alternierenden Phrasen','Align with alternating phrases']},{to:'verification',label:['Grenzfälle, die noch zu prüfen sind','Boundary cases still to test']}]
  },
  'timing-sync': {
    intro:['Clock bestimmt, wann der nächste Schritt kommt. Beginne mit 16th für gleichmäßige Sechzehntel; var. erlaubt unterschiedliche Schrittlängen.', 'Clock determines when the next step arrives. Start with 16th for regular sixteenths; var. allows different step lengths.'],
    find:['Clock ist der linke Schalter der globalen Gruppe unten rechts. Im var.-Modus brauchst du zusätzlich die Xfader-Knöpfe, also die unterste große Knopfreihe.', 'Clock is the leftmost switch in the global group at the bottom right. In var. mode you also use the Xfader knobs, the bottom row of large knobs.'],
    rows:['xfader'],globals:['Clock'],
    actions:[
      ['Für gleichmäßige Schritte Clock auf 16th stellen und den gewünschten Taktgeber starten.', 'For evenly spaced steps, set Clock to 16th and start your chosen clock source.'],
      ['Für unterschiedliche Längen Clock auf var. stellen und B8 wählen. Jetzt stellt jeder Xfader-Knopf die Dauer seines Schritts ein: Mitte = 1/8, 10 Uhr = 1/16, 2 Uhr = 1/4.', 'For different lengths, set Clock to var. and select B8. Each Xfader knob now sets its step’s duration: middle = 1/8, 10 o’clock = 1/16, 2 o’clock = 1/4.'],
      ['Ganz links wird der Schritt übersprungen (SKIP). Ganz rechts wartet er bis zum Taktende (ALIGN). Die Tabelle unten zeigt alle festen Positionen.', 'Fully left skips the step (SKIP). Fully right waits until the measure ends (ALIGN). The table below shows all fixed positions.']
    ],
    result:['Du veränderst den Rhythmus mit denselben Knöpfen, die auch Xfader steuern. Die Gate-Länge ist die Zeit, während der eine Note angesteuert wird; ohne zusätzliche Gate-Steuerung beträgt sie die Hälfte der Schrittdauer.', 'You change the rhythm with the same knobs that control Xfader. Gate length is how long a note is held on; without extra gate control it is half the step duration.'],
    links:[{to:'timingDemo',label:['Schrittlängen ausprobieren','Try step durations']},{to:'align-reference',label:['Den Takt für ALIGN festlegen','Set the measure for ALIGN']},{to:'midi-channel',label:['Internes Tempo oder Shuffle einstellen','Set internal tempo or shuffle']},{to:'controllers',label:['Notenlänge mit Cont. 15 steuern','Control note length with Cont. 15']}]
  },
  workflows: {
    intro:['Wähle ein musikalisches Ziel. Die Abläufe unten kombinieren die zuvor erklärten Bedienelemente.', 'Choose a musical goal. The procedures below combine the controls explained above.'],
    find:['Die Links führen direkt zur jeweiligen Bedienfolge mit markierten Bedienelementen.', 'The links take you directly to the relevant procedure and highlighted controls.'],
    actions:[['Zuerst einen einzelnen Klang zuverlässig zum Spielen bringen. Danach Akkorde, einen zweiten Synthesizer oder Modulation hinzufügen.', 'First get one sound playing reliably. Then add chords, a second synth or modulation.']],
    result:['Du kannst jede Ebene einzeln hören und prüfen, bevor die nächste dazukommt.', 'You can hear and check each layer before adding the next.'],
    links:[{to:'scale-reference',label:['Einen Akkord speichern','Store a chord']},{to:'velocity',label:['Zwei Synths steuern','Control two synths']},{to:'io',label:['Schrittweise Modulation patchen','Patch step-selective modulation']}]
  },
  verification: {
    intro:['Einige Details bleiben offen. Hier stehen konkrete Versuche, mit denen du sie am SAM prüfen kannst.', 'Some details remain open. Here are concrete tests you can perform on the SAM.'],
    find:['Die Liste unten nennt die jeweils betroffenen Bedienelemente und Einstellungen.', 'The list below identifies the controls and settings involved in each test.'],
    actions:[['Pro Versuch Firmware, Clock, Align, Optionen und Verkabelung notieren. Dann LEDs, MIDI oder Gate beobachten und den tatsächlichen Ablauf festhalten.', 'For each test, note firmware, Clock, Align, options and cabling. Then observe LEDs, MIDI or gate and record what actually happens.']],
    result:['Ein beobachtetes Ergebnis kann eine offene Frage klären. Die Animationen der Website ersetzen diesen Hardware-Test nicht.', 'An observed result can resolve an open question. The website animations do not replace this hardware test.'],
    links:[{to:'alternating-reference',label:['Option A nachlesen','Read about Option A']},{to:'align-reference',label:['ALIGN nachlesen','Read about ALIGN']}]
  },
  'analog-reference': {
    intro:['Hier kannst du nachsehen, welche Spannungen die einzelnen Anschlüsse verwenden.', 'Look up the voltages used by each connection here.'],
    find:['Alle analogen Buchsen sind vorne am Gerät. MIDI und Netzteil werden hinten angeschlossen.', 'All analog sockets are on the front. MIDI and the power supply connect on the back.'],
    actions:[['Vor dem Patchen den Anschlussnamen in der Tabelle suchen und den zulässigen Bereich des angeschlossenen Geräts vergleichen.', 'Before patching, find the socket name in the table and compare it with the connected device’s supported range.']],
    result:['Besonders beachten: Gate Out liefert +12 V. Die einzelnen I/O4-B-Buchsen der Schritte 3–16 besitzen laut Quelle keinen Überspannungsschutz.', 'In particular: Gate Out delivers +12 V. The individual I/O4 B sockets for steps 3–16 have no overvoltage protection according to the source.'],
    links:[{to:'xfader',label:['Mit Xfader mischen','Mix with Xfader']},{to:'io',label:['Mit I/O schalten','Switch with I/O']}]
  }
};
