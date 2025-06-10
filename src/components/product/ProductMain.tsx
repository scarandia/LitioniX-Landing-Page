import React, { FC, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Grid, Box, Typography, Skeleton, useTheme } from '@mui/material';
import { Header } from '@/components/header';
import ProductCard from './ProductCard';
import CategorySidebar from './CategorySidebar';

interface Product {
    _id: string;
    name: string;
    imageUrl: string;
    category: string;
    price?: number;
    rating?: number;
    description?: string;
}

interface Props {
    products: Product[];
    loading?: boolean;
}

const ProductMain: FC<Props> = ({ products, loading = false }) => {
    const router = useRouter();
    const theme = useTheme();
    const { category } = router.query;

    const { categories, selectedCategory, filteredProducts } = useMemo(() => {
        const filteredCategories = Array.from(new Set(products.map(p => p.category)));
        const currentCategory = typeof category === 'string' && filteredCategories.includes(category)
            ? category
            : filteredCategories[0] || '';
        return {
            categories: filteredCategories,
            selectedCategory: currentCategory,
            filteredProducts: products.filter(p => p.category === currentCategory)
        };
    }, [products, category]);

    const handleCategoryClick = (category: string) => {
        router.push({ pathname: '/products', query: { category } }, undefined, { shallow: true });
    };

    return (
        <>
            <Header />
            <Box sx={{ maxWidth: 'xl', mx: 'auto', p: { xs: 2, md: 4 }, minHeight: '80vh', background: theme.palette.mode === 'dark' ? 'linear-gradient(to bottom,rgb(7, 0, 0), #1E1E1E)' : 'linear-gradient(to bottom, #F5F5F5, #FFFFFF)' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <CategorySidebar
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onCategoryClick={handleCategoryClick}
                        />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Typography
                            variant="h4"
                            fontWeight={700}
                            mb={4}
                            sx={{
                                color: '#fff',
                                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                                background: theme.palette.primary.main,
                                display: 'inline-block',
                                px: 3,
                                py: 1,
                                borderRadius: '8px',
                                boxShadow: theme.shadows[2]
                            }}
                        >
                            {selectedCategory}
                        </Typography>

                        {loading ? (
                            <Grid container spacing={3}>
                                {[...Array(6)].map((_, i) => (
                                    <Grid item xs={12} sm={6} md={4} key={i}>
                                        <Skeleton
                                            variant="rectangular"
                                            width="100%"
                                            height={300}
                                            sx={{
                                                borderRadius: '12px',
                                                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        ) : filteredProducts.length === 0 ? (
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '300px',
                                borderRadius: '12px',
                                background: theme.palette.mode === 'dark'
                                    ? 'linear-gradient(145deg, #1E1E1E, #2A2A2A)'
                                    : 'linear-gradient(145deg, #FFFFFF, #F5F5F5)',
                                border: `1px dashed ${theme.palette.divider}`
                            }}>
                                <Typography variant="h6" color="text.secondary" mb={2}>
                                    No products found in this category
                                </Typography>
                            </Box>
                        ) : (
                            <Grid container spacing={3}>
                                {filteredProducts.map((product, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={product._id}>
                                        <ProductCard product={product} priority={index === 0} />
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default ProductMain;