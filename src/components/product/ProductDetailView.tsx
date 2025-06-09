// components/ProductDetailView.tsx
import React, { FC } from 'react';
import { Box, Typography, Chip, Button, useTheme } from '@mui/material';
import Image from 'next/image';
import router from 'next/router';

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    category: string;
    price?: number;
    rating?: number;
    description?: string;
}

interface Props {
    product: Product;
}

const ProductDetailView: FC<Props> = ({ product }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                maxWidth: 900,
                mx: 'auto',
                p: 4,
                borderRadius: 4,
                boxShadow: theme.shadows[4],
                backgroundColor: theme.palette.background.paper,
                mt: 6,
                mb: 10,
            }}
        >
            <Button variant="outlined" onClick={() => router.back()} sx={{ mb: 3 }}>
                Volver
            </Button>

            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: 400,
                    borderRadius: 3,
                    overflow: 'hidden',
                    mb: 3,
                }}
            >
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 900px"
                />
            </Box>

            <Typography variant="h3" fontWeight={700} mb={2}>
                {product.name}
            </Typography>

            {product.price && (
                <Chip
                    label={`Precio: $${product.price.toFixed(2)}`}
                    color="primary"
                    sx={{
                        fontWeight: 700,
                        fontSize: '1.25rem',
                        mb: 3,
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                    }}
                />
            )}

            <Typography variant="subtitle1" color="text.secondary" mb={3}>
                Categoría: {product.category}
            </Typography>

            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                {product.description || 'No hay descripción disponible.'}
            </Typography>
        </Box>
    );
};

export default ProductDetailView;
