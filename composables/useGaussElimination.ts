/**
 * Composable untuk perhitungan produksi maksimal menggunakan Metode Eliminasi Gauss
 * 
 * Sistem Persamaan Linear berdasarkan resep produk:
 * Persamaan 1: 25A + 20B + 18C = stok biji kopi
 * Persamaan 2: 120A + 160B + 140C = stok susu
 * Persamaan 3: 55A + 20B + 42C = stok syrup
 * 
 * Dimana:
 * - A = jumlah produksi produk A (Kopi Gula Aren)
 * - B = jumlah produksi produk B (Spanish Latte)
 * - C = jumlah produksi produk C (Kopi Honey)
 */

export interface ProductIngredient {
    coffee: number   // gram - biji kopi
    milk: number     // ml - susu
    syrup: number    // ml - syrup
}

export interface Product {
    id: string
    name: string
    ingredients: ProductIngredient
}

export interface Stock {
    coffee: number   // stok biji kopi (gram)
    milk: number     // stok susu (ml)
    syrup: number    // stok syrup (ml)
}

export interface ProductionResult {
    product: string
    maxQuantity: number
    limitedBy: string
    usedMaterials: {
        coffee: number
        milk: number
        syrup: number
    }
}

/**
 * Koefisien resep default berdasarkan persamaan:
 * Persamaan 1 (Biji Kopi): 25A + 20B + 18C = stok biji kopi
 * Persamaan 2 (Susu):      120A + 160B + 140C = stok susu
 * Persamaan 3 (Syrup):     55A + 20B + 42C = stok syrup
 */
export const DEFAULT_RECIPES: Record<string, ProductIngredient> = {
    // Produk A (Kopi Gula Aren): 25g kopi, 120ml susu, 55ml syrup
    A: { coffee: 25, milk: 120, syrup: 55 },
    // Produk B (Spanish Latte): 20g kopi, 160ml susu, 20ml syrup
    B: { coffee: 20, milk: 160, syrup: 20 },
    // Produk C (Kopi Honey): 18g kopi, 140ml susu, 42ml syrup
    C: { coffee: 18, milk: 140, syrup: 42 }
}

