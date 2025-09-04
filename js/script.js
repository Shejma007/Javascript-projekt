//index

// Smooth scroll kur klikohet butoni Explore More
document.getElementById('exploreBtn').addEventListener('click', () => {
  const infoSection = document.getElementById('info');
  infoSection.scrollIntoView({ behavior: 'smooth' });
});

// Ndryshon stilin e header-it kur scroll poshtë
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    header.style.boxShadow = '0 4px 15px rgba(108, 99, 255, 0.4)';
    header.style.backdropFilter = 'blur(10px)';
  } else {
    header.style.backgroundColor = 'white';
    header.style.boxShadow = '0 2px 8px rgba(108, 99, 255, 0.3)';
    header.style.backdropFilter = 'none';
  }
});

// Animacion me fade-in kur kartat hyjnë në viewport
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('card-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

cards.forEach(card => {
  observer.observe(card);
});

