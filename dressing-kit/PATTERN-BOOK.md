# Window-Dressing Kit — Pattern Book

Maven Dex Corps style system for two sister apps:

| App | Role |
|-----|------|
| **Felon Luv** | Live matchmaking — the spark, the glance, the yes |
| **Magickqal** | Magical twin — a swanky hall where magical people meet |

This kit is **style only**: palette, type, atmosphere, motion, and voice. No logic, prices, or data. Drop `dressing.css` into either app; lift the component markup as needed.

**Desired feel:** luster and swanky; wicked, wild, wonderful, whimsical; magical and ethereal. Candelabra light on velvet-dark walls. Very uplifting — but not so uplifting it looks like God.

---

## 1. Palette

| Token | Hex / value | Role |
|-------|-------------|------|
| `--obsidian` | `#0c0614` | Deepest velvet wall |
| `--obsidian-mid` | `#160a22` | Panel / card ground |
| `--violet` | `#2a1240` | Obsidian violet lift |
| `--phantom` | `#e056a8` | Phantom magenta accent |
| `--phantom-deep` | `#9b2d6e` | Magenta shade / pressed |
| `--phantom-soft` | `#f0a8d0` | Soft magenta highlight |
| `--gold` | `#d4af5a` | Hall luster gold |
| `--gold-bright` | `#f0d080` | Candle tip / sweep peak |
| `--gold-deep` | `#a8842e` | Gold shade |
| `--ivory` | `#f3ebe0` | Primary text on dark |
| `--mist` | `#c9b8d4` | Secondary / lede text |
| `--line` | `rgba(240, 208, 128, 0.14)` | Hairline borders |
| `--glow-candle` | `rgba(212, 175, 90, 0.45)` | Candelabra bloom |
| `--glow-phantom` | `rgba(224, 86, 168, 0.35)` | Magenta bloom |

### When to use

- **Obsidian / violet** — page ground, hall walls, card backs. Always the majority of the surface.
- **Phantom magenta** — live energy: match CTAs, “online” pulses, Magickqal hall accents. Use sparingly; one magenta signal per viewport is enough.
- **Hall luster gold** — brand edges, candle-glow, button fills, card underlines, draw-card sigils. Gold is the polish, not the paint.
- **Ivory / mist** — body and lede. Never put gold body text on gold backgrounds.
- **Avoid** — pure white fills, neon pink, sky blue “heaven” gradients, pastel rainbows. Uplifting, not celestial.

---

## 2. Typography

| Role | Family | Weight | Notes |
|------|--------|--------|-------|
| Display | **Cormorant Garamond** | 500–600 | Brand, hero, card titles |
| Body | **Jost** | 400–500 | Lede, UI, buttons, captions |

CSS variables: `--font-display`, `--font-body`. Showcase loads them from Google Fonts; production apps should use the same faces if already hosted, otherwise the kit’s `@import` / `<link>`.

### Scale (guide)

| Element | Size | Tracking |
|---------|------|----------|
| Brand / hero | `clamp(2.8rem, 8vw, 4.8rem)` | tight (`-0.02em`) |
| Section H2 | `clamp(1.7rem, 3.5vw, 2.3rem)` | normal |
| Card title | `~1.2rem` | slight open on gold labels |
| Body | `1.05rem` / `1.55` line-height | — |
| Eyebrow / sigil label | `0.72–0.8rem` | `0.18–0.22em`, uppercase |

### When to use

- **Cormorant** — anything that should feel like a hall plaque or invitation: Felon Luv / Magickqal wordmarks, spirit names, draw-card titles.
- **Jost** — everything else: buttons, match bios, shelf blurbs, nav.
- **Do not** pair a third display face. One serif, one sans — the sisters share both.

---

## 3. Atmosphere

The hall is lit by **candelabra**, not floodlight.

