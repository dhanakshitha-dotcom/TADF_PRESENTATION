# Decisions on the external review

Reviewed 1 October 2026 against presentation plan v2 and simulation specification v1. This memo evaluates the supplied review; it does not treat that review as verified evidence or as an instruction to change the user's scope.

## Overall judgement

Adopt its strongest substantive criticism: the conventional singlet-only fluorescence comparison was too prominent for a commercially framed blue-OLED talk. The original explicitly labelled it idealised, so its arithmetic was not wrong, but it could still leave the audience with the wrong picture of the competition. Also adopt reduced visible equation load, an earlier lifetime question, a clearer evidence hierarchy and a more concrete closing test.

Do not adopt its implied mark prediction. A plan cannot establish a grade without the delivered explanation, slides and Q&A. Do not let an investment-board framing displace the user's chosen physics emphasis or remove the requested sustainability and profitability discussion.

## Decisions by issue

| Review point | Decision | Change / reason |
|---|---|---|
| A 5%-versus-20% comparison is an inadequate commercial baseline | Accept | Move it to an ideal-limit backup. Introduce triplet-fusion-assisted fluorescence and phosphorescence before the TADF mechanism. Keep RISC off/on in simulation A as a controlled mechanism comparison, explicitly not a model of today's phone. |
| Add a 25% / 62.5% / 100% comparison | Accept with qualifications | Use three route cartoons with ideal single-emitting-unit exciton-use limits. Distinguish these from measured IQE, EQE and electrical power. Do not automatically assume real TTF devices operate at 62.5%, or that tandem photon-per-electron efficiency is bounded by a single-unit limit. |
| The realistic improvement is 1.5–2.5 times | Reject as a general performance claim | Ratios depend on actual devices, output colour, voltage, outcoupling and operating point. A ratio of theoretical limits is not a measured commercial advantage. |
| Cut main equations | Accept selectively | Five principal equation groups remain visible. Keep the effective-coupling RISC expression because it is the user's chosen central physics point. Put the Arrhenius law, dipole selection-rule derivation, photon-energy relation, kinetics and finance arithmetic in the model reveal or backups. |
| Show lifetime tension from the opening | Accept | Ask whether TADF improves efficiency while satisfying colour and operational-life requirements. Do not call blue the only unsolved display problem. |
| The iPhone 16 Pro is dated | Accept the better hook, reject the claimed factual error | The original called it a familiar, known OLED example, never the current flagship. A generic blue subpixel is a better opening because it focuses attention. Retain the 2024 Apple environmental report as a dated whole-phone case study in backup. |
| RISC always proceeds through one local-triplet-mediated second-order route | Reject universality; adopt clearer illustration | The published spin-vibronic mechanism is an important worked example for the studied donor–acceptor systems. The original H_eff already allowed indirect coupling. Draw 1CT, 3CT and 3LE explicitly, but call it an example, not a universal mandatory sequential hopping route. |
| Replace H_eff with a full second-order formula on the main slide | Reject | It increases algebra precisely where the review asks for less. Keep the schematic main equation and explain the relevant interactions. Full perturbative details belong in Q&A and require applicability limits near resonance. |
| Too-small gap necessarily kills radiative emission | Reject absolute language | Conventional donor–acceptor designs show a useful overlap trade-off. Neither small gap nor donor–acceptor architecture alone fixes k_r. MR-TADF, configuration mixing and environment prevent a universal rule. Keep the toy simulation openly phenomenological. |
| Hyperfluorescence guarantees better lifetime | Reject | Transfer can redistribute populations and improve particular systems, but operational lifetime remains a device measurement. It is not inferred from FRET or photon yield alone. |
| WiseChip yellow PMOLED is weak evidence for blue phone adoption | Accept emphasis, retain example | The earlier plan already made this distinction. Keep one brief commercial-precedent example and label its display class and colour. Its role is evidence that the architecture reached a product, not proof of blue AMOLED readiness. |
| Add the 2026 Kyulux licence | Accept | Verified primary announcement is for green material, with evaluation samples planned in 2026 and production targeted for 2027. Label licence, sampling plan and production target separately. No blue design-win is inferred. |
| All OLED phones use TTF blue; no blue TADF product exists | Do not adopt absolute claims | The checked sources substantiate TTF technology and specific commercial/research milestones, not chemistry inside every phone or a proof of global absence. Say the evidence reviewed here does not establish a named shipping blue TADF phone. |
| Compress sustainability and profit into one line each | Modify | Combine them into a purposeful 55-second value slide. The user explicitly requested both. Keep durability, useful power savings and saleable-panel economics; move worked arithmetic to backup. |
| Add market-size forecasts, detailed royalties, IP and investment dates | Decline for main talk | These would turn a physics talk into an industry briefing and consume time needed for the mechanism. No financial or legal conclusion is needed. Main decision criteria remain performance, lifetime and manufacturability. |
| Demand multi-tonne capacity and >99.9% purity | Do not adopt as universal thresholds | Production scale, impurity species and qualification limits must come from the customer's process. Use reproducible batch quality, validated purity requirements and production yield instead. |
| Luminous efficacy should replace optical power efficiency | Reject substitution; add distinction | The original optical power relation was correctly dimensionless. Luminous efficacy adds spectral eye weighting and has units lm/W. They answer different questions. Include both definitions in backup, without calling one a correction to the other. |
| Strict n^3 factor in the radiative rate | Do not adopt | Medium effects involve optical environment/local-field effects and cannot be repaired by inserting a universal n^3 multiplier. Retain the stated comparable-frequency/environment approximation. |
| Image credits and stated graph conditions | Accept / reinforce | Already required, now explicit in the delivery checklist: source and permitted adaptation/credit on each slide, axes visible, and no cross-study ranking with unmatched conditions. |
| More rehearsal and less uninterrupted algebra | Accept | Target 13:00 of content, allow approximately 30 seconds for transitions, and rehearse the actual simulation clicks. Adjust from observed pace rather than assuming everyone speeds up by 10–20%. |

