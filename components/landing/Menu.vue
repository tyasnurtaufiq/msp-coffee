<template>
  <section id="menu" class="py-24 bg-stone-900">
    <div class="container mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 bg-amber-600/20 rounded-full text-amber-400 text-sm font-medium mb-6">
          <span class="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
          Menu Favorit
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">
          Menu <span class="text-amber-500">Andalan</span> Kami
        </h2>
        <p class="text-stone-400 text-lg max-w-2xl mx-auto">
          Temukan varian kopi favorit yang siap menemani harimu
        </p>
      </div>

      <!-- Menu Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Kopi Gula Aren -->
        <div class="group bg-gradient-to-br from-stone-800 to-stone-850 rounded-3xl p-8 hover:shadow-2xl hover:shadow-amber-600/10 transition-all duration-500 transform hover:-translate-y-2 border border-stone-700/50">
          <div class="w-full h-48 mb-6 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <img 
              src="~/assets/img/gula_aren.jpg" 
              alt="Kopi Gula Aren" 
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">Kopi Gula Aren</h3>
          <p class="text-stone-400 mb-6 leading-relaxed">
            Perpaduan sempurna kopi robusta dengan gula aren asli yang memberikan rasa manis alami dan aroma karamel.
          </p>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-amber-500">Rp 19.000</span>
            <div class="flex items-center text-amber-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span class="ml-1 text-sm">4.9</span>
            </div>
          </div>
        </div>

        <!-- Spanish Latte -->
        <div class="group bg-gradient-to-br from-stone-800 to-stone-850 rounded-3xl p-8 hover:shadow-2xl hover:shadow-amber-600/10 transition-all duration-500 transform hover:-translate-y-2 border border-stone-700/50">
          <div class="w-full h-48 mb-6 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <img 
              src="~/assets/img/spanish_latte.jpg" 
              alt="Spanish Latte" 
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">Spanish Latte</h3>
          <p class="text-stone-400 mb-6 leading-relaxed">
            Espresso kuat dengan susu kental manis yang creamy, menciptakan harmoni rasa yang lembut dan menggoda.
          </p>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-amber-500">Rp 19.000</span>
            <div class="flex items-center text-amber-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span class="ml-1 text-sm">4.8</span>
            </div>
          </div>
        </div>

        <!-- Honey Coffee -->
        <div class="group bg-gradient-to-br from-stone-800 to-stone-850 rounded-3xl p-8 hover:shadow-2xl hover:shadow-amber-600/10 transition-all duration-500 transform hover:-translate-y-2 border border-stone-700/50">
          <div class="w-full h-48 mb-6 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <img 
              src="~/assets/img/honey.jpg" 
              alt="Honey Coffee" 
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">Honey Coffee</h3>
          <p class="text-stone-400 mb-6 leading-relaxed">
            Kombinasi unik kopi dengan madu murni pilihan dan sedikit susu, memberikan sensasi manis alami yang menyegarkan.
          </p>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-amber-500">Rp 19.000</span>
            <div class="flex items-center text-amber-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span class="ml-1 text-sm">4.9</span>
            </div>
          </div>
        </div>

        <!-- Black No Sugar -->
        <div class="group bg-gradient-to-br from-stone-800 to-stone-850 rounded-3xl p-8 hover:shadow-2xl hover:shadow-amber-600/10 transition-all duration-500 transform hover:-translate-y-2 border border-stone-700/50">
          <div class="w-full h-48 mb-6 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <img 
              src="~/assets/img/black-no-sugar.jpeg" 
              alt="Black No Sugar" 
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">Black No Sugar</h3>
          <p class="text-stone-400 mb-6 leading-relaxed">
            Kopi hitam murni tanpa gula, menyajikan cita rasa asli kopi robusta yang kuat dan bold untuk pencinta kopi sejati.
          </p>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-amber-500">Rp 15.000</span>
            <div class="flex items-center text-amber-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span class="ml-1 text-sm">4.7</span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <!-- <div class="text-center mt-16">
        <NuxtLink 
          to="/login" 
          class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-amber-600/30 transition-all duration-300 transform hover:-translate-y-1"
        >
          Lihat Semua Menu
          <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div> -->
    </div>
  </section>
</template>
