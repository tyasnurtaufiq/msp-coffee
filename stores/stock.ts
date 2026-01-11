import { defineStore } from 'pinia'

interface StockHistoryEntry {
    id: string
    date: string
    ingredient: string
    amount: number
    unit: string
    type: 'Restock' | 'Quick Add' | 'Penjualan' | 'Pengembalian'
}

export const useStockStore = defineStore('stock', {
    state: () => ({
        stock: {
            coffee: 730,  // gram
            milk: 5000,    // ml
            syrup: 1270   // ml
        },
        stockHistory: [] as StockHistoryEntry[],
        products: [
            {
                id: 'kopi-gularen',
                name: 'Kopi Gula Aren',
                ingredients: { coffee: 25, milk: 120, syrup: 55 }
            },
            {
                id: 'spanish-latte',
                name: 'Spanish Latte',
                ingredients: { coffee: 20, milk: 160, syrup: 20 }
            },
            {
                id: 'honey',
                name: 'Honey Coffee',
                ingredients: { coffee: 18, milk: 140, syrup: 42 }
            }
        ]
    }),

    actions: {
        updateStock(ingredient: string, amount: number) {
            this.stock[ingredient] = amount
        },

        addStock(ingredient: string, amount: number, type: 'Restock' | 'Quick Add' = 'Restock') {
            this.stock[ingredient] += amount

            const ingredientNames: Record<string, string> = {
                coffee: 'Biji Kopi',
                milk: 'Susu',
                syrup: 'Sirup'
            }

            const units: Record<string, string> = {
                coffee: 'g',
                milk: 'ml',
                syrup: 'ml'
            }

            this.stockHistory.unshift({
                id: `STOCK-${Date.now()}`,
                date: new Date().toISOString(),
                ingredient: ingredientNames[ingredient] || ingredient,
                amount: amount,
                unit: units[ingredient] || '',
                type: type
            })
        },

        reduceStock(ingredient: string, amount: number) {
            if (this.stock[ingredient] < amount) {
                throw new Error(`Stok ${ingredient} tidak mencukupi`)
            }
            this.stock[ingredient] -= amount
        },

        // Check if stock is available for a product
        checkStockAvailability(productId: string, quantity: number): { available: boolean; message: string } {
            const product = this.products.find(p => p.id === productId)
            if (!product) {
                return { available: false, message: 'Produk tidak ditemukan' }
            }

            const requiredCoffee = product.ingredients.coffee * quantity
            const requiredMilk = product.ingredients.milk * quantity
            const requiredSyrup = product.ingredients.syrup * quantity

            const errors: string[] = []

            if (this.stock.coffee < requiredCoffee) {
                errors.push(`Kopi kurang ${requiredCoffee - this.stock.coffee}g`)
            }
            if (this.stock.milk < requiredMilk) {
                errors.push(`Susu kurang ${requiredMilk - this.stock.milk}ml`)
            }
            if (this.stock.syrup < requiredSyrup) {
                errors.push(`Sirup kurang ${requiredSyrup - this.stock.syrup}ml`)
            }

            if (errors.length > 0) {
                return { available: false, message: errors.join(', ') }
            }

            return { available: true, message: 'Stok mencukupi' }
        },

        // Reduce stock based on product ingredients
        reduceStockForProduct(productId: string, quantity: number) {
            const product = this.products.find(p => p.id === productId)
            if (!product) {
                throw new Error('Produk tidak ditemukan')
            }

            const coffeeUsed = product.ingredients.coffee * quantity
            const milkUsed = product.ingredients.milk * quantity
            const syrupUsed = product.ingredients.syrup * quantity

            this.stock.coffee -= coffeeUsed
            this.stock.milk -= milkUsed
            this.stock.syrup -= syrupUsed

            // Record history for each ingredient used
            const now = new Date().toISOString()
            if (coffeeUsed > 0) {
                this.stockHistory.unshift({
                    id: `STOCK-${Date.now()}-coffee`,
                    date: now,
                    ingredient: 'Biji Kopi',
                    amount: -coffeeUsed,
                    unit: 'g',
                    type: 'Penjualan'
                })
            }
            if (milkUsed > 0) {
                this.stockHistory.unshift({
                    id: `STOCK-${Date.now()}-milk`,
                    date: now,
                    ingredient: 'Susu',
                    amount: -milkUsed,
                    unit: 'ml',
                    type: 'Penjualan'
                })
            }
            if (syrupUsed > 0) {
                this.stockHistory.unshift({
                    id: `STOCK-${Date.now()}-syrup`,
                    date: now,
                    ingredient: 'Sirup',
                    amount: -syrupUsed,
                    unit: 'ml',
                    type: 'Penjualan'
                })
            }
        },

        // Restore stock when transaction is deleted
        restoreStockForProduct(productId: string, quantity: number) {
            const product = this.products.find(p => p.id === productId)
            if (!product) {
                throw new Error('Produk tidak ditemukan')
            }

            const coffeeRestored = product.ingredients.coffee * quantity
            const milkRestored = product.ingredients.milk * quantity
            const syrupRestored = product.ingredients.syrup * quantity

            this.stock.coffee += coffeeRestored
            this.stock.milk += milkRestored
            this.stock.syrup += syrupRestored

            // Record history for restoration
            const now = new Date().toISOString()
            if (coffeeRestored > 0) {
                this.stockHistory.unshift({
                    id: `STOCK-${Date.now()}-coffee-r`,
                    date: now,
                    ingredient: 'Biji Kopi',
                    amount: coffeeRestored,
                    unit: 'g',
                    type: 'Pengembalian'
                })
            }
            if (milkRestored > 0) {
                this.stockHistory.unshift({
                    id: `STOCK-${Date.now()}-milk-r`,
                    date: now,
                    ingredient: 'Susu',
                    amount: milkRestored,
                    unit: 'ml',
                    type: 'Pengembalian'
                })
            }
            if (syrupRestored > 0) {
                this.stockHistory.unshift({
                    id: `STOCK-${Date.now()}-syrup-r`,
                    date: now,
                    ingredient: 'Sirup',
                    amount: syrupRestored,
                    unit: 'ml',
                    type: 'Pengembalian'
                })
            }
        }
    }
})