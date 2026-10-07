# A better blue pixel: can TADF deliver efficiency and lifetime?

Presentation plan v3, 1 October 2026. Revised after evaluating the external review and preserving the user's requested live simulations. This is a plan, not a finished deck or application.

## Purpose and decisions

Explain how spin physics and molecular design affect OLED performance, then assess whether the resulting emitter system is useful to a display manufacturer. The audience is Senior Honours physics peers and a tutor. Keep quantum mechanics and the design trade-off central, with explicit links to real devices, sustainability and profit.

The main correction is the comparison baseline. Singlet-only fluorescence is an instructive reference, but triplet-fusion-assisted fluorescence and phosphorescence are real alternatives. No idealised RISC-on/off ratio will be presented as an improvement over today's phone.

Use **11 spoken slides, five principal equation groups, and three short live demonstrations**. Budget **13:00 of content**, plus approximately 30 seconds for transitions and normal variation. References and derivations remain available for questions. No new topic is added during rehearsal without removing another.

Opening question: **Can molecular engineering improve blue OLED efficiency while meeting colour and operational-life requirements?**

Opening promise: “I will follow one excitation through the pixel, then use the physics to judge what a manufacturer should ask for.”

Use a generic blue subpixel, not a phone model-year claim. Explain blue's higher photon energy orally. Do not claim every phone has identical emitter chemistry, that every red/green excitation becomes an external photon, or that blue is the only remaining OLED challenge.

## Revised walkthrough

| Slide | Time | What the audience sees and what you do | Product connection |
|---|---:|---|---|
| 1. The blue-pixel design problem | 0:45 | One enlarged blue subpixel with three requirements: efficiency, colour and operating life. State the opening question and promise a manufacturer decision at the end. No numerical market or power-share claim is needed. | A better display must maintain useful performance in operation. |
| 2. Charge, excitons and spin | 1:30 | Enter the organic emitting layer. Explain electron/hole recombination, then reveal one singlet and three triplet spin states. Show principal equation 1, E2. Explain the spin selection rule in words and a diagram. | The route taken by an excitation affects how much useful light is produced. |
| 3. Three routes to using triplets | 1:00 | Show triplet fusion, phosphorescence and TADF as distinct mechanisms. Briefly label ideal single-unit exciton-use limits, with singlet-only fluorescence as the reference. Name TTF-assisted fluorescence as a relevant incumbent approach. | TADF must compete with technologies that already use triplets. |
| 4. RISC needs access and coupling | 1:45 | Scene A runs for 55 seconds: same electrical pulse, RISC off/on, prompt then delayed fluorescence. Label the off case “Singlet-only reference.” Reveal principal equation 2, E5, and explain effective coupling. The accompanying state diagram labels Delta E_ST and includes a 3LE-assisted spin-vibronic route as a worked example. | Fast recovery must compete with loss. The simulation isolates a mechanism, not a real-product efficiency ratio. |
| 5. The molecular design trade-off | 1:40 | Scene B runs for 55 seconds. First keep the model gap fixed and change coupling. Then make one rehearsed move from extremely low overlap toward the model's better compromise. Reveal principal equations 3 and 4, E6 and E7, one at a time. | A small gap, adequate coupling and effective light emission must coexist. |
| 6. Hyperfluorescence distributes the work | 1:00 | Show sensitizer RISC, singlet energy transfer and terminal emission. Optional Scene D is passive playback lasting at most 20 seconds. Explain one loss risk, such as unwanted triplet transfer, in words. Avoid adding another live control sequence. | Harvesting and colour generation can be assigned to different molecules, with transfer losses still to manage. |
| 7. What the efficiency number means | 1:00 | Reveal principal equation 5, E9, using charge balance, effective electrical-excitation photon yield and outcoupling. Do not multiply separately defined recycling losses twice. State that voltage and spectral output also matter to power. | Compare electrical power at matched colour and output; peak EQE alone is insufficient. |
| 8. Brightness losses and lifetime are different tests | 1:30 | Scene C uses 35 seconds for a preset low/high-generation comparison. Explain net nonlinear quenching. Then show one clearly labelled experimental EQE-versus-luminance panel and its operating conditions. Finish with a separate requirement for measured luminance decay over time. No lifetime table or extra derivation on this slide. | The model explains population loss; measured operational life needs separate evidence. |
| 9. What the public evidence supports | 1:15 | Three rows: Idemitsu TTF blue, LG fluorescent/phosphorescent hybrid panel, and Kyulux Hyperfluorescence. Distinguish device demonstration, production-line verification, existing yellow PMOLED product and green licensing/sampling plans. Give the headline point from each, not every number. | Commercial evidence must match the claimed colour, architecture and stage of adoption. |
| 10. Value over a panel's life | 0:55 | Explain that energy savings and durability matter environmentally, while fabrication yield and qualification affect cost per saleable panel. Keep the Apple lifecycle breakdown and worked yield calculation in backup. | Preserve the user's sustainability and profit angle without a detour into market forecasts. |
| 11. The evidence that would justify adoption | 0:40 | Return to the blue pixel. Require lower electrical power at matched colour/output, acceptable measured operational life, and repeatable manufacturing quality/yield at acceptable cost. Deliver the conditional recommendation. | Evaluate a product against a customer's actual requirements, not a universal invented threshold. |

