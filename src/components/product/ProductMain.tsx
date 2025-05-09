import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { Header } from '@/components/header' // Import the Header component

interface Product {
    name: string
    imageUrl: string
    category: string
}

interface Props {
    products: Product[]
}

const ProductMain: FC<Props> = ({ products }) => {
    const router = useRouter()
    const { category } = router.query // Obtener la categoría desde la URL

    // Obtener categorías únicas
    const categories = Array.from(new Set(products.map((product) => product.category)))

    // Si no hay categoría seleccionada en la URL, usar la primera categoría como predeterminada
    const selectedCategory = typeof category === 'string' ? category : categories[0]

    // Filtrar productos por la categoría seleccionada
    const filteredProducts = products.filter((product) => product.category === selectedCategory)

    // Redirigir a la URL con la categoría seleccionada
    const handleCategoryClick = (category: string) => {
        router.push(`/products?category=${encodeURIComponent(category)}`)
    }

    return (
        <>
            {/* Add the Header component */}
            <Header />

            {/* Main Content */}
            <Box sx={{ padding: '20px' }}>
                <Grid container spacing={4}>
                    {/* Menú de Categorías */}
                    <Grid item xs={12} md={3}>
                        <List sx={{ border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#EFEAE7' }}>
                            {categories.map((category, index) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemButton
                                        selected={category === selectedCategory}
                                        onClick={() => handleCategoryClick(category)}
                                    >
                                        <ListItemText primary={category} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    {/* Mostrar Productos */}
                    <Grid item xs={12} md={9}>
                        <Grid container spacing={4}>
                            {filteredProducts.map((product, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Box
                                        sx={{
                                            border: '1px solid #ddd',
                                            borderRadius: '8px',
                                            overflow: 'hidden',
                                            textAlign: 'center',
                                            backgroundColor: '#f9f9f9',
                                            transition: 'transform 0.3s, box-shadow 0.3s',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                                            },
                                        }}
                                    >
                                        <Image
                                            src={product.imageUrl}
                                            alt={product.name}
                                            width={300}
                                            height={200}
                                            style={{ objectFit: 'cover', borderBottom: '1px solid #ddd' }}
                                        />
                                        <Typography variant="h6" sx={{ padding: '10px 0' }}>
                                            {product.name}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ProductMain