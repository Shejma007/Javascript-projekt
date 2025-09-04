//culture

// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Butoni "Learn More"
    const learnBtn = document.getElementById('cultureLearnBtn');
    if (learnBtn) {
      learnBtn.addEventListener('click', () => {
        window.open('https://en.wikipedia.org/wiki/Culture_of_Kosovo', '_blank');
      });
    }
  
    // Animacion fade-in kur skrollohet në elementët me klasën fade-in-on-scroll
    const faders = document.querySelectorAll('.fade-in-on-scroll');
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });
  
  
  
  
  
  
  