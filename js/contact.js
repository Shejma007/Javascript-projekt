document.addEventListener('DOMContentLoaded', () => {
    // Animacion kur skrollon në seksione
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.15
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    sections.forEach(section => {
      section.classList.add('hidden');
      observer.observe(section);
    });
  
    // Butoni me efekt klikimi
    const btn = document.querySelector('.contactpage-btn');
    btn.addEventListener('click', e => {
      e.preventDefault();
      btn.textContent = 'Sending...';
      btn.disabled = true;
      btn.style.cursor = 'wait';
  
      // mesazhi sending
      setTimeout(() => {
        btn.textContent = 'Message Sent!';
        btn.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
        btn.style.boxShadow = '0 8px 20px rgba(39, 174, 96, 0.6)';
      }, 1500);
    });
  });