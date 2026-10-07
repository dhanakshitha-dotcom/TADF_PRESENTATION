---
name: A better blue pixel — TADF
description: An offline scientific canvas for a Senior Honours physics presentation.
colors:
  bg: "#070c17"
  ink: "#eff5ff"
  muted: "#b4c2d8"
  cyan: "#62e7f4"
  amber: "#ffc071"
  violet: "#c4a1ff"
  blue: "#597eff"
  line: "#34465f"
  viewport: "#03060c"
  button-border: "#657890"
  button-hover: "#1b2b42"
  button-selected: "#183745"
  notes: "#111e31"
  bar-track: "#23314a"
typography:
  display:
    fontFamily: '"Avenir Next", Avenir, "Segoe UI", sans-serif'
    fontSize: "76px"
    fontWeight: 500
    letterSpacing: "-.04em"
  headline:
    fontFamily: '"Avenir Next", Avenir, "Segoe UI", sans-serif'
    fontSize: "54px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-.035em"
  title:
    fontSize: "29px"
    fontWeight: 500
  subtitle:
    fontSize: "25px"
    lineHeight: 1.4
  small:
    fontSize: "18px"
    lineHeight: 1.4
  equation:
    fontFamily: '"Cambria Math", "STIX Two Math", Georgia, serif'
    fontSize: "39px"
    lineHeight: 1.4
  axis:
    fontSize: "17px"
  source:
    fontSize: "14px"
    lineHeight: 1.3
rounded:
  button: "5px"
  navigation: "8px"
spacing:
  slide: "52px 72px 55px"
  columns: "62px"
  routes: "38px"
  control-gap: "10px"
components:
  button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "10px 17px"
  button-hover:
    backgroundColor: "{colors.button-hover}"
  button-selected:
    backgroundColor: "{colors.button-selected}"
    textColor: "{colors.cyan}"
  navigation:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.navigation}"
    padding: "5px 10px"
  notes:
    backgroundColor: "{colors.notes}"
    padding: "26px"
    width: "480px"
---

# Design System: A better blue pixel — TADF

## Overview

**Creative North Star: "Scientific canvas"**

The implemented presentation places physics diagrams, equations and interactive plots on a dark, spacious canvas. Its futuristic character comes from restrained luminous accents and smooth motion that explains pathways, population changes and staged conclusions.

This documents the current offline HTML presentation, not a general website theme. The audience is Senior Honours physics students; projected readability and the distinction between illustrative models, experimental data and commercial evidence shape the presentation.

**Key Characteristics:**
- Dark canvas with bright, semantically consistent physics accents.
- Large slide headlines and separate mathematical typography.
- Inline charts, directed flow animation and presenter-controlled reveals.
- Fixed aspect ratio with proportional viewport scaling.

## Colors

Cyan marks singlets and useful photon pathways; amber marks triplets; violet marks terminal-emitter pathways. The same accents also distinguish plotted series, with explicit labels and legends providing local meaning. Cyan identifies controls, selected presets and focus. Blue is an additional declared accent, not the primary interaction color.

Ink carries main text, muted carries subtitles, axes and source lines, and line supplies diagram paths and dividers. The viewport is darker than the slide canvas. Button, notes and bar-track surfaces supply restrained tonal separation. Exact values are recorded in the frontmatter.

## Typography

Display and body use `"Avenir Next", Avenir, "Segoe UI", sans-serif`. Equations use `"Cambria Math", "STIX Two Math", Georgia, serif`. Fonts are not embedded; their appearance may vary by operating system and installed fonts.

The main headline is 54px/1.25, weight 600; the largest numerical display is 76px, weight 500. Section titles are 29px, subtitles 25px, statements 34px/1.25, small explanatory text 18px/1.4, SVG labels 20px and chart axes 17px. Source lines are 14px/1.3. Equations are 39px/1.4, reduced to 30px in route columns and 29px in the appendix. Appendix headlines are 44px. There is no single uniform body size across slide types.

## Layout

The stage is 1440 × 810px. JavaScript applies the smaller of viewport-width/1440 and viewport-height/810, then centers the scaled stage. This preserves a 16:9 composition rather than reflowing into a mobile layout; small viewports therefore reduce all slide content.

Slides use 52px top, 72px horizontal and 55px bottom padding. The content body begins after a 30px margin and is 535px high. Two-column layouts use equal columns with a 62px gap; three-route layouts use a 38px gap. Sources sit near the bottom, slide counts at bottom right, and a 3px progress line spans the stage bottom. Fixed navigation sits at the viewport bottom. Print uses one 1440 × 810px slide per page and hides presenter controls.

## Elevation & Depth

The system uses tonal layering and thin borders, without box shadows. SVG strokes, semitransparent orbital shapes and animated opacity provide visual depth within diagrams. Notes occupy a darker blue panel above the stage with a border; they are a presenter utility.

## Shapes

Scientific illustrations primarily use straight energy levels, circles, ellipses and connecting paths. Content groups use horizontal rules rather than enclosing cards. Buttons have 5px corners; the navigation container has 8px corners. Diagram paths are typically 2px, animated flow paths 3px, and content rules 1px.

## Components

- **Controls:** Transparent bordered buttons with 17px text and 10px × 17px padding. Hover adds a blue surface and cyan border; selected presets add a darker cyan surface and cyan text. Focus-visible uses a 3px cyan outline with 5px offset. Range inputs use native rendering, cyan accent and 210px width.
- **Navigation:** A compact bottom strip uses 13px buttons. It rests at 0.22 opacity and becomes fully opaque on hover or focus within. Previous/next, pause, notes and fullscreen controls accompany slide position.
- **Charts:** Offline inline SVG plots use muted axes, grid lines, 3px series paths and 6px point markers. Interactive charts update from local JavaScript; measured points remain distinct from illustrative curves.
- **Routes and criteria:** Thin top borders anchor explanation columns and final adoption requirements. Entry reveals last 0.9 seconds, staggered by 0.25 seconds.
- **Motion:** Slides fade over 0.48 seconds and translate over 0.65 seconds using `cubic-bezier(.16,1,.3,1)`. Dashed pathways flow every 3 seconds; emission pulses every 3 seconds. Decorative rise and orbit cycles are 5 and 18 seconds. Inactive slides pause CSS animation. Pause controls and reduced-motion CSS are provided. The pulse simulation is separately driven by JavaScript; reduced-motion CSS alone does not govern that replay.
- **Presenter reveal and keys:** The emission trade-off is initially concealed, revealed by its button or Space at that slide. Arrows, Space and Page Up/Down navigate; Home starts, End returns to the conclusion, B opens backup material, P pauses, N toggles notes, F toggles fullscreen and R replays the pulse on its slide. Escape closes notes. Native control interactions retain their own arrow/Space behavior.

## Do's and Don'ts

- Do preserve the semantic physics accents and explicit series labels.
- Do retain the centered 16:9 stage and large projected typography.
- Do keep model assumptions, measured evidence and sources visibly identified.
- Do use motion to explain pathways and allow presenter control.
- Don't rely on installed fonts rendering identically across operating systems.
- Don't describe an illustrative animation or model curve as measured experimental data.