**Total content: 13:00.** Transition allowance: approximately 0:30. A/B/C interactions total **2:25** and are already inside the slide times. Optional D is inside slide 6's minute, not an extra segment.

## The five principal equation groups

| Main equation | Slide | What to explain |
|---|---:|---|
| E2: spin-1/2 addition and 1:3 state counting | 2 | One singlet and three triplet states under uncorrelated spin formation. |
| E5: k_RISC proportional to effective coupling squared times energetic/vibrational factors | 4 | Energy accessibility and coupling are different requirements. This schematic expression remains because it carries the user's key scientific point. |
| E6: Delta E_ST approximately 2K_HL | 5 | Exchange splitting in a simple common-orbital, single-configuration picture. |
| E7: k_r proportional to omega cubed times transition-dipole magnitude squared | 5 | A small gap does not guarantee a strong optical transition. Reveal after E6, not simultaneously. |
| E9: EQE approximately gamma times Phi_EL times eta_out | 7 | Phi_EL is the effective internal photon yield per formed electrical exciton, including branching and recycling. |

Gap labels, temperature values and pathway labels are diagram annotations, not additional equations to derive. The underlying simulation equations remain in the model reveal and backups. Full equation definitions and assumptions follow below so the requested equation inventory is preserved.

## Correct comparison of ideal limits

Show these as **ideal single-emitting-unit exciton-use limits**, not as measured performance bars:

- Singlet-only fluorescence: 25% in the simple spin-statistics model.
- Ideal triplet-fusion-assisted fluorescence: up to 62.5% when each consumed triplet pair yields one useful singlet and all other relevant losses are absent.
- Ideal TADF or phosphorescence: up to 100% exciton use if the required conversion and emission channels succeed.

This is a mechanism comparison. Real TTF yield depends on density, pair-state branching and competing losses. The 62.5% is not a universal actual blue-display IQE. The limits do not establish a 1.5–2.5-fold commercial gain, and tandem devices need per-emitting-unit interpretation before comparing photons per injected electron.

The exact arithmetic 0.25 + 0.75/2 = 0.625 is available for Q&A. The one-half counts two input triplets per output singlet; it is not an additional 50% success probability per pair.

## Evidence and products

These entries are the source card behind slide 9. Only a few figures should be spoken. Label each claim's evidence level on the slide. Do not rank percentages from different tests as if they formed a controlled comparison.

