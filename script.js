// Get the menu button and navigation links from HTML
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

// When the menu button is clicked, open or close the mobile menu
menuBtn.addEventListener('click', () => {

  // Toggle the "active" class to show or hide the menu
  navLinks.classList.toggle('active');

  // Change the menu icon based on menu state
  if (navLinks.classList.contains('active')) {
    menuBtn.textContent = '✕'; // Show close icon when menu is open
  } else {
    menuBtn.textContent = '☰'; // Show menu icon when menu is closed
  }
});

// Get all navigation links inside the menu
const navLinksItems = navLinks.querySelectorAll('a');

// Close the mobile menu when any link is clicked
navLinksItems.forEach(link => {
  link.addEventListener('click', () => {

    // Remove active class so menu closes
    navLinks.classList.remove('active');

    // Reset menu icon back to hamburger
    menuBtn.textContent = '☰';
  });
});

// Enable smooth scrolling for internal page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {

    // Stop the browser from jumping instantly
    e.preventDefault();

    // Find the section that matches the clicked link
    const target = document.querySelector(this.getAttribute('href'));

    // Only scroll if the target section exists
    if (target) {

      // Height of fixed header so content is not hidden
      const headerOffset = 80;

      // Get position of the section relative to the viewport
      const elementPosition = target.getBoundingClientRect().top;

      // Calculate final scroll position
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // Scroll smoothly to the section
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Select the contact form element
const contactForm = document.getElementById('contact-form');

// Run this code when the form is submitted
contactForm.addEventListener('submit', (e) => {

  // Prevent page reload after submit
  e.preventDefault();

  // Get values entered by the user
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Check if all required fields are filled
  if (name && email && message) {

    // Show a friendly confirmation message
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon!`);

    // Clear all form inputs after successful submission
    contactForm.reset();
  }
});

// These options control when the animation starts while scrolling
const observerOptions = {
  threshold: 0.1, // Animation starts when 10% of section is visible
  rootMargin: '0px 0px -50px 0px'
};

// Create an observer to watch elements when they appear on screen
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    // Check if the section is visible in the viewport
    if (entry.isIntersecting) {

      // Make the section visible with animation
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Select all sections on the page
document.querySelectorAll('section').forEach(section => {

  // Hide sections initially before scrolling
  section.style.opacity = '0';

  // Move section slightly down for animation effect
  section.style.transform = 'translateY(20px)';

  // Add smooth transition effect
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

  // Start observing the section
  observer.observe(section);
});

// Select the personal section (previously hero section)
const personal = document.querySelector('.personal');

if (personal) {

  // Keep the personal section visible on page load
  personal.style.opacity = '1';
  personal.style.transform = 'translateY(0)';
}
