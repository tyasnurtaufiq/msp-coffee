<template>
  <div class="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900">
    <!-- Sidebar -->
    <DashboardSidebar />

    <!-- Main Content -->
    <div class="lg:ml-64 p-4 lg:p-8 pt-16 lg:pt-8 min-h-screen">
      <!-- Hero Header -->
      <div class="relative mb-8 rounded-2xl overflow-hidden bg-gradient-to-r from-amber-800/80 via-stone-800/90 to-stone-900/80 p-8 shadow-2xl border border-amber-700/30">
        <div class="absolute top-4 right-8 text-6xl opacity-20">💳</div>
        <div class="absolute bottom-4 right-24 text-4xl opacity-15">☕</div>
        
        <div class="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div class="flex items-center space-x-3 mb-3">
              <div class="bg-gradient-to-br from-amber-500 to-amber-700 p-3 rounded-xl shadow-lg">
                <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <span class="text-amber-400 text-sm font-semibold uppercase tracking-wider">Transaction Management</span>
            </div>
            <h1 class="text-4xl lg:text-5xl font-bold text-white mb-3">Transaksi <span class="text-amber-400">Penjualan</span></h1>
            <p class="text-stone-300 text-lg">Kelola transaksi dan penjualan kopi Anda.</p>
          </div>
          <button 
            @click="openModal('add')"
            class="mt-4 lg:mt-0 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all font-bold shadow-lg hover:shadow-amber-500/25 flex items-center space-x-3"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Tambah Penjualan</span>
          </button>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <!-- Total Transactions -->
        <div class="group relative bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
          <div class="absolute -right-4 -top-4 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">📋</div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <div class="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <span class="text-amber-200 text-xs font-medium">Total</span>
            </div>
            <p class="text-amber-100 text-sm mb-1">Total Transaksi</p>
            <p class="text-4xl font-bold text-white">{{ salesStore.transactions.length }}</p>
          </div>
        </div>

        <!-- Total Revenue -->
        <div class="group relative bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
          <div class="absolute -right-4 -top-4 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">💰</div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <div class="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span class="text-emerald-200 text-xs font-medium">Revenue</span>
            </div>
            <p class="text-emerald-100 text-sm mb-1">Total Pendapatan</p>
            <p class="text-3xl font-bold text-white">{{ formatCurrency(salesStore.getTotalRevenue) }}</p>
          </div>
        </div>

        <!-- Stock Available -->
        <div class="group relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
          <div class="absolute -right-4 -top-4 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">📦</div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <div class="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <span class="text-blue-200 text-xs font-medium">Stok</span>
            </div>
            <p class="text-blue-100 text-sm mb-2">Stok Tersedia</p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs bg-amber-500/30 text-amber-200 px-2 py-1 rounded-lg border border-amber-500/30">Kopi: {{ stockStore.stock.coffee }}g</span>
              <span class="text-xs bg-blue-400/30 text-blue-200 px-2 py-1 rounded-lg border border-blue-400/30">Susu: {{ stockStore.stock.milk }}ml</span>
              <span class="text-xs bg-emerald-400/30 text-emerald-200 px-2 py-1 rounded-lg border border-emerald-400/30">Sirup: {{ stockStore.stock.syrup }}ml</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Alert Messages -->
      <div v-if="alertMessage" 
        :class="alertType === 'success' 
          ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300' 
          : 'bg-red-500/20 border-red-500/50 text-red-300'" 
        class="border px-6 py-4 rounded-xl mb-6 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <svg v-if="alertType === 'success'" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{{ alertMessage }}</span>
        </div>
        <button @click="alertMessage = ''" class="font-bold text-xl hover:opacity-70">&times;</button>
      </div>

      <!-- Transactions Table -->
      <div class="bg-gradient-to-br from-stone-800/90 to-stone-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-stone-700/50">
        <div class="flex items-center mb-6">
          <div class="bg-gradient-to-br from-purple-500 to-purple-700 p-2 rounded-lg mr-3">
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-white">Daftar Transaksi</h2>
        </div>
        
        <!-- Empty State -->
        <div v-if="salesStore.transactions.length === 0" class="text-center py-16">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-stone-700/50 rounded-full mb-6">
            <svg class="h-10 w-10 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-stone-300 mb-2">Belum Ada Transaksi</h3>
          <p class="text-stone-500 mb-4">Mulai catat penjualan kopi pertama Anda</p>
          <button @click="openModal('add')" class="text-amber-400 hover:text-amber-300 font-semibold flex items-center space-x-2 mx-auto">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Tambah Transaksi Pertama</span>
          </button>
        </div>

        <div v-else class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-stone-600/50">
                <th class="text-left py-4 px-4 font-semibold text-stone-300">ID</th>
                <th class="text-left py-4 px-4 font-semibold text-stone-300">Tanggal</th>
                <th class="text-left py-4 px-4 font-semibold text-stone-300">Produk</th>
                <th class="text-center py-4 px-4 font-semibold text-stone-300">Qty</th>
                <th class="text-right py-4 px-4 font-semibold text-stone-300">Harga</th>
                <th class="text-right py-4 px-4 font-semibold text-stone-300">Total</th>
                <th class="text-center py-4 px-4 font-semibold text-stone-300">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="transaction in salesStore.transactions" :key="transaction.id" class="border-t border-stone-700/50 hover:bg-stone-700/30 transition-colors">
                <td class="py-4 px-4 text-stone-400 text-sm font-mono">{{ transaction.id }}</td>
                <td class="py-4 px-4 text-stone-300">{{ formatDate(transaction.date) }}</td>
                <td class="py-4 px-4">
                  <span class="font-semibold text-white">{{ transaction.productName }}</span>
                </td>
                <td class="py-4 px-4 text-center">
                  <span class="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm font-medium border border-amber-500/30">
                    {{ transaction.quantity }} cup
                  </span>
                </td>
                <td class="py-4 px-4 text-right text-stone-300">{{ formatCurrency(transaction.pricePerItem) }}</td>
                <td class="py-4 px-4 text-right font-bold text-emerald-400">{{ formatCurrency(transaction.total) }}</td>
                <td class="py-4 px-4 text-center">
                  <div class="flex items-center justify-center space-x-2">
                    <button 
                      @click="openModal('edit', transaction)"
                      class="bg-blue-500/20 text-blue-400 p-2 rounded-lg hover:bg-blue-500/30 transition-colors border border-blue-500/30"
                      title="Edit"
                    >
                      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button 
                      @click="confirmDelete(transaction)"
                      class="bg-red-500/20 text-red-400 p-2 rounded-lg hover:bg-red-500/30 transition-colors border border-red-500/30"
                      title="Hapus"
                    >
                      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Modal Add/Edit -->
    <div v-if="showModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div class="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl w-full max-w-md p-8 shadow-2xl border border-stone-700/50 m-4">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-2xl font-bold text-white">
            {{ modalMode === 'add' ? 'Tambah Penjualan' : 'Edit Penjualan' }}
          </h3>
          <button @click="closeModal" class="text-stone-400 hover:text-white transition-colors">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div v-if="formError" class="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-xl mb-4 flex items-center space-x-2">
          <svg class="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{{ formError }}</span>
        </div>

        <form @submit.prevent="handleSubmit">
          <div class="space-y-5">
            <!-- Product Select -->
            <div>
              <label class="block text-stone-300 font-medium mb-2">Produk</label>
              <select 
                v-model="formData.productId"
                :disabled="modalMode === 'edit'"
                class="w-full px-4 py-3 rounded-xl bg-stone-700/50 border border-stone-600 text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all disabled:opacity-50"
              >
                <option value="">Pilih Produk</option>
                <option v-for="product in salesStore.products" :key="product.id" :value="product.id">
                  {{ product.name }} - {{ formatCurrency(product.price) }}
                </option>
              </select>
            </div>

            <!-- Quantity -->
            <div>
              <label class="block text-stone-300 font-medium mb-2">Jumlah (cup)</label>
              <input 
                v-model.number="formData.quantity"
                type="number"
                min="1"
                class="w-full px-4 py-3 rounded-xl bg-stone-700/50 border border-stone-600 text-white placeholder-stone-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                placeholder="Masukkan jumlah"
              />
            </div>

            <!-- Preview -->
            <div v-if="formData.productId && formData.quantity > 0" class="bg-stone-700/30 rounded-xl p-5 border border-stone-600/50">
              <p class="text-sm text-stone-400 mb-3">Ringkasan:</p>
              <div class="flex justify-between items-center mb-3">
                <span class="font-medium text-stone-300">Total</span>
                <span class="text-2xl font-bold text-emerald-400">{{ formatCurrency(calculateTotal) }}</span>
              </div>
              <div class="text-xs text-stone-400 bg-stone-800/50 p-3 rounded-lg">
                <p class="font-medium mb-1">Penggunaan Bahan:</p>
                <p v-if="selectedProduct">
                  Kopi: {{ selectedProduct.ingredients.coffee * formData.quantity }}g, 
                  Susu: {{ selectedProduct.ingredients.milk * formData.quantity }}ml,
                  Sirup: {{ selectedProduct.ingredients.syrup * formData.quantity }}ml
                </p>
              </div>
            </div>
          </div>

          <div class="flex space-x-3 mt-8">
            <button 
              type="button"
              @click="closeModal"
              class="flex-1 px-4 py-3 border border-stone-600 text-stone-300 rounded-xl hover:bg-stone-700/50 transition-all font-semibold"
            >
              Batal
            </button>
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="flex-1 px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all font-semibold disabled:opacity-50 shadow-lg"
            >
              {{ isSubmitting ? 'Menyimpan...' : (modalMode === 'add' ? 'Tambah' : 'Simpan') }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal Delete Confirmation -->
    <div v-if="showDeleteModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div class="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl w-full max-w-sm p-8 shadow-2xl border border-stone-700/50 m-4">
        <div class="text-center">
          <div class="bg-red-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30">
            <svg class="h-10 w-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-2">Hapus Transaksi?</h3>
          <p class="text-stone-400 mb-6">
            Transaksi <strong class="text-white">{{ deleteTarget?.id }}</strong> akan dihapus dan stok bahan akan dikembalikan.
          </p>
          <div class="flex space-x-3">
            <button 
              @click="showDeleteModal = false"
              class="flex-1 px-4 py-3 border border-stone-600 text-stone-300 rounded-xl hover:bg-stone-700/50 transition-all font-semibold"
            >
              Batal
            </button>
            <button 
              @click="handleDelete"
              class="flex-1 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all font-semibold shadow-lg"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const salesStore = useSalesStore()
const stockStore = useStockStore()

// Modal state
const showModal = ref(false)
const modalMode = ref<'add' | 'edit'>('add')
const showDeleteModal = ref(false)
const deleteTarget = ref<any>(null)

// Form state
const formData = ref({
  productId: '',
  quantity: 1
})
const editingId = ref('')
const formError = ref('')
const isSubmitting = ref(false)

// Alert state
const alertMessage = ref('')
const alertType = ref('success')

// Computed
const selectedProduct = computed(() => {
  return salesStore.products.find(p => p.id === formData.value.productId)
})

const calculateTotal = computed(() => {
  if (!selectedProduct.value || formData.value.quantity <= 0) return 0
  return selectedProduct.value.price * formData.value.quantity
})

// Methods
const formatCurrency = (value) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(value)
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const openModal = (mode, transaction = null) => {
  modalMode.value = mode
  formError.value = ''
  
  if (mode === 'edit' && transaction) {
    editingId.value = transaction.id
    formData.value = {
      productId: transaction.productId,
      quantity: transaction.quantity
    }
  } else {
    editingId.value = ''
    formData.value = {
      productId: '',
      quantity: 1
    }
  }
  
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  formError.value = ''
}

const handleSubmit = async () => {
  formError.value = ''
  
  if (!formData.value.productId) {
    formError.value = 'Pilih produk terlebih dahulu'
    return
  }
  
  if (formData.value.quantity <= 0) {
    formError.value = 'Jumlah harus lebih dari 0'
    return
  }

  isSubmitting.value = true

  try {
    if (modalMode.value === 'add') {
      // Check stock availability
      const stockCheck = stockStore.checkStockAvailability(formData.value.productId, formData.value.quantity)
      if (!stockCheck.available) {
        formError.value = `Stok tidak mencukupi: ${stockCheck.message}`
        isSubmitting.value = false
        return
      }

      // Add transaction
      salesStore.addTransaction(formData.value.productId, formData.value.quantity)
      
      // Reduce stock
      stockStore.reduceStockForProduct(formData.value.productId, formData.value.quantity)
      
      alertMessage.value = 'Transaksi berhasil ditambahkan!'
      alertType.value = 'success'
    } else {
      // Edit mode - calculate difference
      const oldTransaction = salesStore.getTransactionById(editingId.value)
      if (!oldTransaction) {
        formError.value = 'Transaksi tidak ditemukan'
        isSubmitting.value = false
        return
      }

      const quantityDiff = formData.value.quantity - oldTransaction.quantity

      if (quantityDiff > 0) {
        // Need more stock
        const stockCheck = stockStore.checkStockAvailability(formData.value.productId, quantityDiff)
        if (!stockCheck.available) {
          formError.value = `Stok tidak mencukupi untuk penambahan: ${stockCheck.message}`
          isSubmitting.value = false
          return
        }
        stockStore.reduceStockForProduct(formData.value.productId, quantityDiff)
      } else if (quantityDiff < 0) {
        // Restore stock
        stockStore.restoreStockForProduct(formData.value.productId, Math.abs(quantityDiff))
      }

      salesStore.updateTransaction(editingId.value, formData.value.quantity)
      
      alertMessage.value = 'Transaksi berhasil diperbarui!'
      alertType.value = 'success'
    }

    closeModal()
  } catch (error: any) {
    formError.value = error?.message || 'Terjadi kesalahan'
  } finally {
    isSubmitting.value = false
  }

  setTimeout(() => {
    alertMessage.value = ''
  }, 3000)
}

const confirmDelete = (transaction) => {
  deleteTarget.value = transaction
  showDeleteModal.value = true
}

const handleDelete = () => {
  if (!deleteTarget.value) return

  try {
    // Restore stock first
    stockStore.restoreStockForProduct(deleteTarget.value.productId, deleteTarget.value.quantity)
    
    // Delete transaction
    salesStore.deleteTransaction(deleteTarget.value.id)
    
    alertMessage.value = 'Transaksi berhasil dihapus dan stok dikembalikan!'
    alertType.value = 'success'
  } catch (error: any) {
    alertMessage.value = error?.message || 'Gagal menghapus transaksi'
    alertType.value = 'error'
  }

  showDeleteModal.value = false
  deleteTarget.value = null

  setTimeout(() => {
    alertMessage.value = ''
  }, 3000)
}
</script>
