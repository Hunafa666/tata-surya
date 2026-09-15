/* ==========================================================================
   TATA SURYA KITA — Simulasi 3D Interaktif
   Media Pembelajaran Sains Kelas VI SD/MI
   ========================================================================== */

(function () {
  'use strict';

  // ══════════════════════════════════════════════════════════════════════════
  // 1. DATA PLANET & BENDA LANGIT
  // ══════════════════════════════════════════════════════════════════════════

  const PLANETS = [
    {
      name: 'Merkurius', icon: '☿', nameEn: 'Mercury',
      radius: 0.38, distance: 10, color: 0xB5A998,
      textureType: 'mercury',
      rotationPeriod: 58.6,    // hari Bumi
      revolutionPeriod: 88,    // hari Bumi
      tilt: 0.034,             // radian (~2°)
      eccentricity: 0.205,
      category: 'inner',
      hasRing: false,
      moons: [],
      description: 'Merkurius adalah planet terkecil dan terdekat dari Matahari. Permukaannya penuh kawah mirip Bulan. Suhu siangnya sangat panas, tapi malamnya sangat dingin!',
      facts: {
        'Jarak ke Matahari': '57,9 juta km',
        'Diameter': '4.879 km',
        'Suhu': '-180°C s/d 430°C',
        'Lama 1 Hari': '59 hari Bumi',
        'Lama 1 Tahun': '88 hari Bumi',
        'Satelit Alami': '0'
      }
    },
    {
      name: 'Venus', icon: '♀', nameEn: 'Venus',
      radius: 0.72, distance: 16, color: 0xE8CDA0,
      textureType: 'venus',
      rotationPeriod: 243,
      revolutionPeriod: 225,
      tilt: 3.096, // 177.4° (retrograde)
      eccentricity: 0.007,
      category: 'inner',
      hasRing: false,
      moons: [],
      description: 'Venus adalah planet terpanas karena efek rumah kaca yang sangat kuat. Venus sering disebut "Bintang Kejora" karena terlihat terang di langit pagi dan sore hari.',
      facts: {
        'Jarak ke Matahari': '108,2 juta km',
        'Diameter': '12.104 km',
        'Suhu': '462°C (rata-rata)',
        'Lama 1 Hari': '243 hari Bumi',
        'Lama 1 Tahun': '225 hari Bumi',
        'Satelit Alami': '0'
      }
    },
    {
      name: 'Bumi', icon: '🌍', nameEn: 'Earth',
      radius: 0.76, distance: 22, color: 0x4A90D9,
      textureType: 'earth',
      rotationPeriod: 1,       // 1 hari = 24 jam
      revolutionPeriod: 365.25,
      tilt: 0.409,             // 23.44°
      eccentricity: 0.017,
      category: 'inner',
      hasRing: false,
      moons: [
        {
          name: 'Bulan', icon: '🌙', radius: 0.2, distance: 2.5, color: 0xCCCCCC,
          revolutionPeriod: 27.3, tidalLocked: true,
          description: 'Bulan adalah satu-satunya satelit alami Bumi. Periode rotasi dan revolusinya sama (27,3 hari), sehingga wajah Bulan yang menghadap Bumi selalu sama.'
        }
      ],
      description: 'Bumi adalah planet ketiga dari Matahari dan satu-satunya yang diketahui memiliki kehidupan. Sekitar 71% permukaannya tertutup air. Bumi berputar pada porosnya setiap 24 jam (menyebabkan siang dan malam) dan mengelilingi Matahari dalam 365¼ hari (1 tahun).',
      facts: {
        'Jarak ke Matahari': '149,6 juta km',
        'Diameter': '12.756 km',
        'Suhu': '-89°C s/d 56°C',
        'Lama 1 Hari': '24 jam',
        'Lama 1 Tahun': '365,25 hari',
        'Satelit Alami': '1 (Bulan)'
      }
    },
    {
      name: 'Mars', icon: '🔴', nameEn: 'Mars',
      radius: 0.52, distance: 28, color: 0xC1440E,
      textureType: 'mars',
      rotationPeriod: 1.03,
      revolutionPeriod: 687,
      tilt: 0.44,
      eccentricity: 0.093,
      category: 'inner',
      hasRing: false,
      moons: [
        { name: 'Phobos', icon: '🪨', radius: 0.07, distance: 1.4, color: 0x8B7355, revolutionPeriod: 0.32, description: 'Phobos adalah satelit terbesar Mars, bentuknya tidak bulat seperti kentang.' },
        { name: 'Deimos', icon: '🪨', radius: 0.05, distance: 2.0, color: 0x9B8B6B, revolutionPeriod: 1.26, description: 'Deimos adalah satelit terkecil Mars, sangat kecil dan berbentuk tidak beraturan.' }
      ],
      description: 'Mars disebut "Planet Merah" karena permukaannya kaya oksida besi (karat). Mars memiliki gunung tertinggi di tata surya: Olympus Mons, setinggi 21,9 km!',
      facts: {
        'Jarak ke Matahari': '227,9 juta km',
        'Diameter': '6.792 km',
        'Suhu': '-140°C s/d 20°C',
        'Lama 1 Hari': '24,6 jam',
        'Lama 1 Tahun': '687 hari Bumi',
        'Satelit Alami': '2 (Phobos, Deimos)'
      }
    },
    {
      name: 'Jupiter', icon: '🟠', nameEn: 'Jupiter',
      radius: 2.8, distance: 42, color: 0xC88B3A,
      textureType: 'jupiter',
      rotationPeriod: 0.41,
      revolutionPeriod: 4332,
      tilt: 0.054,
      eccentricity: 0.049,
      category: 'outer',
      hasRing: true, ringColor: 0x8B7355, ringInner: 3.2, ringOuter: 3.8, ringOpacity: 0.08,
      moons: [
        { name: 'Ganymede', icon: '🌕', radius: 0.22, distance: 5.5, color: 0xC0C0C0, revolutionPeriod: 7.15, description: 'Ganymede adalah satelit terbesar di tata surya, bahkan lebih besar dari Merkurius!' },
        { name: 'Io', icon: '🟡', radius: 0.15, distance: 4.0, color: 0xE8C840, revolutionPeriod: 1.77, description: 'Io adalah benda paling aktif secara vulkanik di tata surya.' },
        { name: 'Europa', icon: '⚪', radius: 0.14, distance: 4.7, color: 0xF0E8D0, revolutionPeriod: 3.55, description: 'Europa memiliki lapisan es yang di bawahnya mungkin terdapat lautan air.' },
        { name: 'Callisto', icon: '🟤', radius: 0.2, distance: 6.5, color: 0x8B7355, revolutionPeriod: 16.69, description: 'Callisto adalah satelit Galilean terjauh dari Jupiter.' }
      ],
      description: 'Jupiter adalah planet terbesar di tata surya — lebih dari 1.300 Bumi bisa muat di dalamnya! Ia memiliki "Bintik Merah Besar", yaitu badai raksasa yang sudah berlangsung ratusan tahun.',
      facts: {
        'Jarak ke Matahari': '778,5 juta km',
        'Diameter': '142.984 km',
        'Suhu': '-145°C',
        'Lama 1 Hari': '9,9 jam',
        'Lama 1 Tahun': '11,86 tahun Bumi',
        'Satelit Alami': '95+'
      }
    },
    {
      name: 'Saturnus', icon: '🪐', nameEn: 'Saturn',
      radius: 2.3, distance: 56, color: 0xE8D5A3,
      textureType: 'saturn',
      rotationPeriod: 0.44,
      revolutionPeriod: 10759,
      tilt: 0.466,
      eccentricity: 0.057,
      category: 'outer',
      hasRing: true, ringColor: 0xD4A574, ringInner: 3.0, ringOuter: 5.0, ringOpacity: 0.55,
      moons: [
        { name: 'Titan', icon: '🟠', radius: 0.22, distance: 6.0, color: 0xDAA520, revolutionPeriod: 15.95, description: 'Titan adalah satu-satunya satelit yang memiliki atmosfer tebal dan danau cairan di permukaannya.' },
        { name: 'Enceladus', icon: '⚪', radius: 0.09, distance: 4.5, color: 0xF5F5F5, revolutionPeriod: 1.37, description: 'Enceladus menyemburkan air es dari permukaannya ke angkasa.' }
      ],
      description: 'Saturnus terkenal dengan cincin indahnya yang terbuat dari miliaran potongan es dan batuan. Meskipun sangat besar, Saturnus begitu ringan sehingga bisa mengapung di air!',
      facts: {
        'Jarak ke Matahari': '1.434 juta km',
        'Diameter': '120.536 km',
        'Suhu': '-178°C',
        'Lama 1 Hari': '10,7 jam',
        'Lama 1 Tahun': '29,46 tahun Bumi',
        'Satelit Alami': '146+'
      }
    },
    {
      name: 'Uranus', icon: '🔵', nameEn: 'Uranus',
      radius: 1.4, distance: 70, color: 0xACE5EE,
      textureType: 'uranus',
      rotationPeriod: 0.72,
      revolutionPeriod: 30687,
      tilt: 1.706, // 97.77°
      eccentricity: 0.046,
      category: 'outer',
      hasRing: true, ringColor: 0x87CEEB, ringInner: 1.8, ringOuter: 2.6, ringOpacity: 0.12,
      moons: [
        { name: 'Miranda', icon: '⚪', radius: 0.08, distance: 3.0, color: 0xD3D3D3, revolutionPeriod: 1.41, description: 'Miranda memiliki permukaan paling bervariasi di tata surya.' },
        { name: 'Titania', icon: '⚪', radius: 0.12, distance: 3.8, color: 0xC0C0C0, revolutionPeriod: 8.71, description: 'Titania adalah satelit terbesar Uranus.' }
      ],
      description: 'Uranus unik karena berputar miring hampir 90° — seolah-olah "berguling" dalam orbitnya! Warna birunya berasal dari gas metana di atmosfernya.',
      facts: {
        'Jarak ke Matahari': '2.871 juta km',
        'Diameter': '51.118 km',
        'Suhu': '-224°C',
        'Lama 1 Hari': '17,2 jam',
        'Lama 1 Tahun': '84 tahun Bumi',
        'Satelit Alami': '28+'
      }
    },
    {
      name: 'Neptunus', icon: '🔷', nameEn: 'Neptune',
      radius: 1.3, distance: 84, color: 0x3F54BE,
      textureType: 'neptune',
      rotationPeriod: 0.67,
      revolutionPeriod: 60190,
      tilt: 0.494,
      eccentricity: 0.011,
      category: 'outer',
      hasRing: true, ringColor: 0x4169E1, ringInner: 1.7, ringOuter: 2.4, ringOpacity: 0.08,
      moons: [
        { name: 'Triton', icon: '🔵', radius: 0.15, distance: 3.5, color: 0xADD8E6, revolutionPeriod: 5.88, description: 'Triton adalah satu-satunya satelit besar yang bergerak berlawanan arah orbit planetnya.' }
      ],
      description: 'Neptunus adalah planet terjauh dari Matahari. Ia memiliki angin terkencang di tata surya, mencapai 2.100 km/jam! Warna birunya lebih tua dari Uranus.',
      facts: {
        'Jarak ke Matahari': '4.495 juta km',
        'Diameter': '49.528 km',
        'Suhu': '-218°C',
        'Lama 1 Hari': '16,1 jam',
        'Lama 1 Tahun': '164,8 tahun Bumi',
        'Satelit Alami': '16+'
      }
    }
  ];

  const ARTIFICIAL_SATS = [
    {
      name: 'Satelit Palapa', icon: '🛰️', distance: 3.5, speed: 0.025, color: 0xFFD700,
      orbitTilt: 0.1,
      description: 'Satelit komunikasi Indonesia yang pertama kali diluncurkan tahun 1976. Digunakan untuk telekomunikasi, penyiaran TV, dan telepon antar pulau di seluruh Indonesia.'
    },
    {
      name: 'Satria-1', icon: '🛰️', distance: 4.2, speed: 0.02, color: 0xFF6347,
      orbitTilt: 0.15,
      description: 'Satelit internet broadband terbesar di Asia Pasifik milik Indonesia, diluncurkan untuk menyediakan akses internet di 150.000+ titik layanan publik termasuk sekolah dan puskesmas di daerah terpencil.'
    },
    {
      name: 'ISS', icon: '🛸', distance: 2.8, speed: 0.06, color: 0x87CEEB,
      orbitTilt: 0.4,
      description: 'Stasiun Luar Angkasa Internasional (International Space Station) adalah laboratorium terbesar di luar angkasa. Astronaut dari berbagai negara tinggal dan melakukan penelitian di sini.'
    }
  ];

  const CATEGORY_CONTENT = {
    planet: `
      <h3>🪐 Apa itu Planet?</h3>
      <p><strong>Planet</strong> adalah benda langit yang sangat besar yang <span class="hl">mengelilingi Matahari</span> secara langsung pada lintasan tetap yang disebut <strong>orbit</strong>.</p>
      <p>Syarat sebuah benda disebut planet:</p>
      <ul>
        <li>Mengorbit (mengelilingi) Matahari</li>
        <li>Bentuknya hampir bulat karena gravitasinya sendiri</li>
        <li>Sudah "membersihkan" daerah di sekitar orbitnya</li>
      </ul>
      <p>Tata surya kita memiliki <span class="hl">8 planet</span> yang terbagi menjadi dua kelompok:</p>
      <p>🪨 <strong>Planet Dalam</strong> (dekat Matahari, berbatu padat, sedikit/tanpa satelit):</p>
      <ul>
        <li>☿ Merkurius — ♀ Venus — 🌍 Bumi — 🔴 Mars</li>
      </ul>
      <p>💨 <strong>Planet Luar</strong> (jauh dari Matahari, raksasa gas/es, banyak satelit & cincin):</p>
      <ul>
        <li>🟠 Jupiter — 🪐 Saturnus — 🔵 Uranus — 🔷 Neptunus</li>
      </ul>
    `,
    'sat-alami': `
      <h3>🌙 Apa itu Satelit Alami?</h3>
      <p><strong>Satelit alami</strong> adalah benda langit yang <span class="hl">mengelilingi planet</span> (bukan Matahari langsung). Satelit alami juga disebut <strong>"bulan"</strong>.</p>
      <p>Contoh satelit alami di tata surya kita:</p>
      <ul>
        <li>🌙 <strong>Bulan</strong> — satelit alami Bumi. Periode rotasi dan revolusinya sama (27,3 hari), sehingga wajah yang menghadap Bumi selalu sama!</li>
        <li>🪨 <strong>Phobos & Deimos</strong> — dua satelit kecil Mars yang berbentuk tidak beraturan</li>
        <li>🌕 <strong>Ganymede</strong> — satelit terbesar Jupiter, bahkan lebih besar dari planet Merkurius!</li>
        <li>🟠 <strong>Titan</strong> — satelit Saturnus yang memiliki atmosfer tebal dan danau cairan</li>
        <li>⚪ <strong>Europa</strong> — satelit Jupiter yang mungkin memiliki lautan di bawah lapisan esnya</li>
      </ul>
      <p>💡 <strong>Tahukah kamu?</strong> Jupiter memiliki 95+ satelit alami, sedangkan Merkurius dan Venus tidak punya sama sekali!</p>
    `,
    'sat-buatan': `
      <h3>🛰️ Apa itu Satelit Buatan?</h3>
      <p><strong>Satelit buatan</strong> adalah benda yang <span class="hl">dibuat oleh manusia</span> dan diluncurkan ke luar angkasa untuk mengelilingi Bumi atau benda langit lain.</p>
      <p>Contoh satelit buatan:</p>
      <ul>
        <li>🛰️ <strong>Satelit Palapa</strong> — satelit komunikasi Indonesia pertama (1976). Digunakan untuk siaran TV dan telepon antar pulau.</li>
        <li>🛰️ <strong>Satria-1</strong> — satelit internet broadband terbesar di Asia Pasifik milik Indonesia. Menyediakan internet untuk sekolah dan puskesmas di daerah terpencil.</li>
        <li>🛸 <strong>ISS (International Space Station)</strong> — stasiun luar angkasa tempat astronaut tinggal dan melakukan penelitian. Bisa dilihat dari Bumi dengan mata telanjang!</li>
      </ul>
      <p>💡 <strong>Tahukah kamu?</strong> Lebih dari 10.000 satelit buatan sedang mengorbit Bumi saat ini! Mereka membantu kita dalam komunikasi, cuaca, GPS, dan riset ilmiah.</p>
    `
  };

  // ══════════════════════════════════════════════════════════════════════════
  // 2. STATE APLIKASI
  // ══════════════════════════════════════════════════════════════════════════

  let isPlaying = true;
  let speedMultiplier = 1.0;
  let showOrbits = true;
  let showLabels = true;
  let activeFilter = 'all';
  let followTarget = null;
  let elapsedDays = 0;

  // ══════════════════════════════════════════════════════════════════════════
  // 3. THREE.JS GLOBALS
  // ══════════════════════════════════════════════════════════════════════════

  let scene, camera, renderer, controls;
  let sun, sunGlow;
  let planetObjects = [];   // { mesh, data, angle, label, orbitLine, moonObjs, ringMesh }
  let asteroidBelt;
  let artificialSatObjects = []; // { orbitGroup, mesh, data, angle }
  let raycaster, mouse;
  let hoveredObject = null;
  let clickableObjects = [];
  const clock = new THREE.Clock();

  // ══════════════════════════════════════════════════════════════════════════
  // 4. TEXTURE GENERATION (procedural)
  // ══════════════════════════════════════════════════════════════════════════

  function createProceduralTexture(type, baseColor) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    const r = (baseColor >> 16) & 0xFF;
    const g = (baseColor >> 8) & 0xFF;
    const b = baseColor & 0xFF;

    switch (type) {
      case 'mercury': {
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(0, 0, 512, 256);
        for (let i = 0; i < 60; i++) {
          const cx = Math.random() * 512, cy = Math.random() * 256;
          const cr = 2 + Math.random() * 12;
          const shade = -30 + Math.random() * 20;
          ctx.fillStyle = `rgb(${Math.max(0, r + shade)},${Math.max(0, g + shade)},${Math.max(0, b + shade)})`;
          ctx.beginPath(); ctx.arc(cx, cy, cr, 0, Math.PI * 2); ctx.fill();
        }
        break;
      }
      case 'venus': {
        for (let y = 0; y < 256; y++) {
          const noise = Math.sin(y * 0.05) * 15 + Math.sin(y * 0.13 + 2) * 10;
          ctx.fillStyle = `rgb(${r + noise | 0},${g + noise * 0.8 | 0},${b + noise * 0.5 | 0})`;
          ctx.fillRect(0, y, 512, 1);
        }
        for (let i = 0; i < 30; i++) {
          ctx.fillStyle = `rgba(255,255,220,${0.03 + Math.random() * 0.05})`;
          ctx.beginPath();
          ctx.arc(Math.random() * 512, Math.random() * 256, 10 + Math.random() * 40, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
      }
      case 'earth': {
        // Ocean
        ctx.fillStyle = '#2E6EB5';
        ctx.fillRect(0, 0, 512, 256);
        // Continents
        const continents = [
          { x: 100, y: 80, w: 60, h: 70 },   // Americas-like
          { x: 120, y: 100, w: 40, h: 50 },
          { x: 250, y: 60, w: 80, h: 60 },   // Eurasia-like
          { x: 260, y: 130, w: 50, h: 40 },  // Africa-like
          { x: 370, y: 140, w: 50, h: 40 },  // Australia-like
          { x: 50, y: 60, w: 30, h: 25 },
          { x: 310, y: 70, w: 40, h: 35 },
          { x: 180, y: 120, w: 25, h: 20 },
        ];
        continents.forEach(c => {
          ctx.fillStyle = '#3B8C3B';
          ctx.beginPath();
          ctx.ellipse(c.x, c.y, c.w / 2, c.h / 2, Math.random() * 0.3, 0, Math.PI * 2);
          ctx.fill();
          // Desert patches
          ctx.fillStyle = '#C4A44A';
          ctx.beginPath();
          ctx.ellipse(c.x + c.w * 0.2, c.y + c.h * 0.1, c.w * 0.15, c.h * 0.15, 0, 0, Math.PI * 2);
          ctx.fill();
        });
        // Polar ice caps
        ctx.fillStyle = 'rgba(230,240,255,0.7)';
        ctx.fillRect(0, 0, 512, 18);
        ctx.fillRect(0, 238, 512, 18);
        // Clouds
        for (let i = 0; i < 40; i++) {
          ctx.fillStyle = `rgba(255,255,255,${0.08 + Math.random() * 0.12})`;
          const cx = Math.random() * 512, cy = Math.random() * 256;
          ctx.beginPath();
          ctx.ellipse(cx, cy, 15 + Math.random() * 35, 5 + Math.random() * 10, Math.random() * Math.PI, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
      }
      case 'mars': {
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(0, 0, 512, 256);
        for (let i = 0; i < 40; i++) {
          const shade = -20 + Math.random() * 40;
          ctx.fillStyle = `rgb(${Math.min(255, r + shade)},${Math.max(0, g + shade * 0.6 | 0)},${Math.max(0, b + shade * 0.3 | 0)})`;
          ctx.beginPath();
          ctx.ellipse(Math.random() * 512, Math.random() * 256, 10 + Math.random() * 30, 8 + Math.random() * 15, Math.random() * Math.PI, 0, Math.PI * 2);
          ctx.fill();
        }
        // Polar caps
        ctx.fillStyle = 'rgba(230,220,210,0.5)';
        ctx.fillRect(0, 0, 512, 12);
        ctx.fillRect(0, 244, 512, 12);
        break;
      }
      case 'jupiter': {
        for (let y = 0; y < 256; y++) {
          const t = y / 256;
          const band = Math.sin(t * Math.PI * 12) * 0.5 + 0.5;
          const rr = 170 + band * 50 + Math.sin(t * 47) * 15;
          const gg = 120 + band * 40 + Math.sin(t * 47 + 1) * 10;
          const bb = 50 + band * 20;
          ctx.fillStyle = `rgb(${rr | 0},${gg | 0},${bb | 0})`;
          ctx.fillRect(0, y, 512, 1);
        }
        // Great Red Spot
        ctx.fillStyle = 'rgba(180,70,50,0.7)';
        ctx.beginPath();
        ctx.ellipse(340, 145, 25, 15, 0.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(200,100,70,0.5)';
        ctx.beginPath();
        ctx.ellipse(340, 145, 18, 10, 0.1, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
      case 'saturn': {
        for (let y = 0; y < 256; y++) {
          const t = y / 256;
          const band = Math.sin(t * Math.PI * 8) * 0.5 + 0.5;
          const rr = 200 + band * 30;
          const gg = 180 + band * 25;
          const bb = 130 + band * 20;
          ctx.fillStyle = `rgb(${rr | 0},${gg | 0},${bb | 0})`;
          ctx.fillRect(0, y, 512, 1);
        }
        break;
      }
      case 'uranus': {
        const gradient = ctx.createLinearGradient(0, 0, 0, 256);
        gradient.addColorStop(0, '#8FD8E8');
        gradient.addColorStop(0.3, '#ACE5EE');
        gradient.addColorStop(0.5, '#C5EDF5');
        gradient.addColorStop(0.7, '#ACE5EE');
        gradient.addColorStop(1, '#8FD8E8');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 512, 256);
        break;
      }
      case 'neptune': {
        const gradient2 = ctx.createLinearGradient(0, 0, 0, 256);
        gradient2.addColorStop(0, '#2A3F8F');
        gradient2.addColorStop(0.3, '#3F54BE');
        gradient2.addColorStop(0.5, '#4A65D0');
        gradient2.addColorStop(0.7, '#3F54BE');
        gradient2.addColorStop(1, '#2A3F8F');
        ctx.fillStyle = gradient2;
        ctx.fillRect(0, 0, 512, 256);
        // Storm spot
        ctx.fillStyle = 'rgba(100,150,255,0.4)';
        ctx.beginPath();
        ctx.ellipse(200, 120, 20, 12, 0, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
      default: {
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(0, 0, 512, 256);
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }

  function createLabelSprite(text, fontSize) {
    fontSize = fontSize || 36;
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.font = `Bold ${fontSize}px Nunito, Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    // Shadow
    ctx.shadowColor = 'rgba(0,0,0,0.8)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.fillStyle = '#ffffff';
    ctx.fillText(text, 256, 64);
    ctx.shadowBlur = 0;

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(material);
    const aspect = canvas.width / canvas.height;
    sprite.scale.set(aspect * 1.5, 1.5, 1);
    return sprite;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // 5. SCENE INITIALIZATION
  // ══════════════════════════════════════════════════════════════════════════

  function initScene() {
    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 8000);
    camera.position.set(30, 45, 80);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // OrbitControls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.minDistance = 5;
    controls.maxDistance = 400;
    controls.maxPolarAngle = Math.PI * 0.95;
    controls.target.set(0, 0, 0);

    // Lighting
    const sunLight = new THREE.PointLight(0xFFF5E0, 2.0, 600, 0.5);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    const ambientLight = new THREE.AmbientLight(0x303050, 0.25);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0x444466, 0x111122, 0.15);
    scene.add(hemiLight);

    // Raycaster
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2(-999, -999);
  }

  // ══════════════════════════════════════════════════════════════════════════
  // 6. CELESTIAL BODY CREATION
  // ══════════════════════════════════════════════════════════════════════════

  function createStarfield() {
    const count = 12000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 1500 + Math.random() * 2500;
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const temp = Math.random();
      if (temp < 0.3) {
        colors[i * 3] = 0.8; colors[i * 3 + 1] = 0.85; colors[i * 3 + 2] = 1.0;
      } else if (temp < 0.6) {
        colors[i * 3] = 1.0; colors[i * 3 + 1] = 1.0; colors[i * 3 + 2] = 0.9;
      } else {
        colors[i * 3] = 1.0; colors[i * 3 + 1] = 0.9; colors[i * 3 + 2] = 0.7;
      }
      sizes[i] = 0.5 + Math.random() * 1.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({
      size: 1.0, vertexColors: true, transparent: true, opacity: 0.85,
      sizeAttenuation: true
    });
    scene.add(new THREE.Points(geometry, material));
  }

  function createSun() {
    // Sun sphere
    const sunGeom = new THREE.SphereGeometry(5, 64, 64);
    const sunCanvas = document.createElement('canvas');
    sunCanvas.width = 512; sunCanvas.height = 256;
    const sctx = sunCanvas.getContext('2d');
    const sunGrad = sctx.createLinearGradient(0, 0, 512, 256);
    sunGrad.addColorStop(0, '#FFEE00');
    sunGrad.addColorStop(0.3, '#FFD700');
    sunGrad.addColorStop(0.5, '#FFA500');
    sunGrad.addColorStop(0.7, '#FFD700');
    sunGrad.addColorStop(1, '#FFEE00');
    sctx.fillStyle = sunGrad;
    sctx.fillRect(0, 0, 512, 256);
    // Sunspots
    for (let i = 0; i < 8; i++) {
      sctx.fillStyle = `rgba(200,100,0,${0.15 + Math.random() * 0.15})`;
      sctx.beginPath();
      sctx.arc(Math.random() * 512, Math.random() * 256, 5 + Math.random() * 15, 0, Math.PI * 2);
      sctx.fill();
    }
    const sunTex = new THREE.CanvasTexture(sunCanvas);
    const sunMat = new THREE.MeshBasicMaterial({ map: sunTex });
    sun = new THREE.Mesh(sunGeom, sunMat);
    sun.userData = {
      name: 'Matahari', icon: '☀️', category: 'star',
      description: 'Matahari adalah bintang di pusat tata surya kita. Matahari memancarkan cahaya dan panas sendiri serta memiliki gaya gravitasi yang sangat kuat untuk mengikat 8 planet pada orbitnya. Matahari mengandung 99,86% massa seluruh tata surya!',
      facts: {
        'Diameter': '1.392.700 km',
        'Suhu Permukaan': '5.500°C',
        'Suhu Inti': '15 juta°C',
        'Komposisi': '73% Hidrogen, 25% Helium',
        'Usia': '4,6 miliar tahun',
        'Tipe': 'Bintang Katai Kuning'
      }
    };
    scene.add(sun);
    clickableObjects.push(sun);

    // Sun glow (sprite)
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = 256; glowCanvas.height = 256;
    const gctx = glowCanvas.getContext('2d');
    const glowGrad = gctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    glowGrad.addColorStop(0, 'rgba(255, 220, 80, 0.9)');
    glowGrad.addColorStop(0.15, 'rgba(255, 180, 40, 0.5)');
    glowGrad.addColorStop(0.35, 'rgba(255, 140, 0, 0.2)');
    glowGrad.addColorStop(0.6, 'rgba(255, 80, 0, 0.06)');
    glowGrad.addColorStop(1, 'rgba(255, 50, 0, 0)');
    gctx.fillStyle = glowGrad;
    gctx.fillRect(0, 0, 256, 256);
    const glowTex = new THREE.CanvasTexture(glowCanvas);
    const glowMat = new THREE.SpriteMaterial({
      map: glowTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
    });
    sunGlow = new THREE.Sprite(glowMat);
    sunGlow.scale.set(28, 28, 1);
    sun.add(sunGlow);

    // Label
    const sunLabel = createLabelSprite('Matahari ☀️', 32);
    sunLabel.position.y = 7;
    sun.add(sunLabel);
    sunLabel.userData = { isLabel: true };

    return sun;
  }

  function createOrbitLine(distance, eccentricity, color) {
    const a = distance;
    const e = eccentricity || 0;
    const b = a * Math.sqrt(1 - e * e);
    const points = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(a * Math.cos(theta), 0, b * Math.sin(theta)));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: color || 0x334466, transparent: true, opacity: 0.25
    });
    const line = new THREE.Line(geometry, material);
    scene.add(line);
    return line;
  }

  function createRing(parent, data) {
    const geometry = new THREE.RingGeometry(data.ringInner, data.ringOuter, 64);
    // Create ring texture for concentric bands
    const ringCanvas = document.createElement('canvas');
    ringCanvas.width = 256; ringCanvas.height = 64;
    const rctx = ringCanvas.getContext('2d');
    const ringR = (data.ringColor >> 16) & 0xFF;
    const ringG = (data.ringColor >> 8) & 0xFF;
    const ringB = data.ringColor & 0xFF;
    for (let x = 0; x < 256; x++) {
      const t = x / 256;
      const opacity = 0.3 + Math.sin(t * Math.PI * 6) * 0.15 + Math.sin(t * Math.PI * 15) * 0.1;
      rctx.fillStyle = `rgba(${ringR},${ringG},${ringB},${opacity})`;
      rctx.fillRect(x, 0, 1, 64);
    }
    const ringTexture = new THREE.CanvasTexture(ringCanvas);

    const material = new THREE.MeshBasicMaterial({
      map: ringTexture, color: data.ringColor,
      transparent: true, opacity: data.ringOpacity || 0.5,
      side: THREE.DoubleSide, depthWrite: false
    });
    const ring = new THREE.Mesh(geometry, material);
    ring.rotation.x = -Math.PI / 2;
    parent.add(ring);
    return ring;
  }

  function createPlanets() {
    PLANETS.forEach(function (data, index) {
      // Planet mesh
      const texture = createProceduralTexture(data.textureType, data.color);
      const geometry = new THREE.SphereGeometry(data.radius, 48, 48);
      const material = new THREE.MeshStandardMaterial({
        map: texture, roughness: 0.85, metalness: 0.05
      });
      const planet = new THREE.Mesh(geometry, material);
      planet.userData = { ...data, index: index, isPlanet: true };

      // Apply axial tilt
      const tiltGroup = new THREE.Group();
      tiltGroup.rotation.z = data.tilt;
      tiltGroup.add(planet);

      // Container group added to scene (will position it along orbit)
      const planetGroup = new THREE.Group();
      planetGroup.add(tiltGroup);
      scene.add(planetGroup);

      clickableObjects.push(planet);

      // Orbit line
      const orbitLine = createOrbitLine(data.distance, data.eccentricity, data.category === 'inner' ? 0x665533 : 0x334466);

      // Label
      const label = createLabelSprite(data.icon + ' ' + data.name, 30);
      label.position.y = data.radius + 1.2;
      label.userData = { isLabel: true };
      planet.add(label);

      // Ring
      let ringMesh = null;
      if (data.hasRing) {
        ringMesh = createRing(planet, data);
      }

      // Moons
      const moonObjs = [];
      data.moons.forEach(function (moonData) {
        const moonGeom = new THREE.SphereGeometry(moonData.radius, 24, 24);
        const moonMat = new THREE.MeshStandardMaterial({
          color: moonData.color, roughness: 0.9, metalness: 0
        });
        const moonMesh = new THREE.Mesh(moonGeom, moonMat);
        moonMesh.userData = { ...moonData, isMoon: true, parentPlanet: data.name };

        // Moon orbit group (child of planet mesh → follows planet)
        const moonOrbitGroup = new THREE.Group();
        moonMesh.position.x = moonData.distance;
        moonOrbitGroup.add(moonMesh);
        planet.add(moonOrbitGroup);

        // Moon label
        const moonLabel = createLabelSprite(moonData.name, 22);
        moonLabel.position.y = moonData.radius + 0.4;
        moonLabel.userData = { isLabel: true };
        moonMesh.add(moonLabel);

        // Moon orbit line (around planet)
        const moonOrbitPts = [];
        for (let i = 0; i <= 64; i++) {
          const th = (i / 64) * Math.PI * 2;
          moonOrbitPts.push(new THREE.Vector3(moonData.distance * Math.cos(th), 0, moonData.distance * Math.sin(th)));
        }
        const moonOrbitGeom = new THREE.BufferGeometry().setFromPoints(moonOrbitPts);
        const moonOrbitMat = new THREE.LineBasicMaterial({ color: 0x444444, transparent: true, opacity: 0.15 });
        const moonOrbitLine = new THREE.Line(moonOrbitGeom, moonOrbitMat);
        planet.add(moonOrbitLine);

        clickableObjects.push(moonMesh);

        moonObjs.push({
          mesh: moonMesh,
          orbitGroup: moonOrbitGroup,
          data: moonData,
          angle: Math.random() * Math.PI * 2,
          orbitLine: moonOrbitLine
        });
      });

      // Starting angle
      const startAngle = (index / PLANETS.length) * Math.PI * 2 + Math.random() * 0.5;

      planetObjects.push({
        mesh: planet,
        group: planetGroup,
        tiltGroup: tiltGroup,
        data: data,
        angle: startAngle,
        label: label,
        orbitLine: orbitLine,
        ringMesh: ringMesh,
        moonObjs: moonObjs
      });

      // Follow select option
      const option = document.createElement('option');
      option.value = index.toString();
      option.textContent = data.icon + ' ' + data.name;
      document.getElementById('follow-select').appendChild(option);
    });
  }

  function createAsteroidBelt() {
    const count = 3500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const innerR = 31, outerR = 39; // Between Mars (28) and Jupiter (42)

    for (let i = 0; i < count; i++) {
      const r = innerR + Math.random() * (outerR - innerR);
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 2.5;
      positions[i * 3] = r * Math.cos(theta);
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = r * Math.sin(theta);

      const brightness = 0.35 + Math.random() * 0.35;
      colors[i * 3] = brightness * 1.1;
      colors[i * 3 + 1] = brightness * 0.95;
      colors[i * 3 + 2] = brightness * 0.75;
      sizes[i] = 0.08 + Math.random() * 0.25;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({
      size: 0.2, vertexColors: true, transparent: true, opacity: 0.7,
      sizeAttenuation: true
    });
    asteroidBelt = new THREE.Points(geometry, material);
    scene.add(asteroidBelt);

    // Label for asteroid belt
    const astLabel = createLabelSprite('☄️ Sabuk Asteroid', 24);
    astLabel.position.set(35, 3, 0);
    astLabel.userData = { isLabel: true };
    scene.add(astLabel);
    // Store label ref on asteroid belt for toggling
    asteroidBelt.userData = { label: astLabel };
  }

  function createArtificialSatellites() {
    // Find Earth's planet object
    const earthObj = planetObjects.find(p => p.data.name === 'Bumi');
    if (!earthObj) return;

    ARTIFICIAL_SATS.forEach(function (satData) {
      const satOrbitGroup = new THREE.Group();
      satOrbitGroup.rotation.x = satData.orbitTilt || 0;
      satOrbitGroup.rotation.z = Math.random() * 0.3;
      earthObj.mesh.add(satOrbitGroup);

      // Satellite body
      const bodyGeom = new THREE.BoxGeometry(0.08, 0.04, 0.12);
      const bodyMat = new THREE.MeshBasicMaterial({ color: satData.color });
      const satMesh = new THREE.Mesh(bodyGeom, bodyMat);
      satMesh.position.x = satData.distance;
      satMesh.userData = { ...satData, isSatellite: true };
      satOrbitGroup.add(satMesh);

      // Solar panels
      const panelGeom = new THREE.PlaneGeometry(0.15, 0.04);
      const panelMat = new THREE.MeshBasicMaterial({ color: 0x2244AA, side: THREE.DoubleSide });
      const leftPanel = new THREE.Mesh(panelGeom, panelMat);
      leftPanel.position.x = -0.12;
      satMesh.add(leftPanel);
      const rightPanel = new THREE.Mesh(panelGeom, panelMat);
      rightPanel.position.x = 0.12;
      satMesh.add(rightPanel);

      // Label
      const satLabel = createLabelSprite(satData.name, 18);
      satLabel.position.y = 0.25;
      satLabel.scale.set(2, 0.5, 1);
      satLabel.userData = { isLabel: true };
      satMesh.add(satLabel);

      // Orbit line around Earth
      const satOrbitPts = [];
      for (let i = 0; i <= 64; i++) {
        const th = (i / 64) * Math.PI * 2;
        satOrbitPts.push(new THREE.Vector3(satData.distance * Math.cos(th), 0, satData.distance * Math.sin(th)));
      }
      const satOrbitGeom = new THREE.BufferGeometry().setFromPoints(satOrbitPts);
      const satOrbitMat = new THREE.LineBasicMaterial({ color: satData.color, transparent: true, opacity: 0.15 });
      const satOrbitLine = new THREE.Line(satOrbitGeom, satOrbitMat);
      satOrbitGroup.add(satOrbitLine);

      clickableObjects.push(satMesh);

      artificialSatObjects.push({
        orbitGroup: satOrbitGroup,
        mesh: satMesh,
        data: satData,
        angle: Math.random() * Math.PI * 2,
        orbitLine: satOrbitLine
      });
    });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // 7. ANIMATION LOOP
  // ══════════════════════════════════════════════════════════════════════════

  function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    const speed = isPlaying ? speedMultiplier : 0;
    const dayStep = speed * delta * 10; // ~10 simulation-days per second at 1x

    if (isPlaying) {
      elapsedDays += dayStep;
    }

    // Sun rotation
    sun.rotation.y += 0.001 * speed;

    // Planet movement
    planetObjects.forEach(function (obj) {
      if (speed > 0) {
        // Revolution (orbit around Matahari)
        const revSpeed = (2 * Math.PI) / obj.data.revolutionPeriod;
        obj.angle += revSpeed * dayStep;

        // Elliptical orbit positioning
        const a = obj.data.distance;
        const e = obj.data.eccentricity || 0;
        const b = a * Math.sqrt(1 - e * e);
        obj.group.position.x = a * Math.cos(obj.angle);
        obj.group.position.z = b * Math.sin(obj.angle);

        // Rotation (spin on axis)
        const rotSpeed = (2 * Math.PI) / obj.data.rotationPeriod;
        obj.mesh.rotation.y += rotSpeed * dayStep * 0.05;
      }

      // Moon movement
      obj.moonObjs.forEach(function (moon) {
        if (speed > 0) {
          const moonRevSpeed = (2 * Math.PI) / moon.data.revolutionPeriod;
          moon.angle += moonRevSpeed * dayStep;
          moon.orbitGroup.rotation.y = moon.angle;

          // Tidal locking: rotation matches revolution
          if (moon.data.tidalLocked) {
            moon.mesh.rotation.y = -moon.angle;
          } else {
            moon.mesh.rotation.y += moonRevSpeed * dayStep * 0.5;
          }
        }
      });
    });

    // Asteroid belt slow rotation
    if (asteroidBelt && speed > 0) {
      asteroidBelt.rotation.y += 0.00005 * speed;
    }

    // Artificial satellites
    artificialSatObjects.forEach(function (sat) {
      if (speed > 0) {
        sat.angle += sat.data.speed * speed;
        sat.orbitGroup.rotation.y = sat.angle;
      }
    });

    // Follow target
    if (followTarget !== null && planetObjects[followTarget]) {
      const targetObj = planetObjects[followTarget];
      const worldPos = new THREE.Vector3();
      targetObj.mesh.getWorldPosition(worldPos);
      controls.target.lerp(worldPos, 0.05);
    }

    controls.update();
    renderer.render(scene, camera);
  }

  // ══════════════════════════════════════════════════════════════════════════
  // 8. INTERACTION (Raycaster)
  // ══════════════════════════════════════════════════════════════════════════

  function onMouseMove(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // Raycast for hover
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(clickableObjects, false);

    const tooltip = document.getElementById('tooltip');
    if (intersects.length > 0) {
      const obj = intersects[0].object;
      if (obj.userData && obj.userData.name && !obj.userData.isLabel) {
        hoveredObject = obj;
        tooltip.textContent = obj.userData.icon + ' ' + obj.userData.name;
        tooltip.style.display = 'block';
        tooltip.style.left = event.clientX + 15 + 'px';
        tooltip.style.top = event.clientY - 10 + 'px';
        renderer.domElement.style.cursor = 'pointer';
        return;
      }
    }
    hoveredObject = null;
    tooltip.style.display = 'none';
    renderer.domElement.style.cursor = 'grab';
  }

  function onMouseClick(event) {
    if (event.target.closest('#control-panel') || event.target.closest('#info-panel') ||
        event.target.closest('#filter-bar') || event.target.closest('#category-panel')) {
      return;
    }

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(clickableObjects, false);

    if (intersects.length > 0) {
      const obj = intersects[0].object;
      if (obj.userData && obj.userData.name) {
        showInfoPanel(obj.userData);
      }
    }
  }

  function onTouchStart(event) {
    if (event.touches.length === 1) {
      const touch = event.touches[0];
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
    }
  }

  function onTouchEnd(event) {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(clickableObjects, false);
    if (intersects.length > 0) {
      const obj = intersects[0].object;
      if (obj.userData && obj.userData.name && !obj.userData.isLabel) {
        showInfoPanel(obj.userData);
      }
    }
  }

  // ══════════════════════════════════════════════════════════════════════════
  // 9. UI CONTROLS
  // ══════════════════════════════════════════════════════════════════════════

  function setupControls() {
    // Play / Pause
    document.getElementById('btn-play-pause').addEventListener('click', function () {
      isPlaying = !isPlaying;
      document.getElementById('pp-icon').textContent = isPlaying ? '⏸️' : '▶️';
      document.getElementById('pp-text').textContent = isPlaying ? 'Jeda' : 'Main';
    });

    // Speed slider
    const speedSlider = document.getElementById('speed-slider');
    const speedVal = document.getElementById('speed-val');
    speedSlider.addEventListener('input', function () {
      const val = parseFloat(this.value);
      if (val <= 25) {
        speedMultiplier = val / 25; // 0 to 1
      } else if (val <= 50) {
        speedMultiplier = 1 + (val - 25) / 25 * 4; // 1 to 5
      } else if (val <= 75) {
        speedMultiplier = 5 + (val - 50) / 25 * 15; // 5 to 20
      } else {
        speedMultiplier = 20 + (val - 75) / 25 * 80; // 20 to 100
      }
      speedVal.textContent = speedMultiplier.toFixed(1) + '×';
    });

    // Zoom slider
    const zoomSlider = document.getElementById('zoom-slider');
    zoomSlider.addEventListener('input', function () {
      const val = parseFloat(this.value);
      const dist = 5 + (val / 200) * 395;
      const direction = camera.position.clone().sub(controls.target).normalize();
      camera.position.copy(controls.target).addScaledVector(direction, dist);
    });

    // Reset view
    document.getElementById('btn-reset').addEventListener('click', function () {
      followTarget = null;
      document.getElementById('follow-select').value = '';
      controls.target.set(0, 0, 0);
      camera.position.set(30, 45, 80);
      controls.update();
      zoomSlider.value = 80;
    });

    // Toggle orbits
    document.getElementById('btn-orbits').addEventListener('click', function () {
      showOrbits = !showOrbits;
      this.classList.toggle('active', showOrbits);
      planetObjects.forEach(function (obj) {
        obj.orbitLine.visible = showOrbits;
        obj.moonObjs.forEach(function (m) { m.orbitLine.visible = showOrbits; });
      });
      artificialSatObjects.forEach(function (s) { s.orbitLine.visible = showOrbits; });
    });

    // Toggle labels
    document.getElementById('btn-labels').addEventListener('click', function () {
      showLabels = !showLabels;
      this.classList.toggle('active', showLabels);
      scene.traverse(function (obj) {
        if (obj.userData && obj.userData.isLabel) {
          obj.visible = showLabels;
        }
      });
    });

    // Follow select
    document.getElementById('follow-select').addEventListener('change', function () {
      const val = this.value;
      if (val === '') {
        followTarget = null;
      } else {
        followTarget = parseInt(val);
      }
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');
        activeFilter = this.getAttribute('data-filter');
        applyFilter();
      });
    });

    // Category panel toggle
    document.getElementById('btn-category').addEventListener('click', function () {
      const panel = document.getElementById('category-panel');
      panel.classList.toggle('visible');
      if (panel.classList.contains('visible')) {
        showCategoryTab('planet');
      }
    });

    // Category tabs
    document.querySelectorAll('.cat-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        document.querySelectorAll('.cat-tab').forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');
        showCategoryTab(this.getAttribute('data-tab'));
      });
    });

    // Info panel close
    document.getElementById('info-close').addEventListener('click', function () {
      document.getElementById('info-panel').classList.remove('visible');
    });

    // Mouse/touch events
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('click', onMouseClick);
    renderer.domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    renderer.domElement.addEventListener('touchend', onTouchEnd);

    // Window resize
    window.addEventListener('resize', function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Click outside to close category panel
    document.addEventListener('click', function (e) {
      const catPanel = document.getElementById('category-panel');
      if (catPanel.classList.contains('visible') &&
          !e.target.closest('#category-panel') &&
          !e.target.closest('#btn-category')) {
        catPanel.classList.remove('visible');
      }
    });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // 10. FILTER LOGIC
  // ══════════════════════════════════════════════════════════════════════════

  function applyFilter() {
    planetObjects.forEach(function (obj) {
      const cat = obj.data.category;
      let visible = true;
      let dimmed = false;

      switch (activeFilter) {
        case 'inner':
          dimmed = cat !== 'inner';
          break;
        case 'outer':
          dimmed = cat !== 'outer';
          break;
        case 'asteroid':
          dimmed = true;
          break;
        case 'satellite':
          dimmed = true;
          break;
      }

      // Apply visual dimming
      if (dimmed) {
        obj.mesh.material.opacity = 0.2;
        obj.mesh.material.transparent = true;
        obj.orbitLine.material.opacity = 0.05;
      } else {
        obj.mesh.material.opacity = 1.0;
        obj.mesh.material.transparent = false;
        obj.orbitLine.material.opacity = 0.25;
      }
      // Update labels
      if (obj.label) obj.label.material.opacity = dimmed ? 0.15 : 1.0;

      // Moons follow parent dimming
      obj.moonObjs.forEach(function (moon) {
        moon.mesh.material.opacity = dimmed ? 0.15 : 1.0;
        moon.mesh.material.transparent = dimmed;
      });
    });

    // Asteroid belt
    if (asteroidBelt) {
      const showAst = activeFilter === 'all' || activeFilter === 'asteroid';
      asteroidBelt.material.opacity = showAst ? 0.7 : 0.1;
      if (asteroidBelt.userData.label) {
        asteroidBelt.userData.label.material.opacity = activeFilter === 'asteroid' ? 1 : (activeFilter === 'all' ? 0.7 : 0.1);
      }
    }

    // Artificial satellites
    artificialSatObjects.forEach(function (sat) {
      const showSat = activeFilter === 'all' || activeFilter === 'satellite';
      sat.mesh.visible = showSat;
      sat.orbitLine.visible = showSat && showOrbits;
      // Also un-dim Earth when showing satellites
      if (activeFilter === 'satellite') {
        const earthObj = planetObjects.find(function (p) { return p.data.name === 'Bumi'; });
        if (earthObj) {
          earthObj.mesh.material.opacity = 1.0;
          earthObj.mesh.material.transparent = false;
          earthObj.orbitLine.material.opacity = 0.25;
          if (earthObj.label) earthObj.label.material.opacity = 1.0;
        }
      }
    });

    // Special: when showing satellite filter, also highlight Earth
    if (activeFilter === 'satellite') {
      const earthObj = planetObjects.find(function (p) { return p.data.name === 'Bumi'; });
      if (earthObj) {
        earthObj.mesh.material.opacity = 1.0;
        earthObj.mesh.material.transparent = false;
      }
    }
  }

  // ══════════════════════════════════════════════════════════════════════════
  // 11. INFO PANEL
  // ══════════════════════════════════════════════════════════════════════════

  function showInfoPanel(data) {
    const panel = document.getElementById('info-panel');
    document.getElementById('info-icon').textContent = data.icon || '🪐';
    document.getElementById('info-name').textContent = data.name;
    document.getElementById('info-desc').textContent = data.description || '';

    // Badge
    const badge = document.getElementById('info-badge');
    if (data.category === 'inner') {
      badge.textContent = '🪨 Planet Dalam';
      badge.className = 'info-badge badge-inner';
    } else if (data.category === 'outer') {
      badge.textContent = '💨 Planet Luar';
      badge.className = 'info-badge badge-outer';
    } else if (data.category === 'star') {
      badge.textContent = '⭐ Bintang';
      badge.className = 'info-badge badge-star';
    } else if (data.isMoon) {
      badge.textContent = '🌙 Satelit Alami';
      badge.className = 'info-badge badge-inner';
    } else if (data.isSatellite) {
      badge.textContent = '🛰️ Satelit Buatan';
      badge.className = 'info-badge badge-outer';
    } else {
      badge.textContent = '';
    }

    // Stats
    const statsContainer = document.getElementById('info-stats');
    statsContainer.innerHTML = '';
    if (data.facts) {
      Object.keys(data.facts).forEach(function (key) {
        const card = document.createElement('div');
        card.className = 'stat-card';
        card.innerHTML = '<div class="stat-val">' + data.facts[key] + '</div><div class="stat-lbl">' + key + '</div>';
        statsContainer.appendChild(card);
      });
    }

    // Moons section
    const moonsSection = document.getElementById('info-moons');
    moonsSection.innerHTML = '';
    if (data.moons && data.moons.length > 0) {
      const title = document.createElement('div');
      title.className = 'info-section-title';
      title.textContent = '🌙 Satelit Alami';
      moonsSection.appendChild(title);
      data.moons.forEach(function (moon) {
        const chip = document.createElement('span');
        chip.className = 'moon-chip';
        chip.textContent = moon.icon + ' ' + moon.name;
        moonsSection.appendChild(chip);
      });
    }

    // Special info for Bulan (tidal locking)
    if (data.tidalLocked) {
      const tidalInfo = document.createElement('div');
      tidalInfo.style.cssText = 'margin-top:12px; padding:10px; background:rgba(255,215,0,0.08); border-radius:10px; border:1px solid rgba(255,215,0,0.15); font-size:0.78rem; line-height:1.6;';
      tidalInfo.innerHTML = '🔒 <strong>Tidal Locking:</strong> Periode rotasi dan revolusi Bulan sama (27,3 hari), sehingga wajah Bulan yang menghadap Bumi selalu sama!';
      moonsSection.appendChild(tidalInfo);
    }

    // Special info for Bumi (day/night & revolution)
    if (data.name === 'Bumi') {
      const earthInfo = document.createElement('div');
      earthInfo.style.cssText = 'margin-top:12px;';
      earthInfo.innerHTML = `
        <div class="info-section-title">🌅 Rotasi & Revolusi Bumi</div>
        <div style="padding:10px; background:rgba(100,149,237,0.08); border-radius:10px; border:1px solid rgba(100,149,237,0.15); font-size:0.78rem; line-height:1.8;">
          🔄 <strong>Rotasi:</strong> Bumi berputar pada porosnya setiap <strong>24 jam</strong>. Ini menyebabkan pergantian <strong>siang dan malam</strong> serta gerak semu harian Matahari.<br>
          🌍 <strong>Revolusi:</strong> Bumi mengelilingi Matahari pada lintasan elips selama <strong>365¼ hari</strong> (= 1 tahun). Kelebihan ¼ hari inilah yang menyebabkan adanya <strong>tahun kabisat</strong> setiap 4 tahun.
        </div>
      `;
      moonsSection.appendChild(earthInfo);
    }

    // Special info for Bulan showing 3-level movement
    if (data.name === 'Bulan') {
      const moonInfo = document.createElement('div');
      moonInfo.style.cssText = 'margin-top:12px;';
      moonInfo.innerHTML = `
        <div class="info-section-title">🌙 Tiga Gerakan Bulan</div>
        <div style="padding:10px; background:rgba(200,200,200,0.08); border-radius:10px; border:1px solid rgba(200,200,200,0.15); font-size:0.78rem; line-height:1.8;">
          1️⃣ <strong>Rotasi:</strong> Bulan berputar pada porosnya (27,3 hari).<br>
          2️⃣ <strong>Revolusi:</strong> Bulan mengelilingi Bumi (27,3 hari).<br>
          3️⃣ <strong>Bersama Bumi:</strong> Bulan ikut bergerak mengelilingi Matahari bersama Bumi.<br><br>
          🔒 Karena periode rotasi = revolusi (<strong>27,3 hari</strong>), bagian wajah Bulan yang menghadap Bumi <strong>selalu sama</strong>. Ini disebut <em>tidal locking</em>.
        </div>
      `;
      moonsSection.appendChild(moonInfo);
    }

    panel.classList.add('visible');
  }

  // ══════════════════════════════════════════════════════════════════════════
  // 12. CATEGORY MODULE
  // ══════════════════════════════════════════════════════════════════════════

  function showCategoryTab(tabName) {
    const content = document.getElementById('cat-content');
    content.innerHTML = CATEGORY_CONTENT[tabName] || '';
  }

  // ══════════════════════════════════════════════════════════════════════════
  // 13. INITIALIZATION
  // ══════════════════════════════════════════════════════════════════════════

  function init() {
    initScene();
    createStarfield();
    createSun();
    createPlanets();
    createAsteroidBelt();
    createArtificialSatellites();
    setupControls();

    // Initialize default category content
    showCategoryTab('planet');

    // Hide loading screen
    setTimeout(function () {
      document.getElementById('loading-screen').classList.add('hidden');
    }, 800);

    // Start animation
    animate();
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
