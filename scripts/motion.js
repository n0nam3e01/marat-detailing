/* Decorative enhancements only: the page and its controls work without this file. */
(() => {
  "use strict";
  const preference = matchMedia("(prefers-reduced-motion: reduce)");
  const running = new Set();
  const canAnimate = () => !preference.matches && !document.hidden;

  function animate(element, frames, options, remove = false) {
    const animation = element.animate(frames, options);
    running.add(animation);
    const cleanup = () => {
      running.delete(animation);
      if (remove) element.remove();
    };
    animation.addEventListener("finish", cleanup, { once: true });
    animation.addEventListener("cancel", cleanup, { once: true });
  }

  function stop() {
    for (const animation of running) animation.cancel();
    running.clear();
    document.querySelectorAll(".click-spark").forEach(spark => spark.remove());
  }

  if (!("animate" in Element.prototype)) return;
  preference.addEventListener("change", stop);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
  });
  window.addEventListener("pagehide", stop);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (!canAnimate()) continue;
        animate(entry.target, [
          { opacity: 0.45, transform: "translateY(24px)" },
          { opacity: 1, transform: "translateY(0)" }
        ], { duration: 750, easing: "cubic-bezier(.22,1,.36,1)" });
      }
    }, { threshold: 0.08 });
    document.querySelectorAll(
      ".section-heading, .service, .extra-services, .work, .instagram-panel, .about-image, .about-content, .steps li, .faq, .lead-form, .contact-details"
    ).forEach(element => observer.observe(element));
  }

  document.addEventListener("click", event => {
    const target = event.target instanceof Element
      ? event.target.closest(".button, .text-link, .service-select, .floating-whatsapp")
      : null;
    if (!target || target.matches(":disabled") || !canAnimate()) return;
    // Limit the burst count even during rapid repeated clicks.
    if (document.querySelectorAll(".click-spark").length >= 24) return;
    const box = target.getBoundingClientRect();
    const x = event.detail ? event.clientX : box.left + box.width / 2;
    const y = event.detail ? event.clientY : box.top + box.height / 2;
    for (let index = 0; index < 8; index++) {
      const angle = Math.PI * index / 4;
      const endX = Math.max(3, Math.min(innerWidth - 8, x + Math.cos(angle) * 38));
      const endY = Math.max(3, Math.min(innerHeight - 8, y + Math.sin(angle) * 38));
      const spark = document.createElement("span");
      spark.className = "click-spark";
      spark.setAttribute("aria-hidden", "true");
      document.body.append(spark);
      animate(spark, [
        { transform: `translate(${x}px, ${y}px) scale(1)`, opacity: 1 },
        { transform: `translate(${endX}px, ${endY}px) scale(0)`, opacity: 0 }
      ], { duration: 600, easing: "cubic-bezier(.16,1,.3,1)" }, true);
    }
  });
})();
