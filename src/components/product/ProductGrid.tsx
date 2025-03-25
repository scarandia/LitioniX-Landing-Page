import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Image from 'next/image'

const products = [
    { name: 'Bicicletas Electricas', imageUrl: '/images/products/bic1.jpg' },
    { name: 'Motocicletas Eléctricas', imageUrl: '/images/products/41.jpg' },
    { name: 'HoverBoards', imageUrl: '/images/products/hover2.jpg' },
    { name: 'Monitores Y Pantallas', imageUrl: '/images/products/pantalla1.jpg' },
    { name: 'Minivan Electrico', imageUrl: '/images/products/van1.png' },
    { name: 'Celdas de Litio', imageUrl: '/images/products/celdas1.jpg' },
]

const ProductGrid: FC = () => {
    return (
        <Grid container spacing={2} sx={{ mt: 4 }}>
            {products.map((product, index) => (
                <Grid item xs={12} md={4} key={index}>
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
                            style={{ opacity: 0.5 }}
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