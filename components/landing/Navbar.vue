<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-sm border-b border-stone-800">
    <div class="container mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3">
          <div class="bg-amber-600 p-2 rounded-lg">
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </div>
          <span class="text-xl font-bold text-white">MSP Coffee</span>
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            to="/" 
            class="text-stone-300 hover:text-amber-500 transition-colors font-medium"
            :class="{ 'text-amber-500': $route.path === '/' }"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="text-stone-300 hover:text-amber-500 transition-colors font-medium"
            :class="{ 'text-amber-500': $route.path === '/about' }"
          >
            About
          </NuxtLink>
          <NuxtLink 
            to="/menu" 
            class="text-stone-300 hover:text-amber-500 transition-colors font-medium"
            :class="{ 'text-amber-500': $route.path === '/menu' }"
          >
            Menu
          </NuxtLink>
          <NuxtLink 
            to="/gallery" 
            class="text-stone-300 hover:text-amber-500 transition-colors font-medium"
            :class="{ 'text-amber-500': $route.path === '/gallery' }"
          >
            Gallery
          </NuxtLink>
          <NuxtLink 
            to="/team" 
            class="text-stone-300 hover:text-amber-500 transition-colors font-medium"
            :class="{ 'text-amber-500': $route.path === '/team' }"
          >
            Team
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="text-stone-300 hover:text-amber-500 transition-colors font-medium"
            :class="{ 'text-amber-500': $route.path === '/contact' }"
          >
            Contact
          </NuxtLink>
          <NuxtLink 
            to="/login" 
            class="px-5 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-600/25 transition-all"
          >
            Login
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden p-2 text-stone-300 hover:text-amber-500 transition-colors"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-show="isMenuOpen"
        class="md:hidden py-4 border-t border-stone-800"
      >
        <div class="flex flex-col space-y-4">
          <NuxtLink 
            to="/" 
            class="text-stone-300 hover:text-amber-500 transition-colors font-medium py-2"
            :class="{ 'text-amber-500': $route.path === '/' }"
            @click="isMenuOpen = false"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="text-stone-300 hover:text-amber-500 transition-colors font-medium py-2"
            :class="{ 'text-amber-500': $route.path === '/about' }"
            @click="isMenuOpen = false"
          >
            About
          </NuxtLink>
          <NuxtLink 
            to="/menu" 
            class="text-stone-300 hover:text-amber-500 transition-colors font-medium py-2"
            :class="{ 'text-amber-500': $route.path === '/menu' }"
            @click="isMenuOpen = false"
          >
            Menu
          </NuxtLink>
          <NuxtLink 
            to="/gallery" 
            class="text-stone-300 hover:text-amber-500 transition-colors font-medium py-2"
            :class="{ 'text-amber-500': $route.path === '/gallery' }"
            @click="isMenuOpen = false"
          >
            Gallery
          </NuxtLink>
          <NuxtLink 
            to="/team" 
            class="text-stone-300 hover:text-amber-500 transition-colors font-medium py-2"
            :class="{ 'text-amber-500': $route.path === '/team' }"
            @click="isMenuOpen = false"
          >
            Team
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="text-stone-300 hover:text-amber-500 transition-colors font-medium py-2"
            :class="{ 'text-amber-500': $route.path === '/contact' }"
            @click="isMenuOpen = false"
          >
            Contact
          </NuxtLink>
          <NuxtLink 
            to="/login" 
            class="px-5 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg text-center"
            @click="isMenuOpen = false"
          >
            Login
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isMenuOpen = ref(false)

// Close menu on route change
const route = useRoute()
watch(() => route.path, () => {
  isMenuOpen.value = false
})
</script>
