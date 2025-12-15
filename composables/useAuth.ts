/**
 * Composable untuk mengelola autentikasi
 * Wrapper untuk authStore agar lebih mudah digunakan di komponen
 */
export const useAuth = () => {
    const authStore = useAuthStore()
    const router = useRouter()

    // State reaktif
    const user = computed(() => authStore.user)
    const isAuthenticated = computed(() => authStore.isAuthenticated)
    const isLoading = ref(false)
    const error = ref<string | null>(null)

    /**
     * Login user
     */
    const login = async (email: string, password: string): Promise<boolean> => {
        isLoading.value = true
        error.value = null

        try {
            const success = await authStore.login(email, password)

            if (success) {
                await router.push('/dashboard')
                return true
            } else {
                error.value = 'Email atau password salah'
                return false
            }
        } catch (e: any) {
            error.value = e.message || 'Terjadi kesalahan saat login'
            return false
        } finally {
            isLoading.value = false
        }
    }

    /**
     * Register user baru
     */
    const register = async (data: {
        name: string
        email: string
        password: string
        phone?: string
        business?: string
    }): Promise<boolean> => {
        isLoading.value = true
        error.value = null

        try {
            const success = await authStore.register(data)

            if (success) {
                await router.push('/dashboard')
                return true
            } else {
                error.value = 'Gagal melakukan registrasi'
                return false
            }
        } catch (e: any) {
            error.value = e.message || 'Terjadi kesalahan saat registrasi'
            return false
        } finally {
            isLoading.value = false
        }
    }

    /**
     * Logout user
     */
    const logout = async (): Promise<void> => {
        authStore.logout()
        await router.push('/login')
    }

    /**
     * Check apakah user sudah login
     */
    const checkAuth = (): boolean => {
        return authStore.isAuthenticated
    }

    /**
     * Clear error message
     */
    const clearError = (): void => {
        error.value = null
    }

    return {
        // State
        user,
        isAuthenticated,
        isLoading,
        error,

        // Actions
        login,
        register,
        logout,
        checkAuth,
        clearError
    }
}
