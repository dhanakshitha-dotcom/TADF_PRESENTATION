# Live TADF simulations: presentation plan and VS Code Codex prompts

Status: version 2, design and implementation brief only. No simulation has been built. Prepared 1 October 2026 for the PH4040 12–15 minute presentation. This version adopts the reviewed presentation baseline and supersedes v1 for new builds.

## Recommendation

Build one locally runnable browser presentation with **three quantitative simulation scenes** and an optional Hyperfluorescence extension. Use three short, rehearsed demonstrations totalling about 2 minutes 25 seconds, replacing parts of the existing explanation. Target 13:00 of content plus approximately 30 seconds for transitions. The scientific centre remains spin physics, RISC coupling and molecular design.

The distinguishing feature should be a visible causal chain: change a physical parameter, watch state populations and photon output change, then interpret the outcome for a display. Use an energy diagram, rate-derived animation and linked plots. Decorative motion alone is not a simulation.

These are phenomenological teaching models. Their parameters are illustrative, not fitted to a named molecule or commercial product. Reproduce every result from equations. Do not hard-code a desired efficiency or optimum. Retain a small visible “Illustrative kinetic model” label and a details view with assumptions, units and sources.

## Baseline and scope correction after review

Scene A deliberately isolates the effect of RISC. It is not a comparison of TADF with all present-day blue OLED technologies. Put this concise context on its canvas: “Mechanism comparison; commercial alternatives also harvest triplets.” Name TTF-assisted fluorescence and phosphorescence in an adjacent static route view or in the preceding slide. Keep a small reference label on the no-RISC lane throughout.

The ideal 25%/100% harvesting and 5%/20% outcoupling examples are accessible only through backup/exploration. The default presenter path must not make a fourfold product-performance claim. The route comparison can list ideal single-unit limits of 25%, up to 62.5% for ideal TTF, and up to 100% for ideal TADF/phosphorescence. Do not imply that these are measured IQEs or that all tandem devices have the same per-electron ceiling.

For TTF's ideal count, the one-half comes from two triplets per useful singlet. It is not another 50% conversion probability per consumed pair. The current simulation does not implement productive TTF: its beta term is expressly net quenching. Keep that distinction clear. A static route illustration is sufficient; do not add an unvalidated TTF module just to draw a third quantitative curve.

The coupled kinetic models and numerical benchmarks below are unchanged. The visible efficiency factorisation in the presentation is now EQE = gamma * Phi_EL * eta_out, where Phi_EL includes all branching/recycling losses. In these models Phi_EL corresponds to the calculated internal photon yield and gamma=1. Do not multiply that yield by another spin-harvesting efficiency.

## Scene A — Where do the triplets go?

**Main presentation, slide 4. Approximately 55 seconds of interaction within a 1:45 explanation. Reuse a frozen result on slide 7 if useful.**

Two matched energy diagrams compare **Singlet-only reference: RISC off** with **TADF enabled**. Inject the same electrical-excitation pulse into each. Both start with 25% singlets and 75% triplets in the assumed spin-statistical model. Prompt fluorescence appears first. The TADF pathway produces subsequent singlet emission through RISC.

Show S1 and T1 populations as scaled distributions, transition fluxes as animated paths, cumulative photons and non-radiative loss, and a time-resolved fluorescence plot. S0 can be a destination marker; the model does not need to simulate the huge ground-state reservoir. Photons originate from S1, including after a triplet has returned to S1. Outcoupling is a separate loss after photon generation.

**Live walkthrough**

1. Press “Same excitation” to run both presets from a shared initial condition.
2. Pause after prompt emission. Point to the triplet population.
3. Advance to the delayed part. Highlight the RISC path and subsequent fluorescence.
4. Freeze the final comparison. Say: “The gain comes from giving triplets a route back to an emitting singlet.”

**Controls:** pulse/reset, play/pause, time scrubber, RISC off/on and an advanced rate editor. Presentation mode shows only the scripted controls. Keep all parameters except k_RISC matched in the main comparison. This isolates the effect of adding RISC; it is not a comparison between measured real materials.

**Two distinct presets:**

