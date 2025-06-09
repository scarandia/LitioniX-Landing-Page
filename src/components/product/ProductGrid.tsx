'use client';
import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Container, useTheme, useMediaQuery, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import motion to avoid SSR issues
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), {
    ssr: false,
    loading: () => <div />
});

const products = [
    {
        name: 'Bicicletas Eléctricas',
        imageUrl: '/images/products/bici1.jpg',
        category: 'bicicletas-electricas',
        accentColor: '#4ECDC4',
        description: 'Movilidad urbana sostenible'
    },
    // ... other products
];

const ProductCard = ({ product, isHovered }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <MotionDiv
            animate={!isMobile && isHovered ? { scale: 1.03 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%' }}
        >
            <Link href={`/productos/${product.category}`} passHref legacyBehavior>
                <Box
                    component="a"
                    sx={{
                        position: 'relative',
                        borderRadius: 2,
                        overflow: 'hidden',
                        height: isMobile ? 240 : 300,
                        cursor: 'pointer',
                        boxShadow: 3,
                        display: 'block',
                        textDecoration: 'none'
                    }}
                >
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        sizes="(max-width: 600px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        priority
                    />

                    {!isMobile ? (
                        <MotionDiv
                            animate={{
                                backgroundColor: isHovered
                                    ? product.accentColor
                                    : 'rgba(0,0,0,0.6)'
                            }}
                            transition={{ duration: 0.3 }}
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '16px',
                                color: '#fff'
                            }}
                        >
                            <Typography variant="h6" fontWeight={700}>
                                {product.name}
                            </Typography>
                            <Typography variant="body2">{product.description}</Typography>
                        </MotionDiv>
                    ) : (
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                p: 2,
                                color: '#fff',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
                            }}
                        >
                            <Typography variant="h6" fontWeight={700}>
                                {product.name}
                            </Typography>
                            <Typography variant="body2">{product.description}</Typography>
                        </Box>
                    )}
                </Box>
            </Link>
        </MotionDiv>
    );
};

const ProductGrid = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
        noSsr: true // This prevents SSR for this query
    });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Add loading state for initial render
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Return a skeleton or null during initial hydration
        return null;
    }

    return (
        <Box sx={{ py: 8, backgroundColor: '#0A192F' }}>
            <Container>
                <Box textAlign="center" mb={6}>
                    <Typography variant="h5" color="#4ECDC4" fontWeight={500}>
                        EXPLORA NUESTRA GAMA
                    </Typography>
                    <Typography variant="h4" color="white" fontWeight={700}>
                        Productos de Movilidad Sostenible
                    </Typography>
                    <Typography variant="body1" color="rgba(255,255,255,0.7)" mt={1}>
                        Vehículos eléctricos y soluciones de energía para un futuro más limpio.
                    </Typography>
                </Box>

                {isMobile ? (
                    <Box
                        component="div" // Explicit div to avoid hydration issues
                        sx={{
                            display: 'flex',
                            overflowX: 'auto',
                            gap: 2,
                            pb: 2,
                            px: 1,
                            scrollSnapType: 'x mandatory',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        {products.map((product) => (
                            <Box
                                key={product.name}
                                sx={{ flex: '0 0 80%', scrollSnapAlign: 'center' }}
                            >
                                <ProductCard product={product} isHovered={false} />
                            </Box>
                        ))}
                    </Box>
                ) : (
                    <Grid container spacing={3}>
                        {products.map((product, index) => (
                            <React.Fragment key={product.name}>
                                {index === 3 && (
                                    <Grid item md={2} display={{ xs: 'none', md: 'block' }} />
                                )}
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <ProductCard product={product} isHovered={hoveredIndex === index} />
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                )}

                <Box textAlign="center" mt={6}>
                    <Link href="/products" passHref>
                        <IconButton
                            sx={{
                                color: '#fff',
                                backgroundColor: 'rgba(78,205,196,0.2)',
                                borderRadius: '50px',
                                px: 4,
                                py: 1.5,
                                '&:hover': { backgroundColor: '#4ECDC4' }
                            }}
                        >
                            Ver todos los productos <ArrowForwardIcon sx={{ ml: 1 }} />
                        </IconButton>
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default ProductGrid;