/**
 * API Get Stock
 * GET /api/stock
 */
export default defineEventHandler(async (event) => {
    // Simulasi data stok (ganti dengan database query)
    const stock = {
        coffee: 5000,  // gram
        milk: 3000,    // ml
        syrup: 2000    // ml
    }

    return {
        success: true,
        data: stock,
        updatedAt: new Date().toISOString()
    }
})