- Default finite-loss simulation uses the rates below, with k_RISC = 0 versus 10^6 s^-1. It should give approximately 19.23% versus 90.07% eventual internal fluorescence yield, and 3.846% versus 18.014% escaped-photon yield for outcoupling 0.20. These are calculated expectations, not measured data.
- A separately labelled backup-only “Ideal spin-statistics ceiling” explanation shows 25% versus the limiting 100% internally, or 5% versus 20% at assumed 20% outcoupling. It is an analytic limiting comparison, not a demand that the default simulation produce those values. It can be static rather than another animated mode.

**Animation integrity:** transitions represent state changes or excitation transfer, not literal electron orbits. Use population-weighted markers and identify them as illustrative. Numerical counters and curves come from the deterministic solution. If individual stochastic trajectories are implemented, put them in a separate labelled mode with their own counters; do not pretend a small sample exactly equals the ensemble expectation.

## Scene B — A small gap is not enough

**Main presentation, slide 5. Approximately 55 seconds of interaction within a 1:40 explanation.**

A large energy-level diagram and yield plot reveal two different design controls: energetic accessibility and effective coupling. A second view adds the illustrative orbital-overlap trade-off.

**Live walkthrough**

1. Load “Same gap, weak coupling.” Show slow RISC despite the small model energy gap.
2. Load “Same gap, stronger coupling.” Keep the gap and all other independent parameters fixed; show faster RISC and changed output.
3. Open the overlap view. Make one rehearsed movement from very little overlap toward the computed better compromise. Keep the full sweep and high-overlap endpoint for exploration and Q&A. Show the small-gap/weak-emission conflict without a long slider tour.
4. Say: “Minimising the gap alone does not optimise the light output.”

**Display:** linked energy levels, simple donor/acceptor distributions, k_RISC, k_r, and calculated fluorescence yield. The distributions are explicitly schematic, not quantum-chemistry orbitals. Mark the model's best point but label it “Optimum for these assumed functions,” never “the optimum TADF molecule.” No claim that overlap and spin–orbit coupling follow identical laws.

**Controls:** thermal activation energy E_a, effective coupling amplitude c, temperature, and a separate dimensionless overlap proxy x. Use a guided preset sequence for the talk. Put any 2D heatmap or broad parameter scan in exploration mode so the audience sees one main visual at a time.

**Boundary:** for the energy-level cartoon in this scene, explicitly assume Delta E_ST = E_a. Real activation barriers can differ from measured singlet–triplet gaps. Temperature changes only the specified RISC law in this teaching model; it does not predict real high-temperature OLED performance or optimal operating temperature. Holding k_ISC fixed while varying RISC is phenomenological and is not a complete microscopic detailed-balance model.

## Scene C — What happens when we drive the pixel harder?

**Main presentation, slide 8. Approximately 35 seconds of interaction within a 1:30 explanation.**

Compare slow and fast RISC as the electrical exciton generation rate rises. Show steady-state triplet density, the fraction lost through the specified nonlinear channel, and emitted-photon yield versus generation rate.

**Live walkthrough**

1. Begin at a low generation rate, with fast and slow RISC traces already labelled.
2. Move the generation-rate control to a higher preset.
3. Show the corresponding point moving along each computed yield curve and triplet populations increasing.
4. Keep the nonlinear-loss-off reference available for Q&A; omit this extra click in the main 35-second sequence.
5. Say: “Long-lived populations increase the opportunity for nonlinear loss. A good peak efficiency is only the beginning of the device test.”

Keep the graph's horizontal axis **electrical exciton generation rate, cm^-3 s^-1**. It is not luminance, current density or phone brightness without a documented device conversion. The comparison holds other rates and outcoupling fixed. Label the nonlinear term “effective triplet quenching.” It is a net non-radiative loss model, not a universal microscopic treatment of TTA, which can also produce singlets.

The particle view reflects density with capped, weighted markers. It must not treat every displayed collision as a quantitatively resolved molecular collision. This scene predicts roll-off within its model, **not chemical degradation, burn-in or operational lifetime**. Finish with the original sourced experimental EQE-versus-luminance graph to distinguish model explanation from measured evidence.

