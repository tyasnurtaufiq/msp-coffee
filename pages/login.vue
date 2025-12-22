<template>
  <div class="min-h-screen bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
      <div class="text-center mb-8">
        <div class="bg-amber-600 p-4 rounded-full inline-block mb-4">
          <svg class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-stone-900">Admin Login</h2>
        <p class="text-stone-600 mt-2">MSP Coffee Dashboard</p>
      </div>

      <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        {{ error }}
      </div>

      <div class="space-y-4">
        <div>
          <label class="block text-stone-700 font-medium mb-2">Email</label>
          <input 
            v-model="email"
            type="email"
            class="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
            placeholder="admin@msp.com"
          />
        </div>

        <div>
          <label class="block text-stone-700 font-medium mb-2">Password</label>
          <input 
            v-model="password"
            type="password"
            class="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
            placeholder="••••••••"
          />
        </div>

        <button 
          @click="handleLogin"
          :disabled="loading"
          class="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-lg disabled:opacity-50"
        >
          {{ loading ? 'Loading...' : 'Login' }}
        </button>
      </div>

      <!-- <div class="mt-6 text-center">
        <p class="text-stone-600">
          Belum punya akun? 
          <NuxtLink to="/register" class="text-amber-600 hover:text-amber-700 font-semibold">
            Daftar
          </NuxtLink>
        </p>
      </div> -->

      <div class="mt-6 text-center">
        <NuxtLink to="/" class="text-stone-500 hover:text-stone-700 text-sm">
          ← Kembali ke Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const authStore = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  loading.value = true
  error.value = ''
  
  try {
    const success = await authStore.login(email.value, password.value)
    
    if (success) {
      router.push('/dashboard')
    } else {
      error.value = 'Email atau password salah'
    }
  } catch (e) {
    error.value = 'Terjadi kesalahan'
  } finally {
    loading.value = false
  }
}
</script>