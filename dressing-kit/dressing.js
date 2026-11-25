/**
 * Window-Dressing Kit — tiny showcase helpers
 * Stagger shelf cards, draw-card flips, scroll reveal.
 * Style only; no app logic or data.
 */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function staggerShelf() {
    var cards = document.querySelectorAll(".dk-shelf-card[data-dk-stagger]");
    cards.forEach(function (card, i) {
      if (reduce) {
        card.classList.add("is-in");
        return;
      }
      window.setTimeout(function () {
        card.classList.add("is-in");
      }, 70 * i);
    });
  }

  function wireDraw() {
    document.querySelectorAll("[data-dk-draw]").forEach(function (card) {
      card.addEventListener("click", function () {
        var on = card.classList.toggle("is-flipped");
        card.setAttribute("aria-pressed", String(on));
        var title = card.getAttribute("data-dk-title") || "face up";
        card.setAttribute(
          "aria-label",
          on ? "Draw card, " + title : "Draw card, face down"
        );
      });
    });
  }

  function wireReveal() {
    var nodes = document.querySelectorAll("[data-dk-reveal]");
    if (!nodes.length) return;

    if (reduce || !("IntersectionObserver" in window)) {
      nodes.forEach(function (n) {
        n.classList.add("is-revealed");
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    nodes.forEach(function (n) {
      io.observe(n);
    });
  }

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  ready(function () {
    staggerShelf();
    wireDraw();
    wireReveal();
  });
})();
