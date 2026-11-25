/**
 * Felon Luv — Motion Layer
 * Scroll reveals + cascade stagger. No heavy deps.
 * Style only; freezes under prefers-reduced-motion.
 */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function indexCascades(root) {
    var groups = root.querySelectorAll("[data-flm-cascade-group]");
    if (!groups.length) {
      root.querySelectorAll("[data-flm-cascade]").forEach(function (el, i) {
        el.style.setProperty("--flm-i", String(i));
      });
      return;
    }
    groups.forEach(function (group) {
      group.querySelectorAll("[data-flm-cascade]").forEach(function (el, i) {
        el.style.setProperty("--flm-i", String(i));
      });
    });
  }

  function revealAll(nodes) {
    nodes.forEach(function (n) {
      n.classList.add("is-in");
    });
  }

  function wireReveal() {
    var nodes = document.querySelectorAll("[data-flm-reveal], [data-flm-cascade]");
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
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
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
    indexCascades(document);
    wireReveal();
  });
})();
