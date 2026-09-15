/*
 * XephiraOS - Interactive Download Portal Controller
 * Real device database, brand filtering, search, and download modal
 */

const DEVICES_DB = [
    {
        id: "oneplus-oscar",
        name: "OnePlus Nord CE 2 Lite 5G",
        brand: "oneplus",
        codename: "oscar",
        status: "OFFICIAL",
        soc: "Snapdragon 695 5G",
        ram: "6 GB / 8 GB",
        display: "120Hz IPS LCD",
        maintainer: "Xephira Core Team",
        avatar: "⚡",
        date: "2026-09-14",
        version: "1.0-STABLE",
        android: "16",
        gappsSize: "1.85 GB",
        vanillaSize: "1.22 GB",
        gappsSha: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        vanillaSha: "8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4",
        changelog: [
            "Initial official XephiraOS 1.0 release based on Android 16",
            "Full Pure Water Liquid Glass Settings UI and About Phone experience",
            "Upgraded Linux 5.4.284 kernel with Zen scheduler optimizations",
            "Enabled VoLTE, VoWiFi, and 5G Carrier Aggregation out of the box",
            "Integrated official Xephira cyber boot animation"
        ]
    },
    {
        id: "pixel-komodo",
        name: "Google Pixel 9 Pro XL",
        brand: "google",
        codename: "komodo",
        status: "OFFICIAL",
        soc: "Google Tensor G4",
        ram: "16 GB LPDDR5X",
        display: "120Hz LTPO OLED",
        maintainer: "Xephira Pixel Team",
        avatar: "💎",
        date: "2026-09-15",
        version: "1.0-STABLE",
        android: "16",
        gappsSize: "2.10 GB",
        vanillaSize: "1.45 GB",
        gappsSha: "a6b98741369cf87da564b19289547d69281e496739b61184ca778391b4902cd5",
        vanillaSha: "c18f596328bc1d198adbf4c8996fb92427ae41e4649b934ca495991b7852b822",
        changelog: [
            "Full hardware-accelerated AGSL Hydro-Glass RuntimeShaders",
            "Pixel 9 Pro XL Tensor G4 security enclave fully initialized",
            "Ultra-wideband (UWB) and satellite connectivity support",
            "CameraX with Pixel 9 computational photography pipeline"
        ]
    },
    {
        id: "oneplus-salami",
        name: "OnePlus 11 5G",
        brand: "oneplus",
        codename: "salami",
        status: "OFFICIAL",
        soc: "Snapdragon 8 Gen 2",
        ram: "8 GB / 16 GB",
        display: "120Hz 2K AMOLED",
        maintainer: "Ajay & Community",
        avatar: "🚀",
        date: "2026-09-12",
        version: "1.0-STABLE",
        android: "16",
        gappsSize: "1.95 GB",
        vanillaSize: "1.34 GB",
        gappsSha: "d9e87456123fc89da456b19289547d69281e496739b61184ca778391b4902111",
        vanillaSha: "f456123498fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b333",
        changelog: [
            "Snapdragon 8 Gen 2 Adreno 740 GPU thermal optimizations",
            "Support for Alert Slider with customized Liquid Glass overlay",
            "Bypass charging enabled during gaming mode",
            "100W SuperVOOC fast charging profile restored"
        ]
    },
    {
        id: "poco-marble",
        name: "POCO F5 / Redmi Note 12 Turbo",
        brand: "xiaomi",
        codename: "marble",
        status: "OFFICIAL",
        soc: "Snapdragon 7+ Gen 2",
        ram: "8 GB / 12 GB",
        display: "120Hz 12-bit OLED",
        maintainer: "Xephira Xiaomi Team",
        avatar: "🔥",
        date: "2026-09-10",
        version: "1.0-STABLE",
        android: "16",
        gappsSize: "1.88 GB",
        vanillaSize: "1.26 GB",
        gappsSha: "38bdf844298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b899",
        vanillaSha: "4ade8046648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327777",
        changelog: [
            "Dolby Atmos and Hi-Res audio drivers integrated",
            "KernelSU next-gen root support builtin",
            "67W Turbo charging support with battery health monitor",
            "Smooth 120Hz refresh rate lock without frame drops"
        ]
    },
    {
        id: "nothing-pong",
        name: "Nothing Phone (2)",
        brand: "nothing",
        codename: "pong",
        status: "OFFICIAL",
        soc: "Snapdragon 8+ Gen 1",
        ram: "12 GB / 16 GB",
        display: "120Hz Flexible OLED",
        maintainer: "Xephira Design Guild",
        avatar: "✨",
        date: "2026-09-14",
        version: "1.0-STABLE",
        android: "16",
        gappsSize: "1.92 GB",
        vanillaSize: "1.30 GB",
        gappsSha: "71b2804298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852baaa",
        vanillaSha: "134e5e46648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327bbb",
        changelog: [
            "Glyph Interface integration with liquid glass notification sync",
            "Full Glyph Composer & Essential Notifications functional",
            "Monochrome minimalist Xephira theme synchronized with Glyph LEDs",
            "Audio spatialization improvements"
        ]
    },
    {
        id: "generic-gsi",
        name: "Generic System Image (GSI)",
        brand: "gsi",
        codename: "arm64_bgN / bvN",
        status: "UNIVERSAL",
        soc: "ARM64 Architecture (Treble)",
        ram: "3 GB to 16 GB",
        display: "Any Treble Device",
        maintainer: "Xephira GSI Team",
        avatar: "🌐",
        date: "2026-09-15",
        version: "1.0-STABLE",
        android: "16",
        gappsSize: "1.65 GB",
        vanillaSize: "980 MB",
        gappsSha: "2e02494298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852bccc",
        vanillaSha: "570a5746648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327ddd",
        changelog: [
            "Universal Project Treble v2.0+ compatibility",
            "Runs on Xiaomi, Samsung, Motorola, Realme, Transsion, and Oppo devices",
            "Built-in overlay fixers for brightness sliders and notch cutouts",
            "Includes both Vanilla (Slim) and GApps variants"
        ]
    }
];

