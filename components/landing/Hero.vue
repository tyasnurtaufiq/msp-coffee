<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 80 80%22 width=%2280%22 height=%2280%22><circle cx=%2240%22 cy=%2240%22 r=%2220%22 fill=%22%23d97706%22 fill-opacity=%220.3%22/></svg>');"></div>
    </div>

    <!-- Floating Coffee Beans Animation -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="coffee-bean absolute w-4 h-6 bg-amber-800 rounded-full opacity-20" style="top: 20%; left: 10%; animation: float 6s ease-in-out infinite;"></div>
      <div class="coffee-bean absolute w-3 h-5 bg-amber-700 rounded-full opacity-20" style="top: 40%; right: 15%; animation: float 8s ease-in-out infinite 1s;"></div>
      <div class="coffee-bean absolute w-5 h-8 bg-amber-900 rounded-full opacity-15" style="bottom: 30%; left: 20%; animation: float 7s ease-in-out infinite 2s;"></div>
    </div>

    <div class="container mx-auto px-6 py-20 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        <!-- Text Content -->
        <div class="flex-1 text-center lg:text-left">
          <div class="inline-flex items-center px-4 py-2 bg-amber-600/20 rounded-full text-amber-400 text-sm font-medium mb-6 backdrop-blur-sm">
            <span class="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
            Premium Coffee Experience
          </div>
          
          <h1 class="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            MSP <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Coffee</span>
          </h1>
          
          <p class="text-xl lg:text-2xl text-stone-300 mb-8 max-w-2xl">
            Nikmati kopi premium pilihan dari biji kopi terbaik Nusantara. Setiap cangkir adalah perjalanan rasa yang tak terlupakan.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <NuxtLink 
              to="/login" 
              class="group px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-xl shadow-lg shadow-amber-600/25 hover:shadow-amber-600/40 transform hover:-translate-y-1 transition-all duration-300"
            >
              <span class="flex items-center justify-center gap-2">
                Mulai Sekarang
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </NuxtLink>
            
            <a 
              href="#menu" 
              class="px-8 py-4 border-2 border-stone-600 text-white font-semibold rounded-xl hover:bg-stone-800 hover:border-stone-500 transition-all duration-300"
            >
              Lihat Menu
            </a>
          </div>

          <!-- Stats -->
          <div class="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
            <div class="text-center">
              <div class="text-3xl font-bold text-amber-500">500+</div>
              <div class="text-stone-400 text-sm">Pelanggan</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-amber-500">15+</div>
              <div class="text-stone-400 text-sm">Menu Varian</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-amber-500">4.9★</div>
              <div class="text-stone-400 text-sm">Rating</div>
            </div>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="flex-1 flex justify-center lg:justify-end">
          <div class="relative">
            <div class="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-amber-600/30 to-amber-900/50 backdrop-blur-sm flex items-center justify-center animate-pulse-slow">
              <div class="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-amber-700/40 to-amber-800/60 flex items-center justify-center">
                <svg class="w-40 h-40 lg:w-52 lg:h-52 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 21V19H4V13C4 11.5 4.42 10.13 5.26 8.94C6.09 7.75 7.22 6.94 8.64 6.51C8.4 6.16 8.27 5.75 8.27 5.27C8.27 4.64 8.5 4.11 8.97 3.65C9.44 3.18 10 2.95 10.63 2.95C10.78 2.95 10.93 2.97 11.07 3C11.22 3.04 11.36 3.1 11.5 3.17C11.5 3.05 11.5 2.94 11.5 2.82C11.5 2.44 11.63 2.12 11.89 1.85C12.15 1.58 12.47 1.45 12.84 1.45C13.22 1.45 13.55 1.58 13.81 1.85C14.08 2.12 14.21 2.44 14.21 2.82C14.21 2.94 14.2 3.05 14.17 3.17C14.31 3.1 14.46 3.04 14.6 3C14.75 2.97 14.89 2.95 15.05 2.95C15.68 2.95 16.21 3.18 16.68 3.65C17.14 4.11 17.37 4.64 17.37 5.27C17.37 5.75 17.23 6.16 16.95 6.51C18.38 6.94 19.53 7.75 20.39 8.94C21.25 10.13 21.68 11.5 21.68 13V19H24V21H2Z"/>
                </svg>
              </div>
            </div>
            <!-- Decorative Elements -->
            <div class="absolute -top-4 -right-4 w-20 h-20 bg-amber-500/20 rounded-full blur-xl animate-pulse"></div>
            <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-600/30 rounded-full blur-lg animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#about" class="text-stone-400 hover:text-amber-500 transition-colors">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
