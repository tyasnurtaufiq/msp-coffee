<template>
  <div class="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900">
    <!-- Sidebar -->
    <DashboardSidebar />

    <!-- Main Content -->
    <div class="lg:ml-64 p-4 lg:p-8 pt-16 lg:pt-8 min-h-screen">
      <!-- Hero Header -->
      <div class="relative mb-8 rounded-2xl overflow-hidden bg-gradient-to-r from-amber-800/80 via-stone-800/90 to-stone-900/80 p-8 shadow-2xl border border-amber-700/30">
        <div class="absolute top-4 right-8 text-6xl opacity-20">📦</div>
        <div class="absolute bottom-4 right-24 text-4xl opacity-15">☕</div>
        
        <div class="relative z-10">
          <div class="flex items-center space-x-3 mb-3">
            <div class="bg-gradient-to-br from-amber-500 to-amber-700 p-3 rounded-xl shadow-lg">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <span class="text-amber-400 text-sm font-semibold uppercase tracking-wider">Stock Management</span>
          </div>
          <h1 class="text-4xl lg:text-5xl font-bold text-white mb-3">Manajemen <span class="text-amber-400">Stok Bahan Baku</span></h1>
          <p class="text-stone-300 text-lg">Kelola dan tambah stok bahan baku kopi Anda dengan mudah.</p>
        </div>
      </div>

      <!-- Success Message -->
      <div v-if="successMessage" class="mb-6 bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 px-6 py-4 rounded-xl flex items-center space-x-3">
        <svg class="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>{{ successMessage }}</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Current Stock Section -->
        <div class="bg-gradient-to-br from-stone-800/90 to-stone-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-stone-700/50">
          <div class="flex items-center mb-6">
            <div class="bg-gradient-to-br from-amber-500 to-amber-700 p-2 rounded-lg mr-3">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-white">Stok Saat Ini</h2>
          </div>

          <div class="space-y-4">
            <!-- Biji Kopi -->
            <div class="bg-gradient-to-br from-amber-900/50 to-amber-950/50 rounded-xl p-5 border border-amber-700/30 hover:border-amber-600/50 transition-all">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center space-x-3">
                  <div class="bg-amber-500/20 p-3 rounded-xl">
                    <svg class="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-amber-100 text-lg">Biji Kopi</h3>
                    <p class="text-xs text-amber-300/70">Per gram</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-3xl font-bold text-amber-400">{{ stockStore.stock.coffee.toLocaleString() }}</p>
                  <p class="text-xs text-amber-300/70">gram</p>
                </div>
              </div>
              <div class="bg-stone-800/50 rounded-full h-3 overflow-hidden">
                <div 
                  class="bg-gradient-to-r from-amber-500 to-amber-600 h-full transition-all duration-500 rounded-full"
                  :style="{ width: `${Math.min((stockStore.stock.coffee / 10000) * 100, 100)}%` }"
                ></div>
              </div>
              <p class="text-xs text-stone-400 mt-2">Target: 10.000 gram</p>
            </div>

            <!-- Susu -->
            <div class="bg-gradient-to-br from-blue-900/50 to-blue-950/50 rounded-xl p-5 border border-blue-700/30 hover:border-blue-600/50 transition-all">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center space-x-3">
                  <div class="bg-blue-500/20 p-3 rounded-xl">
                    <svg class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-blue-100 text-lg">Susu</h3>
                    <p class="text-xs text-blue-300/70">Per mililiter</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-3xl font-bold text-blue-400">{{ stockStore.stock.milk.toLocaleString() }}</p>
                  <p class="text-xs text-blue-300/70">ml</p>
                </div>
              </div>
              <div class="bg-stone-800/50 rounded-full h-3 overflow-hidden">
                <div 
                  class="bg-gradient-to-r from-blue-500 to-blue-600 h-full transition-all duration-500 rounded-full"
                  :style="{ width: `${Math.min((stockStore.stock.milk / 5000) * 100, 100)}%` }"
                ></div>
              </div>
              <p class="text-xs text-stone-400 mt-2">Target: 5.000 ml</p>
            </div>

            <!-- Sirup -->
            <div class="bg-gradient-to-br from-emerald-900/50 to-emerald-950/50 rounded-xl p-5 border border-emerald-700/30 hover:border-emerald-600/50 transition-all">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center space-x-3">
                  <div class="bg-emerald-500/20 p-3 rounded-xl">
                    <svg class="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-emerald-100 text-lg">Sirup</h3>
                    <p class="text-xs text-emerald-300/70">Per mililiter</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-3xl font-bold text-emerald-400">{{ stockStore.stock.syrup.toLocaleString() }}</p>
                  <p class="text-xs text-emerald-300/70">ml</p>
                </div>
              </div>
              <div class="bg-stone-800/50 rounded-full h-3 overflow-hidden">
                <div 
                  class="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full transition-all duration-500 rounded-full"
                  :style="{ width: `${Math.min((stockStore.stock.syrup / 3000) * 100, 100)}%` }"
                ></div>
              </div>
              <p class="text-xs text-stone-400 mt-2">Target: 3.000 ml</p>
            </div>
          </div>
        </div>

        <!-- Add Stock Form -->
        <div class="bg-gradient-to-br from-stone-800/90 to-stone-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-stone-700/50">
          <div class="flex items-center mb-6">
            <div class="bg-gradient-to-br from-emerald-500 to-emerald-700 p-2 rounded-lg mr-3">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-white">Tambah Stok Bahan</h2>
          </div>

          <div class="space-y-5">
            <!-- Biji Kopi Form -->
            <div>
              <label class="block text-amber-300 font-medium mb-2">Biji Kopi (gram)</label>
              <div class="flex space-x-2">
                <input 
                  v-model.number="addStock.coffee"
                  type="number"
                  min="0"
                  class="flex-1 px-4 py-3 rounded-xl bg-stone-700/50 border border-stone-600 text-white placeholder-stone-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                  placeholder="Masukkan jumlah"
                />
                <button 
                  @click="handleAddStock('coffee')"
                  class="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all font-semibold whitespace-nowrap shadow-lg"
                >
                  Tambah
                </button>
              </div>
            </div>

            <!-- Susu Form -->
            <div>
              <label class="block text-blue-300 font-medium mb-2">Susu (ml)</label>
              <div class="flex space-x-2">
                <input 
                  v-model.number="addStock.milk"
                  type="number"
                  min="0"
                  class="flex-1 px-4 py-3 rounded-xl bg-stone-700/50 border border-stone-600 text-white placeholder-stone-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  placeholder="Masukkan jumlah"
                />
                <button 
                  @click="handleAddStock('milk')"
                  class="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all font-semibold whitespace-nowrap shadow-lg"
                >
                  Tambah
                </button>
              </div>
            </div>

            <!-- Sirup Form -->
            <div>
              <label class="block text-emerald-300 font-medium mb-2">Sirup (ml)</label>
              <div class="flex space-x-2">
                <input 
                  v-model.number="addStock.syrup"
                  type="number"
                  min="0"
                  class="flex-1 px-4 py-3 rounded-xl bg-stone-700/50 border border-stone-600 text-white placeholder-stone-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                  placeholder="Masukkan jumlah"
                />
                <button 
                  @click="handleAddStock('syrup')"
                  class="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all font-semibold whitespace-nowrap shadow-lg"
                >
                  Tambah
                </button>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="border-t border-stone-700/50 pt-6 mt-6">
              <h3 class="font-semibold text-white mb-4 flex items-center">
                <svg class="h-5 w-5 mr-2 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Quick Actions
              </h3>
              <div class="grid grid-cols-2 gap-3">
                <button 
                  @click="handleQuickAdd('coffee', 1000)"
                  class="bg-amber-500/20 text-amber-300 px-4 py-3 rounded-xl hover:bg-amber-500/30 transition-all text-sm font-medium border border-amber-500/30"
                >
                  +1kg Kopi
                </button>
                <button 
                  @click="handleQuickAdd('milk', 1000)"
                  class="bg-blue-500/20 text-blue-300 px-4 py-3 rounded-xl hover:bg-blue-500/30 transition-all text-sm font-medium border border-blue-500/30"
                >
                  +1L Susu
                </button>
                <button 
                  @click="handleQuickAdd('coffee', 5000)"
                  class="bg-amber-500/20 text-amber-300 px-4 py-3 rounded-xl hover:bg-amber-500/30 transition-all text-sm font-medium border border-amber-500/30"
                >
                  +5kg Kopi
                </button>
                <button 
                  @click="handleQuickAdd('syrup', 500)"
                  class="bg-emerald-500/20 text-emerald-300 px-4 py-3 rounded-xl hover:bg-emerald-500/30 transition-all text-sm font-medium border border-emerald-500/30"
                >
                  +500ml Sirup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stock History -->
      <div class="mt-8 bg-gradient-to-br from-stone-800/90 to-stone-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-stone-700/50">
        <div class="flex items-center mb-6">
          <div class="bg-gradient-to-br from-purple-500 to-purple-700 p-2 rounded-lg mr-3">
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-white">Riwayat Stok Terbaru</h2>
        </div>
        
        <!-- Empty state -->
        <div v-if="stockHistory.length === 0" class="text-center py-16">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-stone-700/50 rounded-full mb-6">
            <svg class="h-10 w-10 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-stone-300 mb-2">Belum Ada Riwayat</h3>
          <p class="text-stone-500">Tambah stok atau buat transaksi untuk melihat riwayat</p>
        </div>

        <div v-else class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-stone-600/50">
                <th class="text-left py-4 px-4 font-semibold text-stone-300">Tanggal</th>
                <th class="text-left py-4 px-4 font-semibold text-stone-300">Bahan</th>
                <th class="text-left py-4 px-4 font-semibold text-stone-300">Jumlah</th>
                <th class="text-left py-4 px-4 font-semibold text-stone-300">Tipe</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="history in stockHistory" :key="history.id" class="border-b border-stone-700/50 hover:bg-stone-700/30 transition-colors">
                <td class="py-4 px-4 text-stone-400">{{ formatDate(history.date) }}</td>
                <td class="py-4 px-4">
                  <span class="inline-flex items-center">
                    <span 
                      class="w-3 h-3 rounded-full mr-3"
                      :class="{
                        'bg-amber-500': history.ingredient === 'Biji Kopi',
                        'bg-blue-500': history.ingredient === 'Susu',
                        'bg-emerald-500': history.ingredient === 'Sirup'
                      }"
                    ></span>
                    <span class="text-white">{{ history.ingredient }}</span>
                  </span>
                </td>
                <td class="py-4 px-4 font-bold" :class="history.amount >= 0 ? 'text-emerald-400' : 'text-red-400'">
                  {{ history.amount >= 0 ? '+' : '' }}{{ history.amount }} {{ history.unit }}
                </td>
                <td class="py-4 px-4">
                  <span 
                    class="px-3 py-1 rounded-full text-xs font-medium"
                    :class="{
                      'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30': history.type === 'Restock' || history.type === 'Quick Add',
                      'bg-red-500/20 text-red-300 border border-red-500/30': history.type === 'Penjualan',
                      'bg-blue-500/20 text-blue-300 border border-blue-500/30': history.type === 'Pengembalian'
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