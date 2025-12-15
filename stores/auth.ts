import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as any,
        isAuthenticated: false
    }),

    actions: {
        async login(email: string, password: string) {
            // Simulasi login (ganti dengan API real)
            if (email === 'admin@msp.com' && password === 'admin123') {
                this.user = { email, name: 'Admin MSP' }
                this.isAuthenticated = true
                return true
            }
            return false
        },

        async register(data: any) {
            // Simulasi register
            this.user = data
            this.isAuthenticated = true
            return true
        },

        logout() {
            this.user = null
            this.isAuthenticated = false
        }
    }
})