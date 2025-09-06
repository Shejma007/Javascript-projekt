// Animacionet e buta kur skrollon faqja (fade in elements)
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.aboutpage-container h2, .aboutpage-container p, .aboutpage-list li, .aboutpage-team');
  
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });