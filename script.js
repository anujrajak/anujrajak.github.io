// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offset = 100;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Update active nav tab
const navTabs = document.querySelectorAll(".nav-tab");
const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {
  const scrollY = window.pageYOffset + 150;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navTabs.forEach((tab) => {
        tab.classList.remove("active");
        if (tab.getAttribute("href") === `#${sectionId}`) {
          tab.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", updateActiveNav);
updateActiveNav();

// Intersection Observer for slide-up animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".slide-up").forEach((el) => {
  observer.observe(el);
});

// Animate progress bars on scroll
const progressBars = document.querySelectorAll(".progress-bar");
const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const width = entry.target.style.width;
        entry.target.style.width = "0%";
        setTimeout(() => {
          entry.target.style.width = width;
        }, 100);
        progressObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

progressBars.forEach((bar) => {
  progressObserver.observe(bar);
});
