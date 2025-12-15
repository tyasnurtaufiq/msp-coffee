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
        if (limits.length === 0) return 'Tidak ada bahan'

        const minLimit = Math.min(...limits)

        // Hitung limit per bahan baku dengan Math.floor
        const coffeeLimit = product.ingredients.coffee > 0
            ? Math.floor(stock.coffee / product.ingredients.coffee)
            : Infinity
        const milkLimit = product.ingredients.milk > 0
            ? Math.floor(stock.milk / product.ingredients.milk)
            : Infinity
        const syrupLimit = product.ingredients.syrup > 0
            ? Math.floor(stock.syrup / product.ingredients.syrup)
            : Infinity

        // Cari bahan yang menjadi pembatas (yang nilainya = minLimit)
        if (coffeeLimit === minLimit) return 'Biji Kopi'
        if (milkLimit === minLimit) return 'Susu'
        if (syrupLimit === minLimit) return 'Sirup'

        return 'Stok Cukup'
    }

    return {
        calculateMaxProduction
    }
}