## Optional Scene D — Hyperfluorescence transfers the excitation

**Slide 6 passive animation or Q&A extension. At most 20 seconds of automated playback during the main talk. Build after A–C work.**

Add a terminal-emitter singlet population. Compare transfer disabled/enabled with otherwise identical sensitizer rates. Animate RISC in the sensitizer, FRET to the terminal emitter, and fluorescence from the terminal emitter. A successful system may redirect light into a more useful spectrum without increasing total photon number; never force both metrics to improve.

Keep this a population/energy-transfer model. Any displayed spectral curves are illustrative, normalised line shapes with explicitly assumed positions and widths, not predicted molecular spectra. Use a simple energetically downhill terminal-emitter example; do not imply that higher-energy photons universally arise from a lower-energy donor without accounting for the spectrum and energy balance. Explain that more sophisticated published Hyperfluorescence systems can need a richer model.

## Revised talk timing

| Slide | Time | Simulation use |
|---|---:|---|
| 1. Blue-pixel problem | 0:45 | None |
| 2. Charge, excitons and spin | 1:30 | Diagram |
| 3. Three triplet-harvesting routes | 1:00 | Context for the controlled baseline |
| 4. RISC access and coupling | 1:45 | A: 55-second guided comparison |
| 5. Molecular design trade-off | 1:40 | B: 55-second guided comparison |
| 6. Hyperfluorescence | 1:00 | Static route or D: 20-second passive animation |
| 7. Device efficiency | 1:00 | Effective-yield factorisation |
| 8. Brightness losses and lifetime | 1:30 | C: 35-second preset comparison, then measured evidence |
| 9. Public product evidence | 1:15 | Source-labelled comparison |
| 10. Sustainability and profit | 0:55 | Combined value discussion |
| 11. Adoption decision | 0:40 | Closing |

Content total: **13:00**. Allow approximately 30 seconds for transitions, giving a target delivery of **13:00–13:30**. A/B/C interaction total is **2:25**, already included. Use recorded or frozen versions if the room computer cannot run the interactive application.

## Shared physics specification

The equations here extend the equation inventory in the presentation plan. The audience mainly sees the existing main-slide equations. These solver equations appear in a revealable model view and backup slides, rather than being added as dense main slides.

### Linear singlet/triplet population model for A and B

Let s and t denote singlet and triplet populations for a pulse, or densities under continuous excitation. Use G with the corresponding units and time in seconds:

\[
\dot s=\tfrac14G+k_{\mathrm{RISC}}t
-(k_r+k_{\mathrm{nr,S}}+k_{\mathrm{ISC}})s,
\]
\[
\dot t=\tfrac34G+k_{\mathrm{ISC}}s
-(k_{\mathrm{RISC}}+k_{\mathrm{nr,T}})t.
\]

For a pulse: G=0 after preparation, s(0)=0.25 N0, t(0)=0.75 N0. Use N0=100 excitations for the display. For continuous excitation: start with zero excited populations. Neglect phosphorescence in this specified teaching model. The 25:75 split refers to electrical generation, not generic laser excitation.

Track cumulative internally generated fluorescence photons F and non-radiative loss Q:

\[
\dot F=k_rs,\qquad
\dot Q=k_{\mathrm{nr,S}}s+k_{\mathrm{nr,T}}t.
\]

For a pulse the exact accounting identity is:

\[
s+t+F+Q=N_0.
\]

For a driven calculation replace N0 on the right by initial population plus the integral of G. Outcoupling gives escaped photons eta_out F and optically trapped photons (1-eta_out)F. They partition F and are not extra excitons or additional terms in this identity. Do not simulate photon recycling.

Define K_S=k_r+k_nr,S+k_ISC, a=k_r/K_S, b=k_ISC/K_S, and q=k_RISC/(k_RISC+k_nr,T). The analytic eventual pulse fluorescence yield is:

\[
Y_F=\frac{a(\tfrac14+\tfrac34q)}{1-bq}.
\]

