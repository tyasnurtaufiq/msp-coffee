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

          <!-- Pure Gauss Elimination Calculator (Moved Here) -->
          <div class="mt-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
            <h3 class="text-lg font-bold text-purple-900 mb-4 flex items-center">
              <svg class="h-5 w-5 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Kalkulator Produk
            </h3>
            <p class="text-sm text-purple-700 mb-4">Perhitungan Maksimal Produk dengan batasan stok bahan baku.</p>

            <!-- Calculate Button -->
            <button 
              @click="calculatePureGauss"
              class="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all font-semibold shadow-lg mb-4"
            >
              🔢 Hitung Produksi Maksimal
            </button>

            <!-- Results -->
            <div v-if="pureGaussResult" class="space-y-3">
              <!-- Product A -->
              <div class="rounded-lg p-4 border"
                :class="pureGaussResult.rawA < 0 
                  ? 'bg-gradient-to-br from-red-100 to-red-50 border-red-300' 
                  : 'bg-gradient-to-br from-amber-100 to-amber-50 border-amber-300'">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-bold" :class="pureGaussResult.rawA < 0 ? 'text-red-800' : 'text-amber-800'">Kopi Gula Aren</span>
                  <span class="text-white px-2 py-0.5 rounded text-xs" :class="pureGaussResult.rawA < 0 ? 'bg-red-600' : 'bg-amber-600'">Kopi Gula Aren</span>
                </div>
                <div class="text-3xl font-bold" :class="pureGaussResult.rawA < 0 ? 'text-red-600' : 'text-amber-600'">
                  {{ pureGaussResult.rawA }} <span class="text-sm font-normal">cup</span>
                </div>
                <div v-if="pureGaussResult.rawA < 0" class="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded border border-red-200">
                  ⚠️ Seharusnya produk Kopi Gula Aren menjadi <strong>{{ Math.abs(pureGaussResult.rawA) }} cup</strong>, namun dikarenakan bahan baku kurang, maka hasilnya menjadi negatif.
                </div>
              </div>
              
              <!-- Product B -->
              <div class="rounded-lg p-4 border"
                :class="pureGaussResult.rawB < 0 
                  ? 'bg-gradient-to-br from-red-100 to-red-50 border-red-300' 
                  : 'bg-gradient-to-br from-blue-100 to-blue-50 border-blue-300'">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-bold" :class="pureGaussResult.rawB < 0 ? 'text-red-800' : 'text-blue-800'">Spanish Latte</span>
                  <span class="text-white px-2 py-0.5 rounded text-xs" :class="pureGaussResult.rawB < 0 ? 'bg-red-600' : 'bg-blue-600'">Spanish Latte</span>
                </div>
                <div class="text-3xl font-bold" :class="pureGaussResult.rawB < 0 ? 'text-red-600' : 'text-blue-600'">
                  {{ pureGaussResult.rawB }} <span class="text-sm font-normal">cup</span>
                </div>
                <div v-if="pureGaussResult.rawB < 0" class="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded border border-red-200">
                  ⚠️ Seharusnya produk Spanish Latte menjadi <strong>{{ Math.abs(pureGaussResult.rawB) }} cup</strong>, namun dikarenakan bahan baku kurang, maka hasilnya menjadi negatif.
                </div>
              </div>
              
              <!-- Product C -->
              <div class="rounded-lg p-4 border"
                :class="pureGaussResult.rawC < 0 
                  ? 'bg-gradient-to-br from-red-100 to-red-50 border-red-300' 
                  : 'bg-gradient-to-br from-green-100 to-green-50 border-green-300'">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-bold" :class="pureGaussResult.rawC < 0 ? 'text-red-800' : 'text-green-800'">Kopi Honey</span>
                  <span class="text-white px-2 py-0.5 rounded text-xs" :class="pureGaussResult.rawC < 0 ? 'bg-red-600' : 'bg-green-600'">Kopi Honey</span>
                </div>
                <div class="text-3xl font-bold" :class="pureGaussResult.rawC < 0 ? 'text-red-600' : 'text-green-600'">
                  {{ pureGaussResult.rawC }} <span class="text-sm font-normal">cup</span>
                </div>
                <div v-if="pureGaussResult.rawC < 0" class="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded border border-red-200">
                  ⚠️ Seharusnya produk Kopi Honey menjadi <strong>{{ Math.abs(pureGaussResult.rawC) }} cup</strong>, namun dikarenakan bahan baku kurang, maka hasilnya menjadi negatif.
                </div>
              </div>
            </div>

            <div v-else class="text-center py-6">
              <svg class="h-12 w-12 text-purple-200 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <p class="text-sm text-purple-600">Klik tombol di atas untuk menghitung</p>
            </div>
          </div>

        </div>

        <!-- Calculation Results -->
        <div class="bg-white rounded-xl shadow-sm p-6">
          <h2 class="text-xl font-bold text-stone-900 mb-6 flex items-center">
            <svg class="h-6 w-6 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Hasil Perhitungan Real
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
                Berdasarkan perhitungan dengan stok bahan baku yang tersedia saat ini, Anda dapat memproduksi maksimal 
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
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})

