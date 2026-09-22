// Editorial paraphrases of the German SAM-16 manual, software 2.05 (SND 2008).
// Every pair is [German, English]. Hardware uncertainty belongs in verification.
type Pair = [string, string];
type Chapter = { id: string; title: Pair; source: string; paragraphs: Pair[]; headers?: Pair[]; rows?: Pair[][]; steps?: Pair[] };
export const chapters: Chapter[] = [
  {
    id: 'pitch', title: ['1 · Pitch — Tonhöhe & Transposition', '1 · Pitch — notes & transposition'], source: '2.1, 3.1, 3.6',
    paragraphs: [
      ['Jeder Schritt hat einen Pitch-Knopf in der obersten Knopfreihe und einen Transpose-Schalter direkt darunter. In der chromatischen Belegung ist 12 Uhr C, 1 Uhr Cis usw. In der programmierten Belegung enthält jede Position eine Note oder einen Akkord mit bis zu sieben Stimmen. Diese Belegung wird von allen Schritten verwendet.', 'Each step has a Pitch knob in the top knob row and a transpose switch directly below it. In the chromatic map, 12 o’clock is C, 1 o’clock C-sharp, and so on. In the programmed map, each position holds a note or a chord of up to seven voices. All steps share that map.'],
      ['Transpose up und down haben getrennte globale Intervalle von 0–15 Halbtönen. Die Mittelstellung eines Schritt-Schalters verwendet keines dieser Intervalle. Eine Änderung von up oder down betrifft alle Schritte mit der entsprechenden Schalterstellung.', 'Transpose up and down have separate global intervals of 0–15 semitones. A step toggle in the center applies neither interval. Changing up or down affects every step using that position.'],
    ]
  },
  {
    id: 'velocity', title: ['2 · Velocity — Dynamik & zwei MIDI-Kanäle', '2 · Velocity — dynamics & two MIDI channels'], source: '2.2, 3.5.1',
    paragraphs: [
      ['Reihe 2 erzeugt eine analoge Spannung und MIDI-Velocity. Im Normalmodus sind die Endwerte 1 und 127, die Klickposition in der Mitte liegt wegen mechanischer Toleranzen etwa bei 62–64.', 'Row 2 produces an analog voltage and MIDI velocity. In Normal mode its endpoints are 1 and 127; mechanical tolerances put the click position in the middle around 62–64.'],
      ['Option B 1–7 wählt die folgende MIDI-Funktion. „Zweiter Kanal“ bedeutet der nächsthöhere Kanal zum Basis-Kanal. Reverse beschreibt hier die Velocity-Kennlinie, keine rückwärts laufende Sequenz.', 'Option B 1–7 selects the MIDI behavior below. “Second channel” means the channel immediately above the base channel. Reverse describes the velocity response, not reverse sequence playback.'],
      ['In Dual und X-fade ist der zweite Kanal immer monophon: Er erhält nur die zuerst eingegebene Akkordnote. Damit werden höchstens 7 + 1 Noten pro Schritt ausgegeben. In den Split-Modi gehört die Klickposition in der Mitte zum Basis-Kanal. B4/B5 lassen Modulation auf den beiden Hälften gegensinnig wirken; B6/B7 gleichsinnig.', 'In Dual and X-fade, the second channel is always monophonic: it receives only the first-entered chord note. This limits output to 7 + 1 notes per step. In Split modes the click position in the middle belongs to the base channel. B4/B5 make modulation act in opposite directions on the two halves; B6/B7 act in the same direction.'],
    ],
    headers: [['Option / Modus', 'Option / mode'], ['Wirkung auf MIDI', 'MIDI behavior']],
    rows: [
      [['B1 · Normal', 'B1 · Normal'], ['Nur Basis-Kanal.', 'Base channel only.']],
      [['B2 · Dual', 'B2 · Dual'], ['Beide Kanäle gleichzeitig, gleiche Velocity.', 'Both channels simultaneously, equal velocity.']],
      [['B3 · X-fade', 'B3 · X-fade'], ['Beide gleichzeitig; Velocity des Basis-Kanals invertiert.', 'Both simultaneously; base-channel velocity inverted.']],
      [['B4 · Split / reverse basic', 'B4 · Split / reverse basic'], ['Links Basis invertiert, rechts zweiter Kanal normal.', 'Left: base inverted. Right: second normal.']],
      [['B5 · Split / reverse 2nd', 'B5 · Split / reverse 2nd'], ['Links Basis normal, rechts zweiter Kanal invertiert.', 'Left: base normal. Right: second inverted.']],
      [['B6 · Split', 'B6 · Split'], ['Links Basis, rechts zweiter Kanal; beide normal.', 'Left: base. Right: second. Both normal.']],
      [['B7 · Split / interlaced', 'B7 · Split / interlaced'], ['Velocity steigt über den gesamten Weg; dabei 15 Kanalwechsel.', 'Velocity rises across the full travel, with 15 channel changes.']]
    ]
  },
  {
    id: 'xfader', title: ['3 · Xfader — CV, Audio & digitale Funktion', '3 · Xfader — CV, audio & digital function'], source: '2.3, 3.2, 4.1, 4.2',
    paragraphs: [
      ['InL und InR speisen die beiden Enden aller Regler der Reihe 3. Jeder Schritt bestimmt das Mischungsverhältnis am Ausgang 3-Out. Ohne Stecker ist InL mit Masse und InR mit +5 V verbunden: Die Reihe liefert dann eine einstellbare Steuerspannung.', 'InL and InR feed the two ends of every Row 3 knob. Each step sets their mix at 3-Out. With no plugs inserted, InL is internally connected to ground and InR to +5 V, so the row produces an adjustable control voltage.'],
      ['Die Eingänge können statische CV, Modulation oder Audio von −5 bis +10 V verarbeiten. Beispiel: Audio an InR, InL frei → schrittweise Lautstärkeregelung an 3-Out. Zwei Quellen an InL/InR → schrittweise Mischung. Die Kennlinie ist linear; Gleichspannungsanteile können bei großen Sprüngen Knackser verursachen.', 'The inputs accept static CV, modulation or audio from −5 to +10 V. Example: audio into InR with InL unused gives step-by-step level control at 3-Out. Two sources into InL/InR give a step-by-step mix. The response is linear; DC offsets can cause clicks at large changes.'],
      ['Analoge Ein- und Ausgänge bleiben aktiv. Zusätzlich kann Reihe 3 MIDI-Controller erzeugen, im 16th-Modus mit Cont. 15 Gate-Längen steuern oder im var.-Modus die Schrittlänge bestimmen. Für reine Audio-Anwendungen die zusätzlichen Ablauf-/MIDI-Funktionen vermeiden; besonders den gewählten Clock-Modus beachten.', 'Analog inputs and outputs remain active. Row 3 can additionally produce MIDI controllers, control gate length through Cont. 15 in 16th mode, or determine step duration in var. mode. For audio-only use, avoid assigning additional timing/MIDI functions; pay particular attention to the selected Clock mode.']
    ]
  },
  {
    id: 'io', title: ['4 · I/O — Signale pro Schritt schalten', '4 · I/O — switch signals per step'], source: '2.4, 4.1, 5, 9',
    paragraphs: [
      ['Die unterste Schalterreihe verbindet pro Schritt A oder B mit I/O 4. In Mittelstellung ist keine Verbindung geschaltet (Mute). Die analoge Schaltung ist bidirektional: mehrere Quellen auf einen Anschluss oder eine Quelle auf mehrere Anschlüsse sind möglich.', 'The bottom toggle row connects A or B to I/O 4 for each step. The center position connects neither signal (Mute). The analog switching is bidirectional: multiple sources to one connection or one source to multiple connections are possible.'],
      ['A und B sind gemeinsame Sammelschienen. Schritte 3–16 besitzen zusätzlich individuelle B-Buchsen, die ohne Stecker vom gemeinsamen B-Anschluss gespeist werden. Ohne externe Beschaltung liegt an A der Takt mit +12 V, an B kontinuierlich +5 V.', 'A and B are common buses. Steps 3–16 also have individual B jacks, internally connected to the common B connection when unplugged. Without external patches, A carries the clock at +12 V and B carries continuous +5 V.'],
      ['Trigger, CV und Audio können geschaltet werden. Für Modulation: LFO → I/O4 A; I/O4 → Add In 2. Nach oben gestellte Schalter wählen den LFO für die jeweiligen Schritte. Mitte schaltet keine Quelle durch. B führt ohne Stecker +5 V und ist deshalb keine neutrale Alternative.', 'Triggers, CV and audio can be switched. For modulation: LFO → I/O4 A; I/O4 → Add In 2. Upward toggles select the LFO for those steps. Center connects no source. Unpatched B carries +5 V, so it is not a neutral alternative.'],
      ['Die analoge Funktion bleibt bei digitalen Zuweisungen erhalten. Die individuellen B-Buchsen der Schritte 3–16 sind laut Anhang die Ausnahme vom Überspannungsschutz; dort können erhebliche Überspannungen Schäden verursachen.', 'The analog function remains active when digital functions are assigned. The appendix identifies the individual B jacks of steps 3–16 as the exception to overvoltage protection; excessive voltages there can cause damage.']
    ]
  },
  {
    id: 'modulation-outputs', title: ['Modulation & Ausgänge', 'Modulation & outputs'], source: '2.1, 2.2, 3.5.1, 9',
    paragraphs: [['Pitch Add In wird am Schrittanfang abgetastet; Änderungen während des Schritts werden nicht übernommen. Bei voll aufgedrehtem Abschwächer beträgt die Empfindlichkeit etwa 2,5 V/Oktave. Ohne Stecker liegt intern +5 V an: Vom Klickpunkt in der Mitte aus kann der Regler die Sequenz bis zu eine Oktave auf- oder abwärts transponieren.', 'Pitch Add In is sampled at the start of each step; changes during the step are not followed. At full attenuator setting, sensitivity is approximately 2.5 V/octave. With no plug inserted, the input is internally connected to +5 V: from the click position in the middle, the control can transpose the sequence by up to one octave in either direction.'],
['Das Ergebnis erscheint als MIDI-Note und als Pitch-CV. Der CV-Ausgang hat einen Umfang von fünf Oktaven; Noten außerhalb werden entsprechend transponiert. Bei Akkorden folgt CV der zuerst eingegebenen Note. Aktive MIDI remote kann zusätzlich transponieren.', 'The result appears as MIDI notes and pitch CV. The CV output spans five octaves; notes outside that range are transposed to fit. For chords, CV follows the first-entered note. Enabled MIDI remote can add further transposition.'],
['Velocity Out folgt Add In kontinuierlich, auch innerhalb eines Schritts. Alle sieben MIDI-Modi lassen diesen analogen Ausgang unverändert mit normaler Kennlinie über den ganzen Regelweg arbeiten.', 'Velocity Out follows Add In continuously, including during a step. All seven MIDI modes leave this analog output working normally across the full knob travel.'],
["Add In wird zur Reglereinstellung addiert; 0–5 V entsprechen bei vollem Abschwächer dem beschriebenen Velocity-Bereich.","Add In is added to the knob setting; at full attenuator setting, 0–5 V corresponds to the described velocity range."]]
  },
  {
    id: 'global-controls', title: ['Globale Bedienung & Transp.', 'Global controls & Transp.'], source: '3, 3.1',
    paragraphs: [
      ['Globale Parameter werden bei jeder Änderung gespeichert und auch nach dem Ausschalten behalten. Die vier rechten globalen Schalter haben für Encoder-Einstellungen Priorität von rechts nach links: Ein Schalter außerhalb der Mitte sperrt die links davon liegenden Einstellfunktionen.', 'Global parameters are saved whenever changed and retained when power is switched off. For encoder settings, the four right-hand global switches have priority from right to left: a switch outside center blocks the setting functions to its left.'],
      ['Transp. und Cont. übernehmen den vorhandenen Encoderwert sofort beim Verlassen der Mitte. Option und M.Ch. ändern Encoder-Parameter erst durch Drehen, wenn die rechts liegenden Schalter neutral sind. Ihre Schaltfunktionen bleiben unabhängig davon aktiv.', 'Transp. and Cont. immediately adopt the current encoder value when moved out of center. Option and M.Ch. change encoder parameters only when the encoder is turned and switches to their right are neutral. Their switching functions remain active independently.'],
      ['Für Transp. den gewünschten Wert 0–15 wählen und das Intervall für up beziehungsweise down setzen. Die Werte gelten gemeinsam für alle Schritte; up und down sind getrennt einstellbar. Vor weiteren Einstellungen den Schalter wieder neutral stellen.', 'For Transp., choose the desired value 0–15 and set the interval for up or down. These values are shared by all steps; up and down are independently adjustable. Return the switch to neutral before editing other parameters.']
    ]
  },
  {
    id: 'controllers', title: ['Cont. — MIDI-Controller & Gate-Zuweisung', 'Cont. — MIDI controllers & gate assignment'], source: '3.2, 4.1, 4.2, 9',
    paragraphs: [
      ['Cont. weist den Reihen 3 und 4 ihre digitalen Funktionen zu. off deaktiviert diese Controller-/Ablaufzuweisung, ohne die analogen Funktionen abzuschalten. Im var.-Clock-Modus wird Reihe 3 dennoch als Schrittlängenregler benötigt.', 'Cont. assigns the digital functions of Rows 3 and 4. off disables this controller/timing assignment without switching off the analog functions. In var. Clock mode, Row 3 is still used to set step duration.'],
      ['Reihe 3: Positionen 1–14 erzeugen CC 1–14. Reihe 4: Die Controllernummer ist 60 plus Einstellwert; Position 5 ergibt beispielsweise CC 65. Position 15 hat die besondere Gate-/Ablauffunktion des Timing-Kapitels und darf nicht einfach als gewöhnlicher CC behandelt werden.', 'Row 3: positions 1–14 generate CC 1–14. Row 4: the controller number is 60 plus the setting; position 5 gives CC 65, for example. Position 15 has the special gate/timing function described in the timing chapter and should not simply be treated as an ordinary CC.'],
      ['Beim Stoppen oder Wechseln der Controller setzt der SAM Werte zurück. Das kann den angeschlossenen Klang verändern. Option B12/B13 bestimmt, ob Controller vor oder nach den Noten gesendet werden.', 'On stopping or changing controller assignments, the SAM resets controller values. This may change the connected sound. Option B12/B13 determines whether controllers are sent before or after notes.']
    ],
    headers: [['Controller', 'Controller'], ['Rücksetzwert laut Anhang', 'Reset value in appendix']],
    rows: [
      [['CC 5, 7, 11', 'CC 5, 7, 11'], ['127', '127']],
      [['CC 8, 10', 'CC 8, 10'], ['64', '64']],
      [['CC 1–4, 6, 9, 12–14', 'CC 1–4, 6, 9, 12–14'], ['0', '0']],
      [['Schalt-Controller 61–75', 'Switch controllers 61–75'], ['0 (Bereichsangabe des Anhangs; Position 15 bleibt eine Sonderfunktion).', '0 (range stated in the appendix; position 15 remains a special function).']]
    ]
  },
  {
    id: 'midi-channel', title: ['M.Ch. — Kanal, interner Takt & Shuffle', 'M.Ch. — channel, internal clock & shuffle'], source: '3.3, 4.1.1, 9',
    paragraphs: [
      ['Die Schaltfunktion startet/stoppt den internen Takt beziehungsweise setzt auf Schritt 1 zurück. Sie ist während MIDI-Clock bzw. nach MIDI Start ohne nachfolgenden Stop blockiert. In reset-Stellung plus Encoder wird der MIDI-Sendekanal eingestellt; off unterdrückt MIDI-Daten. Bei internem Takt ist die Kanalwahl wegen der Doppelfunktion nur im Stand möglich.', 'The switch starts/stops the internal clock or resets to step 1. This is blocked while MIDI clock is active or after MIDI Start without a subsequent Stop. The reset position plus encoder sets the MIDI output channel; off suppresses MIDI data. With internal clock, channel selection is only possible while stopped because of this dual function.'],
      ['run plus Encoder stellt beim internen Takt das Tempo ein; der SAM sendet dabei auch MIDI-Clock. Bei laufender externer MIDI-Clock stellt dieselbe Bedienung dagegen den 16th-Shuffle ein: off = aus, 1 = 58,3 % (7/5), 2 = 66,6 % (2/1).', 'With internal clock, run plus encoder sets tempo; the SAM also sends MIDI clock. With external MIDI clock running, the same operation sets 16th shuffle instead: off = disabled, 1 = 58.3% (7/5), 2 = 66.6% (2/1).'],
      ['Die internen Tempi sind Näherungswerte, laut Quelle aber sehr konstant. Der interne Takt ist als schnelle Testhilfe mit grober Auflösung gedacht.', 'Internal tempos are approximate but described as very stable. The internal clock is intended as a quick testing aid with coarse resolution.']
    ],
    headers: [['Encoder', 'Encoder'], ['BPM (ungefähr)', 'BPM (approximate)']],
    rows: ['off:90','1:104','2:108','3:111','4:114','5:117','6:120','7:123','8:126','9:130','10:133','11:137','12:141','13:145','14:150','15:180'].map(v => { const [a,b] = v.split(':'); return [[a,a],[b,b]] as Pair[]; })
  },
  {
    id: 'alternating-reference', title: ['Option A — Startversatz & Reset-Grenzen', 'Option A — start offset & reset limits'], source: '3.4, 3.7, 4.3, 4.4',
    paragraphs: [
      ['Option kurz auf A schaltet den alternierenden Betrieb ein; kurz auf B schaltet zum Normalbetrieb zurück. In A plus Encoder wird die Wiederholung eingestellt: off startet immer bei Schritt 9; 1–15 verschiebt den Start nach der eingestellten Anzahl von Durchläufen. Die Schaltfunktion und der gespeicherte Wiederholungswert sind getrennte Dinge.', 'Briefly selecting Option A enables alternating operation; selecting B returns to normal operation. A plus encoder sets repetition: off always starts at step 9; 1–15 shifts the start after the selected number of runs. The switching function and the stored repetition setting are separate things.'],
      ['Die Teilsequenz dauert die Hälfte der globalen Align-Taktlänge. Beispiel: Align 8/8 ergibt 4/8 beziehungsweise acht Sechzehntel pro Teilsequenz, danach erfolgt automatisch ein Reset. Vorhandene Schalter-Resets bleiben Grenzen und können nicht überschritten werden. Ein Reset in der zweiten Hälfte faltet auf Schritt 1 zurück.', 'Each partial sequence lasts half the global Align measure. Example: Align 8/8 gives 4/8, or eight sixteenths, per partial sequence before an automatic reset. Existing switch resets remain limits and cannot be passed. A reset in the second half folds back to step 1.'],
      ['Das Quellenbeispiel mit Align 16/8, 16th und Wechsel nach jedem Durchlauf spielt 16 Schritte einmal normal und einmal um acht Schritte versetzt. Die untenstehende Demonstration beschränkt sich darauf. Der genaue wiederkehrende Zyklus für 2–15 und Kombinationen mit frühem Reset bleiben Hardware-Prüfpunkte.', 'The source example with Align 16/8, 16th and a change after each run plays 16 steps once normally and once offset by eight steps. The demonstration below is limited to this case. The exact repeating cycle for 2–15 and combinations with early resets remain hardware verification items.']
    ]
  },
  {
    id: 'option-b', title: ['Option B — vier unabhängige Parameter', 'Option B — four independent parameters'], source: '3.5.1–3.5.5, 9',
    paragraphs: [
      ['Option B ist kein einzelner Modus mit 16 Alternativen. Der Encoder bearbeitet vier getrennte Parametergruppen; ein neuer Velocity-Modus ersetzt beispielsweise nicht das gewählte Zeitraster. Das Anwählen von B schaltet außerdem den alternierenden Betrieb aus.', 'Option B is not a single mode with 16 alternatives. The encoder edits four separate parameter groups; selecting a new velocity mode does not replace the selected timing grid, for example. Selecting B also disables alternating operation.'],
      ['Vor der Anwahl von B den Encoder bereits in den Bereich des Zielparameters bringen; dafür müssen andere Encoder-Zuweisungen neutral sein. Dann B anwählen und innerhalb dieses Bereichs drehen. Steht der Encoder schon auf dem Zielwert, kurz auf einen anderen Wert derselben Gruppe und zurück drehen. Das Überschreiten einer Gruppengrenze kann einen anderen Parameter verändern.', 'Before selecting B, position the encoder within the target parameter’s range, with other encoder assignments neutral. Then select B and turn within that range. If already on the desired value, move to another value in the same group and back. Crossing a group boundary can change another parameter.'],
      ['B-off setzt genau diese vier Gruppen zurück: normale Velocity, gerade Notenwerte, Controller vor Noten und Fernsteuerung aus. Das ist kein dokumentierter Komplett-Reset für Kanal, Align oder Akkordspeicher; Kanal und Align bei Problemen separat prüfen.', 'B-off resets these four groups: normal velocity, straight note values, controllers before notes, and remote disabled. It is not a documented full reset of channel, Align or chord memory; check channel and Align separately when troubleshooting.']
    ],
    headers: [['Position', 'Position'], ['Parameter / Wirkung', 'Parameter / behavior']],
    rows: [
      [['1–7', '1–7'], ['Velocity-Modi: siehe Reihe 2.', 'Velocity modes: see Row 2.']],
      [['8', '8'], ['var.: nur gerade Noten.', 'var.: straight notes only.']],
      [['9', '9'], ['var.: gerade und punktierte Noten.', 'var.: straight and dotted notes.']],
      [['10', '10'], ['var.: gerade und triolische Noten.', 'var.: straight and triplet notes.']],
      [['11', '11'], ['var.: gerade und um 1/6 verkürzte/verlängerte Noten.', 'var.: straight notes and notes shortened/lengthened by 1/6.']],
      [['12', '12'], ['Controller vor Noten: etwa 1 ms zusätzliche Notenverzögerung je aktivem Controller; vermeidet Klangsprünge an bereits klingenden Noten.', 'Controllers before notes: about 1 ms additional note delay per active controller; avoids sound changes after a note has already started.']],
      [['13', '13'], ['Controller nach Noten.', 'Controllers after notes.']],
      [['14 / 15', '14 / 15'], ['MIDI remote ein / aus.', 'MIDI remote on / off.']],
      [['off', 'off'], ['Die vier Gruppen auf ihre oben genannten Standardwerte setzen.', 'Reset the four groups to the defaults described above.']]
    ]
  },
  {
    id: 'remote', title: ['MIDI remote — Transposition & Program Change', 'MIDI remote — transposition & program change'], source: '3.5.4, 3.5.5, 9',
    paragraphs: [
      ['Mit B14 aktivieren, mit B15 abschalten. Befehle müssen auf dem Basis-Sendekanal eintreffen. MIDI-Noten 36–72 transponieren die gesamte Sequenz um bis zu eine Oktave abwärts oder zwei Oktaven aufwärts. Die genaue Behandlung gehaltener bzw. losgelassener Remote-Noten ist hier nicht als zusätzliche Funktion spezifiziert.', 'Enable with B14 and disable with B15. Commands must arrive on the base output channel. MIDI notes 36–72 transpose the entire sequence by up to one octave down or two octaves up. This reference does not specify additional behavior for held or released remote notes.'],
      ['Die Tabelle verwendet die Programmnummern 1–19 der Originalanleitung. Manche Sender zeigen Program Change ab 0 an; die Anzeige des Senders prüfen, bevor ein Wert übertragen wird. Programme außerhalb der dokumentierten Auswahl werden ignoriert.', 'The table uses the original manual’s program numbers 1–19. Some senders display program changes starting at 0; check the sender’s numbering before transmitting. Programs outside the documented selection are ignored.']
    ],
    headers: [['Programm', 'Program'], ['Wirkung bei aktiver remote', 'Effect with remote enabled']],
    rows: [
      [['1–7', '1–7'], ['Velocity B1–B7.', 'Velocity B1–B7.']],
      [['8–11', '8–11'], ['Variables Zeitraster B8–B11.', 'Variable timing grid B8–B11.']],
      [['12 / 13', '12 / 13'], ['Controller vor / nach Noten.', 'Controllers before / after notes.']],
      [['16', '16'], ['Standardwerte wie B-off, aber Fernsteuerung bleibt aktiv.', 'Defaults as for B-off, but remote stays enabled.']],
      [['17 / 18 / 19', '17 / 18 / 19'], ['16th-Shuffle aus / 58,3 % / 66,6 %.', '16th shuffle off / 58.3% / 66.6%.']]
    ]
  },
  {
    id: 'scale-reference', title: ['Scale — Noten & Akkorde speichern', 'Scale — store notes & chords'], source: '2.1, 3.6',
    paragraphs: [
      ['Scale wählt chromatische oder programmierte Tonhöhen. Zwischen beiden Belegungen kann auch während des Laufens umgeschaltet werden; PROGRAM (obere Stellung) ist nur im Stand zugänglich. Nicht neu programmierte Positionen behalten ihre Zuordnung.', 'Scale selects chromatic or programmed pitches. You can switch maps during playback; PROGRAM (upper position) is available only while stopped. Positions that are not reprogrammed keep their assignment.'],
      ['Noten außerhalb MIDI 36–72 werden beim Programmieren in diesen Bereich gefaltet. Die zuerst eingegebene Note bestimmt Pitch-CV und die monophone zweite MIDI-Stimme in Dual/X-fade. Sie muss nicht der tiefste Ton oder der harmonische Grundton sein.', 'Notes outside MIDI 36–72 are folded into that range during programming. The first-entered note determines pitch CV and the monophonic second MIDI voice in Dual/X-fade. It need not be the lowest note or the harmonic root.']
    ],
    steps: [
      ['SAM stoppen. MIDI-Tastatur an MIDI In anschließen und auf den Basis-Sendekanal einstellen.', 'Stop the SAM. Connect a MIDI keyboard to MIDI In and set it to the base output channel.'],
      ['Scale auf PROGRAM stellen. Mit dem Pitch-Wahlschalter von Schritt 1 die zu bearbeitende Speicherposition auswählen.', 'Set Scale to PROGRAM. Use the step 1 Pitch selector to choose the memory position to edit.'],
      ['Gewünschten monophonen Ton zuerst eingeben, dann weitere Akkordnoten bis insgesamt sieben. Software-Thru ermöglicht das Mithören.', 'Enter the desired monophonic note first, then add chord notes up to seven in total. Software thru lets you hear the input.'],
      ['Die Quelle beschreibt das Speichern beim Loslassen einer Taste: daher den vollständigen Akkord vor dem ersten Loslassen eingeben. Weitere Positionen entsprechend programmieren.', 'The source describes storage when a key is released, so enter the complete chord before the first release. Program further positions in the same way.'],
      ['PROGRAM verlassen und programmierte Scale wählen. Die Pitch-Schalter der Schritte wählen jetzt aus dieser gemeinsamen Belegung.', 'Leave PROGRAM and select the programmed scale. Step Pitch selectors now choose from this shared map.']
    ]
  },
  {
    id: 'align-reference', title: ['Align — Taktlänge, kein pauschaler Reset', 'Align — measure length, not an unconditional reset'], source: '3.7, 4.1, 4.2, 4.4',
    paragraphs: [
      ['Nur im Stand: Align-Programmiermodus wählen und mit dem Encoder die Taktlänge einstellen. Der Wert zählt Achtel: 1–15 entsprechen 1/8–15/8; off bedeutet 16/8, nicht „Align aus“.', 'While stopped, select Align programming mode and set the measure length with the encoder. Values count eighth notes: 1–15 mean 1/8–15/8; off means 16/8, not “Align disabled.”'],
      ['Ein Schritt auf ALIGN wartet bis zum Taktende. Die globale Taktlänge definiert diese Grenze; sie allein macht nicht aus jeder normalen Sequenz eine feste Schrittzahl. Im alternierenden Betrieb legt sie zusätzlich die halbe Taktlänge als Dauer der Teilsequenz fest.', 'A step set to ALIGN waits until the end of the measure. Global measure length defines that boundary; it does not by itself turn every normal sequence into a fixed step count. In alternating operation, it also sets each partial sequence’s duration to half the measure length.'],
      ['SKIP überspringt einen Schritt; ALIGN wartet zeitlich; ein Schalter-Reset begrenzt den Ablauf. Diese drei Funktionen getrennt betrachten. Verhalten exakt auf einer Taktgrenze und bei Kombinationen mit Reset wird in der Prüfliste ausdrücklich offengelassen.', 'SKIP skips a step; ALIGN waits in time; a switch reset limits sequence progression. Treat these as three separate functions. Behavior exactly on a measure boundary and in combinations with reset is explicitly left open in the verification list.']
    ]
  },
  {
    id: 'timing-sync', title: ['Timing & Synchronisation', 'Timing & synchronization'], source: '4, 4.1, 4.1.1, 4.2, 4.3, 4.4, 4.5',
    paragraphs: [
      ['Taktquellen sind interner Takt, MIDI-Clock, MIDI-Noten und analoger Clock In. Bei analogem Takt nach jedem Anhalten von Hand resetten. MIDI-Synchronisation ist für gewöhnlichen Sequenzbetrieb komfortabler. Der Clock-Schalter wählt 16th, var. oder Note; Note benötigt eingehende MIDI-Noten.', 'Clock sources are internal clock, MIDI clock, MIDI notes and analog Clock In. With analog clock, reset manually after each stop. MIDI synchronization is more convenient for ordinary sequencing. The Clock switch selects 16th, var. or Note; Note requires incoming MIDI notes.'],
      ['16th erzeugt gerade Sechzehntel, gegebenenfalls mit dem gewählten Shuffle. Mit Cont. 15 für Reihe 3 regelt diese die Gate-Länge: ganz links SKIP, ganz rechts Warten bis zum nächsten Taktanfang. Diese Gate-Steuerung hat Vorrang vor Reihe 4.', '16th produces straight sixteenths, with the selected shuffle if enabled. With Row 3 assigned Cont. 15, it controls gate length: fully left is SKIP, fully right waits until the next measure begins. This gate control takes priority over Row 4.'],
      ['Cont. 15 für Reihe 4: Mitte = kurzes Gate, unten = langes Gate. Oben wird abhängig vom Signal an I/O4 A ein kurzes oder langes Gate gewählt. Diese Funktion steht auch im var.-Modus zur Verfügung. Ohne aktive Gate-Steuerung ist das Gate in 16th und var. halb so lang wie der Schritt.', 'Cont. 15 for Row 4: center = short gate, down = long gate. Up selects a short or long gate according to the signal at I/O4 A. This function is also available in var. mode. Without active gate control, gate duration in 16th and var. is half the step duration.'],
      ['var. verwendet Reihe 3 für die Schrittlänge. Die festen Positionen der Tabelle bleiben in allen vier B8–B11-Rastern gleich; B9–B11 ergänzen Zwischenwerte. Die genaue Verteilung aller Zwischenpositionen ist in der Transkription nicht angegeben. Die interaktive Darstellung unten zeigt nur B8.', 'var. uses Row 3 for step duration. The fixed positions in the table are shared by all four B8–B11 grids; B9–B11 add intermediate values. The transcription does not give the exact distribution of every intermediate position. The interactive display below shows B8 only.'],
      ['Note-Trigger empfängt Noten auf dem MIDI-Sendekanal. Eingehende Noten bestimmen Trigger und Gate-Länge; SKIP und Warten bis Taktende sind hier nicht möglich. Note 0 setzt ohne Trigger auf Schritt 1 zurück, im alternierenden Betrieb abhängig von der Wiederholung auch auf Schritt 9.', 'Note trigger receives notes on the MIDI output channel. Incoming notes determine triggering and gate length; SKIP and waiting until measure end are unavailable. Note 0 resets without triggering to step 1, or to step 9 according to repetition in alternating operation.'],
      ['Song Position Pointer: Bei MIDI-Clock kann der Master vor Continue seine Position senden. Der SAM wartet bis zum nächsten Taktanfang und steigt dann ein. Seine Align-Taktlänge muss mit der des Masters übereinstimmen; alternierende Wiederholungen werden berücksichtigt.', 'Song Position Pointer: with MIDI clock, the master can send its position before Continue. The SAM waits until the next measure begins before joining. Its Align measure length must match the master’s; alternating repetitions are taken into account.'],
      ['Zeitangaben der Quelle: etwa 32 µs je übersprungenem Schritt, etwa 1 ms je vor den Noten gesendetem Controller. Für einen Rechner, der Clock sendet und MIDI aufnimmt, nennt die Anleitung etwa 1,3 ms Vorziehen von Clock oder Aufnahme als Kompensation. Das sind Quellenwerte, keine Messung des eigenen Setups.', 'Source timing figures: approximately 32 µs per skipped step and 1 ms per controller sent before notes. For a computer sending clock and recording MIDI, the manual suggests advancing the clock or recorded track by about 1.3 ms as compensation. These are source figures, not measurements of your own setup.']
    ],
    headers: [['Reihe 3 in var.', 'Row 3 in var.'], ['Schrittlänge', 'Step duration']],
    rows: [
      [['7 Uhr / ganz links', '7 o’clock / fully left'], ['SKIP', 'SKIP']],
      [['8 Uhr', '8 o’clock'], ['1/32', '1/32']],
      [['10 Uhr', '10 o’clock'], ['1/16', '1/16']],
      [['12 Uhr / Klickposition in der Mitte', '12 o’clock / click position in the middle'], ['1/8', '1/8']],
      [['2 Uhr', '2 o’clock'], ['1/4', '1/4']],
      [['4 Uhr', '4 o’clock'], ['1/2', '1/2']],
      [['5 Uhr / ganz rechts', '5 o’clock / fully right'], ['ALIGN', 'ALIGN']]
    ]
  },
  {
    id: 'workflows', title: ['Praxis — vom Grundmuster zur Performance', 'Workflows — from a basic pattern to performance'], source: '2–5 (redaktionell zusammengestellte Abläufe / editorially assembled procedures)',
    paragraphs: [
      ['Die folgenden Abläufe kombinieren dokumentierte Funktionen. Sie sind praktische Vorschläge, keine zusätzlichen Betriebsarten. Die genaue Reset-Schritt-Zählung normaler verkürzter Muster bitte an der Hardware prüfen; die Quelle beschreibt diese Grenze nicht eindeutig genug für eine feste „Reset auf Schritt N“-Anweisung.', 'The procedures below combine documented functions. They are practical suggestions, not additional operating modes. Verify the precise reset-step counting for shortened normal patterns on hardware; the source does not describe that boundary clearly enough for a fixed “reset at step N” instruction.']
    ],
    headers: [['Ziel', 'Goal'], ['Bedienfolge & erwartetes Ergebnis', 'Procedure & expected result']],
    rows: [
      [['16-Schritt-Grundmuster', 'Basic 16-step pattern'], ['Stoppen, Option kurz B für Normalbetrieb, Clock 16th, keine frühen Schalter-Resets, gewünschte Schritte auf trigger. Cont. für Reihe 3/4 off, damit keine Gate-/Skip-Zuweisung eingreift. Pitch und Velocity einstellen und starten.', 'Stop, briefly select Option B for normal operation, choose Clock 16th, clear early switch resets and set the desired steps to trigger. Set Cont. for Rows 3/4 to off so no gate/skip assignment intervenes. Set pitch and velocity, then start.']],
      [['Acht Sechzehntel im Wechsel', 'Alternating eight-sixteenth phrases'], ['Stoppen; Align 8/8 und Clock 16th wählen, frühe Resets entfernen. Option A mit Encoder 1 einstellen. Jede Teilsequenz dauert nun 4/8 = acht Sechzehntel. Dies ist ein alternierendes Beispiel, kein allgemeines Rezept für ein normales Acht-Schritt-Pattern.', 'Stop; choose Align 8/8 and Clock 16th and remove early resets. Set Option A with encoder 1. Each partial sequence now lasts 4/8 = eight sixteenths. This is an alternating example, not a general recipe for a normal eight-step pattern.']],
      [['Unregelmäßige Zeitwerte mit Rückkehr zum Takt', 'Uneven durations with a return to the measure'], ['Im Stand Align passend zum Master setzen; var. und B8 wählen. Vor einem Schritt auf ALIGN unterschiedliche feste Längen oder SKIP einstellen. Die Warteposition stellt den Taktbezug wieder her. Anschließend B9/B10/B11 getrennt ausprobieren; Grenzfälle mit Reset protokollieren.', 'While stopped, match Align to the master; select var. and B8. Set different fixed lengths or SKIP before an ALIGN step. The wait position restores the measure reference. Then try B9/B10/B11 separately and log edge cases involving reset.']],
      [['Akkord plus monophone Stimme', 'Chord plus monophonic voice'], ['Akkord nach der Scale-Anleitung programmieren, gewünschten monophonen Ton zuerst. B2 wählen. Beispiel Basis-Kanal 4: Synth A empfängt auf 4 den Akkord, Synth B auf 5 die erste Note. Beide aus MIDI Out versorgen; SAM MIDI Thru kopiert nur den Eingang.', 'Program a chord using the Scale procedure, entering the desired monophonic note first. Select B2. With base channel 4, for example, synth A receives the chord on 4 and synth B the first note on 5. Feed both from MIDI Out; SAM MIDI Thru only copies the input.']],
      [['X-fade oder Instrumentwechsel', 'X-fade or instrument switching'], ['Zwei Empfänger auf benachbarte Kanäle einstellen. B3 überblendet die Velocity beider MIDI-Stimmen gegensinnig; B6 verteilt links/rechts auf je einen Kanal. Velocity-Regler bewegen und dann optional Add In 2 modulieren. Velocity-CV behält seine normale Kennlinie.', 'Set two receivers to adjacent channels. B3 changes the two MIDI voices’ velocities in opposite directions; B6 assigns left/right to one channel each. Move Velocity knobs, then optionally modulate Add In 2. Velocity CV retains its normal response.']],
      [['Nur einzelne Schritte modulieren', 'Modulate selected steps only'], ['LFO an I/O4 A, I/O4 an Add In 2. Reihe 4 oben für die modulierten Schritte, Mitte für nicht durchgeschaltete Schritte. Mit geringem Add-In-Anteil beginnen. Alternativ I/O4 an Pitch Add In: Tonhöhe ändert sich nur bei der Abtastung am Schrittanfang.', 'Patch LFO to I/O4 A and I/O4 to Add In 2. Set Row 4 up for modulated steps and center for unconnected steps. Begin with a small Add In amount. Alternatively patch I/O4 to Pitch Add In: pitch changes only when sampled at the start of each step.']],
      [['Aufnehmen & vergleichen', 'Record & compare'], ['MIDI Out auf beiden verwendeten Kanälen aufzeichnen. Mit festem Raster beginnen; danach Controller vor/nach Noten vergleichen. Abweichungen mit Clock-Quelle, Align, Optionen und Firmware notieren. Aufnehmen ist ein Vorschlag für den externen Sequenzer, keine interne SAM-Speicherfunktion.', 'Record MIDI Out on both channels in use. Begin with a fixed grid, then compare controllers before/after notes. Log differences with clock source, Align, options and firmware. Recording is a suggestion for the external sequencer, not an internal SAM recording feature.']]
    ]
  },
  {
    id: 'verification', title: ['Prüfliste — offen bis zum Hardware-Test', 'Verification — open until hardware testing'], source: '2.2, 3.2, 3.4, 3.6, 4, 9',
    paragraphs: [
      ['Quellenbasiert bedeutet nicht am Gerät verifiziert. Diese Ausgabe ist eine redaktionelle Bearbeitung der deutschen Transkription (Software 2.05, SND 2008). Übersetzungen und Praxisabläufe sind neu formuliert. Die interaktiven Modelle sind Lehrbeispiele und keine vollständige Firmware-Emulation.', 'Source-backed does not mean hardware-verified. This edition is an editorial adaptation of the German transcription (software 2.05, SND 2008). Translations and procedures are newly written. Interactive models are teaching examples, not a complete firmware emulation.'],
      ['Für jeden Test festhalten: Firmware, Taktquelle/Tempo, Scale, MIDI-Kanal, Align, Option A/B, Cont.-Zuweisungen, Schalterstellungen, Verkabelung und beobachtete Schritt-/MIDI-Folge. Erst danach eine offene Aussage als bestätigt kennzeichnen.', 'For each test, record firmware, clock source/tempo, Scale, MIDI channel, Align, Option A/B, Cont. assignments, switch positions, cabling and the observed step/MIDI sequence. Only then mark an open claim as confirmed.']
    ],
    headers: [['Prüfpunkt', 'Check'], ['Konkreter Versuch / offene Frage', 'Concrete test / open question']],
    rows: [
      [['V1 · Option A 2–15', 'V1 · Option A 2–15'], ['Mit 16th, Align 16/8 und ohne frühe Resets zunächst A2, dann A3 testen; mindestens zwölf Durchläufe protokollieren. Wie setzt sich der Zyklus nach dem ersten versetzten Start fort?', 'Use 16th, Align 16/8 and no early resets; test A2, then A3, logging at least twelve runs. How does the cycle continue after the first shifted start?']],
      [['V2 · Schalter-Reset', 'V2 · Switch reset'], ['Im Normalbetrieb einen Reset auf Schritt 8, dann 9 setzen. LEDs, MIDI und Gate aufzeichnen: Wird der Reset-Schritt gespielt, und welche Länge entsteht? Danach A1 sowie A-off mit Reset in der zweiten Hälfte testen.', 'In normal operation, set a reset at step 8, then 9. Record LEDs, MIDI and gate: does the reset step play, and what length results? Then test A1 and A-off with a reset in the second half.']],
      [['V3 · ALIGN an der Grenze', 'V3 · ALIGN on the boundary'], ['ALIGN genau auf sowie kurz vor einer Taktgrenze erreichen; Gate, Wartezeit und nächsten Schritt beobachten. Mit SKIP und Reset einzeln kombinieren. Auch alle Schritte auf SKIP: Verhalten nicht voraussetzen.', 'Reach ALIGN exactly on and just before a measure boundary; observe gate, wait time and next step. Combine separately with SKIP and reset. Also check all steps set to SKIP without assuming the result.']],
      [['V4 · Variable Zwischenwerte', 'V4 · Variable intermediate values'], ['Für B9–B11 die Übergänge des Reihe-3-Reglers messen. Feste Hauptpositionen sind dokumentiert, genaue Schwellen und alle Zwischenpositionen nicht.', 'Measure Row 3 transitions for B9–B11. Main positions are documented; exact thresholds and every intermediate position are not.']],
      [['V5 · Remote & Note-Trigger', 'V5 · Remote & note trigger'], ['Remote-Transposition bei Note-On/Off, gleichzeitig gehaltenen Noten und zusammen mit Note-Clock testen. Program-Change-Nummerierung am Sender dokumentieren.', 'Test remote transposition on note-on/off, with simultaneous held notes and together with Note clock. Document the sender’s program-change numbering.']],
      [['V6 · Quellenabweichungen', 'V6 · Source discrepancies'], ['Velocity wird in §2.2 mit 1–127, im Anhang für Add In mit 0–127 angegeben. Außerdem nennt der Anhang CC 61–75, während Cont. 15 eine Sonderfunktion hat. Diese Abweichungen bleiben sichtbar; keine stillschweigende Vereinheitlichung.', 'Section 2.2 gives velocity as 1–127; the Add In appendix gives 0–127. The appendix also lists CC 61–75 although Cont. 15 has a special function. These discrepancies remain visible rather than being silently reconciled.']],
      [['V7 · Akkorde & MIDI-Randfälle', 'V7 · Chords & MIDI edge cases'], ['Speichermoment beim ersten Loslassen, mehr als sieben Eingaben, Kanalgrenze im Zweikanalbetrieb und exakte Split-Schwellen prüfen. Keine Kanal-Wrap-Regel oder zusätzlichen Stimmen aus der Quelle ableiten.', 'Check storage on first key release, more than seven input notes, the channel boundary in two-channel operation and exact split thresholds. Do not infer channel wrapping or extra voices from the source.']],
      [['V8 · Continue / SPP', 'V8 · Continue / SPP'], ['Master und SAM auf gleiche Taktlänge setzen; SPP + Continue an mehreren Positionen mit normalem und alternierendem Betrieb testen. Erwartet ist Einstieg am nächsten Taktanfang, nicht sofortiges Triggern.', 'Set master and SAM to the same measure length; test SPP + Continue at several positions in normal and alternating operation. Expected behavior is joining at the next measure start, not immediate triggering.']]
    ]
  },
  {
    id: 'analog-reference', title: ['Analoge Pegel & Spezialanwendungen', 'Analog levels & special applications'], source: '1, 6, 7, 9',
    paragraphs: [
      ['Die Tabelle übernimmt die Anschlussbereiche des Anhangs. Die intern an I/O4 A anliegende +12-V-Taktspannung ist separat in §2.4 beschrieben; sie ist keine Erweiterung des angegebenen Bereichs für externe I/O-Signale.', 'The table follows the appendix’s connection ranges. The internally connected +12 V clock on I/O4 A is separately described in §2.4; it does not extend the stated range for external I/O signals.'],
      ['Clock In kann auch mit einem VCO im Audiobereich betrieben werden. Bei 16 Schritten liegen die Treppenspannungen der Reihen 2/3 vier Oktaven unter der Taktfrequenz. Reihe 4 kann bei diesen Geschwindigkeiten Audio umschalten; die prozessorgesteuerte Pitch-CV kommt dabei nicht mehr mit. Dies ist eine Spezialanwendung, kein MIDI-Taktmodus.', 'Clock In can also be driven by an audio-rate VCO. At 16 steps, the staircase voltages of Rows 2/3 are four octaves below the clock frequency. Row 4 can switch audio at these speeds; processor-generated pitch CV cannot keep up. This is a special application, not a MIDI clock mode.'],
      ['Bei unerklärlichem Verhalten zuerst Option B auf Standardwerte setzen, dann MIDI-Kanal, Align und Verkabelung prüfen. Die Anleitung nennt außerdem verschmutzte Schalter und Buchsenkontakte als mögliche Ursachen. Eingriffe ins Geräteinnere gehören nicht zu diesen Bedienabläufen.', 'For unexplained behavior, first restore Option B defaults, then check MIDI channel, Align and cabling. The manual also identifies dirty switches and jack contacts as possible causes. Internal servicing is outside these operating procedures.']
    ],
    headers: [['Anschluss', 'Connection'], ['Bereich / Kennwert', 'Range / characteristic']],
    rows: [
      [['Pitch Add In', 'Pitch Add In'], ['−5…+10 V; etwa 2,5 V/Oktave; 10 kΩ.', '−5…+10 V; approximately 2.5 V/octave; 10 kΩ.']],
      [['Pitch Out', 'Pitch Out'], ['0…5 V; 1 V/Oktave; 470 Ω.', '0…5 V; 1 V/octave; 470 Ω.']],
      [['Velocity Add In', 'Velocity Add In'], ['−5…+10 V; 10 kΩ. Velocity-Bereich: siehe Prüfpunkt V6.', '−5…+10 V; 10 kΩ. Velocity range: see check V6.']],
      [['Velocity Out', 'Velocity Out'], ['−5…+10 V; ohne Add In 0…5 V; 470 Ω.', '−5…+10 V; 0…5 V without Add In; 470 Ω.']],
      [['Xfader InL / InR', 'Xfader InL / InR'], ['−5…+10 V; 100 kΩ.', '−5…+10 V; 100 kΩ.']],
      [['Xfader Out', 'Xfader Out'], ['−5…+10 V; unbeschaltet 0…5 V; 470 Ω.', '−5…+10 V; 0…5 V unpatched; 470 Ω.']],
      [['I/O 4', 'I/O 4'], ['−5…+10 V; 100 kΩ; individuelle B-Buchsen ohne Überspannungsschutz.', '−5…+10 V; 100 kΩ; individual B jacks lack overvoltage protection.']],
      [['Gate Out', 'Gate Out'], ['+12 V; 470 Ω.', '+12 V; 470 Ω.']],
      [['Clock In', 'Clock In'], ['+2…+30 V; 10 kΩ.', '+2…+30 V; 10 kΩ.']]
    ]
  }
];
