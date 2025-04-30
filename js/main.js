// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Scroll animations
const sections = document.querySelectorAll('.section');

function checkScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
}
// In your main.js, make sure this is present:




// Initialize scroll event
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

