<template>
  <div class="bg-white rounded-xl shadow-sm p-6">
    <h2 class="text-xl font-bold text-stone-900 mb-6 flex items-center">
      <svg class="h-6 w-6 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
      Hasil Perhitungan
    </h2>

    <!-- Calculate Button -->
    <div class="mb-6">
      <button 
        @click="calculate"
        class="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all font-semibold text-lg shadow-lg"
      >
        🧮 Hitung Produksi Maksimal
      </button>
    </div>

    <!-- Results -->
    <div v-if="results.length > 0" class="space-y-4">
      <div 
        v-for="(result, idx) in results" 
        :key="idx"
        class="border-2 rounded-lg p-5 transition-all hover:shadow-md"
        :class="resultStyles[idx]"
      >
        <div class="flex items-center justify-between mb-3">
          <h3 class="font-bold text-lg text-stone-900">{{ result.product }}</h3>
          <span 
            class="px-3 py-1 rounded-full text-xs font-semibold"
            :class="badgeStyles[idx]"
          >
            Maksimal
          </span>
        </div>

        <div class="flex items-baseline space-x-2 mb-2">
          <span 
            class="text-4xl font-bold"
            :class="textColors[idx]"
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
          <strong>{{ totalCups }} cup kopi</strong> dengan kombinasi optimal dari ketiga produk.
        </p>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-12">
      <svg class="h-16 w-16 text-stone-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
      <p class="text-stone-500">Klik tombol di atas untuk menghitung produksi maksimal</p>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['calculated'])

const stockStore = useStockStore()
const { calculateMaxProduction } = useGaussElimination()

const results = ref([])

const resultStyles = [
  'border-amber-300 bg-amber-50',
  'border-blue-300 bg-blue-50',
  'border-green-300 bg-green-50'
]

const badgeStyles = [
  'bg-amber-200 text-amber-800',
  'bg-blue-200 text-blue-800',
  'bg-green-200 text-green-800'
]

const textColors = [
  'text-amber-600',
  'text-blue-600',
  'text-green-600'
]

const totalCups = computed(() => {
  return results.value.reduce((sum, item) => sum + item.maxQuantity, 0)
})

const calculate = () => {
  results.value = calculateMaxProduction(
    stockStore.stock,
    stockStore.products
  )
  emit('calculated', results.value)
}
</script>
