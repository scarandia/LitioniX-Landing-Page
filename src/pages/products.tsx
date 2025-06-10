import React from 'react'
import ProductMain from '@/components/product/ProductMain'

const products = [
    { _id: '1', name: 'Bicicleta 1', imageUrl: '/images/products/Bicis/bici1.jpg', category: 'Bicicletas eléctricas' },
    { _id: '2', name: 'Bicicleta 2', imageUrl: '/images/products/Bicis/bici2.png', category: 'Bicicletas eléctricas' },
    { _id: '3', name: 'Motocicleta 1', imageUrl: '/images/products/Motos/moto1.png', category: 'Motocicletas eléctricas' },
    { _id: '4', name: 'Motocicleta 2', imageUrl: '/images/products/Motos/moto2.png', category: 'Motocicletas eléctricas' },
    { _id: '5', name: 'Hoverboard 1', imageUrl: '/images/products/Hovers/hover1.png', category: 'Hoverboards' },
    { _id: '6', name: 'Hoverboard 2', imageUrl: '/images/products/Hovers/hover2.jpg', category: 'Hoverboards' },
    /* { _id: '7', name: 'Monitor 1', imageUrl: '/images/products/monitor1.jpg', category: 'Monitores y pantallas' },
    { _id: '8', name: 'Monitor 2', imageUrl: '/images/products/monitor2.jpg', category: 'Monitores y pantallas' }, */
    { _id: '9', name: 'Minivan 1', imageUrl: '/images/products/Vans/van3.png', category: 'Minivan eléctrico' },
    { _id: '10', name: 'Minivan 2', imageUrl: '/images/products/Vans/van2.png', category: 'Minivan eléctrico' },
    { _id: '11', name: 'Celda 1', imageUrl: '/images/products/Celdas/celdas1.jpg', category: 'Celdas de Litio' },
    { _id: '12', name: 'Celda 2', imageUrl: '/images/products/Celdas/celdas2.jpg', category: 'Celdas de Litio' },
]

const ProductsPage = () => {
    return <ProductMain products={products} />
}

export default ProductsPage