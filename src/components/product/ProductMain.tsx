// components/ProductMain.tsx
import React, { FC, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box, Grid, Typography, List, ListItem, ListItemButton, ListItemText, Chip, Skeleton, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';

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

const ProductCard: FC<{ product: Product }> = ({ product }) => {
    const theme = useTheme();
    const router = useRouter();
    console.log('Product ID:', product._id); // Add this


    const handleProductClick = () => {
        router.push(`/products/${product._id}`);
    };

    return (
        <Box
            onClick={handleProductClick}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid',
                borderColor: theme.palette.divider,
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: theme.palette.background.paper,
                cursor: 'pointer',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[6],
                    borderColor: theme.palette.primary.main,
                    '& .product-image': {
                        transform: 'scale(1.05)'
                    }
                },
            }}
        >
            <Box sx={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4/3',
                overflow: 'hidden'
            }}>
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="product-image"
                    style={{
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </Box>
            <Box sx={{ p: 3, flexGrow: 1 }}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                    {product.name}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                    {product.price && (
                        <Chip
                            label={`$${product.price.toFixed(2)}`}
                            color="primary"
                            sx={{
                                fontWeight: 700,
                                fontSize: '1rem',
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText
                            }}
                        />
                    )}
                    <Link href={`/products?category=${encodeURIComponent(product.category)}`} passHref legacyBehavior>
                        <a style={{
                            marginLeft: '0.5rem',
                            fontWeight: 500,
                            color: theme.palette.secondary.main,
                            textDecoration: 'none',
                        }}
                            onMouseOver={e => (e.currentTarget.style.textDecoration = 'underline')}
                            onMouseOut={e => (e.currentTarget.style.textDecoration = 'none')}
                        >
                            {product.category}
                        </a>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

const ProductMain: FC<Props> = ({ products, loading = false }) => {
    const router = useRouter();
    const { category } = router.query;
    const theme = useTheme();

    const { categories, selectedCategory, filteredProducts } = useMemo(() => {
        // Remove "Monitores y pantallas" category
        const filteredCategories = Array.from(new Set(products.map(p => p.category)))
            .filter(cat => cat !== 'Monitores y pantallas');
        const currentCategory = typeof category === 'string' && filteredCategories.includes(category) ? category : filteredCategories[0] || '';
        return {
            categories: filteredCategories,
            selectedCategory: currentCategory,
            filteredProducts: products.filter(p => p.category === currentCategory)
        };
    }, [products, category]);

    const handleCategoryClick = (category: string) => {
        router.push(
            { pathname: '/products', query: { category } },
            undefined,
            { shallow: true }
        );
    };

    return (
        <>
            <Header />
            <Box sx={{
                maxWidth: 'xl',
                mx: 'auto',
                p: { xs: 2, md: 4 },
                minHeight: '80vh',
                background: theme.palette.mode === 'dark' ?
                    'linear-gradient(to bottom, #121212, #1E1E1E)' :
                    'linear-gradient(to bottom, #F5F5F5, #FFFFFF)'
            }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <Box sx={{
                            position: 'sticky',
                            top: 80,
                            borderRadius: '16px',
                            background: theme.palette.mode === 'dark'
                                ? 'linear-gradient(145deg, #252525, #303030)'
                                : 'linear-gradient(145deg, #F8F8F8, #EEEEEE)',
                            boxShadow: theme.shadows[1],
                            p: 2,
                            border: `1px solid ${theme.palette.divider}`
                        }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                                <Typography
                                    variant="h6"
                                    fontWeight={700}
                                    color="text.primary"
                                    sx={{
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: -8,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: 40,
                                            height: 3,
                                            backgroundColor: theme.palette.primary.main,
                                            borderRadius: 2
                                        }
                                    }}
                                >
                                    Categorías
                                </Typography>
                            </Box>
                            <List sx={{ p: 0 }}>
                                {categories.map((cat) => (
                                    <ListItem key={cat} disablePadding sx={{ mb: 0.5 }}>
                                        <ListItemButton
                                            selected={cat === selectedCategory}
                                            onClick={() => handleCategoryClick(cat)}
                                            sx={{
                                                borderRadius: '8px',
                                                px: 2,
                                                py: 1.5,
                                                '&.Mui-selected': {
                                                    background: theme.palette.primary.light,
                                                    color: theme.palette.primary.main,
                                                    fontWeight: 600,
                                                    '&:hover': {
                                                        background: theme.palette.primary.light,
                                                    }
                                                },
                                                '&:hover': {
                                                    background: theme.palette.action.hover,
                                                }
                                            }}
                                        >
                                            <ListItemText
                                                primary={cat}
                                                primaryTypographyProps={{
                                                    fontWeight: 500,
                                                    textAlign: 'center'
                                                }}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Grid>

                    {/* Products Grid */}
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
                            <Box
                                sx={{
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
                                }}
                            >
                                <Typography variant="h6" color="text.secondary" mb={2}>
                                    No products found in this category
                                </Typography>
                            </Box>
                        ) : (
                            <Grid container spacing={3}>
                                {filteredProducts.map((product, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={product._id ?? index}>
                                        <ProductCard product={product} />
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Box >
        </>
    );
};

export default ProductMain;
