<template>
  <div class="min-h-screen bg-stone-50">
    <!-- Sidebar -->
    <DashboardSidebar />

    <!-- Main Content -->
    <div class="lg:ml-64 p-4 lg:p-8 pt-16 lg:pt-8">
      <div class="mb-8 flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold text-stone-900">Transaksi Penjualan</h1>
          <p class="text-stone-600 mt-1">Kelola transaksi dan penjualan kopi</p>
        </div>
        <button 
          @click="openModal('add')"
          class="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold flex items-center space-x-2"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>Tambah Penjualan</span>
        </button>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-xl shadow-sm p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-stone-500 text-sm">Total Transaksi</p>
              <p class="text-3xl font-bold text-stone-900 mt-1">{{ salesStore.transactions.length }}</p>
            </div>
            <div class="bg-amber-100 p-3 rounded-lg">
              <svg class="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-stone-500 text-sm">Total Pendapatan</p>
              <p class="text-3xl font-bold text-green-600 mt-1">{{ formatCurrency(salesStore.getTotalRevenue) }}</p>
            </div>
            <div class="bg-green-100 p-3 rounded-lg">
              <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-stone-500 text-sm">Stok Tersedia</p>
              <div class="flex items-center space-x-3 mt-1">
                <span class="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">Kopi: {{ stockStore.stock.coffee }}g</span>
                <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Susu: {{ stockStore.stock.milk }}ml</span>
                <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Syrup: {{ stockStore.stock.syrup }}ml</span>
              </div>
            </div>
            <div class="bg-blue-100 p-3 rounded-lg">
              <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Alert Messages -->
      <div v-if="alertMessage" :class="alertType === 'success' ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700'" class="border px-4 py-3 rounded-lg mb-6 flex items-center justify-between">
        <span>{{ alertMessage }}</span>
        <button @click="alertMessage = ''" class="font-bold">&times;</button>
      </div>

      <!-- Transactions Table -->
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-xl font-bold text-stone-900 mb-6">Daftar Transaksi</h2>
        
        <div v-if="salesStore.transactions.length === 0" class="text-center py-12">
          <svg class="h-16 w-16 text-stone-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <p class="text-stone-500">Belum ada transaksi</p>
          <button @click="openModal('add')" class="mt-4 text-amber-600 hover:text-amber-700 font-semibold">
            + Tambah Transaksi Pertama
          </button>
        </div>

        <div v-else class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="bg-stone-50">
                <th class="text-left py-4 px-4 font-semibold text-stone-700">ID</th>
                <th class="text-left py-4 px-4 font-semibold text-stone-700">Tanggal</th>
                <th class="text-left py-4 px-4 font-semibold text-stone-700">Produk</th>
                <th class="text-center py-4 px-4 font-semibold text-stone-700">Qty</th>
                <th class="text-right py-4 px-4 font-semibold text-stone-700">Harga</th>
                <th class="text-right py-4 px-4 font-semibold text-stone-700">Total</th>
                <th class="text-center py-4 px-4 font-semibold text-stone-700">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="transaction in salesStore.transactions" :key="transaction.id" class="border-t border-stone-100 hover:bg-stone-50 transition-colors">
                <td class="py-4 px-4 text-stone-500 text-sm font-mono">{{ transaction.id }}</td>
                <td class="py-4 px-4 text-stone-600">{{ formatDate(transaction.date) }}</td>
                <td class="py-4 px-4">
                  <span class="font-semibold text-stone-900">{{ transaction.productName }}</span>
                </td>
                <td class="py-4 px-4 text-center">
                  <span class="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    {{ transaction.quantity }} cup
                  </span>
                </td>
                <td class="py-4 px-4 text-right text-stone-600">{{ formatCurrency(transaction.pricePerItem) }}</td>
                <td class="py-4 px-4 text-right font-bold text-green-600">{{ formatCurrency(transaction.total) }}</td>
                <td class="py-4 px-4 text-center">
                  <div class="flex items-center justify-center space-x-2">
                    <button 
                      @click="openModal('edit', transaction)"
                      class="bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-200 transition-colors"
                      title="Edit"
                    >
                      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button 
                      @click="confirmDelete(transaction)"
                      class="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition-colors"
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
    <div v-if="showModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-xl font-bold text-stone-900">
            {{ modalMode === 'add' ? 'Tambah Penjualan' : 'Edit Penjualan' }}
          </h3>
          <button @click="closeModal" class="text-stone-400 hover:text-stone-600">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div v-if="formError" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
          {{ formError }}
        </div>

        <form @submit.prevent="handleSubmit">
          <div class="space-y-4">
            <!-- Product Select -->
            <div>
              <label class="block text-stone-700 font-medium mb-2">Produk</label>
              <select 
                v-model="formData.productId"
                :disabled="modalMode === 'edit'"
                class="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none disabled:bg-stone-100"
              >
                <option value="">Pilih Produk</option>
                <option v-for="product in salesStore.products" :key="product.id" :value="product.id">
                  {{ product.name }} - {{ formatCurrency(product.price) }}
                </option>
              </select>
            </div>

            <!-- Quantity -->
            <div>
              <label class="block text-stone-700 font-medium mb-2">Jumlah (cup)</label>
              <input 
                v-model.number="formData.quantity"
                type="number"
                min="1"
                class="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
                placeholder="Masukkan jumlah"
              />
            </div>

            <!-- Preview -->
            <div v-if="formData.productId && formData.quantity > 0" class="bg-stone-50 rounded-lg p-4">
              <p class="text-sm text-stone-500 mb-2">Ringkasan:</p>
              <div class="flex justify-between items-center">
                <span class="font-medium text-stone-700">Total</span>
                <span class="text-xl font-bold text-green-600">{{ formatCurrency(calculateTotal) }}</span>
              </div>
              <div class="mt-2 text-xs text-stone-500">
                <p>Penggunaan Bahan:</p>
                <p v-if="selectedProduct">
                  Kopi: {{ selectedProduct.ingredients.coffee * formData.quantity }}g, 
                  Susu: {{ selectedProduct.ingredients.milk * formData.quantity }}ml,
                  Sirup: {{ selectedProduct.ingredients.syrup * formData.quantity }}ml
                </p>
              </div>
            </div>
          </div>

          <div class="flex space-x-3 mt-6">
            <button 
              type="button"
              @click="closeModal"
              class="flex-1 px-4 py-3 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors font-semibold"
            >
              Batal
            </button>
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="flex-1 px-4 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold disabled:opacity-50"
            >
              {{ isSubmitting ? 'Menyimpan...' : (modalMode === 'add' ? 'Tambah' : 'Simpan') }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal Delete Confirmation -->
    <div v-if="showDeleteModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl w-full max-w-sm p-6 shadow-xl">
        <div class="text-center">
          <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-stone-900 mb-2">Hapus Transaksi?</h3>
          <p class="text-stone-500 mb-6">
            Transaksi <strong>{{ deleteTarget?.id }}</strong> akan dihapus dan stok bahan akan dikembalikan.
          </p>
          <div class="flex space-x-3">
            <button 
              @click="showDeleteModal = false"
              class="flex-1 px-4 py-3 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors font-semibold"
            >
              Batal
            </button>
            <button 
              @click="handleDelete"
              class="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
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