| Example | Verified point to use | Boundary |
|---|---|---|
| Idemitsu blue fluorescent OLED using a laminated emission layer, 2022 | Company reports TTF-assisted performance, including 14% EQE at 10 mA/cm² and CIE (0.14, 0.08). | A relevant blue competing approach. Its separately reported LT95 >400 h used 50 mA/cm². Do not imply this is the chemistry of every phone or equate a laminated emitting layer with an electrically tandem architecture. [Primary source](https://www.idemitsu.com/en/news/2022/220516.html). |
| LG Display hybrid fluorescent/phosphorescent blue panel, 2025 | Company-reported production-line verification, approximately 15% lower power and similar stability relative to its stated reference. | A phosphorescent competitor. The announcement alone does not establish shipment in a named consumer product. [Primary source](https://www.lgcorp.com/media/release/28926). |
| WiseChip 5.5-inch Hyperfluorescence PMOLED, 2023 | An actual Hyperfluorescence product example, with Kyulux's same-power brightness comparison. | Supports commercialization in that display class, not blue AMOLED qualification. Keep the earlier 2.7-inch yellow PMOLED and 2020 shipments as backup history. [Primary source](https://www.kyulux.com/wisechip-5-5-hf-pmoled/). |
| Kyulux/SK Materials JNC green-material agreement, 2026 | Licence for green material; company plans evaluation samples in 2026 and targets production in 2027. | Green, not blue. An agreement and target are not achieved mass production. Mention as a short update within the Kyulux row or keep in notes. [Primary source](https://www.kyulux.com/kyulux-signs-license-agreement-with-sk-materials-jnc-for-next-generation-oled-materials%EF%BC%8Dcombining-japans-advanced-emission-technology-with-south-koreas-mass-production-and-co/). |

The sources reviewed here do not identify a shipping blue-TADF smartphone to put on the slide. Do not transform that limited evidence statement into proof that no such device exists anywhere.

**Research examples:** retain TMCz-BO and Kim et al. (2020) for efficiency roll-off, with axes and conditions visible. Describe 4CzIPN's 2012 result as a historical green-emitter demonstration in notes, not the solution to deep-blue lifetime. Use Stavrou et al. (2024) to support the sensitizer/terminal-emitter distinction. Keep the 2026 Cheng et al. hybrid-tandem result in the Q&A card, reporting EQE, LT90, starting luminance and chromaticity together, and without calling it a pure-TADF benchmark.

## Simulation handoff

Use [simulation specification v2 and its Codex prompts](</Users/dhana_k/Documents/20_University/Courses/nuclear skills presentation/outputs/2026-10-01_tadf-simulations-and-codex-prompts_v2.md>). It supersedes v1 for future builds. No simulation is built by this planning task.

Required changes relative to the first simulation plan:

1. Scene A's no-RISC lane is explicitly a singlet-only reference, not today's commercial blue. The standard presentation path does not show a 4x advantage or the ideal 5%/20% comparison.
2. The route introduction acknowledges TTF and phosphorescence. A static contextual strip is sufficient; a full extra TTF model is not required for the talk.
3. Scene B keeps its coupling and overlap controls, with a shorter scripted path. Every function is labelled illustrative; no angle, rate or optimum is presented as a measured molecular result.
4. Scene C's beta term remains net triplet quenching. Do not label it “all TTA,” since triplet fusion can generate useful singlets. Keep beta=0 exploration for questions.
5. Presets now run A/B/C for 55/55/35 seconds. D remains an optional 20-second passive illustration. A single click restores any paused sequence; every scene has a static fallback.

## Value, closing and rehearsal

The combined value slide should take nearly a minute, not vanish into a slogan. Explain one causal link for each theme: lower panel power reduces use energy under a defined use case; longer useful device life can avoid replacement; poor fabrication yield can overwhelm emitter-material savings. Neither metal-free chemistry nor a whole-phone lifecycle report establishes a TADF-specific carbon saving.

Keep the dated iPhone 16 Pro 128GB environmental case in backup: Apple's report gives a 66 kg CO2e total with 81% production and 17% product use. These are whole-phone, rounded lifecycle figures. Keep the 100/0.90 versus 95/0.80 cost example in backup as explicitly assumed cost units. Do not quote actual material prices, carbon savings or margins without data.

Closing: **“TADF gives us a molecular route to useful singlets. I would recommend adoption when a device demonstrates lower electrical power at the required colour and output, meets the customer's operational-life target, and can be made reproducibly at acceptable cost.”**

Timing checkpoints: finish slide 3 around 3:15, slide 5 around 6:40, slide 8 around 10:10, and close around 13:00 plus transitions. Rehearse the actual clicks. If slow, shorten the repeated explanation around scene A and the product-history detail, not the central coupling point or lifetime qualification. Do not shorten blindly below 12 minutes. Run one rehearsal with live scenes, one with recorded/still fallbacks, and one with questions from a peer.

Slide evidence rules: cite data and images visibly; label adaptations accurately and check source licences before reuse. Keep axis units and test conditions readable. Prefer one major visual and one message per slide; use sequential reveals for slide 5's paired equations. Topic titles are acceptable where a claim title would overstate a conditional mechanism.

