const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  },
  {
    root: null,
    threshold: 0,
  },
);

window.addEventListener("DOMContentLoaded", () => {
  Array.from(document.getElementsByClassName("fade-in-up")).forEach(
    (element) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        // immediately show all elements
        element.classList.add("in-view");
      } else {
        observer.observe(element);
      }
    },
  );
});

export {};
