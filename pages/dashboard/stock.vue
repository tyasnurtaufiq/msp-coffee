<template>
  <div class="min-h-screen bg-stone-50">
    <!-- Sidebar -->
    <DashboardSidebar />

    <!-- Main Content -->
    <div class="lg:ml-64 p-4 lg:p-8 pt-16 lg:pt-8">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-stone-900">Manajemen Stok Bahan Baku</h1>
        <p class="text-stone-600 mt-1">Kelola dan tambah stok bahan baku kopi</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Current Stock -->
        <div class="bg-white rounded-xl shadow-sm p-6">
          <h2 class="text-xl font-bold text-stone-900 mb-6 flex items-center">
            <svg class="h-6 w-6 mr-2 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Stok Saat Ini
          </h2>

          <div class="space-y-6">
            <!-- Biji Kopi -->
            <div class="border border-stone-200 rounded-lg p-4">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center space-x-3">
                  <div class="bg-amber-100 p-2 rounded-lg">
                    <svg class="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-stone-900">Biji Kopi</h3>
                    <p class="text-sm text-stone-500">Per gram</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-2xl font-bold text-amber-600">{{ stockStore.stock.coffee }}</p>
                  <p class="text-xs text-stone-500">gram</p>
                </div>
              </div>
              <div class="bg-stone-100 rounded-full h-2 overflow-hidden">
                <div 
                  class="bg-amber-600 h-full transition-all duration-500"
                  :style="{ width: `${Math.min((stockStore.stock.coffee / 10000) * 100, 100)}%` }"
                ></div>
              </div>
              <p class="text-xs text-stone-500 mt-2">Target: 10.000 gram</p>
            </div>

            <!-- Susu -->
            <div class="border border-stone-200 rounded-lg p-4">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center space-x-3">
                  <div class="bg-blue-100 p-2 rounded-lg">
                    <svg class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-stone-900">Susu</h3>
                    <p class="text-sm text-stone-500">Per mililiter</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-2xl font-bold text-blue-600">{{ stockStore.stock.milk }}</p>
                  <p class="text-xs text-stone-500">ml</p>
                </div>
              </div>
              <div class="bg-stone-100 rounded-full h-2 overflow-hidden">
                <div 
                  class="bg-blue-600 h-full transition-all duration-500"
                  :style="{ width: `${Math.min((stockStore.stock.milk / 5000) * 100, 100)}%` }"
                ></div>
              </div>
              <p class="text-xs text-stone-500 mt-2">Target: 5.000 ml</p>
            </div>

            <!-- Sirup -->
            <div class="border border-stone-200 rounded-lg p-4">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center space-x-3">
                  <div class="bg-green-100 p-2 rounded-lg">
                    <svg class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-stone-900">Sirup</h3>
                    <p class="text-sm text-stone-500">Per mililiter</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-2xl font-bold text-green-600">{{ stockStore.stock.syrup }}</p>
                  <p class="text-xs text-stone-500">ml</p>
                </div>
              </div>
              <div class="bg-stone-100 rounded-full h-2 overflow-hidden">
                <div 
                  class="bg-green-600 h-full transition-all duration-500"
                  :style="{ width: `${Math.min((stockStore.stock.syrup / 3000) * 100, 100)}%` }"
                ></div>
              </div>
              <p class="text-xs text-stone-500 mt-2">Target: 3.000 ml</p>
            </div>
          </div>
        </div>

        <!-- Add Stock Form -->
        <div class="bg-white rounded-xl shadow-sm p-6">
          <h2 class="text-xl font-bold text-stone-900 mb-6 flex items-center">
            <svg class="h-6 w-6 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Tambah Stok Bahan
          </h2>

          <div v-if="successMessage" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {{ successMessage }}
          </div>

          <div class="space-y-6">
            <!-- Biji Kopi Form -->
            <div>
              <label class="block text-stone-700 font-medium mb-2">Biji Kopi (gram)</label>
              <div class="flex space-x-2">
                <input 
                  v-model.number="addStock.coffee"
                  type="number"
                  min="0"
                  class="flex-1 px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
                  placeholder="Masukkan jumlah"
                />
                <button 
                  @click="handleAddStock('coffee')"
                  class="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold whitespace-nowrap"
                >
                  Tambah
                </button>
              </div>
            </div>

            <!-- Susu Form -->
            <div>
              <label class="block text-stone-700 font-medium mb-2">Susu (ml)</label>
              <div class="flex space-x-2">
                <input 
                  v-model.number="addStock.milk"
                  type="number"
                  min="0"
                  class="flex-1 px-4 py-3 rounded-lg border border-stone-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                  placeholder="Masukkan jumlah"
                />
                <button 
                  @click="handleAddStock('milk')"
                  class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap"
                >
                  Tambah
                </button>
              </div>
            </div>

            <!-- Sirup Form -->
            <div>
              <label class="block text-stone-700 font-medium mb-2">Sirup (ml)</label>
              <div class="flex space-x-2">
                <input 
                  v-model.number="addStock.syrup"
                  type="number"
                  min="0"
                  class="flex-1 px-4 py-3 rounded-lg border border-stone-300 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none"
                  placeholder="Masukkan jumlah"
                />
                <button 
                  @click="handleAddStock('syrup')"
                  class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold whitespace-nowrap"
                >
                  Tambah
                </button>
              </div>
            </div>

            <div class="border-t border-stone-200 pt-6 mt-6">
              <h3 class="font-semibold text-stone-900 mb-3">Quick Actions</h3>
              <div class="grid grid-cols-2 gap-3">
                <button 
                  @click="handleQuickAdd('coffee', 1000)"
                  class="bg-amber-50 text-amber-700 px-4 py-2 rounded-lg hover:bg-amber-100 transition-colors text-sm font-medium"
                >
                  +1kg Kopi
                </button>
                <button 
                  @click="handleQuickAdd('milk', 1000)"
                  class="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
                >
                  +1L Susu
                </button>
                <button 
                  @click="handleQuickAdd('coffee', 5000)"
                  class="bg-amber-50 text-amber-700 px-4 py-2 rounded-lg hover:bg-amber-100 transition-colors text-sm font-medium"
                >
                  +5kg Kopi
                </button>
                <button 
                  @click="handleQuickAdd('syrup', 500)"
                  class="bg-green-50 text-green-700 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium"
                >
                  +500ml Sirup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stock History -->
      <div class="mt-8 bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-xl font-bold text-stone-900 mb-6">Riwayat Stok Terbaru</h2>
        
        <!-- Empty state -->
        <div v-if="stockHistory.length === 0" class="text-center py-12">
          <svg class="h-16 w-16 text-stone-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <p class="text-stone-500">Belum ada riwayat stok</p>
          <p class="text-stone-400 text-sm mt-1">Tambah stok atau buat transaksi untuk melihat riwayat</p>
        </div>

        <div v-else class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-stone-200">
                <th class="text-left py-3 px-4 font-semibold text-stone-700">Tanggal</th>
                <th class="text-left py-3 px-4 font-semibold text-stone-700">Bahan</th>
                <th class="text-left py-3 px-4 font-semibold text-stone-700">Jumlah</th>
                <th class="text-left py-3 px-4 font-semibold text-stone-700">Tipe</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="history in stockHistory" :key="history.id" class="border-b border-stone-100 hover:bg-stone-50">
                <td class="py-3 px-4 text-stone-600">{{ formatDate(history.date) }}</td>
                <td class="py-3 px-4">
                  <span class="inline-flex items-center">
                    <span 
                      class="w-2 h-2 rounded-full mr-2"
                      :class="{
                        'bg-amber-600': history.ingredient === 'Biji Kopi',
                        'bg-blue-600': history.ingredient === 'Susu',
                        'bg-green-600': history.ingredient === 'Sirup'
                      }"
                    ></span>
                    {{ history.ingredient }}
                  </span>
                </td>
                <td class="py-3 px-4 font-semibold" :class="history.amount >= 0 ? 'text-green-600' : 'text-red-600'">
                  {{ history.amount >= 0 ? '+' : '' }}{{ history.amount }} {{ history.unit }}
                </td>
                <td class="py-3 px-4">
                  <span 
                    class="px-3 py-1 rounded-full text-xs font-medium"
                    :class="{
                      'bg-green-100 text-green-700': history.type === 'Restock' || history.type === 'Quick Add',
                      'bg-red-100 text-red-700': history.type === 'Penjualan',
                      'bg-blue-100 text-blue-700': history.type === 'Pengembalian'
                    }"
                  >
                    {{ history.type }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
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

const addStock = ref({
  coffee: 0,
  milk: 0,
  syrup: 0
})

const successMessage = ref('')

// Use stock history from store
const stockHistory = computed(() => stockStore.stockHistory)

// Format date for display
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('id-ID', { 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const ingredientNames = {
  coffee: 'Biji Kopi',
  milk: 'Susu',
  syrup: 'Sirup'
}

const units = {
  coffee: 'g',
  milk: 'ml',
  syrup: 'ml'
}

const handleAddStock = (ingredient) => {
  const amount = addStock.value[ingredient]
  
  if (amount <= 0) {
    alert('Jumlah harus lebih dari 0')
    return
  }
  
  stockStore.addStock(ingredient, amount, 'Restock')
  
  successMessage.value = `Berhasil menambah ${amount} ${units[ingredient]} ${ingredientNames[ingredient]}`
  addStock.value[ingredient] = 0
  
  setTimeout(() => {
    successMessage.value = ''
  }, 3000)
}

const handleQuickAdd = (ingredient, amount) => {
  stockStore.addStock(ingredient, amount, 'Quick Add')
  
  successMessage.value = `Quick add: ${amount} ${units[ingredient]} ${ingredientNames[ingredient]} berhasil ditambahkan`
  
  setTimeout(() => {
    successMessage.value = ''
  }, 3000)
}
</script>