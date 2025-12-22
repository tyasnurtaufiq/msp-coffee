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
            price: 19000,
            description: 'Perpaduan sempurna kopi robusta dengan gula aren asli',
            ingredients: { coffee: 25, milk: 120, syrup: 55 },
            rating: 4.9,
            bestseller: true
        },
        {
            id: 'spanish-latte',
            name: 'Spanish Latte',
            price: 19000,
            description: 'Espresso kuat dengan susu kental manis yang creamy',
            ingredients: { coffee: 20, milk: 160, syrup: 20 },
            rating: 4.8,
            bestseller: true
        },
        {
            id: 'honey',
            name: 'Honey Coffee',
            price: 19000,
            description: 'Kombinasi unik kopi dengan madu murni dan sedikit susu',
            ingredients: { coffee: 18, milk: 140, syrup: 42 },
            rating: 4.9,
            bestseller: false
        }
    ]

    return {
        success: true,
        data: products
    }
})
