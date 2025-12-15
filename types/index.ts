export interface User {
    id: string
    email: string
    name: string
}

export interface Product {
    id: string
    name: string
    price: number
    ingredients: {
        coffee: number
        milk: number
        syrup: number
    }
}

export interface Stock {
    coffee: number
    milk: number
    syrup: number
}

export interface Sale {
    date: string
    product: string
    quantity: number
    total: number
}

export interface SaleTransaction {
    id: string
    date: string
    productId: string
    productName: string
    quantity: number
    pricePerItem: number
    total: number
}

export interface Product {
    id: string
    name: string
    price: number
    description?: string
    ingredients: {
        coffee: number
        milk: number
        syrup: number
    }
    rating?: number
    bestseller?: boolean
}