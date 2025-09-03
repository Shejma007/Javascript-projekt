// script.js

// Animate scroll to "info" section when clicking "Explore More" button
document.getElementById('exploreBtn').addEventListener('click', () => {
  const infoSection = document.getElementById('info');
  infoSection.scrollIntoView({ behavior: 'smooth' });
});

// Add subtle floating animation to hero image on mouse move
const heroImage = document.querySelector('.hero-image img');

heroImage.addEventListener('mousemove', (e) => {
  const rect = heroImage.getBoundingClientRect();
  const x = e.clientX - rect.left; // x position within the element
  const y = e.clientY - rect.top;  // y position within the element

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // Calculate rotation angles (max 10deg)
  const rotateX = ((y - centerY) / centerY) * 10;
  const rotateY = ((x - centerX) / centerX) * 10;

  heroImage.style.transform = `scale(1.05) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});

heroImage.addEventListener('mouseleave', () => {
  heroImage.style.transform = 'scale(1) rotateX(0) rotateY(0)';
});

// Animate nav links underline on page load for active link
window.addEventListener('load', () => {
  const activeLink = document.querySelector('nav ul li a.active');
  if (activeLink) {
    activeLink.style.setProperty('--underline-width', '100%');
  }
});


//culture//

// script.js

// Scroll smoothly to culture-info section when clicking "Learn More" button
document.getElementById('learnMoreBtn').addEventListener('click', () => {
  const infoSection = document.querySelector('.culture-info');
  infoSection.scrollIntoView({ behavior: 'smooth' });
});

// Animate nav links underline on page load for active link
window.addEventListener('load', () => {
  const activeLink = document.querySelector('nav ul li a.active');
  if (activeLink) {
    activeLink.style.setProperty('--underline-width', '100%');
  }
});

//nature






