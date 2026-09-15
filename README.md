# 🪐 Tata Surya Kita — Simulasi 3D Interaktif

> Media Pembelajaran Sains Kelas VI SD/MI

Aplikasi web simulasi tata surya **3D interaktif** yang dirancang khusus sebagai media pembelajaran Sains untuk siswa Kelas VI SD/MI. Dibuat menggunakan [Three.js](https://threejs.org/) dengan antarmuka ramah anak, edukatif, dan intuitif.

![Status](https://img.shields.io/badge/Status-Aktif-brightgreen)
![Lisensi](https://img.shields.io/badge/Lisensi-MIT-blue)
![Target](https://img.shields.io/badge/Target-Kelas%20VI%20SD%2FMI-orange)

---

## ✨ Fitur Utama

### 🌞 Simulasi Tata Surya 3D
- Matahari bercahaya di pusat dengan efek glow
- 8 planet dengan **orbit elips** dan **tekstur prosedural** unik
- Cincin planet (Saturnus, Jupiter, Uranus, Neptunus)
- 12.000 bintang sebagai latar belakang

### 🌍 Dinamika Gerakan Orbit
- **Rotasi Bumi** — perputaran pada poros (24 jam), efek visual siang & malam
- **Revolusi Bumi** — orbit elips mengelilingi Matahari (365¼ hari)
- **3 Gerakan Bulan** — rotasi, revolusi mengelilingi Bumi, dan bergerak bersama Bumi
- **Tidal Locking** — wajah Bulan yang menghadap Bumi selalu sama (periode rotasi = revolusi = 27,3 hari)

### ☄️ Sabuk Asteroid
- 3.500 partikel batuan antariksa antara orbit Mars dan Jupiter

### 🛰️ Satelit Buatan
- **Satelit Palapa** — satelit komunikasi Indonesia
- **Satria-1** — satelit internet broadband Indonesia
- **ISS** — Stasiun Luar Angkasa Internasional

### 🎮 Kontrol Interaktif
- ⏯️ Play / Pause simulasi
- ⚡ Pengatur kecepatan (0x — 100x)
- 🔍 Zoom in / out
- 🔄 Reset sudut pandang
- 🎯 Ikuti planet tertentu (follow camera)
- 🔵 Toggle garis orbit
- 🏷️ Toggle label nama

### 📚 Modul Pembelajaran
- **Filter Planet**: Planet Dalam (batuan) vs Planet Luar (gas/es)
- **Info Panel**: Klik planet untuk melihat fakta & deskripsi
- **Kategori Benda Langit**:
  - Planet — definisi & daftar 8 planet
  - Satelit Alami — contoh: Bulan, Phobos, Ganymede
  - Satelit Buatan — contoh: Palapa, Satria-1, ISS

---

## 🚀 Cara Menggunakan

### Online (GitHub Pages)
Cukup buka link GitHub Pages dari repository ini.

### Offline (Lokal)
1. Clone atau download repository ini
2. Buka `index.html` di browser (Chrome / Edge direkomendasikan)
3. Pastikan koneksi internet tersedia (untuk memuat Three.js dari CDN)

### Navigasi
| Aksi | Cara |
|------|------|
| Putar tampilan | Klik kiri + drag |
| Zoom | Scroll mouse |
| Pan | Klik kanan + drag |
| Info planet | Klik pada planet |

---

## 🛠️ Teknologi

| Komponen | Teknologi |
|----------|-----------|
| 3D Engine | [Three.js](https://threejs.org/) v0.149 |
| UI | HTML5 + CSS3 (Glassmorphism) |
| Font | [Nunito](https://fonts.google.com/specimen/Nunito) (Google Fonts) |
| Interaksi | Vanilla JavaScript ES6 |

---

## 📂 Struktur Proyek

```
solar-system-edu/
├── index.html      ← Halaman utama (HTML + CSS)
├── js/
│   └── app.js      ← Logika aplikasi Three.js (~1400 baris)
└── README.md       ← Dokumentasi
```

---

## 📖 Kesesuaian Kurikulum

Materi yang dicakup sesuai dengan bahan ajar Sains Kelas VI SD/MI:

- [x] Model tata surya dengan Matahari sebagai pusat
- [x] Gaya gravitasi Matahari mengikat planet pada orbitnya
- [x] Rotasi Bumi → siang/malam + gerak semu harian Matahari
- [x] Revolusi Bumi → lintasan elips (365¼ hari)
- [x] Gerakan 3 tingkat Bulan (rotasi, revolusi Bumi, revolusi Matahari)
- [x] Tidal locking Bulan (27,3 hari)
- [x] Sabuk Asteroid antara Mars & Jupiter
- [x] Planet Dalam (batuan) vs Planet Luar (gas/es)
- [x] Planet vs Satelit Alami vs Satelit Buatan

---

## 📝 Lisensi

MIT License — Bebas digunakan untuk keperluan edukasi.
