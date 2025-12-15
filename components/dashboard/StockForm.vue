<template>
  <div class="bg-white rounded-xl shadow-sm p-6">
    <h2 class="text-xl font-bold text-stone-900 mb-6 flex items-center">
      <svg class="h-6 w-6 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
      Tambah Stok Bahan
    </h2>

    <!-- Success Message -->
    <div v-if="successMessage" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4 flex items-center">
      <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      {{ successMessage }}
    </div>

    <div class="space-y-6">
      <!-- Ingredient Forms -->
      <div v-for="item in ingredients" :key="item.key">
        <label class="block text-stone-700 font-medium mb-2">{{ item.label }} ({{ item.unit }})</label>
        <div class="flex space-x-2">
          <input 
            v-model.number="addStock[item.key]"
            type="number"
            min="0"
            class="flex-1 px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 outline-none transition-all"
            :class="`focus:border-${item.color}-600 focus:ring-${item.color}-200`"
            placeholder="Masukkan jumlah"
          />
          <button 
            @click="handleAddStock(item.key)"
            class="px-6 py-3 rounded-lg text-white font-semibold whitespace-nowrap transition-colors"
            :class="`bg-${item.color}-600 hover:bg-${item.color}-700`"
          >
            Tambah
          </button>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="border-t border-stone-200 pt-6 mt-6">
        <h3 class="font-semibold text-stone-900 mb-3">Quick Actions</h3>
        <div class="grid grid-cols-2 gap-3">
          <button 
            v-for="action in quickActions" 
            :key="action.label"
            @click="handleQuickAdd(action.ingredient, action.amount)"
            class="px-4 py-2 rounded-lg transition-colors text-sm font-medium"
            :class="`bg-${action.color}-50 text-${action.color}-700 hover:bg-${action.color}-100`"
          >
            {{ action.label }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['update', 'add'])

const stockStore = useStockStore()

const addStock = ref({
  coffee: 0,
  milk: 0,
  syrup: 0
})

const successMessage = ref('')

const ingredients = [
  { key: 'coffee', label: 'Biji Kopi', unit: 'gram', color: 'amber' },
  { key: 'milk', label: 'Susu', unit: 'ml', color: 'blue' },
  { key: 'syrup', label: 'Sirup', unit: 'ml', color: 'green' }
]

const quickActions = [
  { ingredient: 'coffee', amount: 1000, label: '+1kg Kopi', color: 'amber' },
  { ingredient: 'milk', amount: 1000, label: '+1L Susu', color: 'blue' },
  { ingredient: 'coffee', amount: 5000, label: '+5kg Kopi', color: 'amber' },
  { ingredient: 'syrup', amount: 500, label: '+500ml Sirup', color: 'green' }
]

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
  
  stockStore.addStock(ingredient, amount)
  showSuccess(`Berhasil menambah ${amount} ${units[ingredient]} ${ingredientNames[ingredient]}`)
  
  addStock.value[ingredient] = 0
  emit('add', { ingredient, amount })
}

const handleQuickAdd = (ingredient, amount) => {
  stockStore.addStock(ingredient, amount)
  showSuccess(`Quick add: ${amount} ${units[ingredient]} ${ingredientNames[ingredient]} berhasil ditambahkan`)
  emit('add', { ingredient, amount })
}

const showSuccess = (message) => {
  successMessage.value = message
  setTimeout(() => {
    successMessage.value = ''
  }, 3000)
}
</script>
