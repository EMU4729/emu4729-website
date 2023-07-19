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
  }
);

window.addEventListener("DOMContentLoaded", () => {
  Array.from(document.getElementsByClassName("fade-in-up")).forEach(
    (element) => {
      observer.observe(element);
    }
  );
});

export {};
