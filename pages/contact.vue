<template>
  <div class="min-h-screen bg-stone-50">
    <LandingNavbar />
    <div class="pt-16">
      <!-- Contact Section -->
      <section class="py-24 bg-stone-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <div class="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mb-6">
              <span class="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
              Hubungi Kami
            </div>
            <h1 class="text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
              Mari <span class="text-amber-600">Terhubung</span>
            </h1>
            <p class="text-stone-600 text-lg max-w-2xl mx-auto">
              Ada pertanyaan atau masukan? Kami senang mendengar dari Anda
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <!-- Contact Form -->
            <div class="bg-white rounded-3xl p-8 shadow-xl shadow-stone-200/50">
              <h2 class="text-2xl font-bold text-stone-900 mb-6">Kirim Pesan</h2>
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-stone-700 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name"
                    class="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    placeholder="Masukkan nama Anda"
                    required
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-stone-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email"
                    class="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div>
                  <label for="subject" class="block text-sm font-medium text-stone-700 mb-2">Subjek</label>
                  <input 
                    type="text" 
                    id="subject" 
                    v-model="form.subject"
                    class="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    placeholder="Subjek pesan"
                    required
                  />
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-stone-700 mb-2">Pesan</label>
                  <textarea 
                    id="message" 
                    v-model="form.message"
                    rows="5"
                    class="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  class="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-amber-600/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            <!-- Contact Info -->
            <div class="space-y-8">
              <!-- Info Cards -->
              <div class="bg-white rounded-3xl p-8 shadow-xl shadow-stone-200/50">
                <h2 class="text-2xl font-bold text-stone-900 mb-6">Informasi Kontak</h2>
                <div class="space-y-6">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-stone-900">Alamat</h4>
                      <p class="text-stone-500">Jl. Kopi Nusantara No. 123<br>Jakarta Selatan, 12345</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-stone-900">Telepon</h4>
                      <p class="text-stone-500">+62 812-3456-7890</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-stone-900">Email</h4>
                      <p class="text-stone-500">hello@mspcoffee.id</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Operating Hours -->
              <div class="bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-8 text-white">
                <h2 class="text-2xl font-bold mb-6">Jam Operasional</h2>
                <div class="space-y-4">
                  <div class="flex justify-between items-center pb-3 border-b border-stone-700">
                    <span class="text-stone-300">Senin - Jumat</span>
                    <span class="text-amber-500 font-semibold">07:00 - 22:00</span>
                  </div>
                  <div class="flex justify-between items-center pb-3 border-b border-stone-700">
                    <span class="text-stone-300">Sabtu</span>
                    <span class="text-amber-500 font-semibold">08:00 - 23:00</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-stone-300">Minggu</span>
                    <span class="text-amber-500 font-semibold">08:00 - 21:00</span>
                  </div>
                </div>
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
  title: 'Contact - MSP Coffee',
  meta: [
    { name: 'description', content: 'Hubungi MSP Coffee - Pertanyaan, saran, atau reservasi' }
  ]
})

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission
  alert('Terima kasih! Pesan Anda telah terkirim.')
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>
