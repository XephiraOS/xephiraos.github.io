/*
 * XephiraOS - Interactive UI & Kyant0 Physics Controller
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavbarScroll();
    initLiquidGlassTilt();
    initMobileMenu();
    initHeroPhoneInteractive();
    initPhoneViewSwitcher();
    initKyantBackdropControls();
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

/* ─── KYANT0 BACKDROP LIVE INTERACTION CONTROLLER ─── */
function initKyantBackdropControls() {
    const lens = document.getElementById('kyantFloatingLens');
    const radiusSlider = document.getElementById('sliderRadius');
    const blurSlider = document.getElementById('sliderBlur');
    const refractionSlider = document.getElementById('sliderRefraction');
    const amountSlider = document.getElementById('sliderAmount');
    const toggle = document.getElementById('demoToggle');

    if (radiusSlider && lens) {
        radiusSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            const label = document.getElementById('labelRadius');
            if (label) label.textContent = `${val} dp`;
            lens.style.borderRadius = `${val}px`;
        });
    }

    if (blurSlider && lens) {
        blurSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            const label = document.getElementById('labelBlur');
            if (label) label.textContent = `${val} dp`;
            lens.style.backdropFilter = `blur(${val}px) saturate(220%)`;
            lens.style.webkitBackdropFilter = `blur(${val}px) saturate(220%)`;
        });
    }

    if (refractionSlider && lens) {
        refractionSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            const label = document.getElementById('labelRefraction');
            if (label) label.textContent = `${val} dp`;
            lens.style.boxShadow = `
                inset 0 ${val * 0.15}px ${val * 0.2}px #ffffff,
                inset 0 -${val * 0.1}px ${val * 0.15}px rgba(0, 0, 0, 0.2),
                inset 0 0 ${val * 1.2}px rgba(255, 255, 255, 0.45),
                0 16px 36px rgba(0, 0, 0, 0.35)
            `;
        });
    }

    if (amountSlider && lens) {
        amountSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            const label = document.getElementById('labelAmount');
            if (label) label.textContent = `${val} dp`;
            // Simulate optical refraction magnification & tension
            const scale = 1 + (Math.abs(val) / 600);
            lens.style.transform = `scale(${scale})`;
        });
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('off');
        });
    }
}

/* ─── DAY / NIGHT (LIGHT / DARK) THEME SWITCHER ─── */
function initTheme() {
    // Default theme is 'light' (white background) as requested
    const savedTheme = localStorage.getItem('xephira-theme') || 'light';
    applyTheme(savedTheme);

    const toggleButtons = document.querySelectorAll('.theme-toggle-btn');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
            localStorage.setItem('xephira-theme', nextTheme);
        });
    });
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

/* ─── PHONE MOCKUP VIEW SWITCHER (KYANT0 CATALOG, SETTINGS HOME & ABOUT PHONE) ─── */
function initPhoneViewSwitcher() {
    const tabKyant0 = document.getElementById('phoneTabKyant0');
    const tabSettings = document.getElementById('phoneTabSettings');
    const tabAbout = document.getElementById('phoneTabAbout');
    const heroPhoneAboutCard = document.getElementById('heroPhoneAboutCard');
    const aboutBackBtn = document.getElementById('aboutBackBtn');

    if (tabKyant0) {
        tabKyant0.addEventListener('click', () => setPhoneView('kyant0'));
    }
    if (tabSettings) {
        tabSettings.addEventListener('click', () => setPhoneView('settings'));
    }
    if (tabAbout) {
        tabAbout.addEventListener('click', () => setPhoneView('about'));
    }
    if (heroPhoneAboutCard) {
        heroPhoneAboutCard.addEventListener('click', () => setPhoneView('about'));
    }
    if (aboutBackBtn) {
        aboutBackBtn.addEventListener('click', () => setPhoneView('settings'));
    }

    initKyantBottomTabs();
}

function setPhoneView(view) {
    const kyant0View = document.getElementById('phoneViewKyant0');
    const settingsView = document.getElementById('phoneViewSettings');
    const aboutView = document.getElementById('phoneViewAbout');
    
    const tabKyant0 = document.getElementById('phoneTabKyant0');
    const tabSettings = document.getElementById('phoneTabSettings');
    const tabAbout = document.getElementById('phoneTabAbout');

    // Hide all views first
    if (kyant0View) kyant0View.classList.remove('active');
    if (settingsView) settingsView.classList.remove('active');
    if (aboutView) aboutView.classList.remove('active');

    // Unselect all tabs
    if (tabKyant0) tabKyant0.classList.remove('active');
    if (tabSettings) tabSettings.classList.remove('active');
    if (tabAbout) tabAbout.classList.remove('active');

    if (view === 'settings') {
        if (settingsView) settingsView.classList.add('active');
        if (tabSettings) tabSettings.classList.add('active');
    } else if (view === 'about') {
        if (aboutView) aboutView.classList.add('active');
        if (tabAbout) tabAbout.classList.add('active');
    } else {
        // default: kyant0 catalog from README
        if (kyant0View) kyant0View.classList.add('active');
        if (tabKyant0) tabKyant0.classList.add('active');
    }
}

function initKyantBottomTabs() {
    const tabs = document.querySelectorAll('.kyant-bottom-tab-item');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const parent = tab.parentElement;
            if (parent) {
                parent.querySelectorAll('.kyant-bottom-tab-item').forEach(t => t.classList.remove('active'));
            }
            tab.classList.add('active');
        });
    });
}
