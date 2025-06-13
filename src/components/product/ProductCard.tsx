import React, { FC } from 'react';
import { Box, Typography, Chip, useTheme } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Product {
    _id: string;
    name: string;
    imageUrl: string;
    category: string;
    price?: number;
}

const ProductCard: FC<{ product: Product; priority?: boolean }> = ({ product, priority }) => {
    const theme = useTheme();
    const router = useRouter();

    const handleClick = () => {
        router.push(`/products/${product._id}`);
    };

    return (
        <Box
            onClick={handleClick}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid',
                borderColor: theme.palette.divider,
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                backgroundColor: theme.palette.background.paper,
                cursor: 'pointer',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[6],
                    borderColor: theme.palette.primary.main,
                    '& .product-image': {
                        transform: 'scale(1.05)'
                    }
                }
            }}
        >
            <Box sx={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    priority={priority}
                    className="product-image"
                    style={{
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                    }}
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
                    <Link href={`/productList?category=${encodeURIComponent(product.category)}`} passHref>
                        <Typography
                            component="span"
                            sx={{
                                ml: 2,
                                fontWeight: 500,
                                color: theme.palette.secondary.main,
                                textDecoration: 'none',
                                '&:hover': {
                                    textDecoration: 'underline'
                                }
                            }}
                        >
                            {product.category}
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductCard;