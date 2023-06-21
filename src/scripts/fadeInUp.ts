const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => {
        entry.target.classList.add("in-view");
      }, 100);
      observer.unobserve(entry.target);
    });
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
