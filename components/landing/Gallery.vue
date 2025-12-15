<template>
  <section class="py-24 bg-stone-100">
    <div class="container mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mb-6">
          <span class="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
          Galeri Kami
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
          Momen <span class="text-amber-600">Berharga</span>
        </h2>
        <p class="text-stone-600 text-lg max-w-2xl mx-auto">
          Setiap sudut MSP Coffee menawarkan pengalaman yang tak terlupakan
        </p>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
        <!-- Large Image -->
        <div class="col-span-2 row-span-2 relative group overflow-hidden rounded-3xl">
          <img 
            src="~/assets/img/gallery-1.jpg" 
            alt="Proses Brewing" 
            class="w-full h-full min-h-[400px] object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <div class="text-white">
              <h4 class="font-semibold text-lg">Foto Bersama</h4>
              <p class="text-stone-300 text-sm"></p>
            </div>
          </div>
        </div>

        <!-- Small Images -->
        <div class="relative group overflow-hidden rounded-3xl">
          <img 
            src="~/assets/img/gallery-2.jpg" 
            alt="Biji Kopi Premium" 
            class="w-full h-48 lg:h-full min-h-[180px] object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span class="text-white font-medium">Proses Pembuatan Kopi</span>
          </div>
        </div>

        <div class="relative group overflow-hidden rounded-3xl">
          <img 
            src="~/assets/img/gallery-3.jpg" 
            alt="Interior Nyaman" 
            class="w-full h-48 lg:h-full min-h-[180px] object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span class="text-white font-medium">Proses Pembuatan Kopi</span>
          </div>
        </div>

        <div class="relative group overflow-hidden rounded-3xl">
          <img 
            src="~/assets/img/gallery-4.jpg" 
            alt="Roasting Fresh" 
            class="w-full h-48 lg:h-full min-h-[180px] object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span class="text-white font-medium">Proses Pembuatan Kopi</span>
          </div>
        </div>

        <div class="relative group overflow-hidden rounded-3xl">
          <img 
            src="~/assets/img/gallery-5.jpg" 
            alt="Team Barista" 
            class="w-full h-48 lg:h-full min-h-[180px] object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span class="text-white font-medium">Proses Pembuatan Kopi</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
