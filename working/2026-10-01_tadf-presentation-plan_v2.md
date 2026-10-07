# TADF presentation plan for review

Proposed title: **A better blue pixel: the physics and product case for TADF**

Prepared 1 October 2026. Version 2 adds the requested live simulations and a separate implementation brief with VS Code Codex prompts. This is a content plan for approval, not a finished slide deck or simulation application.

## Basis and scope

Reviewed the available complete histories of **Research TADF OLED market case**, **OLED electron hole process**, both chats titled **Explain RISC Coupling**, and **Explain TADF Design Tradeoffs**, together with `input/PH4040_A2_Talk.pdf`. The earlier research guide linked in the research chat could not be located at its recorded path or by filename under Documents. Its research summary is preserved in the chat and was reviewed. Primary sources for the proposed scientific and product examples were checked again.

The brief specifies a 12–15 minute live talk to Senior Honours peers and a tutor, followed by questions. Scientific competence and presentation carry equal weight. Aim for **13 minutes 30 seconds**, leaving room for pauses. Use **13 spoken slides**, one untimed reference slide, and five optional backup slides.

The existing chats establish the desired tone: a physicist advising a display manufacturer, with a persuasive product argument grounded in mechanism and evidence. The user has confirmed that quantum physics and the molecular design trade-off should receive the most attention, and selected physics diagrams with a few product photos, following the exciton through the device. Include one research graph to connect the mechanism with measured device performance. The user has additionally requested high-quality live simulations, especially controlled TADF-versus-no-TADF and design comparisons. Three quantitative scenes now replace parts of the original explanation.

Central question: **Can TADF recover otherwise poorly used excitons while delivering the colour, power consumption, lifetime and manufacturing performance a real display needs?**

Your recurring walkthrough is one blue pixel: start with a phone, enter its emitting layer, follow charge into an exciton, explain its spin-dependent routes, change the molecular design, and return to the manufacturer's decision. The customer buys a display experience. The manufacturer would adopt a qualified emitter system and compatible device stack. Do not present the phone itself as an established TADF product.

## Slide-by-slide plan

