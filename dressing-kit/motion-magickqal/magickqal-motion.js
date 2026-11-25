/**
 * Magickqal — Motion Layer
 * Scroll reveals, stagger, knock (draw soar/flip/tilt).
 * No heavy deps. Freezes under prefers-reduced-motion.
 */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function indexStaggers(root) {
    var groups = root.querySelectorAll("[data-mqm-stagger-group]");
    if (!groups.length) {
      root.querySelectorAll("[data-mqm-stagger]").forEach(function (el, i) {
        el.style.setProperty("--mqm-i", String(i));
      });
      return;
    }
    groups.forEach(function (group) {
      group.querySelectorAll("[data-mqm-stagger]").forEach(function (el, i) {
        el.style.setProperty("--mqm-i", String(i));
      });
    });
  }

  function revealAll(nodes) {
    nodes.forEach(function (n) {
      n.classList.add("is-in");
    });
  }

  function wireReveal() {
    var nodes = document.querySelectorAll(
      "[data-mqm-reveal], [data-mqm-stagger], .mqm-gold-rule"
    );
    if (!nodes.length) return;

    if (reduce || !("IntersectionObserver" in window)) {
      revealAll(nodes);
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          // Also mark parent-ruled gold rules
          var rule = entry.target.querySelector && entry.target.querySelector(".mqm-gold-rule");
          if (rule) rule.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    nodes.forEach(function (n) {
      io.observe(n);
    });
  }

  function wireKnock() {
    document.querySelectorAll("[data-mqm-knock]").forEach(function (card) {
      card.addEventListener("click", function () {
        var on = card.classList.toggle("is-flipped");
        card.setAttribute("aria-pressed", String(on));
        var title = card.getAttribute("data-mqm-title") || "face up";
        card.setAttribute(
          "aria-label",
          on ? "Draw card, " + title : "Draw card, face down"
        );
      });
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
    indexStaggers(document);
    wireReveal();
    wireKnock();
  });
})();