export const useGaussElimination = () => {
    /**
     * Membuat matriks augmented dari resep produk
     * Format: [A | b] dimana A adalah matriks koefisien dan b adalah vektor stok
     * 
     * Berdasarkan persamaan dari gambar:
     * Persamaan 1: 25A + 20B + 18C = stok biji kopi
     * Persamaan 2: 120A + 160B + 140C = stok susu
     * Persamaan 3: 55A + 20B + 42C = stok syrup
     * 
     * Matriks koefisien:
     * | 25   20   18  | stok_kopi  |
     * | 120  160  140 | stok_susu  |
     * | 55   20   42  | stok_syrup |
     */
    const createAugmentedMatrix = (products: Product[], stock: Stock): number[][] => {
        // Matriks koefisien berukuran [3 x n+1] (3 bahan baku, n produk + 1 kolom stok)
        // Baris 0: koefisien coffee untuk semua produk | stok coffee (25A + 20B + 18C)
        // Baris 1: koefisien milk untuk semua produk | stok milk (120A + 160B + 140C)
        // Baris 2: koefisien syrup untuk semua produk | stok syrup (55A + 20B + 42C)

        const matrix: number[][] = [
            [...products.map(p => p.ingredients.coffee), stock.coffee],
            [...products.map(p => p.ingredients.milk), stock.milk],
            [...products.map(p => p.ingredients.syrup), stock.syrup]
        ]

        return matrix
    }

    /**
     * Eliminasi Gauss dengan partial pivoting
     * Mengubah matriks ke bentuk eselon baris (Row Echelon Form)
     */
    const gaussElimination = (matrix: number[][]): number[][] => {
        const rows = matrix.length
        const cols = matrix[0].length

        // Deep copy matriks untuk tidak mengubah original
        const result = matrix.map(row => [...row])

        for (let pivot = 0; pivot < Math.min(rows, cols - 1); pivot++) {
            // 1. Partial Pivoting: Cari baris dengan nilai absolut terbesar pada kolom pivot
            let maxRow = pivot
            let maxVal = Math.abs(result[pivot][pivot])

            for (let row = pivot + 1; row < rows; row++) {
                if (Math.abs(result[row][pivot]) > maxVal) {
                    maxVal = Math.abs(result[row][pivot])
                    maxRow = row
                }
            }

            // Tukar baris jika perlu
            if (maxRow !== pivot) {
                [result[pivot], result[maxRow]] = [result[maxRow], result[pivot]]
            }

            // Skip jika pivot bernilai 0
            if (result[pivot][pivot] === 0) continue

            // 2. Eliminasi: Buat semua elemen di bawah pivot menjadi 0
            for (let row = pivot + 1; row < rows; row++) {
                // Rasio eliminasi: r = A[row][pivot] / A[pivot][pivot]
                const ratio = result[row][pivot] / result[pivot][pivot]

                // Kurangi baris saat ini dengan (rasio × baris pivot)
                // R_row = R_row - (ratio × R_pivot)
                for (let col = pivot; col < cols; col++) {
                    result[row][col] -= ratio * result[pivot][col]
                }
            }
        }

        return result
    }

    /**
     * Hitung produksi maksimal per produk berdasarkan constraint bahan baku
     * Menggunakan persamaan resep untuk setiap produk
     */
    const calculateMaxProduction = (stock: Stock, products: Product[]): ProductionResult[] => {
        // Buat augmented matrix dari resep produk
        const augmentedMatrix = createAugmentedMatrix(products, stock)

        // Terapkan eliminasi Gauss
        const echelonMatrix = gaussElimination(augmentedMatrix)

        // Untuk setiap produk, hitung maksimum berdasarkan batasan setiap bahan baku
        // Menggunakan persamaan: xᵢ ≤ stok_bahan / kebutuhan_bahan_per_unit
        const results: ProductionResult[] = products.map((product, idx) => {
            // Persamaan batasan untuk setiap bahan baku:
            // coffee_dibutuhkan × x ≤ stok_coffee  →  x ≤ stok_coffee / coffee_dibutuhkan
            // milk_dibutuhkan × x ≤ stok_milk      →  x ≤ stok_milk / milk_dibutuhkan  
            // syrup_dibutuhkan × x ≤ stok_syrup    →  x ≤ stok_syrup / syrup_dibutuhkan

            const coffeeNeeded = product.ingredients.coffee
            const milkNeeded = product.ingredients.milk
            const syrupNeeded = product.ingredients.syrup

            // Hitung batas maksimum dari setiap constraint (persamaan)
            const coffeeLimitEq = coffeeNeeded > 0
                ? Math.floor(stock.coffee / coffeeNeeded)
                : Infinity
            const milkLimitEq = milkNeeded > 0
                ? Math.floor(stock.milk / milkNeeded)
                : Infinity
            const syrupLimitEq = syrupNeeded > 0
                ? Math.floor(stock.syrup / syrupNeeded)
                : Infinity

            // Produksi maksimal adalah minimum dari semua constraint
            // Ini adalah solusi feasible dari sistem persamaan linear
            const maxQuantity = Math.min(coffeeLimitEq, milkLimitEq, syrupLimitEq)

            // Tentukan constraint yang membatasi (binding constraint)
            const limitedBy = determineLimitingConstraint(
                coffeeLimitEq,
                milkLimitEq,
                syrupLimitEq,
                maxQuantity
            )

            // Hitung bahan baku yang terpakai jika diproduksi maksimal
            const usedMaterials = {
                coffee: coffeeNeeded * maxQuantity,
                milk: milkNeeded * maxQuantity,
                syrup: syrupNeeded * maxQuantity
            }

            return {
                product: product.name,
                maxQuantity: maxQuantity === Infinity ? 0 : maxQuantity,
                limitedBy,
                usedMaterials
            }
        })

        return results
    }

    /**
     * Tentukan constraint mana yang menjadi pembatas (binding constraint)
     * Dalam sistem persamaan, ini adalah persamaan dengan slack variable = 0
     */
    const determineLimitingConstraint = (
        coffeeLimit: number,
        milkLimit: number,
        syrupLimit: number,
        minLimit: number
    ): string => {
        if (coffeeLimit === Infinity && milkLimit === Infinity && syrupLimit === Infinity) {
            return 'Tidak ada bahan yang dibutuhkan'
        }

        // Cari semua constraints yang binding (bernilai sama dengan minimum)
        const bindingConstraints: string[] = []

        if (coffeeLimit === minLimit) bindingConstraints.push('Biji Kopi')
        if (milkLimit === minLimit) bindingConstraints.push('Susu')
        if (syrupLimit === minLimit) bindingConstraints.push('Sirup')

        if (bindingConstraints.length === 0) return 'Stok Cukup'
        if (bindingConstraints.length === 1) return bindingConstraints[0]

        // Jika ada multiple binding constraints
        return bindingConstraints.join(' & ')
    }

    /**
     * Menampilkan langkah-langkah eliminasi Gauss untuk edukasi
     */
    const getGaussSteps = (stock: Stock, products: Product[]): string[] => {
        const steps: string[] = []

        // Step 1: Bentuk sistem persamaan
        steps.push('📐 LANGKAH 1: Pembentukan Sistem Persamaan Linear')
        steps.push('Berdasarkan resep setiap produk, dibentuk persamaan:')

        products.forEach((p, i) => {
            const eq = `x${i + 1} (${p.name}): ${p.ingredients.coffee}g kopi + ${p.ingredients.milk}ml susu + ${p.ingredients.syrup}ml sirup`
            steps.push(`  ${eq}`)
        })

        // Step 2: Bentuk matriks
        steps.push('')
        steps.push('📊 LANGKAH 2: Pembentukan Matriks Augmented [A|b]')
        const matrix = createAugmentedMatrix(products, stock)
        steps.push('  Matriks koefisien resep | Stok tersedia:')
        matrix.forEach((row, i) => {
            const label = i === 0 ? 'Kopi:  ' : i === 1 ? 'Susu:  ' : 'Sirup: '
            steps.push(`  ${label}[${row.join(', ')}]`)
        })

        // Step 3: Eliminasi
        steps.push('')
        steps.push('🔢 LANGKAH 3: Proses Eliminasi Gauss')
        steps.push('  Mengubah matriks ke bentuk eselon baris...')

        const echelon = gaussElimination(matrix)
        steps.push('  Hasil matriks eselon:')
        echelon.forEach((row, i) => {
            const label = i === 0 ? 'Baris 1: ' : i === 1 ? 'Baris 2: ' : 'Baris 3: '
            const formatted = row.map(v => v.toFixed(2))
            steps.push(`  ${label}[${formatted.join(', ')}]`)
        })

        // Step 4: Solusi
        steps.push('')
        steps.push('✅ LANGKAH 4: Perhitungan Solusi')
        steps.push('  Untuk setiap produk, maksimum = min(stok_i / kebutuhan_i)')

        return steps
    }

    return {
        calculateMaxProduction,
        getGaussSteps,
        gaussElimination,
        createAugmentedMatrix
    }
}