// Script de navigation avec défilement fluide
document.addEventListener('DOMContentLoaded', () => {
    console.log('Site Tech-Naj chargé avec succès.');

    const navLinks = document.querySelectorAll('.navbar ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
// Animation d'apparition lors du défilement
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    elements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add("visible");
        }
    });
});
