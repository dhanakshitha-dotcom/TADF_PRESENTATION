# A better blue pixel — timed speaker script


13:00 content target + approximately 0:30 transitions. Timing is a rehearsal budget, not a measured delivery time. Speaking during the demonstrations is included; do not add the demo durations to these blocks.


## Controls
Right/Space advances; Left goes back; P pauses/resumes motion; R replays the pulse on slide 4; N opens notes (visible to the projected audience); F toggles fullscreen; Home starts; End returns to the closing slide; B opens model backup. Hide notes before projecting. Slides 12–15 are Q&A only.


## 1. A better blue pixel — 00:00–00:45

**Action:** Let the subpixel pulse once. Point to efficiency, colour and operating life. Advance at 0:45.


Look at one blue subpixel. We want it to produce the right colour, use less electrical power, and keep working. Those requirements have to be met together. Blue photons carry more energy than red photons, but photon energy alone does not predict device lifetime. My question is whether thermally activated delayed fluorescence, or TADF, offers a useful route through this design problem. I will follow an excitation through an OLED, examine the quantum physics that controls its fate, and then ask what evidence would persuade a display manufacturer to adopt the technology.


## 2. One excitation. Four spin states. — 00:45–02:15

**Action:** Point from injection to the 1+3 state count. The three triplet labels include the mixed-spin m=0 state; do not describe all triplets as parallel arrows.


An OLED injects electrons and holes into an organic emitting layer. Their recombination can form a bound excited state: an exciton. The two relevant spin-one-half degrees of freedom combine into total spin zero or one. There is one singlet state and three triplet states. With uncorrelated formation and equal statistical weighting, that gives one-quarter singlets and three-quarters triplets. This is a model for electrical excitation, not a universal rule for every way of exciting a molecule. Why does spin matter for light? In the spin-pure approximation, the electric-dipole operator does not change spin. The singlet excited state can fluoresce to a singlet ground state, while the triplet transition is spin-forbidden. Forbidden means suppressed in this approximation, rather than physically impossible: spin–orbit mixing can open it. The device problem is therefore to give those triplets a useful route before they are lost.


## 3. Triplets already have competitors — 02:15–03:15

**Action:** Trace the three distinct routes. Keep this slide to one minute; the percentages are ceilings, not performance bars.


A singlet-only fluorescent model uses at most twenty-five percent of the initially formed excitons. But that is not a fair description of every commercial blue OLED. Triplet fusion can combine two triplet excitations into one useful singlet. Its ideal counting ceiling is sixty-two-point-five percent, including the directly formed singlets. Phosphorescence uses spin–orbit mixing to allow emission from triplet character. TADF instead converts triplets back into singlets, which then fluoresce. In an ideal single emitting unit, those latter two routes can use every excitation. These are mechanism limits, not a ranking of measured devices. Actual efficiency depends on competing rates and optical extraction. The important comparison is between complete technologies, not TADF and an artificially helpless incumbent.


## 4. Recovery needs a route—and a rate — 03:15–05:00

**Action:** At about 0:15 click Replay pulse. Spend 55 seconds comparing early/late populations and the cumulative photon curves. Finish on the coupling equation. Physical time is logarithmic; playback is slowed.


Here is the central mechanism. A triplet can return to the singlet manifold through reverse intersystem crossing. Thermal motion helps access the higher-energy state in this positive-gap picture, but heat is not supplying the whole photon energy. Start the matched-pulse simulation. Both lanes begin with the same one hundred excitations, the same spin ratio and the same loss rates. Only RISC changes. Prompt fluorescence appears first. With RISC enabled, the triplet reservoir feeds a delayed component. The counters follow a deterministic population model; the population markers are an illustration. This comparison isolates recovery. It is not a predicted gain over a phone. Now look at the equation: the rate depends on effective spin-changing coupling as well as energetic and vibrational factors. In some donor–acceptor systems, local triplet character assists spin-vibronic coupling. A small energy gap helps access; it does not by itself guarantee fast recovery.


## 5. A small gap is only half the design — 05:00–06:40

**Action:** Explain exchange, then click Reveal emission trade-off (or press Space). Click Weak coupling, then Strong coupling; Ea remains 0.10 eV; it is not a measured molecular gap. Click Low overlap, then Compromise. This rehearsed sequence takes about 55 seconds. Do not drag aimlessly.


We now meet the molecular trade-off. In a simple common-orbital picture, singlet–triplet splitting is approximately twice the exchange integral. Separating donor and acceptor orbital character can reduce that integral. But the transition dipole matters too: the radiative rate depends on its magnitude squared, with the frequency-cubed factor shown here. Exchange and transition dipole are different quantities, so there is no universal overlap law connecting them. First keep the model activation parameter fixed and switch between weak and strong coupling. The yield changes even though the activation parameter does not. Next move the overlap proxy from very low overlap toward the compromise preset. Extremely weak radiative emission loses the competition with other pathways. The best point in this toy model is not a prediction of a real molecular geometry. The physical design lesson is to achieve accessible states, sufficient spin-changing coupling and a strong useful optical transition together.


