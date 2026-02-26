// Sticky Navbar
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 14, 20, 0.95)';
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        nav.style.height = '60px';
    } else {
        nav.style.background = 'rgba(10, 14, 20, 0.8)';
        nav.style.boxShadow = 'none';
        nav.style.height = '70px';
    }
});

// Tab System for Rules
function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    const tabLinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Accordion Logic
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
        
        // Close others
        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});

// Simple Scroll Reveal Animation
const revealElements = document.querySelectorAll('.dept-card, .feature-card, .section-title');

const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = revealElements[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            revealElements[i].style.opacity = '1';
            revealElements[i].style.transform = 'translateY(0)';
        }
    }
};

// Initial setup for reveal animation
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Mobile Menu Toggle (Simplified)
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        alert('Menu mobile non implémenté dans cette version - Utilisez le menu desktop');
    });
}