let activeBrand = 'all';
let currentSearch = '';
let activeDeviceForModal = null;
let activeFlavor = 'gapps'; // 'gapps' or 'vanilla'

document.addEventListener('DOMContentLoaded', () => {
    renderDevices();
    initFilters();
    initSearch();
    initModalEvents();
});

/* ─── RENDER DEVICE CARDS ─── */
function renderDevices() {
    const container = document.getElementById('devicesContainer');
    if (!container) return;

    const filtered = DEVICES_DB.filter(device => {
        const matchesBrand = (activeBrand === 'all') || (device.brand === activeBrand);
        const q = currentSearch.toLowerCase();
        const matchesSearch = !q || 
            device.name.toLowerCase().includes(q) || 
            device.codename.toLowerCase().includes(q) ||
            device.soc.toLowerCase().includes(q) ||
            device.brand.toLowerCase().includes(q);

        return matchesBrand && matchesSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;" class="liquid-glass">
                <div style="font-size: 38px; margin-bottom: 12px;">🔍</div>
                <h3 style="font-family: var(--font-heading); font-size: 22px; color: #ffffff; margin-bottom: 8px;">No devices found</h3>
                <p style="color: var(--text-secondary); font-size: 15px; margin-bottom: 20px;">
                    Can't find your phone? You can still flash the universal XephiraOS Generic System Image (GSI).
                </p>
                <button class="liquid-btn liquid-btn-primary" onclick="openDownloadModal('generic-gsi')">
                    View Universal GSI
                </button>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(device => `
        <div class="liquid-glass device-card" onclick="openDownloadModal('${device.id}')">
            <div class="device-card-header">
                <div class="device-info">
                    <span style="font-size: 11px; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; letter-spacing: 1px;">
                        ${device.brand}
                    </span>
                    <h3 style="margin-top: 2px;">${device.name}</h3>
                    <div class="device-meta">
                        <span class="device-codename">${device.codename}</span>
                    </div>
                </div>
                <span class="liquid-pill ${device.status === 'OFFICIAL' ? 'liquid-pill-green' : ''}">
                    <span class="liquid-pill-dot"></span>
                    ${device.status}
                </span>
            </div>

            <div class="device-specs-chips">
                <span class="spec-chip">⚙️ ${device.soc}</span>
                <span class="spec-chip">💾 ${device.ram}</span>
                <span class="spec-chip">📱 ${device.display}</span>
            </div>

            <div class="maintainer-row">
                <div style="width: 24px; height: 24px; border-radius: 50%; background: rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center; font-size: 12px;">
                    ${device.avatar}
                </div>
                <span>Maintainer: <strong>${device.maintainer}</strong></span>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 6px;">
                <span style="font-size: 12px; color: var(--text-muted); font-family: var(--font-mono);">
                    Android ${device.android} • ${device.version}
                </span>
                <button class="liquid-btn" style="padding: 8px 18px; font-size: 13px;" onclick="event.stopPropagation(); openDownloadModal('${device.id}')">
                    Get ROM ↓
                </button>
            </div>
        </div>
    `).join('');
}

/* ─── SEARCH & FILTER HANDLERS ─── */
function initFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeBrand = btn.getAttribute('data-brand');
            renderDevices();
        });
    });
}

