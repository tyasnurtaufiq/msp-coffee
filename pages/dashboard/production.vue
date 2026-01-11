<template>
  <div class="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900">
    <!-- Sidebar -->
    <DashboardSidebar />

    <!-- Main Content -->
    <div class="lg:ml-64 p-4 lg:p-8 pt-16 lg:pt-8 min-h-screen">
      <!-- Hero Header Section -->
      <div class="relative mb-8 rounded-2xl overflow-hidden bg-gradient-to-r from-amber-800/80 via-stone-800/90 to-stone-900/80 p-8 shadow-2xl border border-amber-700/30">
        <!-- Coffee Bean Decorations -->
        <div class="absolute top-4 right-8 text-6xl opacity-20">☕</div>
        <div class="absolute bottom-4 right-24 text-4xl opacity-15">🫘</div>
        <div class="absolute top-1/2 right-48 text-3xl opacity-10">☕</div>
        
        <div class="relative z-10">
          <div class="flex items-center space-x-3 mb-3">
            <div class="bg-gradient-to-br from-amber-500 to-amber-700 p-3 rounded-xl shadow-lg">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <span class="text-amber-400 text-sm font-semibold uppercase tracking-wider">Kalkulasi Produksi</span>
          </div>
          <h1 class="text-4xl lg:text-5xl font-bold text-white mb-3">Kalkulasi Produksi <span class="text-amber-400">Maksimal</span></h1>
          <p class="text-stone-300 text-lg max-w-2xl">Hitung perkiraan maksimal produksi berdasarkan stok bahan baku yang tersedia</p>
        </div>
      </div>

      <!-- Main Grid Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Stock Cards Section -->
        <div class="lg:col-span-3">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Coffee Stock Card -->
            <div class="group relative bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
              <div class="absolute -right-4 -top-4 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">☕</div>
              <div class="relative z-10">
                <div class="flex items-center justify-between mb-4">
                  <div class="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <span class="text-amber-200 text-sm font-medium">Bahan Baku</span>
                </div>
                <h3 class="text-white font-bold text-lg mb-1">Biji Kopi</h3>
                <div class="text-4xl font-bold text-white mb-2">{{ stockStore.stock.coffee.toLocaleString() }}<span class="text-xl font-normal text-amber-200 ml-1">gram</span></div>
                <div class="w-full bg-white/20 rounded-full h-2">
                  <div class="bg-white rounded-full h-2 transition-all" :style="`width: ${Math.min(stockStore.stock.coffee / 20, 100)}%`"></div>
                </div>
              </div>
            </div>

            <!-- Milk Stock Card -->
            <div class="group relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
              <div class="absolute -right-4 -top-4 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">🥛</div>
              <div class="relative z-10">
                <div class="flex items-center justify-between mb-4">
                  <div class="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <span class="text-blue-200 text-sm font-medium">Bahan Baku</span>
                </div>
                <h3 class="text-white font-bold text-lg mb-1">Susu</h3>
                <div class="text-4xl font-bold text-white mb-2">{{ stockStore.stock.milk.toLocaleString() }}<span class="text-xl font-normal text-blue-200 ml-1">ml</span></div>
                <div class="w-full bg-white/20 rounded-full h-2">
                  <div class="bg-white rounded-full h-2 transition-all" :style="`width: ${Math.min(stockStore.stock.milk / 50, 100)}%`"></div>
                </div>
              </div>
            </div>

            <!-- Syrup Stock Card -->
            <div class="group relative bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
              <div class="absolute -right-4 -top-4 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">🍯</div>
              <div class="relative z-10">
                <div class="flex items-center justify-between mb-4">
                  <div class="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <span class="text-emerald-200 text-sm font-medium">Bahan Baku</span>
                </div>
                <h3 class="text-white font-bold text-lg mb-1">Sirup</h3>
                <div class="text-4xl font-bold text-white mb-2">{{ stockStore.stock.syrup.toLocaleString() }}<span class="text-xl font-normal text-emerald-200 ml-1">ml</span></div>
                <div class="w-full bg-white/20 rounded-full h-2">
                  <div class="bg-white rounded-full h-2 transition-all" :style="`width: ${Math.min(stockStore.stock.syrup / 20, 100)}%`"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Calculator Section -->
        <div class="lg:col-span-3">
          <div class="bg-gradient-to-br from-stone-800/90 to-stone-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-stone-700/50">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <div>
                <h2 class="text-2xl font-bold text-white flex items-center mb-2">
                  <div class="bg-gradient-to-br from-amber-500 to-amber-700 p-2 rounded-lg mr-3">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  Kalkulator Produksi
                </h2>
                <p class="text-stone-400">Perhitungan maksimal produk dengan batasan stok bahan baku</p>
              </div>
              <button 
                @click="calculatePureGauss"
                class="mt-4 lg:mt-0 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white px-8 py-4 rounded-xl hover:from-amber-600 hover:via-amber-700 hover:to-amber-800 transition-all font-bold shadow-lg hover:shadow-amber-500/25 flex items-center space-x-3"
              >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>Hitung Produksi Maksimal</span>
              </button>
            </div>

            <!-- Results Grid -->
            <div v-if="pureGaussResult" class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Product A - Kopi Gula Aren -->
              <div class="group relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                :class="pureGaussResult.rawA < 0 
                  ? 'bg-gradient-to-br from-red-900/80 to-red-950/90 border border-red-500/30' 
                  : 'bg-gradient-to-br from-amber-900/80 to-amber-950/90 border border-amber-500/30'">
                <div class="absolute -right-2 -top-2 text-7xl opacity-10">☕</div>
                <div class="relative z-10">
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 rounded-full text-xs font-bold"
                      :class="pureGaussResult.rawA < 0 ? 'bg-red-500/30 text-red-300' : 'bg-amber-500/30 text-amber-300'">
                      Produk A
                    </span>
                    <div v-if="pureGaussResult.rawA < 0" class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div v-else class="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <h3 class="font-bold text-xl mb-2" :class="pureGaussResult.rawA < 0 ? 'text-red-200' : 'text-amber-100'">Kopi Gula Aren</h3>
                  <div class="text-5xl font-bold mb-3" :class="pureGaussResult.rawA < 0 ? 'text-red-400' : 'text-amber-400'">
                    {{ showDecimal ? pureGaussResult.rawA : Math.trunc(pureGaussResult.rawA) }}
                    <span class="text-lg font-normal" :class="pureGaussResult.rawA < 0 ? 'text-red-300' : 'text-amber-300'">cup</span>
                  </div>
                  <div v-if="pureGaussResult.rawA < 0" class="text-xs text-red-300 bg-red-500/20 p-3 rounded-lg border border-red-500/30">
                    ⚠️ Bahan baku tidak mencukupi
                  </div>
                  <div v-else class="text-xs text-emerald-300 bg-emerald-500/20 p-3 rounded-lg border border-emerald-500/30">
                    ✓ Stok mencukupi untuk produksi
                  </div>
                </div>
              </div>

              <!-- Product B - Spanish Latte -->
              <div class="group relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                :class="pureGaussResult.rawB < 0 
                  ? 'bg-gradient-to-br from-red-900/80 to-red-950/90 border border-red-500/30' 
                  : 'bg-gradient-to-br from-blue-900/80 to-blue-950/90 border border-blue-500/30'">
                <div class="absolute -right-2 -top-2 text-7xl opacity-10">🥤</div>
                <div class="relative z-10">
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 rounded-full text-xs font-bold"
                      :class="pureGaussResult.rawB < 0 ? 'bg-red-500/30 text-red-300' : 'bg-blue-500/30 text-blue-300'">
                      Produk B
                    </span>
                    <div v-if="pureGaussResult.rawB < 0" class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div v-else class="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <h3 class="font-bold text-xl mb-2" :class="pureGaussResult.rawB < 0 ? 'text-red-200' : 'text-blue-100'">Spanish Latte</h3>
                  <div class="text-5xl font-bold mb-3" :class="pureGaussResult.rawB < 0 ? 'text-red-400' : 'text-blue-400'">
                    {{ showDecimal ? pureGaussResult.rawB : Math.trunc(pureGaussResult.rawB) }}
                    <span class="text-lg font-normal" :class="pureGaussResult.rawB < 0 ? 'text-red-300' : 'text-blue-300'">cup</span>
                  </div>
                  <div v-if="pureGaussResult.rawB < 0" class="text-xs text-red-300 bg-red-500/20 p-3 rounded-lg border border-red-500/30">
                    ⚠️ Bahan baku tidak mencukupi
                  </div>
                  <div v-else class="text-xs text-emerald-300 bg-emerald-500/20 p-3 rounded-lg border border-emerald-500/30">
                    ✓ Stok mencukupi untuk produksi
                  </div>
                </div>
              </div>

              <!-- Product C - Kopi Honey -->
              <div class="group relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                :class="pureGaussResult.rawC < 0 
                  ? 'bg-gradient-to-br from-red-900/80 to-red-950/90 border border-red-500/30' 
                  : 'bg-gradient-to-br from-emerald-900/80 to-emerald-950/90 border border-emerald-500/30'">
                <div class="absolute -right-2 -top-2 text-7xl opacity-10">🍯</div>
                <div class="relative z-10">
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 rounded-full text-xs font-bold"
                      :class="pureGaussResult.rawC < 0 ? 'bg-red-500/30 text-red-300' : 'bg-emerald-500/30 text-emerald-300'">
                      Produk C
                    </span>
                    <div v-if="pureGaussResult.rawC < 0" class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div v-else class="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <h3 class="font-bold text-xl mb-2" :class="pureGaussResult.rawC < 0 ? 'text-red-200' : 'text-emerald-100'">Kopi Honey</h3>
                  <div class="text-5xl font-bold mb-3" :class="pureGaussResult.rawC < 0 ? 'text-red-400' : 'text-emerald-400'">
                    {{ showDecimal ? pureGaussResult.rawC : Math.trunc(pureGaussResult.rawC) }}
                    <span class="text-lg font-normal" :class="pureGaussResult.rawC < 0 ? 'text-red-300' : 'text-emerald-300'">cup</span>
                  </div>
                  <div v-if="pureGaussResult.rawC < 0" class="text-xs text-red-300 bg-red-500/20 p-3 rounded-lg border border-red-500/30">
                    ⚠️ Bahan baku tidak mencukupi
                  </div>
                  <div v-else class="text-xs text-emerald-300 bg-emerald-500/20 p-3 rounded-lg border border-emerald-500/30">
                    ✓ Stok mencukupi untuk produksi
                  </div>
                </div>
              </div>
            </div>

            <!-- Empty State -->
            <div v-else class="text-center py-16">
              <div class="inline-flex items-center justify-center w-20 h-20 bg-stone-700/50 rounded-full mb-6">
                <svg class="h-10 w-10 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-stone-300 mb-2">Siap Menghitung Produksi</h3>
              <p class="text-stone-500 max-w-md mx-auto">Klik tombol "Hitung Produksi Maksimal" di atas untuk menghitung berapa cup kopi yang dapat diproduksi berdasarkan stok bahan baku.</p>
            </div>

            <!-- Toggle Decimal -->
            <div v-if="pureGaussResult" class="flex justify-center mt-8">
              <button 
                @click="showDecimal = !showDecimal"
                class="flex items-center space-x-2 px-6 py-3 rounded-full transition-all font-medium"
                :class="showDecimal 
                  ? 'bg-amber-600 text-white shadow-lg' 
                  : 'bg-stone-700/50 text-stone-300 hover:bg-stone-600/50'">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
                <span>{{ showDecimal ? 'Tampilkan Bilangan Bulat' : 'Tampilkan Desimal' }}</span>
              </button>
            </div>
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
const showDecimal = ref(false)

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
  
  // Nilai hasil perhitungan tanpa pembulatan
  const finalA = parseFloat(A.toFixed(2))
  const finalB = parseFloat(B.toFixed(2))
  const finalC = parseFloat(C.toFixed(2))
  
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