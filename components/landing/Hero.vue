<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Coffee Background Image -->
    <div class="absolute inset-0">
      <img 
        src="~/assets/img/coffee-hero-bg.png" 
        alt="Coffee Background" 
        class="w-full h-full object-cover"
      />
      <!-- Dark Overlay for readability -->
      <div class="absolute inset-0 bg-gradient-to-br from-stone-900/85 via-stone-800/80 to-amber-900/75"></div>
    </div>

    <!-- Floating Coffee Beans Animation (Enhanced) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Coffee bean SVG decorations -->
      <svg class="coffee-bean-svg absolute w-8 h-12 opacity-30" style="top: 15%; left: 8%; animation: float 6s ease-in-out infinite;" viewBox="0 0 24 36" fill="#92400e">
        <ellipse cx="12" cy="18" rx="10" ry="16"/>
        <path d="M12 4 Q12 18 12 32" stroke="#451a03" stroke-width="2" fill="none"/>
      </svg>
      <svg class="coffee-bean-svg absolute w-6 h-9 opacity-25" style="top: 35%; right: 12%; animation: float 8s ease-in-out infinite 1s;" viewBox="0 0 24 36" fill="#78350f">
        <ellipse cx="12" cy="18" rx="10" ry="16"/>
        <path d="M12 4 Q12 18 12 32" stroke="#451a03" stroke-width="2" fill="none"/>
      </svg>
      <svg class="coffee-bean-svg absolute w-10 h-14 opacity-20" style="bottom: 25%; left: 15%; animation: float 7s ease-in-out infinite 2s;" viewBox="0 0 24 36" fill="#92400e">
        <ellipse cx="12" cy="18" rx="10" ry="16"/>
        <path d="M12 4 Q12 18 12 32" stroke="#451a03" stroke-width="2" fill="none"/>
      </svg>
      <svg class="coffee-bean-svg absolute w-5 h-8 opacity-25" style="top: 60%; right: 25%; animation: float 9s ease-in-out infinite 0.5s;" viewBox="0 0 24 36" fill="#78350f">
        <ellipse cx="12" cy="18" rx="10" ry="16"/>
        <path d="M12 4 Q12 18 12 32" stroke="#451a03" stroke-width="2" fill="none"/>
      </svg>
      <svg class="coffee-bean-svg absolute w-7 h-10 opacity-20" style="top: 75%; left: 5%; animation: float 10s ease-in-out infinite 3s;" viewBox="0 0 24 36" fill="#92400e">
        <ellipse cx="12" cy="18" rx="10" ry="16"/>
        <path d="M12 4 Q12 18 12 32" stroke="#451a03" stroke-width="2" fill="none"/>
      </svg>
      <svg class="coffee-bean-svg absolute w-4 h-6 opacity-30" style="top: 10%; right: 30%; animation: float 7s ease-in-out infinite 4s;" viewBox="0 0 24 36" fill="#b45309">
        <ellipse cx="12" cy="18" rx="10" ry="16"/>
        <path d="M12 4 Q12 18 12 32" stroke="#451a03" stroke-width="2" fill="none"/>
      </svg>
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
            
            <NuxtLink 
              to="/menu" 
              class="px-8 py-4 border-2 border-stone-600 text-white font-semibold rounded-xl hover:bg-stone-800 hover:border-stone-500 transition-all duration-300"
            >
              Lihat Menu
            </NuxtLink>
          </div>

          <!-- Stats -->
          <div class="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
            <div class="text-center">
              <div class="text-3xl font-bold text-amber-500">500+</div>
              <div class="text-stone-400 text-sm">Pelanggan</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-amber-500">3</div>
              <div class="text-stone-400 text-sm">Menu Varian</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-amber-500">4.9★</div>
              <div class="text-stone-400 text-sm">Rating</div>
            </div>
          </div>
        </div>

        <!-- Hero Image - Coffee Bottle -->
        <div class="flex-1 flex justify-center lg:justify-end">
          <div class="relative group">
            <!-- Glow Background -->
            <div class="absolute inset-0 bg-gradient-to-br from-amber-500/40 to-amber-700/30 rounded-3xl blur-3xl transform scale-110 group-hover:scale-125 transition-transform duration-700"></div>
            
            <!-- Floating Coffee Bottle -->
            <div class="relative animate-float-bottle">
              <img 
                src="~/assets/img/product.png" 
                alt="MSP Coffee Premium Bottle" 
                class="w-100 h-auto lg:w-96 drop-shadow-2xl transform hover:scale-125 transition-transform duration-500"
              />
              
              <!-- Sparkle Effects -->
              <div class="absolute top-10 right-4 w-3 h-3 bg-amber-300 rounded-full animate-ping opacity-75"></div>
              <div class="absolute top-1/3 left-0 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-50 delay-300"></div>
              <div class="absolute bottom-1/4 right-8 w-2 h-2 bg-white rounded-full animate-ping opacity-60 delay-700"></div>
            </div>
            
            <!-- Decorative Glow Elements -->
            <div class="absolute -top-8 -right-8 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div class="absolute -bottom-8 -left-8 w-24 h-24 bg-amber-600/30 rounded-full blur-xl animate-pulse delay-500"></div>
            <div class="absolute top-1/2 -right-4 w-16 h-16 bg-amber-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>
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

@keyframes float-bottle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.animate-float-bottle {
  animation: float-bottle 4s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-700 {
  animation-delay: 700ms;
}

.delay-1000 {
  animation-delay: 1000ms;
}
</style>