1. **Velvet ground** — layered radial gradients of obsidian → violet, with a soft gold wash from above (chandelier) and a phantom blush at the edges.
2. **Gold-gradient sweeps** — slow diagonal or horizontal sheens across hero and primary CTAs (`.dk-sweep`, `.dk-btn--luster`).
3. **Candle-glow** — warm gold `box-shadow` bloom on hover and on active candles (`.dk-candle-glow`).
4. **Drifting layer** — CSS orbs, wisps, and motes behind content (`.dk-atmosphere`). Decorative only; `pointer-events: none`; pause under `prefers-reduced-motion`.

### When to use

| Treatment | Felon Luv | Magickqal |
|-----------|-----------|-----------|
| Full atmosphere (orbs + wisps + motes) | Match lobby / first viewport | Hall entrance / hero |
| Candle-glow only | Profile hover, chat chrome | Spirit-card hover |
| Gold sweep | Primary match CTA | Enter-the-hall CTA |
| Quiet panels (no particles) | Settings, legal, forms | Readings results, receipts |

---

## 4. Motion

Animate **transform**, **opacity**, and **box-shadow** only. No layout thrash (`top` / `left` / `width`).

| Motion | Duration | Feel |
|--------|----------|------|
| Orb drift | 18–36s loop | Lazy chandelier dust |
| Wisp float | 12–22s loop | Soft sideways sigh |
| Mote twinkle | 3–7s loop | Tiny candle spark |
| Gold sweep | 4–6s loop | Polished rail catch |
| Card rise / stagger | 0.6–0.8s enter | Arrive at the table |
| Candle flicker (hover) | ~1.8s | Warm, not strobing |
| Draw flip | 0.8–0.9s | Soar, turn, settle |

### When to use

- **Atmosphere loops** — always-on in heroes and halls; off in dense UI.
- **Staggered shelf** — when a grid of offerings or spirits first appears.
- **Draw flip** — tarot / rune reveal only; never on ordinary nav cards.
- **Reduced motion** — snap to resting state; keep static gold edge, drop loops and flicker.

---

## 5. Voice

Sister apps share one register: **wicked · wild · wonderful · whimsical**, with Magickqal leaning more ethereal and Felon Luv leaning more live.

| Do | Don’t |
|----|-------|
| Invite: “Step into the hall.” / “Find your spark.” | Preach or promise salvation |
| Tease with luster: “Dressed for the evening.” | Corporate SaaS (“synergy”, “unlock premium”) |
| Keep copy short — one headline, one lede | Stat strips, promo stickers on the hero |
| Name the house: Maven Dex Corps, quietly | Invent prices, SKUs, or guarantees in the dressing layer |

**Uplift without divinity:** warmth, wit, candlelight, and company. No rays-from-heaven, no “blessed / chosen / destiny” as UI chrome. Magickqal is a hall for magical people — not a temple.

### When to use which sister tone

- **Felon Luv** — present tense, pulse, glance: *live*, *match*, *spark*, *tonight*.
- **Magickqal** — invitation, threshold, hall: *enter*, *meet*, *draw*, *luster*.

---

## 6. Component map

| Pattern | File | Use |
|---------|------|-----|
| Hero | `components/hero.html` | First viewport — brand-first, one CTA group, atmosphere |
| Spirit card | `components/spirit-card.html` | Magickqal people / Felon Luv profiles in hall light |
| Draw card | `components/draw-card.html` | Tarot / rune flip for Magickqal |
| Shelf card | `components/shelf-card.html` | Offerings, rooms, or match filters in a grid |

Shared styles live in `dressing.css` under `.dk-*` prefixes so the kit can sit beside other CSS without collisions.

Showcase: open `index.html` in a browser to see the hall lit.

---

## 7. Fences

- **Additive only** — this folder does not modify app logic, prices, or data.
- **Style only** — patterns are markup + CSS; wire to real routes later.
- **Named copy** — demo text is placeholder atmosphere, not product inventory.
- **Accessibility** — skip link, focus rings, `prefers-reduced-motion`, decorative layers `aria-hidden`.

Sweet as sugar pie: class, shine, polish — then let the sisters wear it.
