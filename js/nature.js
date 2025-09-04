// Funksioni për të hapur modalin me imazhin e zgjedhur
function showNatureImage(src) {
    const modalImage = document.getElementById('natureModalImage');
    modalImage.src = src;

    // Përdor Bootstrap modal API për të hapur modalin
    const modal = new bootstrap.Modal(document.getElementById('natureImageModal'));
    modal.show();
}

// Animacion për shfaqjen e kartave kur skrollohet
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.animate-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});