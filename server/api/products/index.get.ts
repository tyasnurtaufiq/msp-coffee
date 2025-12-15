/**
 * API Get Products
 * GET /api/products
 */
export default defineEventHandler(async (event) => {
    // Data produk dengan resep (bahan baku per cup)
    const products = [
        {
            id: 'kopi-gularen',
            name: 'Kopi Gula Aren',
            price: 18000,
            description: 'Perpaduan sempurna kopi robusta dengan gula aren asli',
            ingredients: { coffee: 20, milk: 0, syrup: 30 },
            rating: 4.9,
            bestseller: true
        },
        {
            id: 'spanish-latte',
            name: 'Spanish Latte',
            price: 22000,
            description: 'Espresso kuat dengan susu kental manis yang creamy',
            ingredients: { coffee: 20, milk: 150, syrup: 20 },
            rating: 4.8,
            bestseller: true
        },
        {
            id: 'honey',
            name: 'Honey Coffee',
            price: 20000,
            description: 'Kombinasi unik kopi dengan madu murni dan sedikit susu',
            ingredients: { coffee: 20, milk: 50, syrup: 25 },
            rating: 4.7,
            bestseller: false
        }
    ]

    return {
        success: true,
        data: products
    }
})
