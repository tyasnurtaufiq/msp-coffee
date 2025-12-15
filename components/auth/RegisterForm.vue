<template>
  <form @submit.prevent="handleSubmit" class="space-y-5">
    <!-- Error Message -->
    <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
      {{ error }}
    </div>

    <!-- Name Field -->
    <div>
      <label class="block text-stone-700 font-medium mb-2">Nama Lengkap</label>
      <input 
        v-model="form.name"
        type="text"
        required
        class="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
        placeholder="Nama lengkap Anda"
      />
    </div>

    <!-- Email Field -->
    <div>
      <label class="block text-stone-700 font-medium mb-2">Email</label>
      <input 
        v-model="form.email"
        type="email"
        required
        class="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
        placeholder="email@contoh.com"
      />
    </div>

    <!-- Phone Field -->
    <div>
      <label class="block text-stone-700 font-medium mb-2">No. Telepon</label>
      <input 
        v-model="form.phone"
        type="tel"
        class="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
        placeholder="08xxxxxxxxxx"
      />
    </div>

    <!-- Business Name Field -->
    <div>
      <label class="block text-stone-700 font-medium mb-2">Nama Usaha (Opsional)</label>
      <input 
        v-model="form.business"
        type="text"
        class="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
        placeholder="Nama usaha kopi Anda"
      />
    </div>

    <!-- Password Field -->
    <div>
      <label class="block text-stone-700 font-medium mb-2">Password</label>
      <input 
        v-model="form.password"
        type="password"
        required
        minlength="6"
        class="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
        placeholder="Minimal 6 karakter"
      />
    </div>

    <!-- Confirm Password Field -->
    <div>
      <label class="block text-stone-700 font-medium mb-2">Konfirmasi Password</label>
      <input 
        v-model="form.confirmPassword"
        type="password"
        required
        class="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
        placeholder="Ulangi password"
      />
    </div>

    <!-- Terms -->
    <div class="flex items-start">
      <input type="checkbox" v-model="agreeTerms" required class="mt-1 rounded border-stone-300 text-amber-600 focus:ring-amber-500" />
      <span class="ml-2 text-sm text-stone-600">
        Saya setuju dengan <a href="#" class="text-amber-600 hover:underline">Syarat & Ketentuan</a> dan <a href="#" class="text-amber-600 hover:underline">Kebijakan Privasi</a>
      </span>
    </div>

    <!-- Submit Button -->
    <button 
      type="submit"
      :disabled="loading || !agreeTerms"
      class="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
    >
      <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      {{ loading ? 'Memproses...' : 'Daftar Sekarang' }}
    </button>
  </form>
</template>

<script setup>
const emit = defineEmits(['success', 'error'])

const form = ref({
  name: '',
  email: '',
  phone: '',
  business: '',
  password: '',
  confirmPassword: ''
})

const loading = ref(false)
const error = ref('')
const agreeTerms = ref(false)

const authStore = useAuthStore()
const router = useRouter()

const handleSubmit = async () => {
  // Validate passwords match
  if (form.value.password !== form.value.confirmPassword) {
    error.value = 'Password tidak cocok'
    return
  }

  loading.value = true
  error.value = ''

  try {
    const success = await authStore.register({
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      business: form.value.business
    })
    
    if (success) {
      emit('success')
      router.push('/dashboard')
    } else {
      error.value = 'Gagal melakukan registrasi'
      emit('error', error.value)
    }
  } catch (e) {
    error.value = 'Terjadi kesalahan. Silakan coba lagi.'
    emit('error', error.value)
  } finally {
    loading.value = false
  }
}
</script>
