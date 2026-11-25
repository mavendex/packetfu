# Felon Luv — Motion Map

Motion layer for the Mule to lay onto the Felon Luv dressing branch.  
**Idiom:** live spark · soft hypnosis · pink/magenta pulse · unhurried glance.  
**Properties:** `transform` and `opacity` only.  
**Reduced motion:** still site — every loop and enter snaps to the resting frame; no exceptions.

Prefix: `flm-`  
Files: `felon-luv-motion.css`, `felon-luv-motion.js`

This is **not** Magickqal’s ceremonial hall vocabulary. No gold rule sweeps, no soar-and-flip draws, no candelabra flicker. Felon Luv breathes magenta and rises like a glance finding you.

---

## Global (every page)

| What moves | Trigger | Duration | Notes |
|------------|---------|----------|-------|
| Soft pink/magenta glow orbs (`.flm-orb`) | load (loop) | 22–36s | Large, blurry; hypnosis drift across dark plum |
| Tiny sparkle dots (`.flm-spark`) | load (loop) | 4–8s | Opacity + slight `translateY`; phantom-tinted |
| Page enter veil (`.flm-page-in`) | load | 900ms | Whole main fades/rises once |

---

## Home

| What moves | Trigger | Duration | Notes |
|------------|---------|----------|-------|
| Wordmark rise (`.flm-wordmark`) | load | 1.1s | `opacity` 0→1, `translateY(18px→0)` — soft, late |
| Magenta pulse under brand (`.flm-pulse-line`) | load (loop) | 3.6s | ScaleX breathe via transform; not a gold hall rule |
| Hero lede & CTA fade-rise (`.flm-hero-copy > *`) | load | 0.8–1.2s | Stagger 120ms between children |
| Orb field behind hero | load (loop) | see Global | Orbs denser near wordmark |

---

## Discover / Matches

| What moves | Trigger | Duration | Notes |
|------------|---------|----------|-------|
| Section head rise (`.flm-rise`) | scroll into view | 750ms | Heading + lede |
| Match cards cascade (`.flm-cascade`) | scroll into view | 700ms each | **True stagger** — one after another, 110ms step |
| Card hover breath (`.flm-breath:hover`) | hover | 480ms | Slight `translateY(-4px)` + glow-layer opacity |
| Live ember (`.flm-ember`) | load (loop) | 2.4s | Tiny opacity pulse on “online” pip |

---

## Shop

| What moves | Trigger | Duration | Notes |
|------------|---------|----------|-------|
| Section head rise | scroll | 750ms | Same `.flm-rise` |
| Shelf tiles cascade (`.flm-cascade`) | scroll | 650ms each | Stagger 90ms — hypnotic sequential |
| Tile hover lift | hover | 400ms | `translateY(-3px)` + magenta veil opacity |
| Magenta edge shimmer (`.flm-shimmer`) | load (loop) on hover-target | 5s | Pseudo sweep via `translateX` on opacity mask |

---

## Rooms

| What moves | Trigger | Duration | Notes |
|------------|---------|----------|-------|
| Section head rise | scroll | 750ms | `.flm-rise` |
| Room cards cascade | scroll | 720ms each | Stagger 100ms |
| Hover breath | hover | 480ms | Soft lift; phantom glow layer opacity |
| Ambient orbs in room hero | load (loop) | 28s | Fewer, larger — lounge air |

---

## What Felon Luv deliberately does **not** do

| Magickqal move | Felon Luv instead |
|----------------|-------------------|
| Gold rule sweep under H2 | Magenta pulse-line / rise only |
| Soar → flip → settle tilt (draws) | No draw deck — match cascade only |
| Candelabra flicker hover | Magenta breath glow |
| Gold sparkle stars at wordmark | Phantom spark dots + pink orbs |

---

## Choreography tokens

| Token | Value | Use |
|-------|-------|-----|
| `--flm-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | Enters |
| `--flm-silk` | `cubic-bezier(0.45, 0.05, 0.55, 0.95)` | Loops |
| `--flm-stagger` | `110ms` | Discover default step |
| `--flm-enter` | `750ms` | Scroll reveals |

---

## Wiring (for the Mule)

1. Link `felon-luv-motion.css` after the Felon Luv dressing CSS.  
2. Add `felon-luv-motion.js` once in the app shell.  
3. Mark scroll targets with `data-flm-reveal`; cascade children with `data-flm-cascade`.  
4. Atmosphere: place `.flm-atmosphere` with `.flm-orb` / `.flm-spark` nodes (`aria-hidden`).  
5. Respect `prefers-reduced-motion: reduce` — the CSS + JS both freeze to the resting frame.

Style only. No prices, tiers, logic, or copy changes in this layer.
