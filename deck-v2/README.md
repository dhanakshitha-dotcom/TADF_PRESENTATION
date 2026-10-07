# TADF deck v2: script-synced Design canvas

A 26-slide main talk plus 5 backup slides, built from `script.json` (the spoken script, split per slide).

| Path | What it is |
|---|---|
| `script.json` | The full spoken script, one entry per slide. Single source of truth. |
| `core.json` | Which paragraphs belong to the short (12–15 min) path, by index. |
| `script.md` | Generated readable script (`▸` = core path). |
| `src/*.html` | One source file per slide: a `<!--meta-->` header, optional `<style>`, markup with `<tex>` equations, optional `<script>` logic. |
| `src/_deck.css` | Shared design system (inlined into every artboard). |
| `tools/build.mjs` | Builds `project/*.dc.html` + `project/canvas.json`: wraps slides, typesets `<tex>` with KaTeX, lays out the canvas, attaches script notes under each slide. |
| `tools/lint-sims.mjs` | Checks every artboard: template holes resolve, handlers run, no NaN values. |
| `tools/shoot.mjs`, `tools/mini-runtime.js` | Local preview renderer (stand-in for the canvas runtime). |
| `project/` | Generated output that is published to the canvas. |

Rebuild: `npm install && node tools/build.mjs && node tools/lint-sims.mjs`.

Design: dark scientific canvas. Cyan = singlet / useful light, amber = triplet, violet = coupling, blue = electron, rose = hole.
Type: Instrument Serif (display), Geist (text), Geist Mono (labels). Equations: KaTeX fonts, uploaded as canvas assets.

Timing (150 wpm): full script ≈ 22 min; core path ≈ 12.7 min of speech before simulation time.
All simulations are illustrative models; none is a fit to a molecule or device.

## Offline single-file player
`node tools/build.mjs && node tools/build-offline.mjs` writes `outputs/2026-10-07_tadf-presentation-offline_v2.html` (fonts, equations, simulations, notes embedded; no network).
Keys: → / Space next, ← previous, Home / End, B backup, N notes, C core-only notes, F fullscreen.