## 6. Let different molecules do different jobs — 06:40–07:40

**Action:** Allow the pathway animation to repeat twice, then pause with P if it distracts from the loss discussion.


Hyperfluorescence distributes those jobs. A sensitizer harvests triplets through TADF. Singlet excitation energy then transfers to a terminal emitter, which can provide the desired emission spectrum. Follow the animated route: triplet recovery, singlet transfer, then a photon. The transfer arrow represents excitation energy moving between molecules, not an electron travelling across the screen. Directly formed singlets can enter this route too. This architecture creates another design space, rather than removing all trade-offs. Transfer must compete successfully with loss, and unwanted triplet transfer can still be harmful. A terminal emitter may itself have TADF character in some designs. The key product opportunity is to tune harvesting and colour generation somewhat separately, while checking the complete device.


## 7. Count the photons that leave — 07:40–08:40

**Action:** Follow the animated flow from injected charge to internal photons to escaped photons. The equation is bookkeeping, not three independently measured constants for every device.


External quantum efficiency counts photons leaving the device per injected electron. We can separate it into charge balance and exciton formation, an effective internal photon yield, and optical outcoupling. Here, phi E L already includes branching, RISC recycling and nonradiative losses. We must not multiply those same losses in again under another harvesting factor. Even a highly effective internal system can trap much of its light optically. And EQE is not electrical power efficiency: drive voltage, photon energy and spectral output also matter. For a display decision, I would compare electrical power at matched output and colour. A record peak EQE is useful evidence, but it does not answer that whole product question.


## 8. High-density loss is not operating life — 08:40–10:10

**Action:** Use Low G then High G, about 35 seconds. Point to the experimental panel afterward. Keep model and experimental axes distinct.


At higher excitation density, nonlinear losses become more important. Switch the generation-rate preset from low to high. A longer-lived triplet population builds up more strongly, increasing the net quadratic quenching term in this illustrative model. Faster recovery can reduce that population. We label this net triplet quenching, not all triplet–triplet annihilation: triplet fusion can also produce useful singlets. The horizontal axis is generation rate, not measured display brightness. Beside it are experimental points reported for TMCz-BO: twenty-point-two percent EQE at one hundred candelas per square metre, and seventeen-point-four percent at one thousand. These are re-plotted reported values, not a fitted continuous curve. They demonstrate efficiency roll-off under operating conditions. They do not establish operational lifetime. Lifetime needs a separate luminance-decay measurement, with its endpoint, starting brightness and test conditions stated.


## 9. Evidence has a colour and a stage — 10:10–11:25

**Action:** Point to the product photo, then read each evidence-stage label. Do not compare percentages from different sources as controlled measurements.


Three examples keep the product discussion grounded. Idemitsu reports a blue triplet-fusion-assisted fluorescent device: this is a relevant competing mechanism. LG Display reports production-line verification of a hybrid fluorescent and phosphorescent blue panel, with a power reduction against its stated reference. That announcement is not the same thing as identifying a retail phone containing it. For hyperfluorescence, WiseChip's five-point-five-inch PMOLED is a real product example, shown here. It establishes commercial use in that display class, not qualification of blue smartphone AMOLEDs. Kyulux also announced a green-material licensing agreement in twenty twenty-six, with subsequent production targets. Green licensing and planned production are not achieved blue adoption. I would keep colour, architecture, test conditions and commercial stage attached to every performance claim.


## 10. Value depends on the whole panel life — 11:25–12:20

**Action:** Follow the two causal chains. Keep the numerical yield example for questions.


The environmental and financial arguments follow from that whole-device view. Lower panel power can reduce use-phase energy for a defined duty cycle. Longer useful life can help avoid replacement, if the rest of the product remains usable. Neither metal-free chemistry nor a whole-phone carbon report proves a particular TADF carbon saving. For manufacturing, cost per saleable panel depends on yield as well as material and process costs. A cheaper process can become more expensive per good panel if yield falls. Qualification effort and consistent performance across production also matter. The profitable and sustainable case therefore has to survive real use and reproducible manufacture, not just a promising molecular measurement.


## 11. Adopt the device, not the headline — 12:20–13:00

**Action:** Let the final three requirements appear, then stop. Content target 13:00; allow about 30 seconds total for transitions. Questions afterward.


TADF gives us a molecular route to recover triplets as useful singlets. Its success depends on energetic access, coupling, emission and competition with loss. I would recommend adoption when the complete device demonstrates lower electrical power at the required colour and output, meets the customer's measured operational-life target, and can be manufactured reproducibly at acceptable cost. Those are the three tests I would put beside any efficiency headline. That brings us back to the blue pixel: better physics becomes a better product only when all three survive together.


## Rehearsal checks
Finish slide 3 near 3:15, slide 5 near 6:40, slide 8 near 10:10 and slide 11 near 13:00. Budget another 30 seconds across transitions. Do one full rehearsal with the live controls and one using the PDF; adjust speech pace and pauses after measuring yourself. The notes drawer is not a private presenter screen.
