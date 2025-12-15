import { defineStore } from 'pinia'
import type { SaleTransaction, Product } from '~/types'

export const useSalesStore = defineStore('sales', {
    state: () => ({
        transactions: [] as SaleTransaction[],
        products: [
            {
                id: 'kopi-gularen',
                name: 'Kopi Gula Aren',
                price: 19000,
                ingredients: { coffee: 25, milk: 120, syrup: 55 }
            },
            {
                id: 'spanish-latte',
                name: 'Spanish Latte',
                price: 19000,
                ingredients: { coffee: 20, milk: 160, syrup: 20 }
            },
            {
                id: 'honey',
                name: 'Honey Coffee',
                price: 19000,
                ingredients: { coffee: 18, milk: 140, syrup: 42 }
            }
        ] as Product[]
    }),

    getters: {
        getProductById: (state) => (id: string) => {
            return state.products.find(p => p.id === id)
        },

        getTotalTransactions: (state) => state.transactions.length,

        getTotalRevenue: (state) => {
            return state.transactions.reduce((sum, t) => sum + t.total, 0)
        },

        getTotalProductsSold: (state) => {
            return state.transactions.reduce((sum, t) => sum + t.quantity, 0)
        },

        // Get sales count by product
        getSalesByProduct: (state) => {
            const result = {
                'kopi-gularen': 0,
                'spanish-latte': 0,
                'honey': 0
            }
            state.transactions.forEach(t => {
                if (result[t.productId] !== undefined) {
                    result[t.productId] += t.quantity
                }
            })
            return result
        },

        // Get monthly sales data for charts
        getMonthlySalesData: (state) => {
            const monthlyData: { [key: string]: { month: string, kopiGularen: number, spanishLatte: number, honey: number, revenue: number } } = {}

            state.transactions.forEach(t => {
                const date = new Date(t.date)
                const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
                const monthName = date.toLocaleDateString('id-ID', { month: 'short' })

                if (!monthlyData[monthKey]) {
                    monthlyData[monthKey] = {
                        month: monthName,
                        kopiGularen: 0,
                        spanishLatte: 0,
                        honey: 0,
                        revenue: 0
                    }
                }

                if (t.productId === 'kopi-gularen') {
                    monthlyData[monthKey].kopiGularen += t.quantity
                } else if (t.productId === 'spanish-latte') {
                    monthlyData[monthKey].spanishLatte += t.quantity
                } else if (t.productId === 'honey') {
                    monthlyData[monthKey].honey += t.quantity
                }
                monthlyData[monthKey].revenue += t.total
            })

            // Convert to array and sort by date
            return Object.entries(monthlyData)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([key, data]) => ({
                    month: data.month,
                    kopiGularen: data.kopiGularen,
                    spanishLatte: data.spanishLatte,
                    honey: data.honey,
                    revenue: data.revenue
                }))
        }
    },

    actions: {
        // CRUD: Add new sale transaction
        addTransaction(productId: string, quantity: number) {
            const product = this.products.find(p => p.id === productId)
            if (!product) {
                throw new Error('Produk tidak ditemukan')
            }

            const transaction: SaleTransaction = {
                id: `TRX-${Date.now()}`,
                date: new Date().toISOString(),
                productId: product.id,
                productName: product.name,
                quantity: quantity,
                pricePerItem: product.price,
                total: product.price * quantity
            }

            this.transactions.unshift(transaction)
            return transaction
        },

        // CRUD: Update existing transaction
        updateTransaction(id: string, quantity: number) {
            const index = this.transactions.findIndex(t => t.id === id)
            if (index === -1) {
                throw new Error('Transaksi tidak ditemukan')
            }

            const transaction = this.transactions[index]
            const product = this.products.find(p => p.id === transaction.productId)
            if (!product) {
                throw new Error('Produk tidak ditemukan')
            }

            const oldQuantity = transaction.quantity

            this.transactions[index] = {
                ...transaction,
                quantity: quantity,
                total: product.price * quantity
            }

            return { oldQuantity, newQuantity: quantity, productId: transaction.productId }
        },

        // CRUD: Delete transaction
        deleteTransaction(id: string) {
            const index = this.transactions.findIndex(t => t.id === id)
            if (index === -1) {
                throw new Error('Transaksi tidak ditemukan')
            }

            const transaction = this.transactions[index]
            this.transactions.splice(index, 1)
            return transaction
        },

        // Get single transaction
        getTransactionById(id: string) {
            return this.transactions.find(t => t.id === id)
        }
    }
})