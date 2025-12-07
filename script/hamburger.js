const navbarToggle = document.getElementById('navbar-toggle');
const navbarNav = document.getElementById('navbar-nav');

navbarToggle.addEventListener('click', () => {
  navbarNav.classList.toggle('show');   // toggles visibility
  navbarToggle.classList.toggle('open'); // optional: animate hamburger
});

// Optional: Close menu when a link is clicked
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navbarNav.classList.remove('show');
    navbarToggle.classList.remove('open');
  });
});