This handles ISC/RISC recycling. It assumes eventual absorption by fluorescence or non-radiative loss. Explicitly handle trapped-state and zero-denominator limits rather than divide by zero. The default escaped-photon yield is eta_out Y_F. Call this simulated EQE only when additionally assuming one formed exciton per injected electron and charge balance gamma=1.

**Default illustrative rates:** k_r=5e7 s^-1, k_nr,S=5e6 s^-1, k_ISC=1e7 s^-1, k_nr,T=1e4 s^-1, eta_out=0.20. Scene A compares k_RISC=0 and 1e6 s^-1. Do not set final yields directly.

Numerical implementation must resolve ns singlet dynamics and microsecond-to-millisecond tails. Use a stable matrix-exponential solution for the constant linear system, or a tested adaptive stiff solver. Rendering uses interpolated precomputed solutions. Do not use browser-frame-rate Euler integration. Separate wall-clock presentation playback from physical time. Label any logarithmic time mapping. Integrate until residual population meets a specified tolerance or show the still-active fraction.

### Illustrative RISC and overlap functions for B

\[
k_{\mathrm{RISC}}(E_a,c,T)=A_0c^2
\exp[-E_a/(k_{\mathrm B}T)],
\qquad k_{\mathrm B}=8.617333262\times10^{-5}\ \mathrm{eV\,K^{-1}}.
\]

Use A0=1e8 s^-1 and dimensionless c as an effective coupling-amplitude multiplier. This equation supplies an illustrative numerical realisation of the presentation's schematic coupling relationship, not an ab initio or universal molecular rate law. Do not identify c with a measured SOC energy. For the same-gap pair use E_a=0.10 eV, T=300 K and c=0.10 versus 1.00. Other rates remain the defaults. Suitable exploration ranges: E_a=0.01–0.25 eV, c=0–1, T=250–350 K.

The separate overlap view assumes:

\[
x\in[0.05,1],\qquad
E_a(x)=0.02\ \mathrm{eV}+0.18\ \mathrm{eV}\,x^2,
\qquad k_r(x)=5\times10^7x^2\ \mathrm{s^{-1}}.
\]

Hold c=1, T=300 K and the other rates fixed, then compute Y_F. These deliberately chosen functions encode competing trends. x is not a real torsion angle and is not calibrated orbital overlap. Do not claim the best x is experimentally validated. The full function definitions must be visible in the assumptions view. Defaults yield roughly 9.09%, 71.31%, 84.88% and 75.64% internal fluorescence at x=0.1, 0.5, 0.8 and 1 respectively. Use these as validation references, not hard-coded outputs.

### Nonlinear steady-state model for C

Use densities in cm^-3. Modify the triplet equation by adding -beta t², where beta has units cm³ s^-1 and denotes the **net triplet depletion coefficient**:

\[
\dot s=\tfrac14G+k_{\mathrm{RISC}}t-K_Ss,
\qquad
\dot t=\tfrac34G+k_{\mathrm{ISC}}s-K_Tt-\beta t^2,
\]
\[
K_T=k_{\mathrm{RISC}}+k_{\mathrm{nr,T}}.
\]

This beta convention differs from a pair-event coefficient with an explicit factor of two in the earlier backup rate equation. Name it clearly and do not mix the two conventions. Add beta t² to the non-radiative ledger if integrating transients. No singlet production from this effective loss channel is included.

Avoid numerical difficulties in live parameter sweeps by solving the positive steady state analytically. Let B=(3/4+k_ISC/(4K_S))G and D=K_T-k_ISC k_RISC/K_S. Then:

\[
t_{\mathrm{ss}}=\frac{2B}{D+\sqrt{D^2+4\beta B}},
\qquad
s_{\mathrm{ss}}=\frac{G/4+k_{\mathrm{RISC}}t_{\mathrm{ss}}}{K_S}.
\]

For beta=0 and D>0 use t_ss=B/D. Explicitly handle zero-input, zero-loss and non-existent-steady-state limits. For the default rates D>0. Display:

\[
Y_{\mathrm{out}}=\eta_{\mathrm{out}}\frac{k_rs_{\mathrm{ss}}}{G},
\qquad
f_{\mathrm{quench}}=\frac{\beta t_{\mathrm{ss}}^2}{G}.
\]

