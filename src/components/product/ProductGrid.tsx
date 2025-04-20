import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Image from 'next/image'

const products = [
    { name: 'Bicicletas eléctricas', imageUrl: '/images/products/bici1.jpg' },
    { name: 'Motocicletas eléctricas', imageUrl: '/images/products/moto6.jpg' },
    { name: 'Hoverboards', imageUrl: '/images/products/hover8.jpg' },
    { name: 'Monitores y pantallas', imageUrl: '/images/products/monitor2.jpg' },
    { name: 'Miniván eléctrico', imageUrl: '/images/products/van2_white_bg.png' },
    { name: 'Celdas de litio', imageUrl: '/images/products/Litio_batteries.png' },
]

const ProductGrid: FC = () => {
    return (
        <Grid container spacing={2} sx={{ mt: 4 }}>
            {products.map((product, index) => (
                <Grid item xs={6} md={4} key={index}>
                    <Box
                        sx={{
                            height: 300,
                            backgroundColor: '#0E1428',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: '#F2D398',
                            fontSize: 25,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            layout="fill"
                            objectFit="cover"
                            style={{ opacity: 0.8 }}
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
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                transition: 'transform 0.3s ease', // animation
                                transform: 'scale(1)', // Initial scale
                                '&:hover': {
                                    transform: 'scale(1.3)', // Scale up on hover
                                },
                            }}
                        >
                            {product.name}
                        </Box>
                    </Box>
                </Grid>
            ))}
        </Grid>
    )
}

export default ProductGrid