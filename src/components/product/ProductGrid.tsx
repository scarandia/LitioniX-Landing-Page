import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const products = [
    { name: 'Bicicletas eléctricas', imageUrl: '/images/products/bici1.jpg', category: 'Bicicletas eléctricas' },
    { name: 'Motocicletas eléctricas', imageUrl: '/images/products/moto6.jpg', category: 'Motocicletas eléctricas' },
    { name: 'Hoverboards', imageUrl: '/images/products/hover8.jpg', category: 'Hoverboards' },
    { name: 'Monitores y pantallas', imageUrl: '/images/products/monitor2_big2.jpg', category: 'Monitores y pantallas' },
    { name: 'Miniván eléctrico', imageUrl: '/images/products/van2_white_bg.png', category: 'Minivan eléctrico' },
    { name: 'Celdas de litio', imageUrl: '/images/products/Litio_batteries.png', category: 'Celdas de Litio' },
]

const ProductGrid: FC = () => {
    const router = useRouter()


    return (
        <Grid container spacing={2} sx={{ mt: 4 }}>
            {products.map((product, index) => (
                <Grid item xs={6} md={4} key={index}>
                    {/* Wrap each product in a Link */}
                    <Link href={`/products?category=${encodeURIComponent(product.category)}`} passHref>
                        <Box
                            sx={{
                                height: 300,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: '#EFEAE7', // Text color
                                fontSize: 25,
                                fontWeight: 'bold',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)', // Slight zoom effect on hover
                                },
                            }}
                        >
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                layout="fill"
                                objectFit="cover"
                                style={{ opacity: 1 }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 1, // Starting Opacity
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    transition: 'opacity 0.3s ease, transform 0.3s ease', // Smooth transition for both opacity and transform
                                    transform: 'scale(1)', // Initial scale
                                    '&:hover': {
                                        opacity: 0, // Reduce opacity on hover
                                    },
                                }}
                            >
                                {product.name}
                            </Box>
                        </Box>
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}

export default ProductGrid