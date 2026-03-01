// ========================================
// Menu burger pour mobile
// ========================================
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu mobile
burger.addEventListener('click', (e) => {
    e.stopPropagation();
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Bloquer le scroll du body quand le menu est ouvert
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Fermer le menu quand on clique sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Fermer le menu en cliquant en dehors
document.addEventListener('click', (e) => {
    const isClickInsideNav = navMenu.contains(e.target);
    const isClickOnBurger = burger.contains(e.target);
    
    if (!isClickInsideNav && !isClickOnBurger && navMenu.classList.contains('active')) {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Fermer le menu lors du redimensionnement de la fenêtre
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 768) {
            burger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }, 250);
});

// ========================================
// Navbar au scroll
// ========================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Ajouter une ombre à la navbar au scroll
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// Animations au scroll (Intersection Observer)
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer toutes les sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// ========================================
// Animation des barres de compétences
// ========================================
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
            skillObserver.unobserve(bar);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ========================================
// Animation des cartes au survol
// ========================================
const cards = document.querySelectorAll('.skill-category, .project-card, .contact-item, .info-card, .stat-item');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ========================================
// Smooth scroll pour les liens d'ancrage
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // 80px pour la hauteur de la navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Animation du texte dans la fenêtre de code
// ========================================
const codeText = document.querySelector('.window-body code');
if (codeText) {
    const originalText = codeText.innerHTML;
    let charIndex = 0;
    
    // Effet de typing au chargement de la page
    setTimeout(() => {
        codeText.innerHTML = '';
        
        function typeWriter() {
            if (charIndex < originalText.length) {
                codeText.innerHTML += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 20);
            }
        }
        
        // Démarrer l'animation après un court délai
        setTimeout(typeWriter, 500);
    }, 1000);
}

// ========================================
// Détection du lien actif dans la navigation
// ========================================
const navigationLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navigationLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// ========================================
// Animation de compteur pour les statistiques
// ========================================
const statNumbers = document.querySelectorAll('.stat-number');

const countUp = (element, target) => {
    const data = parseInt(target.replace(/\D/g, ''));
    const suffix = target.replace(/[0-9]/g, '');
    let current = 0;
    const increment = data / 50;
    const duration = 1500;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= data) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, stepTime);
};

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target.textContent;
            countUp(entry.target, target);
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statObserver.observe(stat);
});

// ========================================
// Effet parallaxe léger sur le hero (uniquement desktop)
// ========================================
const heroSection = document.querySelector('.hero');

if (window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (heroSection && scrolled < window.innerHeight) {
            heroSection.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });
}

// ========================================
// Console log stylisé (Easter egg développeur)
// ========================================
console.log(
    '%c👨‍💻 Développé par Mahery Ramanamiantra',
    'color: #00ff88; font-size: 16px; font-weight: bold; padding: 10px;'
);
console.log(
    '%c💼 Portfolio 2024',
    'color: #00ff88; font-size: 12px; padding: 5px;'
);
console.log(
    '%c📧 ramanamiantramahery@gmail.com',
    'color: #a1a1aa; font-size: 12px; padding: 5px;'
);
