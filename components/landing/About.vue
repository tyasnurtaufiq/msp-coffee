<template>
  <section id="about" class="py-24 bg-stone-50">
    <div class="container mx-auto px-6">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <!-- Image Side -->
        <div class="flex-1 relative">
          <div class="relative z-10">
            <div class="w-full max-w-md mx-auto lg:mx-0">
              <div class="aspect-square rounded-3xl bg-gradient-to-br from-amber-100 to-amber-200 p-8 shadow-2xl">
                <div class="w-full h-full rounded-2xl bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center">
                  <svg class="w-32 h-32 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.5 3H6C4.9 3 4 3.9 4 5V19C4 20.1 4.9 21 6 21H18.5C20.4 21 22 19.4 22 17.5V6.5C22 4.6 20.4 3 18.5 3ZM18.5 19H6V5H18.5C19.3 5 20 5.7 20 6.5V17.5C20 18.3 19.3 19 18.5 19ZM9 7H15V9H9V7ZM9 11H15V13H9V11ZM9 15H13V17H9V15Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <!-- Background Decoration -->
          <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl"></div>
          <div class="absolute -top-6 -left-6 w-32 h-32 bg-amber-600/15 rounded-full blur-2xl"></div>
        </div>

        <!-- Content Side -->
        <div class="flex-1">
          <div class="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mb-6">
            <span class="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
            Tentang Kami
          </div>

          <h2 class="text-4xl lg:text-5xl font-bold text-stone-900 mb-6 leading-tight">
            Cerita di Balik Setiap <span class="text-amber-600">Cangkir Kopi</span>
          </h2>

          <p class="text-lg text-stone-600 mb-6 leading-relaxed">
            MSP Coffee lahir dari kecintaan yang mendalam terhadap kopi Indonesia. Kami memilih biji kopi terbaik dari petani lokal di berbagai daerah penghasil kopi ternama seperti Gayo, Toraja, dan Kintamani.
          </p>

          <p class="text-lg text-stone-600 mb-8 leading-relaxed">
            Setiap biji kopi dipanggang dengan cermat untuk menghasilkan rasa yang sempurna. Dari proses roasting hingga brewing, kami memastikan kualitas terbaik dalam setiap tetes kopi yang disajikan.
          </p>

          <!-- Features -->
          <div class="grid grid-cols-2 gap-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-stone-900">Premium Quality</h4>
                <p class="text-stone-500 text-sm">Biji kopi pilihan terbaik</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-stone-900">Made with Love</h4>
                <p class="text-stone-500 text-sm">Dibuat dengan penuh cinta</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-stone-900">Local Beans</h4>
                <p class="text-stone-500 text-sm">100% biji kopi lokal</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-stone-900">Fresh Daily</h4>
                <p class="text-stone-500 text-sm">Diseduh segar setiap hari</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="py-24 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 bg-amber-600/20 rounded-full text-amber-400 text-sm font-medium mb-6 backdrop-blur-sm">
          <span class="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
          Fitur Unggulan
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
          Fitur <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">MSP Coffee</span>
        </h2>
        <p class="text-xl text-stone-300 max-w-3xl mx-auto">
          Sistem manajemen lengkap untuk mengelola bisnis kopi Anda dengan mudah dan efisien
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Feature 1: Dashboard -->
        <div class="group bg-stone-800/50 backdrop-blur-sm rounded-2xl p-8 border border-stone-700/50 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10">
          <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Dashboard Analitik</h3>
          <p class="text-stone-400 leading-relaxed">
            Pantau penjualan, stok, dan performa bisnis Anda dengan dashboard yang informatif dan real-time.
          </p>
        </div>

        <!-- Feature 2: Production Management -->
        <div class="group bg-stone-800/50 backdrop-blur-sm rounded-2xl p-8 border border-stone-700/50 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10">
          <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Manajemen Produksi</h3>
          <p class="text-stone-400 leading-relaxed">
            Kelola proses produksi kopi dari bahan baku hingga produk jadi dengan tracking yang akurat.
          </p>
        </div>

        <!-- Feature 3: Sales Tracking -->
        <div class="group bg-stone-800/50 backdrop-blur-sm rounded-2xl p-8 border border-stone-700/50 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10">
          <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Laporan Penjualan</h3>
          <p class="text-stone-400 leading-relaxed">
            Catat dan analisis penjualan dengan laporan lengkap yang bisa diekspor ke berbagai format.
          </p>
        </div>

        <!-- Feature 4: Stock Management -->
        <div class="group bg-stone-800/50 backdrop-blur-sm rounded-2xl p-8 border border-stone-700/50 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10">
          <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Manajemen Stok</h3>
          <p class="text-stone-400 leading-relaxed">
            Kontrol stok produk jadi secara real-time dengan notifikasi stok rendah.
          </p>
        </div>

        <!-- Feature 5: Material Management -->
        <div class="group bg-stone-800/50 backdrop-blur-sm rounded-2xl p-8 border border-stone-700/50 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10">
          <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Manajemen Bahan Baku</h3>
          <p class="text-stone-400 leading-relaxed">
            Kelola bahan baku seperti bubuk kopi, gula, dan bahan lainnya dengan mudah.
          </p>
        </div>

        <!-- Feature 6: Packaging -->
        <div class="group bg-stone-800/50 backdrop-blur-sm rounded-2xl p-8 border border-stone-700/50 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10">
          <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Manajemen Kemasan</h3>
          <p class="text-stone-400 leading-relaxed">
            Kelola stok kemasan seperti botol, label, dan packaging dengan tracking lengkap.
          </p>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-16">
        <NuxtLink 
          to="/login" 
          class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-xl shadow-lg shadow-amber-600/25 hover:shadow-amber-600/40 transform hover:-translate-y-1 transition-all duration-300"
        >
          Mulai Gunakan Sekarang
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
