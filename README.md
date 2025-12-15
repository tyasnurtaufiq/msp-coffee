# ☕ MSP Coffee - Sistem Manajemen UMKM Coffee Shop

<div align="center">

![Nuxt.js](https://img.shields.io/badge/Nuxt.js-3.13-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-State%20Management-yellow?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

Aplikasi manajemen lengkap untuk UMKM Coffee Shop dengan fitur transaksi, stok bahan baku, laporan penjualan, dan kalkulasi produksi menggunakan metode Eliminasi Gauss.

[Demo](#demo) • [Fitur](#-fitur) • [Instalasi](#-instalasi) • [Dokumentasi](#-dokumentasi)

</div>

---

## 📋 Daftar Isi

- [Tentang Proyek](#-tentang-proyek)
- [Fitur](#-fitur)
- [Tech Stack](#-tech-stack)
- [Struktur Proyek](#-struktur-proyek)
- [Instalasi](#-instalasi)
- [Penggunaan](#-penggunaan)
- [API & State Management](#-api--state-management)
- [Screenshots](#-screenshots)
- [Kontributor](#-kontributor)

---

## 🎯 Tentang Proyek

**MSP Coffee** adalah aplikasi web berbasis Nuxt 3 yang dirancang untuk membantu pengelolaan UMKM Coffee Shop. Aplikasi ini menyediakan sistem manajemen lengkap mulai dari pencatatan transaksi, pengelolaan stok bahan baku, hingga kalkulasi produksi maksimal menggunakan algoritma **Eliminasi Gauss**.

### Highlight Fitur Utama:
- 🛒 **Manajemen Transaksi** - CRUD transaksi penjualan dengan validasi stok otomatis
- 📊 **Dashboard Analytics** - Grafik penjualan bulanan interaktif dengan Chart.js
- 📦 **Stok Bahan Baku** - Kelola stok kopi, susu, dan sirup dengan riwayat lengkap
- 🧮 **Kalkulasi Produksi** - Hitung produksi maksimal dengan metode Eliminasi Gauss
- 📱 **Responsive Design** - Optimal di desktop dan mobile

---

## ✨ Fitur

### 🏠 Landing Page
- Hero section dengan CTA
- Menu produk kopi
- Galeri
- Informasi tim
- Halaman kontak

### 🔐 Autentikasi
- Login & Register
- Protected routes dengan middleware
- Session management

### 📊 Dashboard Admin
| Fitur | Deskripsi |
|-------|-----------|
| **Dashboard** | Overview penjualan, grafik bulanan, statistik |
| **Transaksi** | CRUD transaksi, validasi stok otomatis |
| **Laporan Penjualan** | Grafik pendapatan, detail per produk |
| **Stok Bahan** | Kelola stok, quick add, riwayat stok |
| **Kalkulasi Produksi** | Hitung produksi maksimal per produk |

### 🍵 Produk yang Tersedia
| Produk | Harga | Bahan Baku |
|--------|-------|------------|
| Kopi Gula Aren | Rp 19.000 | Kopi 25g, Susu 120ml, Sirup 55ml |
| Spanish Latte | Rp 19.000 | Kopi 20g, Susu 160ml, Sirup 20ml |
| Honey Coffee | Rp 19.000 | Kopi 18g, Susu 140ml, Sirup 42ml |

---

## 🛠 Tech Stack

### Frontend
- **[Nuxt 3](https://nuxt.com/)** - Vue.js Framework dengan SSR/SSG
- **[Vue 3](https://vuejs.org/)** - Composition API
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS Framework
- **[Chart.js](https://www.chartjs.org/)** - Library untuk visualisasi grafik

### State Management
- **[Pinia](https://pinia.vuejs.org/)** - State management untuk Vue
- **[VueUse](https://vueuse.org/)** - Collection of Vue Composition Utilities

### Development
- **TypeScript** - Type-safe development
- **ESLint** - Code linting
- **Nuxt DevTools** - Development tools

---

## 📁 Struktur Proyek

```
msp-coffee/
├── 📂 assets/
│   ├── css/main.css          # Global styles
│   └── img/                   # Image assets
│
├── 📂 components/
│   ├── auth/                  # Auth components
│   ├── dashboard/             # Dashboard components
│   │   └── Sidebar.vue        # Responsive sidebar
│   └── landing/               # Landing page components
│
├── 📂 composables/
│   ├── useAuth.ts             # Authentication composable
│   └── useGaussElimination.ts # Algoritma eliminasi Gauss
│
├── 📂 layouts/
│   └── default.vue            # Default layout
│
├── 📂 middleware/
│   └── auth.ts                # Authentication middleware
│
├── 📂 pages/
│   ├── index.vue              # Landing page
│   ├── login.vue              # Login page
│   ├── register.vue           # Register page
│   ├── contact.vue            # Contact page
│   ├── team.vue               # Team page
│   └── dashboard/
│       ├── index.vue          # Dashboard overview
│       ├── transactions.vue   # CRUD Transaksi
│       ├── sales.vue          # Laporan penjualan
│       ├── stock.vue          # Manajemen stok
│       └── production.vue     # Kalkulasi produksi
│
├── 📂 stores/
│   ├── auth.ts                # Auth state
│   ├── sales.ts               # Sales & transactions state
│   └── stock.ts               # Stock management state
│
├── 📂 types/
│   └── index.ts               # TypeScript type definitions
│
├── nuxt.config.ts             # Nuxt configuration
├── tailwind.config.js         # Tailwind configuration
└── package.json               # Dependencies
```

---

## 🚀 Instalasi

### Prerequisites
- Node.js 18+ 
- pnpm / npm / yarn

### Setup

1. **Clone repository**
   ```bash
   git clone https://github.com/username/msp-coffee.git
   cd msp-coffee
   ```

2. **Install dependencies**
   ```bash
   # Menggunakan pnpm (recommended)
   pnpm install
   
   # Atau npm
   npm install
   
   # Atau yarn
   yarn install
   ```

3. **Jalankan development server**
   ```bash
   pnpm dev
   ```

4. **Buka browser**
   ```
   http://localhost:3000
   ```

### Build untuk Production

```bash
# Generate static files
pnpm generate

# Atau build untuk SSR
pnpm build

# Preview production build
pnpm preview
```

---

## 📖 Penggunaan

### 1. Login ke Dashboard
```
Email: admin@msp.com
Password: admin123
```

### 2. Menambah Transaksi
1. Buka halaman **Transaksi**
2. Klik tombol **Tambah Penjualan**
3. Pilih produk dan jumlah
4. Sistem akan otomatis validasi stok
5. Klik **Tambah** untuk menyimpan

### 3. Mengelola Stok
1. Buka halaman **Stok Bahan**
2. Gunakan input manual atau **Quick Add**
3. Riwayat stok akan tercatat otomatis

### 4. Kalkulasi Produksi
1. Buka halaman **Kalkulasi Produksi**
2. Klik **Hitung Produksi Maksimal**
3. Sistem akan menampilkan jumlah maksimal yang bisa diproduksi berdasarkan stok

---

## 🔧 API & State Management

### Pinia Stores

#### `useSalesStore`
```typescript
// State
transactions: SaleTransaction[]
products: Product[]

// Actions
addTransaction(productId, quantity)    // Tambah transaksi
updateTransaction(id, quantity)        // Update transaksi
deleteTransaction(id)                  // Hapus transaksi

// Getters
getTotalRevenue                        // Total pendapatan
getTotalProductsSold                   // Total produk terjual
getMonthlySalesData                    // Data untuk chart
```

#### `useStockStore`
```typescript
// State
stock: { coffee: number, milk: number, syrup: number }
stockHistory: StockHistory[]

// Actions
addStock(ingredient, amount, type)     // Tambah stok
reduceStockForProduct(productId, qty)  // Kurangi stok
restoreStockForProduct(productId, qty) // Kembalikan stok

// Getters
checkStockAvailability(productId, qty) // Cek ketersediaan
```

### Composables

#### `useGaussElimination`
```typescript
// Kalkulasi produksi maksimal menggunakan eliminasi Gauss
const { calculateMaxProduction } = useGaussElimination()

const result = calculateMaxProduction(stock, products)
// Returns: [{ product, maxQuantity, limitedBy }]
```

---

## 📸 Screenshots

### Landing Page
- Hero section dengan branding MSP Coffee
- Menu produk dengan kartu interaktif
- Team section dengan foto anggota

### Dashboard
- Overview dengan grafik penjualan
- Tabel transaksi dengan fitur CRUD
- Manajemen stok dengan progress bar
- Kalkulasi produksi dengan hasil analisis

---

## 🧮 Algoritma Eliminasi Gauss

Aplikasi ini menggunakan **Metode Eliminasi Gauss** untuk menghitung produksi maksimal berdasarkan keterbatasan stok bahan baku.

### Konsep:
1. **Matrix Koefisien** - Setiap produk membutuhkan jumlah tertentu dari masing-masing bahan baku
2. **Batasan Stok** - Stok yang tersedia menjadi constraint
3. **Optimasi** - Menghitung jumlah maksimal yang bisa diproduksi

### Implementasi:
```typescript
// Hitung limit dari setiap bahan baku per produk
const limits = [
  Math.floor(stock.coffee / product.ingredients.coffee),
  Math.floor(stock.milk / product.ingredients.milk),
  Math.floor(stock.syrup / product.ingredients.syrup)
]

// Ambil minimum sebagai produksi maksimal
const maxQuantity = Math.min(...limits)
```

---

## 👥 Kontributor

Proyek ini dikembangkan oleh tim **MSP Coffee**:

| Nama | Role |
|------|------|
| Admin MSP | Developer |

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan pembelajaran dan pengembangan UMKM.

---

<div align="center">

**Made with ☕ by MSP Coffee Team**

[⬆ Kembali ke atas](#-msp-coffee---sistem-manajemen-umkm-coffee-shop)

</div>
