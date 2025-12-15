<template>
  <div class="min-h-screen bg-stone-50">
    <LandingNavbar />
    <div class="pt-16">
      <!-- Team Section -->
      <section class="py-24 bg-gradient-to-br from-stone-100 to-stone-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <div class="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mb-6">
              <span class="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
              Tim Kami
            </div>
            <h1 class="text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
              Tim <span class="text-amber-600">Kami</span>
            </h1>
            <p class="text-stone-600 text-lg max-w-2xl mx-auto">
              Tim kami terdiri dari para profesional yang berkomitmen untuk selalu memberikan yang terbaik.
            </p>
          </div>

          <!-- Team Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Team Member 1 -->
            <div class="group">
              <div class="relative">
                <!-- Professional Frame -->
                <div class="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div class="relative bg-white rounded-3xl p-3 shadow-xl">
                  <div class="aspect-[3/4] rounded-2xl bg-gradient-to-br from-stone-700 to-stone-800 flex items-center justify-center overflow-hidden">
                    <img src="~/assets/img/yumarlin.png" alt="Yumarlin" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div class="mt-6 text-center">
                <h3 class="text-xl font-bold text-stone-900">Yumarlin MZ</h3>
                <p class="text-amber-600 font-medium">Dosen Pengampu</p>
                <p class="text-stone-500 text-sm mt-2">Mata Kuliah Metode Numerik</p>
              </div>
            </div>

            <!-- Team Member 2 -->
            <div class="group">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                <div class="relative bg-white rounded-3xl p-3 shadow-xl">
                  <div class="aspect-[3/4] rounded-2xl bg-gradient-to-br from-stone-700 to-stone-800 flex items-center justify-center overflow-hidden">
                    <img src="~/assets/img/tyas.png" alt="Tyas Nur Taufiq" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div class="mt-6 text-center">
                <h3 class="text-xl font-bold text-stone-900">Tyas Nur Taufiq</h3>
                <p class="text-amber-600 font-medium">Ketua Tim</p>
                <p class="text-stone-500 text-sm mt-2">Mahasiswa Informatika</p>
              </div>
            </div>

            <!-- Team Member 3 -->
            <div class="group">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div class="relative bg-white rounded-3xl p-3 shadow-xl">
                  <div class="aspect-[3/4] rounded-2xl bg-gradient-to-br from-stone-700 to-stone-800 flex items-center justify-center overflow-hidden">
                    <img src="~/assets/img/vanya.jpg" alt="Lidya Stevany Aulia" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div class="mt-6 text-center">
                <h3 class="text-xl font-bold text-stone-900">Lidya Stevany Aulia</h3>
                <p class="text-amber-600 font-medium">Anggota Tim</p>
                <p class="text-stone-500 text-sm mt-2">Mahasiswa Informatika</p>
              </div>
            </div>

            <!-- Team Member 4 -->
            <div class="group">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                <div class="relative bg-white rounded-3xl p-3 shadow-xl">
                  <div class="aspect-[3/4] rounded-2xl bg-gradient-to-br from-stone-700 to-stone-800 flex items-center justify-center overflow-hidden">
                    <img src="~/assets/img/damar.png" alt="Damar Kurniawan" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div class="mt-6 text-center">
                <h3 class="text-xl font-bold text-stone-900">Damar Kurniawan</h3>
                <p class="text-amber-600 font-medium">Anggota Tim</p>
                <p class="text-stone-500 text-sm mt-2">Mahasiswa Informatika</p>
              </div>
            </div>
          </div>

          <!-- Coffee Facts -->
          <div class="mt-20 bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-8 lg:p-12">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div class="text-4xl lg:text-5xl font-bold text-amber-500 mb-2">500+</div>
                <div class="text-stone-400">Cangkir Perhari</div>
              </div>
              <div>
                <div class="text-4xl lg:text-5xl font-bold text-amber-500 mb-2">15+</div>
                <div class="text-stone-400">Menu Signature</div>
              </div>
              <div>
                <div class="text-4xl lg:text-5xl font-bold text-amber-500 mb-2">3</div>
                <div class="text-stone-400">Tahun Pengalaman</div>
              </div>
              <div>
                <div class="text-4xl lg:text-5xl font-bold text-amber-500 mb-2">4.9★</div>
                <div class="text-stone-400">Rating Pelanggan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Tim Kami - MSP Coffee',
  meta: [
    { name: 'description', content: 'Kenali para barista profesional MSP Coffee yang menyajikan kopi terbaik untuk Anda' }
  ]
})
</script>
