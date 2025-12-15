/**
 * Middleware untuk proteksi halaman yang memerlukan autentikasi
 */
export default defineNuxtRouteMiddleware((to, from) => {
    // Gunakan useState untuk memeriksa status auth pada server-side
    const authStore = useAuthStore()

    // Jika belum authenticated dan bukan halaman login/register
    if (!authStore.isAuthenticated) {
        // Redirect ke halaman login
        return navigateTo('/login')
    }
})