At G=0 label the ratio undefined or display the analytic low-drive limit with an explicit label. Use a logarithmic sweep G=1e18–1e24 cm^-3 s^-1, illustrative beta=1e-12 cm³ s^-1, and k_RISC=2e4 versus 2e6 s^-1. Keep the other rates fixed. These are a pedagogical parameter set, not measurements. Add a beta=0 reference. Show steady states as such; do not fabricate time-dependent transients when changing a steady-state slider.

### Optional terminal-emitter model for D

Let u be the terminal-emitter singlet population. Add transfer from the sensitizer singlet:

\[
\dot s=G/4+k_{\mathrm{RISC}}t-(K_S+k_{\mathrm F})s,
\qquad
\dot u=k_{\mathrm F}s-(k_{r,E}+k_{\mathrm{nr,E}})u.
\]

The sensitizer triplet equation remains the linear model. Photon fluxes are k_r s and k_r,E u. Transfer is internal redistribution, not loss. The ledger becomes s+t+u+F_s+F_E+Q=N0 for a pulse.

For an illustrative initial preset, use k_F=0 versus 1e8 s^-1, k_r,E=1e8 s^-1 and k_nr,E=1e6 s^-1, retaining the sensitizer defaults. Use independently set k_F as the primary teaching control. A secondary Förster-distance illustration may use k_F=tau_D^-1(R0/r)^6, with tau_D=1/K_S for this specified singlet model, explicit assumed R0 and r in the same distance units, and no claim that changing k_r at fixed R0 leaves a physically identical donor. Do not substitute the total delayed-fluorescence lifetime for tau_D. Use a simple fluorescent terminal emitter with no triplet route in this model, and document omitted Dexter transfer, back transfer, direct charge trapping and terminal-emitter ISC.

## Visual and presentation specification

- One continuous presentation canvas in 16:9. Default 1920×1080 with readable 1280×720 fallback. Large titles, readable equations and directly labelled curves. Avoid a dashboard of small charts and controls.
- Use a quiet, dark neutral background or a high-contrast light theme. Consistent colours across every scene: e.g. cyan singlets, amber triplets, violet terminal emitter, white emitted photons. Add text/symbol distinctions so colour is not the only signal.
- A main scientific diagram dominates the canvas. One supporting plot updates in the same scene. Show essential counters as direct annotations. Put advanced controls and derivations behind a keyboard-accessible reveal.
- The model drives populations, arrow fluxes, counters and charts. Decorative light effects can emphasise emission but cannot change computed intensity or imply a physical trajectory.
- Precompute deterministic curves and cache parameter sweeps. If demanding computation is needed, use a worker so the presenter controls remain responsive. Prefer 2D vector diagrams and sharp mathematical labels. Add 3D only if it clarifies a scientific point.
- Presentation controls: keyboard next/back, pause, reset, and named presets. Parameter resets must be predictable. Provide deep links that reopen each scene with its presentation preset.
- A “Rehearsal” path plays A, B and C with narration cues and target times. An “Explore” mode exposes sliders. Prevent accidental wheel scrolling from changing parameters.
- Supply an offline build with local dependencies/assets and a documented way to launch it on the presentation computer. If opening a static file directly is unsupported, document the local-server command; do not promise a double-click standalone file.
- Each scene needs a frozen image export. Provide a recordable deterministic playback and, where the environment supports it, a WebM or MP4 export. Report unsupported formats honestly. A screen-recording fallback is acceptable. No remote API, login, paid service or live network dependency is needed during the talk.
- Keep original experimental plots separate and labelled as measured evidence, with citations. Never turn simulated points into apparent paper data or show invented manufacturer performance.

## Sources and scientific boundaries

The specified rate models and numerical presets are an original teaching construction for this presentation, informed by the following mechanisms. They are not fitted reproductions of these papers.

