const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const targets = Array.from(navLinks).map(function (link) {
  return document.querySelector(link.getAttribute("href"));
});

const watcher = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (link) {
          link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
        });
      }
    });
  },
  { rootMargin: "-40% 0px -50% 0px" }
);

targets.forEach(function (section) {
  if (section) {
    watcher.observe(section);
  }
});
