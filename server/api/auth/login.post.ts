/**
 * API Login
 * POST /api/auth/login
 */
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { email, password } = body

    // Validasi input
    if (!email || !password) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Email dan password harus diisi'
        })
    }

    // Simulasi autentikasi (ganti dengan database query)
    const validUsers = [
        { email: 'admin@msp.com', password: 'admin123', name: 'Admin MSP', role: 'admin' }
    ]

    const user = validUsers.find(u => u.email === email && u.password === password)

    if (!user) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Email atau password salah'
        })
    }

    // Return user data (tanpa password)
    return {
        success: true,
        user: {
            email: user.email,
            name: user.name,
            role: user.role
        }
    }
})
