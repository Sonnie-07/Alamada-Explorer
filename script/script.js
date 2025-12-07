// ===============================
// Smooth scroll animations
// ===============================
document.addEventListener("DOMContentLoaded", () => {

  const elements = document.querySelectorAll(".destination-card, .about, h2, p");

  const observerOptions = {
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });


  // ===============================
  // Smooth scrolling for navbar links
  // ===============================
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      if (link.hash) {
        event.preventDefault();
        document.querySelector(link.hash).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  // ===============================
  // Navbar shrink on scroll
  // ===============================
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }
  });

});
