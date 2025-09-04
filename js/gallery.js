// Animacionet e sekcioneve kur skrollohet - fade in me delay
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.naturepage-section');
  
    const observerOptions = {
      threshold: 0.15
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    sections.forEach(section => {
      section.style.animationPlayState = 'paused';
      observer.observe(section);
    });
  });