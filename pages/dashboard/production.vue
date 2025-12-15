<template>
  <div class="min-h-screen bg-stone-50">
    <!-- Sidebar -->
    <DashboardSidebar />

    <!-- Main Content -->
    <div class="lg:ml-64 p-4 lg:p-8 pt-16 lg:pt-8">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-stone-900">Kalkulasi Produksi Maksimal</h1>
        <p class="text-stone-600 mt-1">Hitung perkiraan maksimal produksi berdasarkan stok bahan baku (Metode Eliminasi Gauss)</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Current Stock Info -->
        <div class="bg-white rounded-xl shadow-sm p-6">
          <h2 class="text-xl font-bold text-stone-900 mb-6 flex items-center">
            <svg class="h-6 w-6 mr-2 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            Stok Bahan Baku Tersedia
          </h2>

          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
              <div class="flex items-center space-x-3">
                <div class="bg-amber-600 p-2 rounded-lg">
                  <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <span class="font-semibold text-stone-900">Biji Kopi</span>
              </div>
              <span class="text-xl font-bold text-amber-600">{{ stockStore.stock.coffee }} g</span>
            </div>

            <div class="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div class="flex items-center space-x-3">
                <div class="bg-blue-600 p-2 rounded-lg">
                  <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <span class="font-semibold text-stone-900">Susu</span>
              </div>
              <span class="text-xl font-bold text-blue-600">{{ stockStore.stock.milk }} ml</span>
            </div>

            <div class="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div class="flex items-center space-x-3">
                <div class="bg-green-600 p-2 rounded-lg">
                  <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <span class="font-semibold text-stone-900">Sirup</span>
              </div>
              <span class="text-xl font-bold text-green-600">{{ stockStore.stock.syrup }} ml</span>
            </div>
          </div>

          <!-- Product Recipes -->
          <!-- <div class="mt-6 pt-6 border-t border-stone-200">
            <h3 class="font-semibold text-stone-900 mb-4">Resep Per Produk:</h3>
            <div class="space-y-3 text-sm">
              <div class="flex items-center justify-between">
                <span class="text-stone-600">Kopi Gula Aren</span>
                <span class="text-stone-900 font-medium">20g kopi + 30ml sirup</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-stone-600">Spanish Latte</span>
                <span class="text-stone-900 font-medium">20g kopi + 150ml susu + 20ml sirup</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-stone-600">Honey Coffee</span>
                <span class="text-stone-900 font-medium">20g kopi + 50ml susu + 25ml sirup</span>
              </div>
            </div>
          </div> -->
        </div>

        <!-- Calculation Results -->
        <div class="bg-white rounded-xl shadow-sm p-6">
          <h2 class="text-xl font-bold text-stone-900 mb-6 flex items-center">
            <svg class="h-6 w-6 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Hasil Perhitungan
          </h2>

          <div class="mb-6">
            <button 
              @click="calculateProduction"
              class="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all font-semibold text-lg shadow-lg"
            >
              🧮 Hitung Produksi Maksimal
            </button>
          </div>

          <div v-if="calculationResult.length > 0" class="space-y-4">
            <div 
              v-for="(result, idx) in calculationResult" 
              :key="idx"
              class="border-2 rounded-lg p-5 transition-all hover:shadow-md"
              :class="{
                'border-amber-300 bg-amber-50': idx === 0,
                'border-blue-300 bg-blue-50': idx === 1,
                'border-green-300 bg-green-50': idx === 2
              }"
            >
              <div class="flex items-center justify-between mb-3">
                <h3 class="font-bold text-lg text-stone-900">{{ result.product }}</h3>
                <span 
                  class="px-3 py-1 rounded-full text-xs font-semibold"
                  :class="{
                    'bg-amber-200 text-amber-800': idx === 0,
                    'bg-blue-200 text-blue-800': idx === 1,
                    'bg-green-200 text-green-800': idx === 2
                  }"
                >
                  Maksimal
                </span>
              </div>

              <div class="flex items-baseline space-x-2 mb-2">
                <span class="text-4xl font-bold"
                  :class="{
                    'text-amber-600': idx === 0,
                    'text-blue-600': idx === 1,
                    'text-green-600': idx === 2
                  }"
                >
                  {{ result.maxQuantity }}
                </span>
                <span class="text-stone-600">cup</span>
              </div>

              <div class="flex items-center text-sm text-stone-600 mt-3">
                <svg class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Dibatasi oleh: <strong>{{ result.limitedBy }}</strong></span>
              </div>
            </div>

            <!-- Analysis -->
            <div class="mt-6 p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <h4 class="font-semibold text-purple-900 mb-3 flex items-center">
                <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Analisis
              </h4>
              <p class="text-sm text-purple-800 leading-relaxed">
                Berdasarkan perhitungan Eliminasi Gauss, dengan stok bahan baku yang tersedia saat ini, Anda dapat memproduksi maksimal 
                <strong>{{ getTotalCups() }} cup kopi</strong> dengan kombinasi optimal dari ketiga produk.
              </p>
            </div>
          </div>

          <div v-else class="text-center py-12">
            <svg class="h-16 w-16 text-stone-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <p class="text-stone-500">Klik tombol di atas untuk menghitung produksi maksimal</p>
          </div>
        </div>
      </div>

      <!-- Explanation -->
      <div class="mt-8 bg-gradient-to-br from-stone-900 to-stone-800 rounded-xl shadow-sm p-8 text-white">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <svg class="h-7 w-7 mr-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Tentang Metode Eliminasi Gauss
        </h2>
        <p class="text-stone-300 leading-relaxed mb-4">
          Metode Eliminasi Gauss adalah algoritma dalam aljabar linear untuk menyelesaikan sistem persamaan linear. 
          Dalam konteks ini, metode ini digunakan untuk menghitung produksi maksimal dengan mempertimbangkan keterbatasan bahan baku.
        </p>
        <div class="grid md:grid-cols-3 gap-4 mt-6">
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div class="text-amber-400 font-bold mb-2">1. Identifikasi Variabel</div>
            <p class="text-sm text-stone-300">Setiap produk dan bahan baku menjadi variabel dalam persamaan</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div class="text-amber-400 font-bold mb-2">2. Buat Matriks</div>
            <p class="text-sm text-stone-300">Resep produk membentuk matriks koefisien untuk perhitungan</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div class="text-amber-400 font-bold mb-2">3. Hitung Maksimum</div>
            <p class="text-sm text-stone-300">Temukan nilai maksimal dengan batasan stok bahan baku</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})

const stockStore = useStockStore()
const { calculateMaxProduction } = useGaussElimination()

const calculationResult = ref([])

const calculateProduction = () => {
  calculationResult.value = calculateMaxProduction(
    stockStore.stock,
    stockStore.products
  )
}

const getTotalCups = () => {
  return calculationResult.value.reduce((sum, item) => sum + item.maxQuantity, 0)
}
</script>