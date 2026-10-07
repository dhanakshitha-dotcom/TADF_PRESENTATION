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


## Equation catalogue and assumptions


Five principal groups are shown in the talk: E2, E5, E6, E7 and E9. Other relationships are diagram annotations, optional model reveals or backups. This preserves the full inventory without requiring the audience to follow every derivation.

### E1 — Photon energy (backup; spoken explanation on slides 1–2)

\[
E_\gamma=h\nu=\frac{hc}{\lambda}.
\]

Explain h as Planck's constant, nu as frequency, c as the speed of light and lambda as wavelength. This sets the colour scale. For illustration, 450 nm gives approximately 2.76 eV and 630 nm gives approximately 1.97 eV. Do not equate an observed emission photon with a bare HOMO–LUMO orbital difference: excitonic and structural relaxation effects matter.

### E2 — Spin counting (main slide 2)

\[
\tfrac12\otimes\tfrac12=0\oplus1,
\qquad P(S)=\tfrac14,\quad P(T)=\tfrac34.
\]

One spin-singlet state and three spin-triplet states give the familiar ratio for uncorrelated spin formation with equal statistical weighting. It is an idealised OLED model, not a universal ratio for every material or optical excitation process. Explain the molecular picture using the two relevant unpaired electron spins after excitation, then relate it to the electron–hole description. Triplet does not mean all three states consist of parallel arrows.

### E3 — Spin selection rule (backup; explained in words on slide 2)

\[
\langle S_0|\hat{\boldsymbol\mu}|T_1\rangle=0,
\qquad \Delta S=0\quad\text{for spin-pure electric-dipole transitions}.
\]

The dipole operator acts on spatial coordinates and leaves the spin factor unchanged. Orthogonal spin functions make the matrix element vanish in this approximation. Spin–orbit mixing makes “forbidden” transitions weakly possible. Delta S = 0 is a spin selection rule, not a guarantee that every singlet transition is optically strong.

### E4 — TADF route and energy scale (diagram annotations on slide 4)

\[
T_1\xrightarrow{\mathrm{RISC}}S_1\xrightarrow{\mathrm{fluorescence}}S_0+h\nu,
\qquad \Delta E_{\mathrm{ST}}=E(S_1)-E(T_1).
\]

\[
k_{\mathrm B}T\approx0.026\ \mathrm{eV}\quad(T=300\ \mathrm K).
\]

RISC is reverse intersystem crossing. Thermal motion helps the uphill conversion in the conventional positive-gap picture. Electrical excitation supplies most of the photon energy. There is no hard threshold requiring the gap to be smaller than kBT.

### E5 — RISC rate (main slide 4)

\[
k_{\mathrm{RISC}}\propto
\left|\langle S_1|\hat H_{\mathrm{eff}}|T_1\rangle\right|^2
F_{\mathrm{vib}}(T).
\]