- [Uoyama et al., Nature (2012)](https://www.nature.com/articles/nature11687): high-efficiency metal-free TADF and exciton harvesting.
- [Etherington et al., Nature Communications (2016)](https://researchportal.northumbria.ac.uk/ws/portalfiles/portal/25264144/ncomms13680.pdf): effective RISC pathways involving local triplet states and vibronic coupling. Supports separating energetic access from coupling.
- [Kim et al., Nature Communications (2020)](https://www.nature.com/articles/s41467-020-15558-5.pdf): a device study connecting rapid excited-state dynamics with efficiency at elevated drive. Use its original graph as measured evidence, not parameter calibration by assumption.
- [Stavrou et al., Nature Photonics (2024)](https://www.nature.com/articles/s41566-024-01395-1.pdf): Hyperfluorescence sensitization requirements. Useful for discussing the limits of the simplified optional transfer model.

## Copyable prompts for VS Code Codex

Use a dedicated code repository as the open VS Code workspace. The university presentation folder contains source plans and deliverables, not application source code. The prompts below refer to the specification using its absolute local path. If working on a different machine, copy this Markdown file into that workspace and replace the path. Do not assume access to the chats.

### Prompt 1 — Build the three main simulation scenes

Build a polished local interactive TADF presentation application in the current code repository. First read this complete specification:

/Users/dhana_k/Documents/20_University/Courses/nuclear skills presentation/outputs/2026-10-01_tadf-simulations-and-codex-prompts_v2.md

Treat that file as the source of truth for the scientific models, illustrative parameter values, visual direction, presentation timings and validation requirements. Inspect this repository and its instructions, preserve unrelated work, and implement the application rather than stopping at a plan. Keep application code in this repository. Do not modify the university input files, publish a website or use a cloud API.

Build scenes A, B and C first, using one coherent application and shared, independently testable physics modules. Use the existing frontend stack if there is one. Otherwise choose a small TypeScript browser stack with locally bundled dependencies, sharp vector diagrams, mathematical typesetting and exportable plots. Avoid adding 3D dependencies unless there is a clear scientific reason.

Implement the singlet/triplet equations, analytic yield formula, illustrative RISC/overlap functions, and nonlinear steady-state solution exactly as specified. All rates, populations, cumulative photon counts and plots must come from the shared model. Preserve units and conservation. Do not hard-code demonstration outcomes. Use stable numerical methods for the ns-to-ms range and separate physical time from playback time. Do not integrate physics once per animation frame. Every scenario must show a small “Illustrative kinetic model” label; source and assumption details must be accessible.

Scene A must compare RISC off/on with matched excitation and all other rates fixed, show prompt and delayed emission, and track losses. Label the off lane as a singlet-only reference. Show a static context note acknowledging TTF-assisted fluorescence and phosphorescence. Put the ideal spin-statistics ceiling explanation in backup/exploration only. Do not market the simulated gain as a comparison against a modern phone. Scene B must compare equal model energy gap with weak versus strong effective coupling, then show the explicitly assumed overlap trade-off and its computed yield curve. Scene C must compare slow/fast RISC at increasing generation rate using the net triplet-quenching term, a beta=0 reference, and the correct generation-rate axis. Do not label it as brightness, current or lifetime.

Make the result look like a scientific presentation: a dominant energy diagram or scientific plot, minimal chrome, consistent singlet/triplet colours, large readable text, no dense dashboard. Provide presentation and exploration modes, keyboard controls, resettable named presets, deterministic playback, scene deep links, an assumption/equation reveal, and a 13:00-content rehearsal guide with the specified 55/55/35-second demonstration scripts, allowing about 30 seconds for transitions.

Add meaningful scientific tests: probability/population conservation, non-negativity, analytic versus numerical yield, RISC-off behaviour, zero-coupling behaviour, parameter-unit consistency, stable results across render frame rates, agreement of beta=0 with the linear steady state, and direct residual checks of the nonlinear steady-state equations. Include the numerical benchmark values from the specification as computed test expectations. Handle zero-input, trapped-state and undefined-ratio cases explicitly.

Run the available tests and build. Inspect the UI at 1920×1080 and 1280×720, check math/axis readability and overflow, and verify the scripted sequence. Provide an offline launch method, a frozen-image export for each scene and a recordable fallback. Report what you actually tested and any environment limitations. Do not claim the application is a calibrated molecular or commercial-device simulator. Optional scene D comes later.

### Prompt 2 — Scientific and presentation audit

First read the full specification at:

/Users/dhana_k/Documents/20_University/Courses/nuclear skills presentation/outputs/2026-10-01_tadf-simulations-and-codex-prompts_v2.md

Audit the TADF presentation application against the entire simulation specification linked in Prompt 1. First inspect the current implementation. Trace every displayed number and chart to the equations. Check signs, units, conservation, ISC/RISC recycling, outcoupling accounting, the contextual TTF distinction, all special-case limits, and the distinction between ensemble averages and any individual trajectories. Verify that the overlap optimum is a consequence of the declared assumed functions rather than a hard-coded result. Verify that the nonlinear triplet-loss coefficient uses the documented net-depletion convention and that no simulated axis is incorrectly called measured luminance or lifetime.

Use independent analytic checks and convergence tests, not only tests that repeat implementation logic. Test the numerical benchmark presets and the beta=0 limit. Review the ns-to-ms time display, animation speed independence, direct labels and parameter comparisons. Fix material defects, rerun relevant checks and inspect the corrected UI.

Then rehearse scenes A, B and C in order using only the presentation controls. Reduce visual clutter where it obscures the explanation. Check both 1920×1080 and 1280×720, keyboard navigation, reset, deep links, offline operation and frozen-image exports. Report remaining scientific limitations, the verification performed, and the exact launch instructions. Do not add new features that dilute the 13:00–13:30 talk.

### Prompt 3 — Add Hyperfluorescence after the main scenes pass

First read the full specification at:

/Users/dhana_k/Documents/20_University/Courses/nuclear skills presentation/outputs/2026-10-01_tadf-simulations-and-codex-prompts_v2.md

Add optional scene D from the complete simulation specification, reusing the shared model and presentation style. Implement the terminal-emitter singlet population, FRET depletion/source terms, separate sensitizer and terminal photon fluxes, and the extended conservation ledger. Compare transfer off/on with matched independent rates. Show that transfer changes where the light originates and can compete with loss, without assuming it always increases total photons. Clearly label any synthetic spectrum as illustrative and any chosen spectral widths/energies as assumptions. Do not add hidden energy gain or misidentify an excitation-transfer arrow as electron transport.

Add conservation and limiting-case tests for k_F=0 and rapid transfer, account for terminal non-radiative decay, and retain the documented omitted channels. Create a 20-second automated presentation sequence and a frozen backup image. Keep the main A–C sequence and its controls unchanged.

### Prompt 4 — Package for the room and the final slides

First read the full specification at:

/Users/dhana_k/Documents/20_University/Courses/nuclear skills presentation/outputs/2026-10-01_tadf-simulations-and-codex-prompts_v2.md

Prepare the existing tested TADF application for a live university presentation. Preserve its equations and presets. Produce the offline distribution and a concise presenter guide covering launch, scene links, keyboard controls, reset, and recovery after interruption. Export labelled 16:9 stills for A, B and C, and D if implemented. Make a deterministic, recordable version of the same demonstration sequence. Export a video only if the available tools support it reliably; otherwise provide exact screen-recording instructions and keep the stills as fallback. Confirm that no external fonts, scripts, APIs or assets are required at presentation time. List tested browsers/environments without inventing compatibility results. Do not deploy or publish anything.

## Questions to be ready for

“Is this an actual OLED prediction?” It is a transparent phenomenological model demonstrating competing rates. Device predictions need measured/calculated material parameters and additional device physics.

“Why isn't the fluorescent result exactly 25%?” The default includes non-radiative singlet loss and ISC. The 25% comparison is a separately labelled ideal limit.

“Does this prove longer lifetime?” No. It demonstrates excited-state populations and losses. Chemical degradation requires a separate validated model and measured operational lifetime.

“Where did the best overlap come from?” The optimum belongs to the declared assumed gap and radiative-rate functions. Its purpose is to demonstrate competing requirements, not prescribe molecular geometry.

“Why does faster RISC help here?” With other rates fixed, it competes with triplet loss. Molecular changes can alter multiple rates at once, which is why the controlled comparison and overlap scene answer different questions.
