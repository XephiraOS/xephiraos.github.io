/*
 * XephiraOS - Hydro-Glass Pure Water Interactive Controller
 * Fluid water physics, dynamic ripples, light/night mode, and phone switcher
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavbarScroll();
    initLiquidGlassTilt();
    initMobileMenu();
    initHeroPhoneInteractive();
    initPhoneViewSwitcher();
    initWaterRippleEngine();
    initWaterLabControls();
});

/* ─── STICKY NAVBAR BLUR & SCROLL ENHANCEMENT ─── */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.style.boxShadow = '0 16px 36px -10px rgba(12, 74, 110, 0.18), inset 0 1.5px 2px #ffffff';
        } else {
            navbar.style.boxShadow = '0 10px 30px -8px rgba(15, 23, 42, 0.08), inset 0 1.5px 2px #ffffff';
        }
    });
}

/* ─── PURE WATER SPECULAR TILT & MOUSE LIGHT TRACKING ─── */
function initLiquidGlassTilt() {
    const cards = document.querySelectorAll('.liquid-glass:not(.phone-mockup):not(.navbar)');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -3.5;
            const rotateY = ((x - centerX) / centerX) * 3.5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });
}

/* ─── HERO PHONE 3D INTERACTION ─── */
function initHeroPhoneInteractive() {
    const phone = document.getElementById('heroPhone');
    if (!phone) return;

    phone.addEventListener('mousemove', (e) => {
        const rect = phone.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

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
            navLinks.style.background = 'rgba(255, 255, 255, 0.95)';
            navLinks.style.padding = '24px';
            navLinks.style.borderRadius = '24px';
            navLinks.style.border = '1px solid rgba(255, 255, 255, 0.8)';
            navLinks.style.boxShadow = '0 20px 40px rgba(12, 74, 110, 0.15)';
        }
    });
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

/* ─── PHONE MOCKUP VIEW SWITCHER (WATER OS, SETTINGS HOME & ABOUT PHONE) ─── */
function initPhoneViewSwitcher() {
    const tabWater = document.getElementById('phoneTabWater');
    const tabSettings = document.getElementById('phoneTabSettings');
    const tabAbout = document.getElementById('phoneTabAbout');
    const heroPhoneAboutCard = document.getElementById('heroPhoneAboutCard');
    const aboutBackBtn = document.getElementById('aboutBackBtn');

    if (tabWater) {
        tabWater.addEventListener('click', () => setPhoneView('water'));
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

    // Phone Quick Toggles
    const toggles = ['phoneWaterWifi', 'phoneWaterBt', 'phoneWaterTorch', 'phoneWaterDnd'];
    toggles.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                el.classList.toggle('active');
            });
        }
    });
}

function setPhoneView(view) {
    const waterView = document.getElementById('phoneViewWater');
    const settingsView = document.getElementById('phoneViewSettings');
    const aboutView = document.getElementById('phoneViewAbout');
    
    const tabWater = document.getElementById('phoneTabWater');
    const tabSettings = document.getElementById('phoneTabSettings');
    const tabAbout = document.getElementById('phoneTabAbout');

    // Hide all views first
    if (waterView) waterView.classList.remove('active');
    if (settingsView) settingsView.classList.remove('active');
    if (aboutView) aboutView.classList.remove('active');

    // Unselect all tabs
    if (tabWater) tabWater.classList.remove('active');
    if (tabSettings) tabSettings.classList.remove('active');
    if (tabAbout) tabAbout.classList.remove('active');

    if (view === 'settings') {
        if (settingsView) settingsView.classList.add('active');
        if (tabSettings) tabSettings.classList.add('active');
    } else if (view === 'about') {
        if (aboutView) aboutView.classList.add('active');
        if (tabAbout) tabAbout.classList.add('active');
    } else {
        // default: pure water OS screen
        if (waterView) waterView.classList.add('active');
        if (tabWater) tabWater.classList.add('active');
    }
}

/* ─── DYNAMIC CONCENTRIC WATER RIPPLE ENGINE ─── */
function initWaterRippleEngine() {
    // 1. Water Ripple Pool in Section 2
    const pool = document.getElementById('waterPlaygroundPool');
    if (pool) {
        pool.addEventListener('click', (e) => spawnWaterRipple(e, pool));
    }

    // 2. Phone Screen ripple on touch/tap
    const phoneScreen = document.querySelector('.mockup-screen-container');
    if (phoneScreen) {
        phoneScreen.addEventListener('click', (e) => spawnWaterRipple(e, phoneScreen));
    }

    // 3. Liquid Buttons and Pills
    const interactiveElements = document.querySelectorAll('.liquid-btn, .water-droplet, .liquid-pill');
    interactiveElements.forEach(el => {
        el.addEventListener('click', (e) => spawnWaterRipple(e, el));
    });
}

function spawnWaterRipple(e, container) {
    const rect = container.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'water-ripple';
    
    const size = Math.max(rect.width, rect.height) * 1.2;
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    
    container.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 750);
}

/* ─── WATER LAB INTERACTIVE CONTROLS (SWITCH & FLUID WAVE METER) ─── */
function initWaterLabControls() {
    // Water Capsule Switch
    const switchEl = document.getElementById('waterShowcaseSwitch');
    if (switchEl) {
        switchEl.addEventListener('click', () => {
            switchEl.classList.toggle('off');
        });
    }

    // Fluid Level Meter
    const levelBtns = document.querySelectorAll('.water-level-btn');
    const meterBar = document.getElementById('waterMeterBar');
    const meterVal = document.getElementById('waterMeterVal');

    levelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lvl = btn.getAttribute('data-level');
            if (!lvl || !meterBar || !meterVal) return;

            // Highlight selected button
            levelBtns.forEach(b => {
                b.style.background = '';
                b.style.color = '';
            });
            btn.style.background = '#0284c7';
            btn.style.color = '#ffffff';

            // Animate fluid wave meter
            meterBar.style.width = `${lvl}%`;
            meterVal.textContent = `${lvl}%`;
        });
    });
}