const stockStore = useStockStore()
const { calculateMaxProduction, gaussElimination } = useGaussElimination()

const calculationResult = ref([])
const pureGaussResult = ref(null)

const calculateProduction = () => {
  calculationResult.value = calculateMaxProduction(
    stockStore.stock,
    stockStore.products
  )
}

const getTotalCups = () => {
  return calculationResult.value.reduce((sum, item) => sum + item.maxQuantity, 0)
}

/**
 * Perhitungan Eliminasi Gauss Murni
 * Menyelesaikan sistem persamaan:
 * 25A + 20B + 18C = stok_kopi
 * 120A + 160B + 140C = stok_susu
 * 55A + 20B + 42C = stok_syrup
 */
const calculatePureGauss = () => {
  const stock = stockStore.stock
  
  // Matriks augmented [A|b]
  // Baris 1: 25A + 20B + 18C = stok_kopi
  // Baris 2: 120A + 160B + 140C = stok_susu
  // Baris 3: 55A + 20B + 42C = stok_syrup
  let matrix = [
    [25, 20, 18, stock.coffee],
    [120, 160, 140, stock.milk],
    [55, 20, 42, stock.syrup]
  ]
  
  // Deep copy untuk operasi
  matrix = matrix.map(row => [...row])
  
  // LANGKAH 1: Eliminasi kolom 1 (buat elemen di bawah pivot menjadi 0)
  // R2 = R2 - (120/25) * R1
  const factor1 = matrix[1][0] / matrix[0][0]
  for (let j = 0; j < 4; j++) {
    matrix[1][j] = matrix[1][j] - factor1 * matrix[0][j]
  }
  
  // R3 = R3 - (55/25) * R1
  const factor2 = matrix[2][0] / matrix[0][0]
  for (let j = 0; j < 4; j++) {
    matrix[2][j] = matrix[2][j] - factor2 * matrix[0][j]
  }
  
  // LANGKAH 2: Eliminasi kolom 2 (buat elemen di bawah pivot menjadi 0)
  // R3 = R3 - (matrix[2][1]/matrix[1][1]) * R2
  if (matrix[1][1] !== 0) {
    const factor3 = matrix[2][1] / matrix[1][1]
    for (let j = 0; j < 4; j++) {
      matrix[2][j] = matrix[2][j] - factor3 * matrix[1][j]
    }
  }
  
  // LANGKAH 3: Back Substitution
  // Dari baris 3: matrix[2][2] * C = matrix[2][3]
  let C = 0, B = 0, A = 0
  
  if (matrix[2][2] !== 0) {
    C = matrix[2][3] / matrix[2][2]
  }
  
  // Dari baris 2: matrix[1][1] * B + matrix[1][2] * C = matrix[1][3]
  if (matrix[1][1] !== 0) {
    B = (matrix[1][3] - matrix[1][2] * C) / matrix[1][1]
  }
  
  // Dari baris 1: matrix[0][0] * A + matrix[0][1] * B + matrix[0][2] * C = matrix[0][3]
  if (matrix[0][0] !== 0) {
    A = (matrix[0][3] - matrix[0][1] * B - matrix[0][2] * C) / matrix[0][0]
  }
  
  // Round values untuk hasil akhir (x.1-x.4 bulatkan ke bawah, x.5-x.9 bulatkan ke atas)
  const finalA = Math.round(A)
  const finalB = Math.round(B)
  const finalC = Math.round(C)
  
  // Check if solution is valid (all values >= 0)
  const valid = finalA >= 0 && finalB >= 0 && finalC >= 0
  
  pureGaussResult.value = {
    rawA: finalA,
    rawB: finalB,
    rawC: finalC,
    valid
  }
}
</script>