/**
 * The Shop — glide kit
 * Fireflies, shelf stagger, Knock flip, scroll reveal.
 * Honors prefers-reduced-motion.
 */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* —— Starfield / fireflies on hero canvas —— */
  function initStarfield() {
    const canvas = document.getElementById("starfield");
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let particles = [];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function seed() {
      const count = reduceMotion
        ? Math.min(28, Math.floor((width * height) / 28000))
        : Math.min(48, Math.floor((width * height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.6 + Math.random() * 1.8,
        a: 0.25 + Math.random() * 0.55,
        tw: Math.random() * Math.PI * 2,
        twSpeed: 0.004 + Math.random() * 0.01,
        vx: reduceMotion ? 0 : (Math.random() - 0.5) * 0.12,
        vy: reduceMotion ? 0 : -0.02 - Math.random() * 0.08,
        warm: Math.random() > 0.55,
      }));
    }

    function frame() {
      ctx.clearRect(0, 0, width, height);

      // soft moon disc
      const mx = width * 0.72;
      const my = height * 0.22;
      const mr = Math.min(width, height) * 0.12;
      const moon = ctx.createRadialGradient(mx - mr * 0.2, my - mr * 0.25, mr * 0.1, mx, my, mr);
      moon.addColorStop(0, "rgba(255,255,255,0.55)");
      moon.addColorStop(0.45, "rgba(220,230,245,0.22)");
      moon.addColorStop(1, "rgba(220,230,245,0)");
      ctx.fillStyle = moon;
      ctx.beginPath();
      ctx.arc(mx, my, mr, 0, Math.PI * 2);
      ctx.fill();

      for (const p of particles) {
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.tw += p.twSpeed;
          if (p.y < -4) p.y = height + 4;
          if (p.x < -4) p.x = width + 4;
          if (p.x > width + 4) p.x = -4;
        }
        const pulse = reduceMotion ? 1 : 0.65 + 0.35 * Math.sin(p.tw);
        const alpha = p.a * pulse;
        ctx.beginPath();
        ctx.fillStyle = p.warm
          ? `rgba(240, 208, 144, ${alpha})`
          : `rgba(220, 230, 255, ${alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) {
        raf = requestAnimationFrame(frame);
      }
    }

    resize();
    frame();

    let resizeTimer = 0;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        cancelAnimationFrame(raf);
        resize();
        frame();
      }, 120);
    });
  }

  /* —— Shelf cards: staggered rise & settle —— */
  function initShelfStagger() {
    const cards = document.querySelectorAll("[data-stagger]");
    if (!cards.length) return;

    if (reduceMotion) {
      cards.forEach((card) => card.classList.add("is-in"));
      return;
    }

    cards.forEach((card, i) => {
      const delay = 80 + i * 90;
      window.setTimeout(() => card.classList.add("is-in"), delay);
    });
  }

  /* —— Knock: soar-and-turn flip —— */
  function initKnock() {
    const cards = document.querySelectorAll("[data-knock]");
    cards.forEach((card, index) => {
      card.addEventListener("click", () => {
        const flipped = card.classList.toggle("is-flipped");
        card.setAttribute("aria-pressed", flipped ? "true" : "false");
        card.setAttribute(
          "aria-label",
          flipped
            ? `Knock card ${index + 1}, face up`
            : `Knock card ${index + 1}, face down`
        );
      });
    });
  }

  /* —— Scroll reveal —— */
  function initReveal() {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (!nodes.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-revealed"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    nodes.forEach((n) => io.observe(n));
  }

  document.addEventListener("DOMContentLoaded", () => {
    initStarfield();
    initShelfStagger();
    initKnock();
    initReveal();
  });
})();