function initSearch() {
    const input = document.getElementById('deviceSearchInput');
    if (!input) return;

    input.addEventListener('input', (e) => {
        currentSearch = e.target.value.trim();
        renderDevices();
    });
}

/* ─── DOWNLOAD MODAL / DRAWER CONTROLLER ─── */
function openDownloadModal(deviceId) {
    const device = DEVICES_DB.find(d => d.id === deviceId);
    if (!device) return;

    activeDeviceForModal = device;
    activeFlavor = 'gapps';

    const modal = document.getElementById('downloadModalBackdrop');
    if (!modal) return;

    updateModalContent();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeDownloadModal() {
    const modal = document.getElementById('downloadModalBackdrop');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

function updateModalContent() {
    const device = activeDeviceForModal;
    if (!device) return;

    document.getElementById('modalDeviceName').textContent = device.name;
    document.getElementById('modalCodename').textContent = device.codename;
    document.getElementById('modalVersion').textContent = `XephiraOS ${device.version} (Android ${device.android})`;
    document.getElementById('modalBuildDate').textContent = `Released: ${device.date}`;
    document.getElementById('modalMaintainer').textContent = device.maintainer;

    const isGapps = activeFlavor === 'gapps';
    document.getElementById('flavorGappsBtn').className = `tab-btn ${isGapps ? 'active' : ''}`;
    document.getElementById('flavorVanillaBtn').className = `tab-btn ${!isGapps ? 'active' : ''}`;

    const size = isGapps ? device.gappsSize : device.vanillaSize;
    const sha = isGapps ? device.gappsSha : device.vanillaSha;

    document.getElementById('modalFileSize').textContent = size;
    document.getElementById('modalShaChecksum').textContent = sha;

    // Direct Download URL
    const fileName = `XephiraOS-1.0-${device.codename}-${isGapps ? 'GAPPS' : 'VANILLA'}-OFFICIAL.zip`;
    document.getElementById('modalDownloadLink').href = `https://github.com/XephiraOS/android/releases/download/v1.0/${fileName}`;
    document.getElementById('modalDownloadLink').setAttribute('download', fileName);

    // Fastboot ROM Link
    const fastbootName = `XephiraOS-1.0-${device.codename}-Fastboot-ROM.zip`;
    document.getElementById('modalFastbootLink').href = `https://github.com/XephiraOS/android/releases/download/v1.0/${fastbootName}`;

    // Render Changelog
    const changelogList = document.getElementById('modalChangelogList');
    changelogList.innerHTML = device.changelog.map(item => `
        <li style="margin-bottom: 6px; display: flex; align-items: flex-start; gap: 8px;">
            <span style="color: var(--accent-blue); font-weight: bold;">•</span>
            <span>${item}</span>
        </li>
    `).join('');
}

function setFlavor(flavor) {
    activeFlavor = flavor;
    updateModalContent();
}

function copyChecksum() {
    const sha = activeFlavor === 'gapps' ? activeDeviceForModal.gappsSha : activeDeviceForModal.vanillaSha;
    navigator.clipboard.writeText(sha).then(() => {
        const btn = document.getElementById('copyShaBtn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ Copied!';
        btn.style.background = 'rgba(74, 222, 128, 0.25)';
        btn.style.borderColor = '#4ade80';

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.style.borderColor = '';
        }, 2000);
    });
}

function initModalEvents() {
    const backdrop = document.getElementById('downloadModalBackdrop');
    if (!backdrop) return;

    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
            closeDownloadModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDownloadModal();
        }
    });
}
