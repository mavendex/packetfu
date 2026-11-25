# Magickqal — Motion Map

Motion layer for Magickqal’s hall dressing.  
**Idiom:** ceremonial · candelabra · gold luster · wicked · wonderful · wild · whimsical.  
**Palette motion:** obsidian violet ground, phantom magenta accents, hall luster gold leads.  
**Properties:** `transform` and `opacity` only.  
**Reduced motion:** still site — every loop and enter snaps to the resting frame; no exceptions.

Prefix: `mqm-`  
Files: `magickqal-motion.css`, `magickqal-motion.js`

This is **not** Felon Luv’s hypnosis cascade. Magickqal keeps the walkthrough’s hall grammar: gold sparkle stars, gold rule sweeps, staggered card rises, candelabra hover, and the draw’s soar → turn → settle tilt.

Checked against the film claim David ruled on (2026-11-25). Lesson One, law 1: this folder is the record.

---

## Global (every hall page)

| What moves | Trigger | Duration | Notes |
|------------|---------|----------|-------|
| Gold sparkle stars near wordmark (`.mqm-star`) | load (loop) | 5–9s | Sharp gold points (not soft orbs); drift via translate + opacity |
| Soft hall orbs / wisps (`.mqm-orb`, `.mqm-wisp`) | load (loop) | 18–34s | Ceremonial air behind content |
| Gold motes (`.mqm-mote`) | load (loop) | 3.5–7s | Tiny candle sparks |

---

## Hall Home (entrance)

| What moves | Trigger | Duration | Notes |
|------------|---------|----------|-------|
| Wordmark settle (`.mqm-wordmark`) | load | 1.2s | Opacity + slight rise — plaque arriving |
| Gold sparkle field clustered at brand | load (loop) | see Global | Stars densest around Magickqal wordmark |
| Hero copy staggered enter | load | 0.85–1.15s | Children delay 130ms |
| Gold rule under brand (`.mqm-gold-rule`) | load | 1.4s | `scaleX(0→1)` from left — ceremonial underline |

---

## Spirits (people in the hall)

| What moves | Trigger | Duration | Notes |
|------------|---------|----------|-------|
| Section gold rule sweep (`.mqm-gold-rule`) | scroll into view | 900ms | Sweeps beneath H2 |
| Section head rise (`.mqm-rise`) | scroll | 800ms | |
| Spirit cards staggered rise (`.mqm-stagger`) | scroll | 750ms each | **One after another**, 95ms step |
| Candelabra hover (`.mqm-candle:hover`) | hover | 500ms enter; 1.8s glow loop | Lift `translateY(-3px)` + glow-layer opacity “lights up” |

---

## Draw (tarot / runes) — knock

| What moves | Trigger | Duration | Notes |
|------------|---------|----------|-------|
| Section gold rule | scroll | 900ms | |
| Draw card soar + flip + settle tilt | **click / knock** | 900ms | Sequence in one transform transition: rise (`translateY`), `rotateY(180deg)`, settle with slight `rotateZ` tilt |
| Face opacity cross via backface | with flip | — | Back/front `backface-visibility` |

**Knock choreography (per card):**  
1. Rest face-down.  
2. On click → soar up (~14–18px) while turning.  
3. Settle face-up, **slightly tilted** (`rotateZ(-1.8deg)` or `1.8deg` alternating).  
Duration: **900ms**, ease soar.

---

## Rooms (hall shelves)

| What moves | Trigger | Duration | Notes |
|------------|---------|----------|-------|
| Section gold rule | scroll | 900ms | |
| Room cards staggered rise | scroll | 720ms each | 90ms step — one after another |
| Candelabra hover | hover | 500ms / 1.8s flicker opacity | Same `.mqm-candle` language as Spirits |

---

## What Magickqal deliberately does **not** do

| Felon Luv move | Magickqal instead |
|----------------|-------------------|
| Magenta pulse-line breathe | Gold rule `scaleX` sweep |
| Hypnosis cascade (pink orbs lead) | Gold stars + hall orbs; gold leads |
| Match ember pip pulse | Candelabra glow layer |
| Side shimmer on shop tiles | Candle hover on shelf cards |

---

## Choreography tokens

| Token | Value | Use |
|-------|-------|-----|
| `--mqm-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | Soar / enters |
| `--mqm-silk` | `cubic-bezier(0.45, 0.05, 0.55, 0.95)` | Drift loops |
| `--mqm-stagger` | `95ms` | Card-after-card |
| `--mqm-enter` | `800ms` | Scroll reveals |
| `--mqm-knock` | `900ms` | Draw flip |

---

## Wiring (for the Mule)

1. Link `magickqal-motion.css` after Magickqal dressing CSS.  
2. Add `magickqal-motion.js` once in the hall shell.  
3. Mark scroll targets `data-mqm-reveal`; stagger children `data-mqm-stagger` inside `data-mqm-stagger-group`.  
4. Gold rules: `.mqm-gold-rule` sibling under the heading (or `::after` via `.mqm-ruled`).  
5. Draw: buttons with `.mqm-draw-card` + `data-mqm-knock`; JS toggles `.is-flipped`.  
6. Atmosphere: `.mqm-atmosphere` with `.mqm-star` / `.mqm-orb` / `.mqm-wisp` / `.mqm-mote` (`aria-hidden`).  
7. `prefers-reduced-motion: reduce` → CSS + JS freeze to resting frames (draws snap face-up without soar).

Style only. No prices, tiers, logic, or copy changes in this layer.
