import React from 'react'
import ProductMain from '@/components/product/ProductMain'

export const products = [
    //BICICLETAS
    {
        _id: '1',
        name: 'Bicicletas',
        images: ['/images/products/Bicis/bici1.jpg', '/images/products/Bicis/bici2.png', '/images/products/Bicis/bici3.png', '/images/products/Bicis/bici4.jpg'],
        category: 'Bicicletas eléctricas',
        description: 'Bicicleta eléctrica ideal para recorridos urbanos. Ofrece un equilibrio perfecto entre autonomía, velocidad y comodidad. Diseño moderno y ecológico para un estilo de vida sostenible.'
    },
    //{ _id: '2', name: 'Bicicleta 2', images: ['/images/products/Bicis/bici3.png'], category: 'Bicicletas eléctricas', description: 'Descripcion Producto' },

    //MOTOS
    {
        _id: '3',
        name: 'MOTO ELÉCTRICA (NX 2S)',
        images: ['/images/products/Motos/moto1.png', '/images/products/Motos/moto2.png', '/images/products/Motos/moto3.png', '/images/products/Motos/moto6.png'],
        category: 'Motocicletas eléctricas',
        description: 'Motocicleta eléctrica de alto rendimiento, perfecta para desplazamientos diarios y trayectos urbanos. Cuenta con un diseño robusto y silencioso, bajo mantenimiento y cero emisiones.',
        info: [
            { label: 'Motor', value: '3000W' },
            { label: 'Batería', value: '72V 32AH' },
            { label: 'Velocidad máxima', value: '75 Km/h' },
            { label: 'Autonomía', value: '90 Km' }
        ]
    },
    {
        _id: '4',
        name: 'MOTO ELÉCTRICA (LIX50)',
        images: ['/images/products/Motos/Moto2/Moto1.jpg'],
        category: 'Motocicletas eléctricas',
        description: 'Motocicleta eléctrica de alto rendimiento, perfecta para desplazamientos diarios y trayectos urbanos. Cuenta con un diseño robusto y silencioso, bajo mantenimiento y cero emisiones.',
        comingSoon: true,
        info: [
            { label: 'Motor', value: '5000W' },
            { label: 'Batería', value: '72V 60AH' },
            { label: 'Tiempo de Carga', value: '6 hrs' },
            { label: 'Peso', value: '81 Kg' },
            { label: 'Velocidad máxima', value: '100 Km/h' },
            { label: 'Autonomía', value: '200 Km' },
            { label: 'Carga Máxima', value: '300 Kg' },
            { label: 'Inclinación de Escalada', value: '15°' },
        ]
    },
    {
        _id: '5',
        name: 'MOTO ELÉCTRICA (NX 5.0)',
        images: ['/images/products/Motos/Moto4/Moto1.jpg'],
        category: 'Motocicletas eléctricas',
        description: 'Motocicleta eléctrica de alto rendimiento, perfecta para desplazamientos diarios y trayectos urbanos. Cuenta con un diseño robusto y silencioso, bajo mantenimiento y cero emisiones.',
        info: [
            { label: 'Motor', value: '5000W' },
            { label: 'Batería', value: '72V 60AH' },
            { label: 'Velocidad máxima', value: '105 Km/h' },
            { label: 'Autonomía', value: '110 Km' },
            { label: 'Carga Máxima', value: '300 Kg' },
            { label: 'Inclinación de Escalada', value: '25°' }
        ]
    },
    {
        _id: '6',
        name: 'MOTO ELÉCTRICA (NX 3.0)',
        images: ['/images/products/Motos/Moto5/Moto1.jpg'],
        category: 'Motocicletas eléctricas',
        description: 'Motocicleta eléctrica de alto rendimiento, perfecta para desplazamientos diarios y trayectos urbanos. Cuenta con un diseño robusto y silencioso, bajo mantenimiento y cero emisiones.',
        info: [
            { label: 'Motor', value: '3000W' },
            { label: 'Batería', value: '72V 60AH' },
            { label: 'Velocidad máxima', value: '90 Km/h' },
            { label: 'Autonomía', value: '125 Km' },
            { label: 'Carga Máxima', value: '300 Kg' }
        ]
    },
    {
        _id: '7',
        name: 'MOTO ELÉCTRICA (NX 127)',
        images: ['/images/products/Motos/Moto6/Moto1.jpg'],
        category: 'Motocicletas eléctricas',
        description: 'Motocicleta eléctrica de alto rendimiento, perfecta para desplazamientos diarios y trayectos urbanos. Cuenta con un diseño robusto y silencioso, bajo mantenimiento y cero emisiones.',
        info: [
            { label: 'Motor', value: '3000W' },
            { label: 'Batería', value: '60V 32AH' },
            { label: 'Velocidad máxima', value: '70 Km/h' }
        ]
    },

    //HOVERBOARDS
    {
        _id: '9',
        name: 'Hoverboard 1',
        images: ['/images/products/Hovers/hover1.png', '/images/products/Hovers/hover2.png', '/images/products/Hovers/hover3.png', '/images/products/Hovers/hover4.png', '/images/products/Hovers/hover5.png', '/images/products/Hovers/hover7.png', '/images/products/Hovers/hover8.png', '/images/products/Hovers/hover9.png'],
        category: 'Hoverboards',
        description: 'Hoverboard eléctrico de última generación con sensores de equilibrio inteligente. Ideal para diversión y desplazamientos cortos, fácil de usar y con diseño futurista.'
    },

    //LITVANS
    {
        _id: '10',
        name: 'Litvan 1',
        images: ['/images/products/Vans/Litvan0.png', '/images/products/Vans/Litvan1.png', '/images/products/Vans/Litvan2.png', '/images/products/Vans/Litvan3.png', '/images/products/Vans/Litvan4.png', '/images/products/Vans/Litvan5.png', '/images/products/Vans/Litvan6.png', '/images/products/Vans/Litvan7.png', '/images/products/Vans/Litvan8.png'],
        category: 'Minivan eléctrico',
        description: 'Minivan eléctrica diseñada para transporte urbano o comercial. Espaciosa, eficiente y con batería de alto rendimiento. Incorpora ficha técnica descargable para más detalles técnicos.',
        techSheetUrl: '/images/products/Vans/Fichas/fichaLitvan1.pdf',
        info: [
            { label: 'Capacidad de Carga', value: '950 Kg' },
            { label: 'Velocidad máxima', value: '140 Km/h' },
            { label: 'Capacidad de Personas', value: '7' },
            { label: 'Tiempo de Carga Rápida', value: '20-80%: 45 min' },
            { label: 'Tiempo de Carga Lenta', value: '20-100%: 11-12h' }
        ]
    },
    {
        _id: '11',
        name: 'Litvan 2',
        images: ['/images/products/Vans/Litvan2/Litvan1.png', '/images/products/Vans/Litvan2/Litvan2.png', '/images/products/Vans/Litvan2/Litvan3.png', '/images/products/Vans/Litvan2/Litvan4.png', '/images/products/Vans/Litvan2/Litvan5.png', '/images/products/Vans/Litvan2/Litvan6.png', '/images/products/Vans/Litvan2/Litvan7.png', '/images/products/Vans/Litvan2/Litvan8.png'],
        category: 'Minivan eléctrico',
        description: 'Minivan eléctrica diseñada para transporte urbano o comercial. Espaciosa, eficiente y con batería de alto rendimiento. Incorpora ficha técnica descargable para más detalles técnicos.',
        techSheetUrl: '/images/products/Vans/Fichas/fichaLitvan2.pdf',
        info: [
            { label: 'Capacidad de Carga', value: '1250 Kg' },
            { label: 'Velocidad máxima', value: '140 Km/h' },
            { label: 'Capacidad de Personas', value: '7' },
            { label: 'Tiempo de Carga Rápida', value: '2 hrs' },
            { label: 'Tiempo de Carga Lenta', value: '10 hrs' }
        ]
    },

    //CELDAS DE LITIO
    {
        _id: '12',
        name: 'Celdas De Litio 18650',
        images: ['/images/products/Celdas/celdas1.jpg', '/images/products/Celdas/celdas2.jpg', '/images/products/Celdas/Litio_batteries.png'],
        category: 'Celdas de Litio',
        description: 'Las celdas de LITIO cilíndrico LITIONIX 18650, están compuestas por un metal alcalino blanco plateado, blando, dúctil y muy ligero, que permiten el almacenamiento de energía, para uso en diferentes aplicaciones desde vehículos eléctricos hasta energía solar fotovoltaica.',
        techSheetUrl: '/images/products/Celdas/Fichas/Celdas_18650.pdf',
    },
    {
        _id: '13',
        name: 'Celda De Litio 21700',
        images: ['/images/products/Celdas/celdas1.jpg', '/images/products/Celdas/celdas2.jpg', '/images/products/Celdas/Litio_batteries.png'],
        category: 'Celdas de Litio',
        description: 'La celda de LITIO cilíndrico LITIONIX 21700, está compuesta por un metal alcalino blanco plateado, blando, dúctil y muy ligero, que permite el almacenamiento de energía, para uso en diferentes aplicaciones desde vehículos eléctricos hasta energía solar fotovoltaica',
        techSheetUrl: '/images/products/Celdas/Fichas/Celdas_21700.pdf',
    },
]

const ProductsPage = (): JSX.Element => {
    return <ProductMain products={products} />
}

export default ProductsPage