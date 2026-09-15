/*
 * XephiraOS - Interactive UI & Kyant0 Physics Controller
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavbarScroll();
    initLiquidGlassTilt();
    initMobileMenu();
    initHeroPhoneInteractive();
});

/* ─── STICKY NAVBAR BLUR ENHANCEMENT ─── */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.style.background = 'linear-gradient(175deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.05) 100%)';
            navbar.style.borderColor = 'rgba(255, 255, 255, 0.32)';
            navbar.style.boxShadow = '0 16px 36px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.2)';
        } else {
            navbar.style.background = 'linear-gradient(175deg, var(--glass-bg-top) 0%, var(--glass-bg-mid) 40%, var(--glass-bg-bottom) 100%)';
            navbar.style.borderColor = 'var(--glass-border-outer)';
            navbar.style.boxShadow = 'var(--glass-shadow)';
        }
    });
}

/* ─── KYANT0 INTERACTIVE GLASS TILT & MOUSE LIGHT TRACKING ─── */
function initLiquidGlassTilt() {
    const cards = document.querySelectorAll('.liquid-glass:not(.phone-mockup):not(.navbar)');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -4;
            const rotateY = ((x - centerX) / centerX) * 4;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            
            // Dynamic specular highlight hit follows cursor position
            card.style.backgroundImage = `
                radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
                linear-gradient(175deg, var(--glass-bg-top) 0%, var(--glass-bg-mid) 40%, var(--glass-bg-bottom) 100%)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
            card.style.backgroundImage = 'linear-gradient(175deg, var(--glass-bg-top) 0%, var(--glass-bg-mid) 40%, var(--glass-bg-bottom) 100%)';
        });
    });
}

/* ─── HERO PHONE DEMO INTERACTION ─── */
function initHeroPhoneInteractive() {
    const phone = document.getElementById('heroPhone');
    if (!phone) return;

    phone.addEventListener('mousemove', (e) => {
        const rect = phone.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        phone.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    phone.addEventListener('mouseleave', () => {
        phone.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
    });
}

/* ─── MOBILE MENU TOGGLE ─── */
function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (!btn || !navLinks) return;

    btn.addEventListener('click', () => {
        const isOpen = navLinks.style.display === 'flex';
        if (isOpen) {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '20px';
            navLinks.style.right = '20px';
            navLinks.style.background = 'rgba(9, 13, 22, 0.95)';
            navLinks.style.padding = '24px';
            navLinks.style.borderRadius = '24px';
            navLinks.style.border = '1px solid rgba(255, 255, 255, 0.2)';
            navLinks.style.boxShadow = '0 20px 40px rgba(0,0,0,0.8)';
        }
    });
}