| Slide | Time | Content and walkthrough | Visual / equation |
|---|---:|---|---|
| 1. A better blue pixel | 0:30 | Open with a familiar OLED phone. Ask what molecular change could reduce display power while keeping colour and useful life. State the question, not the answer. | iPhone 16 Pro image and a highlighted blue subpixel. No equation. |
| 2. Inside an OLED pixel | 0:55 | Follow an electron from the cathode and a hole from the anode into the emitting layer. Explain exciton formation and radiative relaxation. A hole is an electronic vacancy. | Layer diagram, then a molecular energy-level inset. E1. |
| 3. One singlet, three triplets | 1:10 | Connect the exciton to the two-spin-1/2 system familiar from quantum mechanics. Count one singlet and three triplet states. Apply the uncorrelated-spin model to 100 excitons. | Four spin states, grouped into 25 singlets and 75 triplets. E2. Full spin functions in backup A. |
| 4. Why fluorescence misses triplets | 0:55 | Explain the spin-independent electric-dipole operator and orthogonal singlet/triplet spin functions. State precisely what “spin-forbidden” means. Briefly contrast phosphorescence as another way to use triplets. | S0, S1 and T1 diagram and E3. Derivation in backup A. |
| 5. TADF needs thermal access and coupling | 1:40 | Add RISC to the same energy diagram. Explain “delayed” as residence in the triplet pathway. Distinguish gap size from transition probability. Introduce spin–orbit and vibrational assistance in words. | Scene A: 60-second live RISC-off/on comparison, with E4 and E5 revealed in context. Room-temperature energy scale and nearby-state mechanism remain part of the explanation. |
| 6. The molecular design trade-off | 1:40 | Show donor/acceptor orbital separation. Reduced exchange helps shrink the singlet–triplet gap, but extreme separation can weaken emission. Connect molecular geometry with rates. | Scene B: 60-second live comparison of energetic access/coupling and the illustrative overlap trade-off. E6 and E7. Orbital shapes are schematic, not computed molecular orbitals. |
| 7. Hyperfluorescence divides the jobs | 0:50 | Let a TADF sensitizer recover triplets, then transfer singlet excitation to a terminal emitter selected for its spectrum. Explain that energy transfer must win against competing channels. | E8 as a labelled energy-transfer diagram, or optional Scene D as 20-second passive playback. Any model spectrum is labelled illustrative. |
| 8. What efficiency actually buys | 1:00 | Define external quantum efficiency and identify its loss factors. Walk through the idealised 5% versus 20% calculation. Explain why a fourfold exciton-harvesting opportunity is not fourfold battery life. | Frozen Scene A result, then E9 and the separate idealised numerical illustration. Finite-loss model outputs need not equal ideal 5%/20% values. |
| 9. Blue at operating brightness | 1:25 | Reuse the photon-energy relation: blue requires more energetic excitation. Explain population accumulation and annihilation. Read an EQE-versus-luminance graph from left to right. | Scene C: 45-second drive/quenching comparison, then E10 and the measured EQE-versus-luminance panel from Kim et al. (2020). Simulation uses generation rate, not measured luminance. Neither model nor graph establishes operational lifetime. |
| 10. Products and competing approaches | 1:05 | Return to hardware. WiseChip demonstrates commercial Hyperfluorescence. LG demonstrates a competing phosphorescent route. Different evidence levels must remain visible. | Three concise evidence entries: WiseChip 2.7-inch precedent, WiseChip 5.5-inch follow-on, LG hybrid panel verification. No new equation. |
| 11. Sustainability over a product's life | 0:55 | Use the phone's environmental report to explain why durability can matter alongside use-phase energy. Explain the limited meaning of a metal-free emitter. | Apple iPhone 16 Pro 128GB lifecycle figures, labelled whole-phone values. No new equation. |
| 12. The manufacturer's profit test | 0:55 | Evaluate cost per saleable panel, not emitter price alone. Work through one illustrative yield calculation. Tie qualification, lifetime and warranty exposure back to the physics. | E11 and the 100/0.90 versus 95/0.80 example. |
| 13. The adoption decision | 0:30 | Answer the opening question conditionally: TADF is valuable when recovered excitons become useful light at the required colour and brightness, with adequate life and yield. Return to the same blue pixel. | Four acceptance criteria: power at matched output, colour, measured operational lifetime, cost per good panel. No new equation. |

Total spoken content: **13:30**. Keep references and backups outside this timing. Do not add more technical derivations to the spoken sequence without removing something else.

## Live simulation integration and build handoff

The complete companion [simulation specification and four copyable Codex prompts](</Users/dhana_k/Documents/20_University/Courses/nuclear skills presentation/outputs/2026-10-01_tadf-simulations-and-codex-prompts_v1.md>) defines every additional solver equation, numerical preset, control, walkthrough and validation test. The VS Code agent should read that file and implement the simulations in a dedicated code repository. No application is built at this planning stage.

- **A, slide 5:** compare matched electrical excitation with RISC off/on, following singlet/triplet populations and photon emission. Default finite-loss yields are distinct from the ideal spin-statistics ceiling.
- **B, slide 6:** keep the model gap fixed while changing effective coupling, then explore a declared toy overlap-versus-emission trade-off.
- **C, slide 9:** show steady-state exciton accumulation and effective nonlinear triplet quenching as generation rate increases. Keep a measured experimental plot beside the model's interpretation.
- **D, optional slide 7:** a sensitizer-to-terminal-emitter energy-transfer extension, played automatically or kept for questions.

A–C use about 2:45 of interaction inside the 13:30 schedule. Their detailed kinetic equations belong in the application model reveal and backup material, not as extra dense main slides. The companion specification adds coupled singlet/triplet rate equations and photon/loss accounting, an analytic fluorescence yield, an illustrative coupling/activation law and overlap functions, nonlinear steady-state populations, and optional terminal-emitter transfer equations. These extend rather than replace E1–E11 below.

The visual style is one coherent scientific presentation canvas with linked diagrams and plots, large labels, keyboard presets and deterministic playback. Include an offline version and frozen/video fallbacks. Every simulation must visibly distinguish illustrative model parameters from measured evidence and real-product specifications.

