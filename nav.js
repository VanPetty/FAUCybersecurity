const navLinks = document.querySelectorAll('.nav-links a[href*="#"]');

const watcher = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (link) {
          link.classList.toggle("active", link.hash === "#" + entry.target.id);
        });
      }
    });
  },
  { rootMargin: "-40% 0px -50% 0px" }
);

navLinks.forEach(function (link) {
  const section = document.querySelector(link.hash);
  if (section) {
    watcher.observe(section);
  }
});