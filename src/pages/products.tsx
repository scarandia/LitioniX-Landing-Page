import React from 'react'
import ProductMain from '@/components/product/ProductMain'

const products = [
    { name: 'Bicicleta 1', imageUrl: '/images/products/bicicleta1.jpg', category: 'Bicicletas eléctricas' },
    { name: 'Motocicleta 1', imageUrl: '/images/products/motocicleta1.jpg', category: 'Motocicletas eléctricas' },
    { name: 'Hoverboard 1', imageUrl: '/images/products/hoverboard1.jpg', category: 'Hoverboards' },
    { name: 'Monitor 1', imageUrl: '/images/products/monitor1.jpg', category: 'Monitores y pantallas' },
    { name: 'Minivan 1', imageUrl: '/images/products/minivan1.jpg', category: 'Minivan eléctrico' },
    { name: 'Celda 1', imageUrl: '/images/products/celda1.jpg', category: 'Celdas de Litio' },
]

const ProductsPage = () => {
    return <ProductMain products={products} />
}

export default ProductsPage