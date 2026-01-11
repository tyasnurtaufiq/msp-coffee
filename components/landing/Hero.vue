<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Coffee Background Image -->
    <div class="absolute inset-0">
      <img 
        src="~/assets/img/coffee-hero-bg.png" 
        alt="Coffee Background" 
        class="w-full h-full object-cover"
      />
      <!-- Dark Overlay for readability -->
      <div class="absolute inset-0 bg-gradient-to-br from-stone-900/90 via-stone-800/85 to-amber-900/80"></div>
    </div>

    <!-- Animated Coffee Steam -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Steam particles -->
      <div class="steam-particle absolute w-4 h-4 bg-white/5 rounded-full blur-sm" style="top: 40%; right: 35%; animation: steam 4s ease-in-out infinite;"></div>
      <div class="steam-particle absolute w-3 h-3 bg-white/5 rounded-full blur-sm" style="top: 45%; right: 38%; animation: steam 5s ease-in-out infinite 1s;"></div>
      <div class="steam-particle absolute w-5 h-5 bg-white/3 rounded-full blur-md" style="top: 35%; right: 32%; animation: steam 6s ease-in-out infinite 2s;"></div>
      
      <!-- Coffee bean decorations -->
      <svg class="coffee-bean absolute w-8 h-12 opacity-30" style="top: 12%; left: 6%; animation: float 6s ease-in-out infinite;" viewBox="0 0 24 36" fill="#92400e">
        <ellipse cx="12" cy="18" rx="10" ry="16"/>
        <path d="M12 4 Q12 18 12 32" stroke="#451a03" stroke-width="2" fill="none"/>
      </svg>
      <svg class="coffee-bean absolute w-6 h-9 opacity-25" style="top: 28%; right: 10%; animation: float 8s ease-in-out infinite 1s;" viewBox="0 0 24 36" fill="#78350f">
        <ellipse cx="12" cy="18" rx="10" ry="16"/>
        <path d="M12 4 Q12 18 12 32" stroke="#451a03" stroke-width="2" fill="none"/>
      </svg>
      <svg class="coffee-bean absolute w-10 h-14 opacity-20" style="bottom: 20%; left: 12%; animation: float 7s ease-in-out infinite 2s;" viewBox="0 0 24 36" fill="#92400e">
        <ellipse cx="12" cy="18" rx="10" ry="16"/>
        <path d="M12 4 Q12 18 12 32" stroke="#451a03" stroke-width="2" fill="none"/>
      </svg>
      <svg class="coffee-bean absolute w-5 h-8 opacity-25" style="top: 55%; right: 22%; animation: float 9s ease-in-out infinite 0.5s;" viewBox="0 0 24 36" fill="#78350f">
        <ellipse cx="12" cy="18" rx="10" ry="16"/>
        <path d="M12 4 Q12 18 12 32" stroke="#451a03" stroke-width="2" fill="none"/>
      </svg>
      <svg class="coffee-bean absolute w-7 h-10 opacity-20" style="bottom: 15%; right: 8%; animation: float 10s ease-in-out infinite 3s;" viewBox="0 0 24 36" fill="#b45309">
        <ellipse cx="12" cy="18" rx="10" ry="16"/>
        <path d="M12 4 Q12 18 12 32" stroke="#451a03" stroke-width="2" fill="none"/>
      </svg>
      <svg class="coffee-bean absolute w-4 h-6 opacity-30" style="top: 8%; right: 28%; animation: float 7s ease-in-out infinite 4s;" viewBox="0 0 24 36" fill="#b45309">
        <ellipse cx="12" cy="18" rx="10" ry="16"/>
        <path d="M12 4 Q12 18 12 32" stroke="#451a03" stroke-width="2" fill="none"/>
      </svg>
      
      <!-- Glowing orbs -->
      <div class="absolute w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" style="top: 10%; left: -10%; animation: pulse 8s ease-in-out infinite;"></div>
      <div class="absolute w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" style="bottom: 10%; right: -5%; animation: pulse 10s ease-in-out infinite 2s;"></div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-6 lg:px-12 py-16 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <!-- Text Content -->
        <div class="text-center lg:text-left order-2 lg:order-1">
          <!-- Badge -->
          <div class="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-amber-600/30 to-amber-700/20 rounded-full text-amber-400 text-sm font-semibold mb-8 backdrop-blur-sm border border-amber-500/30 shadow-lg shadow-amber-500/10">
            <span class="w-2.5 h-2.5 bg-amber-500 rounded-full mr-3 animate-pulse"></span>
            Premium Coffee Experience
          </div>
          
          <!-- Main Title -->
          <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-[1.1]">
            <span class="block">MSP</span>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 drop-shadow-lg">Coffee</span>
          </h1>
          
          <!-- Subtitle -->
          <p class="text-lg sm:text-xl lg:text-2xl text-stone-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Nikmati kopi premium pilihan dari biji kopi terbaik <span class="text-amber-400 font-semibold">Nusantara</span>. Setiap cangkir adalah perjalanan rasa yang tak terlupakan.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <NuxtLink 
              to="/login" 
              class="group relative px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-bold rounded-2xl shadow-xl shadow-amber-600/30 hover:shadow-amber-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span class="relative z-10 flex items-center justify-center gap-3">
                <span>Mulai Sekarang</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NuxtLink>
            
            <NuxtLink 
              to="/menu" 
              class="group px-8 py-4 border-2 border-stone-500/50 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-amber-500/50 backdrop-blur-sm transition-all duration-300"
            >
              <span class="flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                Lihat Menu
              </span>
            </NuxtLink>
          </div>

          <!-- Stats Cards -->
          <div class="grid grid-cols-3 gap-4 sm:gap-6">
            <div class="bg-gradient-to-br from-stone-800/80 to-stone-900/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-stone-700/50 shadow-xl hover:border-amber-500/30 transition-all duration-300 group">
              <div class="text-3xl sm:text-4xl font-black text-amber-400 mb-1 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div class="text-stone-400 text-xs sm:text-sm font-medium">Pelanggan Puas</div>
            </div>
            <div class="bg-gradient-to-br from-stone-800/80 to-stone-900/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-stone-700/50 shadow-xl hover:border-amber-500/30 transition-all duration-300 group">
              <div class="flex items-center justify-center sm:justify-start">
                <span class="text-3xl sm:text-4xl font-black text-amber-400 group-hover:scale-110 transition-transform duration-300">4</span>
                <span class="text-amber-400/70 text-lg ml-1">Varian</span>
              </div>
              <div class="text-stone-400 text-xs sm:text-sm font-medium">Menu Pilihan</div>
            </div>
            <div class="bg-gradient-to-br from-stone-800/80 to-stone-900/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-stone-700/50 shadow-xl hover:border-amber-500/30 transition-all duration-300 group">
              <div class="text-3xl sm:text-4xl font-black text-amber-400 mb-1 group-hover:scale-110 transition-transform duration-300">4.9<span class="text-amber-500">★</span></div>
              <div class="text-stone-400 text-xs sm:text-sm font-medium">Rating Terbaik</div>
            </div>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="flex justify-center lg:justify-end order-1 lg:order-2">
          <div class="relative group">
            <!-- Background Glow -->
            <div class="absolute inset-0 bg-gradient-to-br from-amber-500/50 via-amber-600/30 to-transparent rounded-full blur-3xl transform scale-125 group-hover:scale-150 transition-transform duration-1000"></div>
            <div class="absolute -inset-10 bg-gradient-radial from-amber-500/20 to-transparent rounded-full blur-2xl animate-pulse-slow"></div>
            
            <!-- Product Image Container -->
            <div class="relative animate-float-bottle">
              <!-- Main Product Image -->
              <img 
                src="~/assets/img/product.png" 
                alt="MSP Coffee Premium Bottle" 
                class="w-80 sm:w-96 lg:w-[450px] xl:w-[550px] 2xl:w-[600px] h-auto drop-shadow-2xl transform hover:scale-110 transition-transform duration-500"
              />
              
              <!-- Floating Elements -->
              <div class="absolute -top-6 -right-6 bg-gradient-to-br from-amber-500 to-amber-600 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-bounce-slow">
                ☕ Premium
              </div>
              
              <!-- Sparkle Effects -->
              <div class="absolute top-8 right-2 w-4 h-4 bg-amber-300 rounded-full animate-ping opacity-75"></div>
              <div class="absolute top-1/3 -left-2 w-3 h-3 bg-amber-400 rounded-full animate-ping opacity-60" style="animation-delay: 300ms;"></div>
              <div class="absolute bottom-1/4 right-6 w-2 h-2 bg-white rounded-full animate-ping opacity-50" style="animation-delay: 700ms;"></div>
              <div class="absolute top-1/2 -right-4 w-3 h-3 bg-amber-500 rounded-full animate-ping opacity-60" style="animation-delay: 500ms;"></div>
            </div>
            
            <!-- Decorative Glow Orbs -->
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/25 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-amber-600/35 rounded-full blur-2xl animate-pulse" style="animation-delay: 500ms;"></div>
            <div class="absolute top-1/2 -right-8 w-20 h-20 bg-amber-400/25 rounded-full blur-xl animate-pulse" style="animation-delay: 1000ms;"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <span class="text-stone-500 text-xs font-medium tracking-widest uppercase">Scroll</span>
      <a href="#about" class="text-stone-400 hover:text-amber-500 transition-colors">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </div>

    <!-- Bottom Gradient Fade -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-900 to-transparent pointer-events-none"></div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

@keyframes float-bottle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes steam {
  0% { transform: translateY(0) scale(1); opacity: 0.05; }
  50% { transform: translateY(-40px) scale(1.5); opacity: 0.1; }
  100% { transform: translateY(-80px) scale(2); opacity: 0; }
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float-bottle {
  animation: float-bottle 4s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 70%);
}
</style>
