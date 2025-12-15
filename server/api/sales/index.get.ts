/**
 * API Get Sales Data
 * GET /api/sales
 */
export default defineEventHandler(async (event) => {
    // Simulasi data penjualan (ganti dengan database query)
    const salesData = [
        { month: 'Jan', kopiGularen: 120, spanishLatte: 95, honey: 80, revenue: 4500000 },
        { month: 'Feb', kopiGularen: 145, spanishLatte: 110, honey: 95, revenue: 5200000 },
        { month: 'Mar', kopiGularen: 160, spanishLatte: 125, honey: 105, revenue: 5800000 },
        { month: 'Apr', kopiGularen: 155, spanishLatte: 130, honey: 110, revenue: 5950000 },
        { month: 'Mei', kopiGularen: 170, spanishLatte: 140, honey: 120, revenue: 6400000 },
        { month: 'Jun', kopiGularen: 185, spanishLatte: 155, honey: 135, revenue: 7100000 }
    ]

    // Hitung total
    const totals = {
        totalKopiGularen: salesData.reduce((sum, item) => sum + item.kopiGularen, 0),
        totalSpanishLatte: salesData.reduce((sum, item) => sum + item.spanishLatte, 0),
        totalHoney: salesData.reduce((sum, item) => sum + item.honey, 0),
        totalRevenue: salesData.reduce((sum, item) => sum + item.revenue, 0)
    }

    return {
        success: true,
        data: salesData,
        totals,
        updatedAt: new Date().toISOString()
    }
})