## A correction within the review: what 62.5% means

The review's explanation mixes a per-triplet yield with a per-pair probability. In the ideal counting picture, 75 triplets can yield at most 37.5 singlets when each consumed pair produces one singlet. Add the initial 25 singlets to get 62.5 out of 100. The factor one-half is due to **two triplets per resulting singlet**. If only half of the consumed pairs successfully generated a singlet and all failed pairs were lost, the ideal count would be 43.75%, not 62.5%.

Real triplet fusion involves competing pair-spin channels, re-encounters and losses. This is why the 62.5% number is an upper-limit teaching reference, not an assumed measurement for an incumbent display. Original experimental work: [Kondakov et al., Journal of Applied Physics (2009)](https://doi.org/10.1063/1.3273407). A primary patent disclosure also explicitly distinguishes the limiting ideal case from a fitted example: [US20140061594](https://patents.justia.com/patent/20140061594).

## Primary-source checks that changed the plan

**Idemitsu, 16 May 2022:** the company reports a blue fluorescent laminated-emission-layer device exploiting TTF, with 14% EQE at 10 mA/cm², LT95 over 400 h at 50 mA/cm² and CIE coordinates (0.14, 0.08). This substantiates the missing competitor. It is company-reported evidence, and the efficiency and life tests use different current densities. “Laminated emission layer” should not automatically be rewritten as an electrically tandem stack with a charge-generation layer. [Primary announcement](https://www.idemitsu.com/en/news/2022/220516.html).

**Kyulux, 20 February 2026:** the primary agreement covers green dopant IP and know-how, with sampling and production objectives. This improves the evidence slide without proving a blue consumer product. [Primary announcement](https://www.kyulux.com/kyulux-signs-license-agreement-with-sk-materials-jnc-for-next-generation-oled-materials%EF%BC%8Dcombining-japans-advanced-emission-technology-with-south-koreas-mass-production-and-co/).

**Cheng et al., 2026:** the indexed primary abstract confirms 39.7% EQE and LT90 of 539 h from 1,000 cd/m² at CIEy 0.10 for a hybrid-tandem design. Retain in Q&A as evidence that efficiency, colour and life must be reported together, not as a pure-TADF material benchmark or a claim of retail qualification. Full architectural classification requires the full paper. [Primary abstract](https://pubmed.ncbi.nlm.nih.gov/41896461/).

**Apple's 2026 announcement:** a newer phone is confirmed, so the review's freshness observation is fair. This does not invalidate a dated 2024 lifecycle case study. A generic pixel avoids spending time on model-year discussion. [Apple announcement](https://www.apple.com/newsroom/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/).

We have not independently audited all 51 review references. Unused investment forecasts, supply-chain rumours, legal inferences and asserted universal material thresholds are not carried into the plan.

## Changes to the simulations

Keep all three main scenes. Label the baseline in A “Singlet-only reference: RISC off,” add an on-screen explanation that TTF and phosphorescence are separate routes, and prevent its simulated ratios from becoming a modern-phone claim. Hide the ideal 5%/20% example from the normal presentation path.

Shorten A/B/C interaction to 55/55/35 seconds respectively. In B, select the same-gap coupling pair and one overlap movement, rather than exploring an entire landscape. In C, use a preselected low/high comparison and keep the beta=0 control for questions. The net nonlinear loss is not “all TTA”; TTF demonstrates that triplet encounters can also produce useful singlets.

The theory appendix and model still contain full equations. Reducing visible maths does not mean weakening the scientific model.