## Complete main-slide equation list

These are all planned mathematical displays in the main talk. Several are short definitions or pathway labels, not separate derivations.

### E1 — Photon energy (slide 2, reused on slide 9)

\[
E_\gamma=h\nu=\frac{hc}{\lambda}.
\]

Explain h as Planck's constant, nu as frequency, c as the speed of light and lambda as wavelength. This sets the colour scale. For illustration, 450 nm gives approximately 2.76 eV and 630 nm gives approximately 1.97 eV. Do not equate an observed emission photon with a bare HOMO–LUMO orbital difference: excitonic and structural relaxation effects matter.

### E2 — Spin counting (slide 3)

\[
\tfrac12\otimes\tfrac12=0\oplus1,
\qquad P(S)=\tfrac14,\quad P(T)=\tfrac34.
\]

One spin-singlet state and three spin-triplet states give the familiar ratio for uncorrelated spin formation with equal statistical weighting. It is an idealised OLED model, not a universal ratio for every material or optical excitation process. Explain the molecular picture using the two relevant unpaired electron spins after excitation, then relate it to the electron–hole description. Triplet does not mean all three states consist of parallel arrows.

### E3 — Spin selection rule (slide 4)

\[
\langle S_0|\hat{\boldsymbol\mu}|T_1\rangle=0,
\qquad \Delta S=0\quad\text{for spin-pure electric-dipole transitions}.
\]

The dipole operator acts on spatial coordinates and leaves the spin factor unchanged. Orthogonal spin functions make the matrix element vanish in this approximation. Spin–orbit mixing makes “forbidden” transitions weakly possible. Delta S = 0 is a spin selection rule, not a guarantee that every singlet transition is optically strong.

### E4 — TADF route and energy scale (slide 5)

\[
T_1\xrightarrow{\mathrm{RISC}}S_1\xrightarrow{\mathrm{fluorescence}}S_0+h\nu,
\qquad \Delta E_{\mathrm{ST}}=E(S_1)-E(T_1).
\]

\[
k_{\mathrm B}T\approx0.026\ \mathrm{eV}\quad(T=300\ \mathrm K).
\]

RISC is reverse intersystem crossing. Thermal motion helps the uphill conversion in the conventional positive-gap picture. Electrical excitation supplies most of the photon energy. There is no hard threshold requiring the gap to be smaller than kBT.

### E5 — RISC rate (slide 5)

\[
k_{\mathrm{RISC}}\propto
\left|\langle S_1|\hat H_{\mathrm{eff}}|T_1\rangle\right|^2
F_{\mathrm{vib}}(T).
\]

