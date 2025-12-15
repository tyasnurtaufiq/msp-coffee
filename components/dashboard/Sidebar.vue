<template>
  <!-- Mobile Overlay -->
  <div 
    v-if="isOpen" 
    class="fixed inset-0 bg-black/50 z-40 lg:hidden"
    @click="closeSidebar"
  ></div>

  <!-- Mobile Toggle Button -->
  <button 
    @click="toggleSidebar"
    class="fixed top-4 left-4 z-50 lg:hidden bg-stone-900 text-white p-2 rounded-lg shadow-lg"
  >
    <svg v-if="!isOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>

  <!-- Sidebar -->
  <aside 
    class="fixed top-0 left-0 w-64 h-screen bg-stone-900 text-white p-6 flex flex-col z-50 transition-transform duration-300 ease-in-out"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
  >
    <!-- Logo -->
    <div class="flex items-center space-x-3 mb-8">
      <div class="bg-amber-600 p-2 rounded-lg">
        <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </div>
      <span class="text-xl font-bold">MSP Coffee</span>
    </div>

    <!-- Navigation -->
    <nav class="space-y-2 flex-1">
      <NuxtLink 
        v-for="item in menuItems" 
        :key="item.path"
        :to="item.path" 
        class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors"
        :class="isActive(item.path) ? 'bg-amber-600 text-white' : 'hover:bg-stone-800'"
        @click="closeSidebar"
      >
        <component :is="item.icon" class="h-5 w-5" />
        <span>{{ item.label }}</span>
      </NuxtLink>
    </nav>

    <!-- User Info -->
    <div class="border-t border-stone-700 pt-4 mb-4">
      <div class="flex items-center space-x-3 px-2">
        <div class="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
          <span class="text-sm font-bold">{{ userInitials }}</span>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium truncate">{{ authStore.user?.name || 'Admin' }}</p>
          <p class="text-xs text-stone-400 truncate">{{ authStore.user?.email || 'admin@msp.com' }}</p>
        </div>
      </div>
    </div>

    <!-- Logout Button -->
    <button 
      @click="handleLogout"
      class="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition-colors"
    >
      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
      <span>Logout</span>
    </button>
  </aside>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

// Mobile sidebar state
const isOpen = ref(false)

const toggleSidebar = () => {
  isOpen.value = !isOpen.value
}

const closeSidebar = () => {
  isOpen.value = false
}

// Menu items
const menuItems = [
  { path: '/dashboard', label: 'Dashboard', icon: 'IconHome' },
  { path: '/dashboard/transactions', label: 'Transaksi', icon: 'IconTransaction' },
  { path: '/dashboard/sales', label: 'Laporan Penjualan', icon: 'IconChart' },
  { path: '/dashboard/stock', label: 'Stok Bahan', icon: 'IconBox' },
  { path: '/dashboard/production', label: 'Kalkulasi Produksi', icon: 'IconCalculator' }
]

// Check if route is active
const isActive = (path) => {
  if (path === '/dashboard') {
    return route.path === '/dashboard'
  }
  return route.path.startsWith(path)
}

// Get user initials
const userInitials = computed(() => {
  const name = authStore.user?.name || 'Admin'
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
})

// Handle logout
const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}

// Icon components (inline SVG wrappers)
const IconHome = {
  template: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>`
}

const IconChart = {
  template: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>`
}

const IconBox = {
  template: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>`
}

const IconCalculator = {
  template: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>`
}

const IconTransaction = {
  template: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`
}
</script>
