<template>
  <div class="min-h-screen bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
      <div class="text-center mb-8">
        <div class="bg-amber-600 p-4 rounded-full inline-block mb-4">
          <svg class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-stone-900">Daftar Admin</h2>
        <p class="text-stone-600 mt-2">Buat akun admin baru</p>
      </div>

      <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        {{ error }}
      </div>

      <div v-if="success" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
        {{ success }}
      </div>

      <div class="space-y-4">
        <div>
          <label class="block text-stone-700 font-medium mb-2">Nama Lengkap</label>
          <input 
            v-model="formData.name"
            type="text"
            class="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
            placeholder="Nama Anda"
          />
        </div>

        <div>
          <label class="block text-stone-700 font-medium mb-2">Email</label>
          <input 
            v-model="formData.email"
            type="email"
            class="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label class="block text-stone-700 font-medium mb-2">Password</label>
          <input 
            v-model="formData.password"
            type="password"
            class="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
            placeholder="Min. 6 karakter"
          />
        </div>

        <div>
          <label class="block text-stone-700 font-medium mb-2">Konfirmasi Password</label>
          <input 
            v-model="formData.confirmPassword"
            type="password"
            class="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
            placeholder="Ulangi password"
          />
        </div>

        <button 
          @click="handleRegister"
          :disabled="loading"
          class="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-lg disabled:opacity-50"
        >
          {{ loading ? 'Loading...' : 'Daftar' }}
        </button>
      </div>

      <div class="mt-6 text-center">
        <p class="text-stone-600">
          Sudah punya akun? 
          <NuxtLink to="/login" class="text-amber-600 hover:text-amber-700 font-semibold">
            Login
          </NuxtLink>
        </p>
      </div>

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

const formData = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const loading = ref(false)
const error = ref('')
const success = ref('')

const handleRegister = async () => {
  loading.value = true
  error.value = ''
  success.value = ''
  
  // Validasi
  if (!formData.value.name || !formData.value.email || !formData.value.password) {
    error.value = 'Semua field harus diisi'
    loading.value = false
    return
  }
  
  if (formData.value.password.length < 6) {
    error.value = 'Password minimal 6 karakter'
    loading.value = false
    return
  }
  
  if (formData.value.password !== formData.value.confirmPassword) {
    error.value = 'Password tidak cocok'
    loading.value = false
    return
  }
  
  try {
    const success = await authStore.register({
      name: formData.value.name,
      email: formData.value.email
    })
    
    if (success) {
      success.value = 'Registrasi berhasil! Mengalihkan...'
      setTimeout(() => {
        router.push('/dashboard')
      }, 1500)
    }
  } catch (e) {
    error.value = 'Terjadi kesalahan saat registrasi'
  } finally {
    loading.value = false
  }
}
</script>