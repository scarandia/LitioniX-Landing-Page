import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

interface Product {
    name: string
    imageUrl: string
    category: string
}

interface Props {
    products: Product[]
}

const ProductMain: FC<Props> = ({ products }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('Bicicletas eléctricas')

    // Get unique categories
    const categories = Array.from(new Set(products.map((product) => product.category)))

    // Filter products by selected category
    const filteredProducts = products.filter((product) => product.category === selectedCategory)

    return (
        <Box sx={{ padding: '20px' }}>
            <Grid container spacing={4}>
                {/* Categories Menu */}
                <Grid item xs={12} md={3}>
                    <List sx={{ border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                        {categories.map((category, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton
                                    selected={category === selectedCategory}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    <ListItemText primary={category} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Grid>

                {/* Products Display */}
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
                                    }}
                                >
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.name}
                                        width={300}
                                        height={200}
                                        style={{ objectFit: 'cover' }}
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
    )
}

export default ProductMain