Label this **schematic**. The matrix element represents effective spin-changing coupling, and F_vib collects energetic and vibrational contributions, including the relevant state gaps. It is not a fitted rate law. Say “the gap determines accessibility, while coupling helps determine the rate.” Etherington et al. support the role of local triplet states and vibronic coupling in the studied donor–acceptor systems. Do not claim every molecule follows one real sequential intermediate-state pathway. [Primary paper](https://researchportal.northumbria.ac.uk/ws/portalfiles/portal/25264144/ncomms13680.pdf).

### E6 — Exchange splitting (slide 6)

\[
\Delta E_{\mathrm{ST}}\approx2K_{HL}.
\]

K_HL is the HOMO–LUMO exchange integral in a simplified common-orbital, single-configuration picture. Reduced spatial overlap can lower this integral. Using K avoids confusing exchange with current density, often labelled J. The approximation need not hold quantitatively between relaxed states of different character.

### E7 — Radiative transition strength (slide 6)

\[
k_r\propto\omega^3\left|\boldsymbol\mu_{S_0S_1}\right|^2,
\qquad \boldsymbol\mu_{S_0S_1}=\langle S_0|\hat{\boldsymbol\mu}|S_1\rangle.
\]

At comparable optical frequency and environment, a larger transition dipole promotes faster emission. In conventional donor–acceptor charge-transfer designs, excessive spatial separation can weaken this transition. The transition dipole and exchange integral are different quantities, so describe a design tendency rather than identical overlap laws.

### E8 — Hyperfluorescence route (slide 7)

\[
T_1^{\rm sens}\xrightarrow{\rm RISC}S_1^{\rm sens}
\xrightarrow{\rm FRET}S_1^{\rm em}
\xrightarrow{\rm fluorescence}S_0^{\rm em}+h\nu.
\]

“sens” means sensitizer, “em” means terminal emitter, and FRET is Förster resonance energy transfer. The arrow represents transfer of excitation energy between molecules, not an electron travelling down the diagram. Directly formed singlets can also enter the singlet pathway. The terminal emitter may itself be an MR-TADF material in some architectures. Hyperfluorescence does not automatically remove the sensitizer's radiative/absorption requirements or all triplet losses. [Stavrou et al.](https://www.nature.com/articles/s41566-024-01395-1.pdf).

### E9 — Device efficiency (slide 8)

\[
\mathrm{EQE}=\frac{N_{\gamma,\mathrm{escaped}}}{N_{e,\mathrm{injected}}}
\approx\gamma\,\eta_{\mathrm{harvest}}\,\Phi_{\mathrm{rad}}\,\eta_{\mathrm{out}}.
\]

Define gamma as charge balance/recombination efficiency, eta_harvest as the fraction reaching the useful emitting route, Phi_rad as its effective radiative yield, and eta_out as the fraction of generated photons escaping. This factorisation is a simplified bookkeeping model; define the effective terms consistently so that ISC/RISC losses are not counted twice.

\[
\mathrm{EQE}_{\mathrm{fluorescent}}=1\times0.25\times1\times0.20=5\%,
\]
\[
\mathrm{EQE}_{\mathrm{ideal\ harvesting}}=1\times1\times1\times0.20=20\%.
\]

These are illustrative values, not measured phone efficiencies or a universal 20% ceiling. Phosphorescent OLEDs also exploit triplets. The example compares with conventional singlet-only fluorescence. The foundational 2012 result provides the historical anchor for efficient metal-free TADF, rather than a claim that TADF itself was discovered in 2012. [Uoyama et al.](https://www.nature.com/articles/nature11687).

### E10 — Exciton accumulation (slide 9)

\[
n_T\approx G_T\tau_T,\qquad R_{\mathrm{TTA}}\propto n_T^2.
\]

n_T is triplet density, G_T its formation rate per unit volume, tau_T an effective residence time, and R_TTA the triplet–triplet encounter rate per unit volume. The first expression is a steady-state, first-order-dominated approximation, useful for explaining why encounters become important as excitation rises. It is not a high-density quantitative model. Faster RISC can lower residence time, but ISC/RISC cycling and other losses also affect populations. Use the graph to test operating-brightness performance. [Kim et al.](https://www.nature.com/articles/s41467-020-15558-5.pdf).

### E11 — Cost per saleable panel (slide 12)

\[
C_{\mathrm{good}}=\frac{C_{\mathrm{attempt}}}{Y}.
\]

Y is the fraction of attempted panels that meet specification, and C_attempt is the assumed average fabrication cost per attempt. This toy model excludes rework, salvage, fixed-cost changes and warranty costs. Illustrate with cost units rather than fabricated commercial prices:

\[
\frac{100}{0.90}=111.1,\qquad\frac{95}{0.80}=118.75.
\]

A 5% saving per attempt is outweighed by yield falling from 90% to 80%. These are assumed values to demonstrate sensitivity, not evidence of actual TADF yields or profitability.

## Products and the claim each supports

| Example | Role in the talk | Defensible claim and limit |
|---|---|---|
| Apple iPhone 16 Pro | Familiar target product, opening and sustainability | Apple confirms an OLED display. The specification does not establish TADF chemistry. Use as a known example rather than “the latest iPhone.” [Specification](https://support.apple.com/en-us/121031). |
| WiseChip 2.7-inch yellow PMOLED using Kyulux materials | Commercial precedent | The product was announced in 2019 and Kyulux announced material shipments in April 2020. This is evidence of commercial Hyperfluorescence for this display class. [Shipment announcement](https://www.kyulux.com/kyulux-commences-shipment-of-tadf-hyperfluorescence-oled-materials/). |
| WiseChip 5.5-inch 256×64 Hyperfluorescence PMOLED | Concrete follow-on product benefit | Kyulux's April 2023 announcement reports double brightness at the same power compared with WiseChip's standard OLED device. Attribute the comparison to Kyulux. It is not a measured twofold phone-battery improvement or independent head-to-head blue AMOLED test. [Announcement](https://www.kyulux.com/wisechip-5-5-hf-pmoled/). |
| LG Display hybrid blue fluorescent/phosphorescent tandem panel | Competing technology | LG's May 2025 announcement reports production-line verification and approximately 15% lower power with similar stability, using fluorescence in one stack and phosphorescence in the other. It is a company-reported panel result, not evidence for a named retail TADF phone or television. [Announcement](https://www.lgcorp.com/media/release/28926). |

Do not compare the WiseChip and LG percentages as though they share a baseline. Keep TADF, phosphorescence and Hyperfluorescence distinct. These dated examples support the narrative without claiming a complete October 2026 market survey.

For molecular examples, use a conventional donor–acceptor schematic on slide 6 and **TMCz-BO** as the research emitter behind slide 9's graph. Keep **4CzIPN** as a historical 2012 example in notes. Avoid implying that either molecule is the proprietary chemistry inside the commercial products.

## Walkthrough and speaking transitions

1. **The buying problem:** “The screen must be bright and colourful without exhausting the battery or ageing too quickly.”
2. **Inside the pixel:** “To see what can improve, follow the energy after an electron enters the emitting layer.”
3. **The bottleneck:** “Spin statistics give us four states, but ordinary fluorescence directly uses only the singlet route.”
4. **The proposed fix:** “TADF recovers triplets by bringing them back to an emissive singlet.”
5. **The central insight:** “Energetic access is only part of the problem. The transition must also happen fast enough.”
6. **The design conflict:** “Orbital separation helps reduce the gap, but it can weaken the optical transition.”
7. **The architecture:** “A sensitizer and a terminal emitter let us distribute the requirements across different molecules.”
8. **The device test:** “Now count the photons that actually escape, at the brightness and colour the product needs.”
9. **The commercial evidence:** “There are real Hyperfluorescence displays, and there are competing routes to triplet harvesting.”
10. **The decision:** “Adoption depends on useful light, operational life and saleable-panel cost together.”

Slide 11's environmental evidence: Apple's report assigns **81% to production and 17% to product use** for the **iPhone 16 Pro 128GB**, with reported lifecycle footprint **66 kg CO2e**. The percentages are rounded and refer to the entire phone. Use these to motivate examining avoided replacement, not to calculate the display's footprint or claim a TADF carbon saving. Better display durability helps only when it extends useful service or reduces repair/replacement. Metal-free emitter chemistry alone does not establish low-impact manufacture or a metal-free device. [Apple environmental report, p. 10](https://www.apple.com/la/environment/pdf/products/iphone/iPhone_16_Pro_and_iPhone_16_Pro_Max_PER_Sept2024.pdf).

Slide 13's proposed closing: **“TADF offers a route to recovering triplets through molecular design. The commercial test is whether that recovery delivers efficient, correctly coloured light for long enough, at a cost the manufacturer can sustain.”**

## Backup slides and their complete additional equations

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

Here C denotes carbon footprint, distinct from slide 12's financial cost. Keep this as a boundary definition. Apple provides whole-product evidence, not emitter-specific lifecycle data.

## Preparation decisions after review

The current deliverable is the revised plan and simulation build prompts for review. The user can use the companion prompts in VS Code to build the simulations. After the narrative and main/backup equation split are agreed, retrieve the exact figure panels, label test conditions, draft a timed script, and create the editable slides. Source citations must appear on slides beside borrowed images and data, as required by the brief.

The plan deliberately excludes unsupported proprietary material identities, a complete OLED history, device-wide “100% efficiency” claims, and invented battery, lifetime, carbon or profit improvements.
