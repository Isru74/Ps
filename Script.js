// Smooth scroll to the About Me section
document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.getElementById('about');

  // Automatically scroll to the About Me section on page load
  setTimeout(() => {
    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 1000); // Delay to allow the page to load

  // Add event listeners to portfolio links
  const portfolioLinks = document.querySelectorAll('.about a');
  portfolioLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default navigation
      const url = link.getAttribute('href');
      window.open(url, '_blank'); // Open the portfolio in a new tab
    });
  });
});
