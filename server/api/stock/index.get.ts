/**
 * API Get Stock
 * GET /api/stock
 */
export default defineEventHandler(async (event) => {
    // Simulasi data stok (ganti dengan database query)
    const stock = {
        coffee: 1500,  // gram
        milk: 2000,    // ml
        syrup: 1300    // ml
    }

    return {
        success: true,
        data: stock,
        updatedAt: new Date().toISOString()
    }
})
