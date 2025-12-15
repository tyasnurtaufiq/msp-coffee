/**
 * API Register
 * POST /api/auth/register
 */
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { name, email, password, phone, business } = body

    // Validasi input
    if (!name || !email || !password) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Nama, email, dan password harus diisi'
        })
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Format email tidak valid'
        })
    }

    // Validasi password minimal 6 karakter
    if (password.length < 6) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Password minimal 6 karakter'
        })
    }

    // Simulasi simpan user (ganti dengan database insert)
    const newUser = {
        id: Date.now(),
        name,
        email,
        phone: phone || null,
        business: business || null,
        role: 'user',
        createdAt: new Date().toISOString()
    }

    return {
        success: true,
        message: 'Registrasi berhasil',
        user: newUser
    }
})
