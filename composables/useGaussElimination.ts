export const useGaussElimination = () => {
    const calculateMaxProduction = (stock: any, products: any[]) => {
        // Matrix untuk sistem persamaan linear
        // Setiap baris = produk, setiap kolom = bahan baku
        const matrix = products.map(p => [
            p.ingredients.coffee,
            p.ingredients.milk,
            p.ingredients.syrup,
            0 // hasil produksi (akan dihitung)
        ])

        // Vector stok bahan baku
        const stockVector = [stock.coffee, stock.milk, stock.syrup]

        // Hitung maksimum produksi per produk berdasarkan stok
        const maxProduction = products.map((product, idx) => {
            const limits = []

            // Hitung limit dari setiap bahan baku
            if (product.ingredients.coffee > 0) {
                limits.push(Math.floor(stock.coffee / product.ingredients.coffee))
            }
            if (product.ingredients.milk > 0) {
                limits.push(Math.floor(stock.milk / product.ingredients.milk))
            }
            if (product.ingredients.syrup > 0) {
                limits.push(Math.floor(stock.syrup / product.ingredients.syrup))
            }

            // Ambil minimum dari semua limit
            return {
                product: product.name,
                maxQuantity: limits.length > 0 ? Math.min(...limits) : 0,
                limitedBy: getLimitingFactor(product, stock, limits)
            }
        })

        return maxProduction
    }

    const getLimitingFactor = (product: any, stock: any, limits: number[]) => {
        const minLimit = Math.min(...limits)

        if (stock.coffee / product.ingredients.coffee === minLimit) return 'Biji Kopi'
        if (stock.milk / product.ingredients.milk === minLimit) return 'Susu'
        if (stock.syrup / product.ingredients.syrup === minLimit) return 'Sirup'

        return 'Unknown'
    }

    return {
        calculateMaxProduction
    }
}