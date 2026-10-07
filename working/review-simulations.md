# Independent review: TADF simulation plan and Codex prompts

Reviewed 1 October 2026. Scope: mathematical consistency, scientific interpretation, controlled comparisons, timing and implementation brief. No application has been built or tested.

**Verdict: approved as a reviewable implementation plan. No blocking correction found.**

## Mathematical checks

- Summing the two linear population equations cancels ISC and RISC, leaving generation minus the stated fluorescence and non-radiative channels. The pulse conservation ledger is correct.
- The eventual fluorescence yield correctly includes repeated ISC/RISC cycling. Starting in the singlet gives fluorescence probability a/(1-bq); starting in the triplet multiplies this by q. Weighting these by 1/4 and 3/4 yields the stated expression.
- Independently recalculated Scene A: internal yields 0.1923076923 and 0.9007187781, agreeing with the quoted 19.23% and 90.07%. Outcoupling multiplies these by 0.20 without double-counting population loss.
- Independently recalculated the Scene B overlap examples: 9.0855%, 71.3122%, 84.8768% and 75.6417% at x=0.1, 0.5, 0.8 and 1. These agree with the rounded specification.
- Eliminating the singlet population from Scene C gives beta*t^2 + D*t - B = 0. The rationalised positive root is correct and avoids cancellation. Direct substitution at both comparison rates and both generation-range endpoints produced residuals below 3e-16 of generation and conservation to floating-point precision.
- Scene C's beta=0 expression is consistent with the linear steady state. Its net-depletion convention, nonlinear loss fraction and units are correct. Zero-generation and trapped-state exceptions are explicitly required.
- Scene D correctly adds a sensitizer depletion and terminal-emitter source of equal magnitude. Its extended conservation ledger and specified prompt singlet lifetime for the optional Förster illustration are appropriate within the declared model.

## Scientific interpretation and comparisons

- Each primary comparison holds the relevant independent rates fixed. The separate overlap view deliberately changes two rate-relevant functions and states why. This distinction is scientifically useful.
- The assumed identification of activation energy with the displayed singlet–triplet gap, the phenomenological variation of RISC at fixed ISC, and the illustrative overlap optimum are all sufficiently qualified. Preserve these qualifiers in the implementation.
- Scene C correctly uses generation rate rather than calling its horizontal axis brightness. Its effective non-radiative quenching is not presented as a universal TTA model, and no lifetime or burn-in prediction is claimed.
- Ensemble counters, weighted animation markers, outcoupling, and optional individual stochastic trajectories are distinguished clearly. This avoids a common mismatch between appealing animation and computed quantities.
- Source papers support mechanisms rather than the invented teaching parameter sets. Retain that distinction beside measured graphs and in the assumptions view.

## Timing and implementation

- The revised schedule totals exactly 810 seconds (13:30). A–C interaction totals 165 seconds (2:45); optional D replaces part of its existing 50-second slide allocation.
- Scene B is the tightest segment: the same-gap pair and three overlap presets require a rehearsed, automated sequence. Avoid adding heatmap exploration to the live talk.
- The build prompt supplies the source of truth, model equations, numerical benchmarks, tests, rendering requirements, offline operation, exports and scientific limitations. The separate audit prompt requests independent checks rather than only self-confirming implementation tests.
- Before delivery, confirm that the specification exists at the absolute outputs path embedded in Prompt 1. That is a handoff dependency, not a missing scientific requirement.

## Optional usability improvement

Repeat the absolute specification path in Prompts 2–4 if each should work independently in a fresh VS Code chat. Their current reference to earlier prompts is sufficient only for sequential use with that context available.
