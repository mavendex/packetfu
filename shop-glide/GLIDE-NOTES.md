# The Shop — Glide Notes

Pattern book for porting this vanilla kit into the live Base44 / React / Tailwind Shop at `maven-shop-vault.base44.app`. Effects only; no prices, products, or promises invented here beyond the named offerings already on the counter.

---

## (a) Moon-glow hero + fireflies / starlight

**What it is**  
Full-bleed night hero with a soft moon disc, drifting warm/cool motes (fireflies + starlight), brand-first copy (*The Shop*), one headline, one lede, two CTAs.

**Where it belongs**  
Home / counter landing — the first viewport of The Shop. Replace or wrap the current shelf-index intro so the brand glows before the spine list.

**Porting (React / Tailwind)**  
- Keep a `<canvas>` (or a thin `Starfield` client component) sized `absolute inset-0` under hero copy; cap particle count (~48, lower on small viewports).  
- Draw with `requestAnimationFrame`; pause when `document.hidden` or when `prefers-reduced-motion: reduce` (static sprinkle only).  
- Tailwind: `relative overflow-hidden min-h-[92vh]`, gradient utilities for veil; brand type via a display font already in the app (do not pull a new CDN font if the Shop already sets one).  
- Motion tokens: opacity + position only; no layout thrash.

---

## (b) Shelf cards — staggered rise + candle-flicker hover

**What it is**  
Six working cards (Vigil Light, Protection, Road-Opening, Uncrossing, Steady Hand, Luck & Favor) that fade/rise in on load with staggered delay, then pick up a soft amber flicker glow on hover.

**Where it belongs**  
Workings shelf (Shelf 02). Map each card to the real working detail route/modal already used on the bench.

**Porting (React / Tailwind)**  
- Stagger with CSS `animation-delay` or Framer-less timeouts setting `data-in` / `opacity-100 translate-y-0`. Prefer CSS `@keyframes` + `style={{ animationDelay }}` over JS when possible.  
- Hover glow: `transition` on `box-shadow` + a short `animation` for flicker; disable under `motion-reduce:animate-none`.  
- Tailwind sketch: `rounded-xl border border-white/10 bg-slate-900/80 opacity-0 translate-y-7 transition duration-700`; hover `shadow-[0_0_28px_rgba(230,179,90,0.45)]`.  
- Keep copy short; no price chips in the glide layer.

---

## (c) 3-card Knock — soar-and-turn flip

**What it is**  
Three face-down Axiom cards. Click toggles a 3D flip with lift (`translateY` + `rotateY` + slight scale). Demo faces only — not a live draw.

**Where it belongs**  
Axiom Readings shelf — specifically the Knock product/flow. Wire the same motion to real card faces after the draw resolves; keep the back identical to the Axiom deck sleeve in production.

**Porting (React / Tailwind)**  
- Parent: `perspective-[1200px]`. Child: `transform-style: preserve-3d` + `transition-transform duration-700`.  
- Faces: absolute inset, `backface-hidden`; front pre-rotated `rotate-y-180`.  
- State: `const [flipped, setFlipped] = useState([false,false,false])` or one boolean per card.  
- Reduced motion: snap to `rotateY(180deg)` without soar.  
- Accessibility: `<button aria-pressed>` (as here) or link to reading result; announce face-up title via `aria-label`.

---

## (d) Scroll-reveal for below-the-fold sections

**What it is**  
Sections and list items with `[data-reveal]` fade/slide in once when they enter the viewport, then stay.

**Where it belongs**  
Any long shelf page: Axiom list, Standing Order, shipped goods, house blessings & investigations, house rules. Not the hero.

**Porting (React / Tailwind)**  
- `IntersectionObserver` in a small `useReveal` hook; add `is-revealed` once, then unobserve.  
- Or Tailwind + a tiny headless util: `opacity-0 translate-y-6` → `opacity-100 translate-y-0`.  
- Respect `prefers-reduced-motion`: render already revealed.  
- Avoid revealing sticky chrome (moon-window banner).

---

## (e) Slim moon-window banner (pulse)

**What it is**  
Sticky slim bar with a pulsing moon orb and house line: The Shop · Maven Dex Corps · Enchantments worked & shipped.

**Where it belongs**  
Global chrome above the counter — optional replacement/enhancement for a top status or brand strip. Keep copy factual; no promo stickers.

**Porting (React / Tailwind)**  
- `sticky top-0 z-40 backdrop-blur` + thin border.  
- Orb: `animate-pulse` is too harsh; prefer a custom 4–5s ease-in-out scale/opacity keyframe named `moon-pulse`, gated by `motion-reduce:animate-none`.  
- Reuse across routes via the Shop layout shell.

---

## Performance & motion contract

| Rule | Kit behavior | Port note |
|------|----------------|-----------|
| Properties | `transform`, `opacity`, `box-shadow` | Avoid animating `top`/`left`/`width` |
| Particle budget | ≤ ~48, DPR capped at 2 | Tear down RAF on unmount |
| Reduced motion | Static stars, instant reveals, no flicker/pulse | Match OS setting |
| Assets | Zero network fonts/images | Use Shop’s existing font tokens |
| Content fence | Named offerings only | Do not invent SKUs or prices in the glide layer |

## File map

| File | Role |
|------|------|
| `index.html` | Showcase structure & real offering names |
| `style.css` | Tokens, layout, keyframes |
| `glide.js` | Starfield, stagger, Knock, reveal |
| `GLIDE-NOTES.md` | This porting guide |

Sweet as sugar pie: class, shine, glide, soar — then let the Base44 builder lift the patterns into React.