Label this **schematic**. The matrix element represents effective spin-changing coupling, and F_vib collects energetic and vibrational contributions, including the relevant state gaps. It is not a fitted rate law. Say “the gap determines accessibility, while coupling helps determine the rate.” Etherington et al. support the role of local triplet states and vibronic coupling in the studied donor–acceptor systems. Do not claim every molecule follows one real sequential intermediate-state pathway. [Primary paper](https://researchportal.northumbria.ac.uk/ws/portalfiles/portal/25264144/ncomms13680.pdf).

### E6 — Exchange splitting (main slide 5)

\[
\Delta E_{\mathrm{ST}}\approx2K_{HL}.
\]

K_HL is the HOMO–LUMO exchange integral in a simplified common-orbital, single-configuration picture. Reduced spatial overlap can lower this integral. Using K avoids confusing exchange with current density, often labelled J. The approximation need not hold quantitatively between relaxed states of different character.

### E7 — Radiative transition strength (main slide 5)

\[
k_r\propto\omega^3\left|\boldsymbol\mu_{S_0S_1}\right|^2,
\qquad \boldsymbol\mu_{S_0S_1}=\langle S_0|\hat{\boldsymbol\mu}|S_1\rangle.
\]

At comparable optical frequency and environment, a larger transition dipole promotes faster emission. In conventional donor–acceptor charge-transfer designs, excessive spatial separation can weaken this transition. The transition dipole and exchange integral are different quantities, so describe a design tendency rather than identical overlap laws.

### E8 — Hyperfluorescence route (pathway diagram on slide 6)

\[
T_1^{\rm sens}\xrightarrow{\rm RISC}S_1^{\rm sens}
\xrightarrow{\rm FRET}S_1^{\rm em}
\xrightarrow{\rm fluorescence}S_0^{\rm em}+h\nu.
\]

“sens” means sensitizer, “em” means terminal emitter, and FRET is Förster resonance energy transfer. The arrow represents transfer of excitation energy between molecules, not an electron travelling down the diagram. Directly formed singlets can also enter the singlet pathway. The terminal emitter may itself be an MR-TADF material in some architectures. Hyperfluorescence does not automatically remove the sensitizer's radiative/absorption requirements or all triplet losses. [Stavrou et al.](https://www.nature.com/articles/s41566-024-01395-1.pdf).

### E9 — Device efficiency (main slide 7)

\[
\mathrm{EQE}\approx\gamma\,\Phi_{\mathrm{EL}}\,\eta_{\mathrm{out}}.
\]

Gamma is charge balance/exciton formation per injected electron, Phi_EL is the effective number of internally generated fluorescence photons per formed electrical exciton for the specified single-unit model, and eta_out is the escaping fraction. Phi_EL includes singlet/triplet branching, ISC/RISC cycling, non-radiative loss and any additional transfer losses in the chosen model. Do not multiply in a separate harvesting factor that counts those losses again. The simulation assumes gamma=1 unless changed explicitly.

In backup, define EQE as N_gamma,escaped/N_e,injected. The original ideal-limit example remains available only as a teaching limit:

\[
\mathrm{EQE}_{\mathrm{singlet\ only}}=1\times0.25\times0.20=5\%,
\qquad
\mathrm{EQE}_{\mathrm{ideal\ harvesting}}=1\times1\times0.20=20\%.
\]

These are not measured phone efficiencies, a universal 20% ceiling or the baseline of modern commercial blue. The main route comparison includes TTF-assisted fluorescence and phosphorescence. Use the 2012 TADF demonstration as historical evidence of efficient triplet harvesting, not as an estimate of the current commercial advantage. [Uoyama et al.](https://www.nature.com/articles/nature11687).

### E10 — Exciton accumulation (backup supporting slide 8)

\[
n_T\approx G_T\tau_T,\qquad R_{\mathrm{TTA}}\propto n_T^2.
\]

n_T is triplet density, G_T its formation rate per unit volume, tau_T an effective residence time, and R_TTA the triplet–triplet encounter rate per unit volume. The first expression is a steady-state, first-order-dominated approximation, useful for explaining why encounters become important as excitation rises. It is not a high-density quantitative model. Faster RISC can lower residence time, but ISC/RISC cycling and other losses also affect populations. Use the graph to test operating-brightness performance. [Kim et al.](https://www.nature.com/articles/s41467-020-15558-5.pdf).

### E11 — Cost per saleable panel (backup supporting slide 10)

\[
C_{\mathrm{good}}=\frac{C_{\mathrm{attempt}}}{Y}.
\]

Y is the fraction of attempted panels that meet specification, and C_attempt is the assumed average fabrication cost per attempt. This toy model excludes rework, salvage, fixed-cost changes and warranty costs. Illustrate with cost units rather than fabricated commercial prices:

\[
\frac{100}{0.90}=111.1,\qquad\frac{95}{0.80}=118.75.
\]

A 5% saving per attempt is outweighed by yield falling from 90% to 80%. These are assumed values to demonstrate sensitivity, not evidence of actual TADF yields or profitability.


## Backup equations and Q&A


These are for questions, not extra spoken content.

### Backup A — Two-spin states and selection-rule derivation

\[
|S\rangle=\frac{|\uparrow\downarrow\rangle-|\downarrow\uparrow\rangle}{\sqrt2},
\quad |T_0\rangle=\frac{|\uparrow\downarrow\rangle+|\downarrow\uparrow\rangle}{\sqrt2},
\quad |T_+\rangle=|\uparrow\uparrow\rangle,
\quad |T_-\rangle=|\downarrow\downarrow\rangle.
\]
\[
\Psi=\psi_{\rm spatial}\chi_{\rm spin},\qquad
\langle\Psi_f|\hat{\boldsymbol\mu}|\Psi_i\rangle
=\langle\psi_f|\hat{\boldsymbol\mu}|\psi_i\rangle\langle\chi_f|\chi_i\rangle,
\qquad\langle\chi_S|\chi_{T_0}\rangle=\tfrac12(1-1)=0.
\]

State the spin-separable approximation and connect weak forbidden emission to spin–orbit mixing.

### Backup B — Exchange and temperature dependence

\[
K_{HL}=\iint\phi_H^*(\mathbf r_1)\phi_L(\mathbf r_1)
\frac{e^2}{4\pi\varepsilon_0|\mathbf r_1-\mathbf r_2|}
\phi_L^*(\mathbf r_2)\phi_H(\mathbf r_2)\,d^3r_1d^3r_2.
\]

This is the elementary unscreened two-orbital exchange expression. Real materials need environmental and electronic-structure treatment.

\[
k_{\mathrm{RISC}}(T)\approx A\exp[-E_a/(k_{\mathrm B}T)].
\]

Use an effective activation energy E_a, not an unqualified identification with the measured singlet–triplet gap. A represents prefactor contributions over the fitted temperature range. Neither this Arrhenius approximation nor E5 alone is a universal RISC model.

### Backup C — Rates and energy transfer

\[
\frac{dn_T}{dt}=G_T+k_{\mathrm{ISC}}n_S
-(k_{\mathrm{RISC}}+k_{\mathrm{nr,T}}+k_{\mathrm{ph}})n_T
-2k_{\mathrm{TTA}}n_T^2-k_{\mathrm{TP}}n_Tn_P.
\]

A schematic triplet balance: n_S and n_P denote singlet and polaron densities, k_ph phosphorescence and k_nr,T non-radiative triplet loss. Here k_TTA n_T² defines a pair-event rate in a toy model removing two triplets per event. Product-state branching can change the net-loss treatment; a full model also needs singlet balance and recycling. This is not a fit to the plotted device.

\[
k_{\mathrm{FRET}}=\frac{1}{\tau_D}\left(\frac{R_0}{r}\right)^6.
\]

For the Förster donor–acceptor approximation, tau_D is donor excited-state lifetime without the acceptor, r is separation and R0 the Förster radius. R0 contains spectral overlap, orientation and optical-environment factors. Do not use this alone to model the entire TADF cycling network.

### Backup D — EQE, electrical power and battery life

\[
\dot N_\gamma=\mathrm{EQE}\frac{I}{e},\qquad
P_{\mathrm{el}}=IV,\qquad
\eta_{\mathrm{power}}\approx\mathrm{EQE}\frac{E_\gamma}{eV}.
\]

The last relation treats narrowband emitted optical power and the OLED's electrical input. It excludes other panel/phone electronics and does not itself specify perceived brightness. Compare colour, output and voltage consistently.

\[
t_{\mathrm{battery}}\approx\frac{E_{\mathrm{battery}}}{P_{\mathrm{phone}}},\qquad
P_{\mathrm{phone}}=P_{\mathrm{display}}+P_{\mathrm{other}}.
\]

Use compatible energy/power units. No numerical battery saving is claimed without a use-case model.

### Backup E — Operational lifetime and environmental boundary

\[
L(\mathrm{LT}_{95})=0.95L(0),\qquad
L(\mathrm{LT}_{50})=0.50L(0).
\]

L is luminance under specified test conditions. Always give initial luminance, drive mode, temperature, device architecture and colour when comparing lifetime values. LT95 and LT50 are different endpoints.

\[
C_{\mathrm{life}}=C_{\mathrm{production}}+C_{\mathrm{transport}}
+C_{\mathrm{use}}+C_{\mathrm{end\ of\ life}}.
\]

Here C denotes carbon footprint, distinct from the financial cost discussed on slide 10. Keep this as a boundary definition. Apple provides whole-product evidence, not emitter-specific lifecycle data.


### Backup F — Triplet-fusion counting and power metrics

For ideal pair conversion with all initial singlets emitting:

\[
\eta_{\mathrm{use,max}}^{\mathrm{TTF}}=\frac14+\frac12\frac34=\frac58=62.5\%.
\]

Two input triplets yield one singlet in this ideal limit. This is not a 50% success probability for each pair. Real pair-state branching and losses reduce the result, and tandem devices need a per-unit comparison.

For the same narrowband optical model as backup D, distinguish dimensionless wall-plug optical efficiency from luminous efficacy:

\[
\eta_{\mathrm{opt}}\approx\mathrm{EQE}\frac{E_\gamma}{eV_{\mathrm{drive}}},
\qquad
\mathcal K_{\mathrm{el}}\approx683\,V_{\mathrm{phot}}(\lambda)\,\eta_{\mathrm{opt}}\ \mathrm{lm\,W^{-1}}.
\]

V_phot(lambda) is the dimensionless photopic luminosity function, not drive voltage. A broad spectrum needs spectral integration. This relation concerns total photopic luminous flux per electrical power; a display's directional luminance and colour additionally depend on the optical stack and emission geometry. Do not insert an unqualified refractive-index power into the radiative-rate formula.

### Q&A evidence card

- Explain 25:75 as a spin-statistical starting model, not a statement that modern displays necessarily discard 75% of their excitons.
- TTF recovers some triplets through pair interactions. Phosphorescence and TADF use different spin-dependent routes. Their ideal limits are not actual product efficiencies.
- The effective RISC matrix element includes indirect mechanisms. A 3LE-mediated spin-vibronic route is a worked example; the talk does not assert that all TADF follows one pathway.
- The overlap trade-off is a useful conventional donor–acceptor picture, not a universal law for MR-TADF or all small-gap emitters.
- Kim et al. provides efficiency/roll-off evidence. Do not use its delayed-emission time as an OLED service life.
- If asked for a recent lifetime example, the Cheng et al. (2026) hybrid-tandem primary abstract reports 39.7% EQE and LT90=539 h from 1,000 cd/m² at CIEy=0.10. These conditions belong together. It is not LT95, a guaranteed customer target, a pure-TADF material benchmark, or a named retail product. [Primary abstract](https://pubmed.ncbi.nlm.nih.gov/41896461/).
- The sources reviewed identify a WiseChip Hyperfluorescence product and a Kyulux green-material agreement. They do not substantiate a particular blue TADF phone.
- Customer targets for lifetime, purity and yield must be specified for that application. Do not invent a universal commercial threshold.
