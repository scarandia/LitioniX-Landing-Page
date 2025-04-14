import React from 'react'
import ProductMain from '@/components/product/ProductMain'

const products = [
    { name: 'Bicicleta 1', imageUrl: '/images/products/bici1.jpg', category: 'Bicicletas eléctricas' },
    { name: 'Bicicleta 2', imageUrl: '/images/products/bici2.png', category: 'Bicicletas eléctricas' },
    { name: 'Motocicleta 1', imageUrl: '/images/products/moto1.png', category: 'Motocicletas eléctricas' },
    { name: 'Motocicleta 2', imageUrl: '/images/products/moto2.png', category: 'Motocicletas eléctricas' },
    { name: 'Hoverboard 1', imageUrl: '/images/products/hover1.png', category: 'Hoverboards' },
    { name: 'Hoverboard 2', imageUrl: '/images/products/hover2.jpg', category: 'Hoverboards' },
    { name: 'Monitor 1', imageUrl: '/images/products/monitor1.jpg', category: 'Monitores y pantallas' },
    { name: 'Monitor 2', imageUrl: '/images/products/monitor2.jpg', category: 'Monitores y pantallas' },
    { name: 'Minivan 1', imageUrl: '/images/products/van3.png', category: 'Minivan eléctrico' },
    { name: 'Minivan 2', imageUrl: '/images/products/van2.png', category: 'Minivan eléctrico' },
    { name: 'Celda 1', imageUrl: '/images/products/celdas1.jpg', category: 'Celdas de Litio' },
    { name: 'Celda 2', imageUrl: '/images/products/celdas2.jpg', category: 'Celdas de Litio' },
]

const ProductsPage = () => {
    return <ProductMain products={products} />
}

export default ProductsPage