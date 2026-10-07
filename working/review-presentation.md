# Independent presentation review — 3 October 2026

Disposition: **fix known motion/arrow defects, then ship**. No additional blocking numerical or layout error was found in the reviewed build. The builder reported fixes in progress for paused entrances and duplicated SVG arrow IDs; those fixes need a refreshed screenshot pass before final delivery.

Reviewed the HTML, timed script, build/model source, plan v3, simulation specification v2, verification report and screenshots 04, 05, 06, 08, 09, 12–15. Read the mandated craft floor. Direction remains the user's dark scientific canvas with cyan singlets, amber triplets and violet terminal emitter; those choices are intentional, not reasons to redesign.

## Material findings

1. **Known fix required: paused entrance reveals.** Builder identified that entering slides 3, 7 and 11 while globally paused leaves routes/requirements clipped at their initial reveal state. The pause affordance must preserve readable completed content, including after `preparePrint()`. This is a real presentation recovery issue, not a style preference.
2. **Known fix required: SVG arrow IDs.** Builder identified duplicated marker IDs causing missing arrowheads. Direction matters to RISC, FRET and emission, so recheck diagrams 4 and 6 after IDs are unique.
3. **Main-slide terminology improvement: Ea versus gap.** Slide 5 and its script repeatedly say fixed gap; the graph and solver actually hold the effective activation parameter Ea=0.10 eV. Backup 13 explicitly declares the toy identification Ea=ΔEST and says it is not universal, so the overall deck is qualified. Move that qualifier onto slide 5 or say activation parameter in the live text. Otherwise an audience hearing only the spoken sequence can miss the distinction.

## Scientific checks

- Pulse solver uses the stable eigenvalue form of the two-state matrix exponential, integrates emitted photons analytically and computes Q as the remaining conservation ledger. Initial 25:75 electrical spin formation, ISC/RISC recycling, and identical competing rates between lanes agree with the specified model.
- Default eventual photon fractions 0.19230769 and 0.90071878 agree with the analytic yield. These are explicitly teaching-model values, not gains over commercial phones.
- Independently recalculated overlap yields at x=0.1, 0.5, 0.8 and 1 agree with the specification's approximately 9.09%, 71.31%, 84.88% and 75.64%. No hard-coded optimum was found.
- Independently checked both singlet and triplet steady-state residuals at low/high generation for the slow/fast RISC rates; residuals are at floating-point precision. Dimensions of G and beta agree with the net-triplet-depletion convention.
- Density plot is labelled external photon yield versus generation rate; measured points are visibly separated and use luminance axes. No lifetime prediction is inferred from roll-off.
- Spin counting, ideal TTF 62.5% counting limit, suppressed spin-pure dipole transitions, effective coupling, hyperfluorescence energy transfer and EQE bookkeeping are stated with appropriate qualifications.
- Script and embedded speaker notes agree. 11 spoken slide budgets total 780 seconds; demonstration discussion is included, not added again. Timing remains a rehearsal budget, not measured delivery.
- Product photograph and commercial-stage caveats are appropriate. Independently opened the Kyulux source: it supports the 5.5-inch WiseChip PMOLED product and photo credit: https://www.kyulux.com/wisechip-5-5-hf-pmoled/. Nature primary page retrieval failed; experimental table values were checked against the supplied plan rather than freshly reverified from the paper.

## Design and interaction

- Representative screenshots have readable hierarchy and good separation; equations, axes, controls and citation lines do not overlap or clip at 1440×810. The dark canvas and semantic state colours support diagram reading. The product photo is visible and credited.
- Source shows offline embedded imagery and scripts; no presentation-time asset fetch is required. Notes explicitly warn that they are visible to the audience. Keyboard navigation, pause, replay, notes, fullscreen and backup/closing shortcuts are implemented. Supplied browser verification reports no JS errors or overflow and passes main preset/replay/pause checks.
- Slide 5 does not yet implement the plan's sequential reveal of the exchange and radiative equations; both appear together. This is a modest pedagogical deviation, not a physics defect.
- Specification coverage is narrower than the full proposed exploratory application: beta=0 is solver-tested but has no visible comparison control; Q is computed but not shown as a live loss counter; no separate automated rehearsal/explore modes. Do not claim those features are delivered. Named presets and the timed script cover the core live talk.
- Navigation is deliberately faded until hover/focus. Its default opacity is too low for reading from the room, although focused/hovered controls restore visibility and keyboard use is available. This is acceptable presenter chrome if documented, not audience content.

## Limits

No live-room projector test, measured oral rehearsal, motion frame-rate recording or independent complete source audit of every commercial claim was performed. Review snapshots are desktop 16:9; mobile readability is not the target. Paused reveal/arrow fixes require a final refreshed visual check by the builder. No deck files were edited by this reviewer.

## Fix verification addendum — final disposition: SHIP

Reviewed only the requested corrections in the regenerated artifacts. Score: **4/4 fix groups pass**.

- Paused entrances: slides 03, 07 and 11 now show all route text and closing requirements in the refreshed screenshots. CSS explicitly completes these entrances while paused.
- Arrowheads: refreshed slides 04 and 06 visibly show correctly directed RISC, fluorescence and transfer arrowheads. HTML marker IDs are now unique (arr1–arr5).
- Terminology: slide 5 script now says model activation parameter; the cue gives Ea=0.10 eV and states it is not a measured molecular gap.
- Sequential equations: #radiative reveal and named button are implemented; the next Space/Right/PageDown step on slide 5 reveals it before advancing. Print preparation exposes the equation for the static fallback. Verified in source; this follow-up did not independently operate a browser.

No further blocking finding in the requested correction scope. The optional beta=0 UI and full live loss ledger remain documented narrowed scope, not requirements for shipping this main talk. Prior rehearsal/projector and independent-source-audit limits still apply.
