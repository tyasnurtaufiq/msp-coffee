/**
 * API Update Stock
 * POST /api/stock
 */
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { ingredient, amount, type } = body

    // Validasi input
    if (!ingredient || amount === undefined) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Ingredient dan amount harus diisi'
        })
    }

    const validIngredients = ['coffee', 'milk', 'syrup']
    if (!validIngredients.includes(ingredient)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Ingredient tidak valid'
        })
    }

    if (typeof amount !== 'number' || amount <= 0) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Amount harus berupa angka positif'
        })
    }

    // Simulasi update stok (ganti dengan database update)
    const updatedStock = {
        ingredient,
        amount,
        type: type || 'restock',
        updatedAt: new Date().toISOString()
    }

    return {
        success: true,
        message: `Stok ${ingredient} berhasil diperbarui`,
        data: updatedStock
    }
})
