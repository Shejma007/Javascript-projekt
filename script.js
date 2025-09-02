// Smooth scroll to info section
document.getElementById("exploreBtn").addEventListener("click", function() {
    document.getElementById("info").scrollIntoView({ behavior: "smooth" });
  });
  


// script.js
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');
  const closeBtn = document.getElementById('close');
  const galleryItems = document.querySelectorAll('.gallery-item img');

  function openModal(img) {
    modal.classList.add('active');
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalCaption.textContent = img.alt;
    modal.setAttribute('aria-hidden', 'false');
    modal.focus();
  }

  function closeModal() {
    modal.classList.remove('active');
    modalImg.src = '';
    modalImg.alt = '';
    modalCaption.textContent = '';
    modal.setAttribute('aria-hidden', 'true');
  }

  galleryItems.forEach((img) => {
    img.addEventListener('click', () => openModal(img));
    img.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(img);
      }
    });
  });

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation (HTML5 required attributes handle most)
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Basic email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Simulate sending message
    form.querySelector('button').disabled = true;
    form.querySelector('button').textContent = 'Sending...';

    setTimeout(() => {
      alert(`Thank you, ${name}! Your message has been sent.`);
      form.reset();
      form.querySelector('button').disabled = false;
      form.querySelector('button').textContent = 'Send';
    }, 1500);
  });

  // Add subtle floating animation to info cards on hover
  const cards = document.querySelectorAll('.info-card');
  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-15px) scale(1.05)';
      card.style.boxShadow = '0 25px 50px rgba(108, 160, 220, 0.4)';
      card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });
});

