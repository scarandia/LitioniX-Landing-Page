'use client';
import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Container, Button, Chip, useTheme, useMediaQuery } from '@mui/material';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const products = [
    {
        name: 'Bicicletas Eléctricas',
        imageUrl: '/images/products/Bicis/bici1.jpg',
        category: 'Bicicletas+eléctricas',
        accentColor: '#10b981', // Emerald green
        description: 'Movilidad urbana sostenible'
    },
    {
        name: 'Motocicletas Eléctricas',
        imageUrl: '/images/products/Motos/moto6.jpg',
        category: 'Motocicletas+eléctricas',
        accentColor: '#f59e0b', // Amber
        description: 'Potencia y autonomía'
    },
    {
        name: 'Hoverboards',
        imageUrl: '/images/products/Hovers/hover8.png',
        category: 'Hoverboards',
        accentColor: '#ef4444', // Red
        description: 'Diversión y movilidad'
    },
    {
        name: 'Miniván Eléctrico',
        imageUrl: '/images/products/Vans/Litvan0.png',
        category: 'Minivan+eléctrico',
        accentColor: '#8b5cf6', // Violet
        description: 'Transporte familiar sin emisiones'
    },
    {
        name: 'Baterías de Litio',
        imageUrl: '/images/products/Celdas/batteries.png',
        category: 'Celdas+de+Litio',
        accentColor: '#0ea5e9', // Sky blue
        description: 'Energía limpia y eficiente'
    }
];

type Product = {
    name: string;
    imageUrl: string;
    category: string;
    accentColor: string;
    description: string;
};

interface ProductCardProps {
    product: Product;
    isHovered: boolean;
    isMobile: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isHovered, isMobile }): JSX.Element => {
    return (
        <motion.div
            animate={!isMobile && isHovered ? { y: -8 } : { y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%' }}
        >
            <Link href={`/productList?category=${product.category}`} style={{ textDecoration: 'none' }}>
                <Box
                    sx={{
                        position: 'relative',
                        borderRadius: 3,
                        overflow: 'hidden',
                        height: isMobile ? 320 : 360,
                        cursor: 'pointer',
                        boxShadow: isMobile ? 1 : 2,
                        display: 'block',
                        mx: isMobile ? 0.5 : 0,
                        border: '1px solid rgba(255,255,255,0.08)',
                        backgroundColor: 'rgba(255,255,255,0.02)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            boxShadow: `0 8px 32px rgba(0,0,0,0.3)`,
                            borderColor: 'rgba(255,255,255,0.15)'
                        }
                    }}
                >
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        sizes={isMobile ? "300px" : "350px"}
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                            transition: 'transform 0.3s ease',
                            transform: !isMobile && isHovered ? 'scale(1.05)' : 'scale(1)'
                        }}
                        priority={false}
                        loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                            opacity: !isMobile && isHovered ? 0.7 : 0.8
                        }}
                    />

                    {/* Content */}
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            p: isMobile ? 3 : 4,
                            color: '#fff',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2
                        }}
                    >
                        <Box>
                            <Chip
                                icon={<ElectricBoltIcon />}
                                label="Eléctrico"
                                size="small"
                                sx={{
                                    backgroundColor: product.accentColor,
                                    color: '#000',
                                    fontWeight: 600,
                                    mb: 1.5
                                }}
                            />
                            <Typography
                                variant={isMobile ? "h6" : "h5"}
                                fontWeight={600}
                                sx={{
                                    lineHeight: 1.2,
                                    mb: 1
                                }}
                            >
                                {product.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    opacity: 0.9,
                                    lineHeight: 1.4,
                                    fontSize: isMobile ? '0.9rem' : '1rem'
                                }}
                            >
                                {product.description}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                width: 40,
                                height: 4,
                                backgroundColor: product.accentColor,
                                borderRadius: 2
                            }}
                        />
                    </Box>
                </Box>
            </Link>
        </motion.div>
    );
};

const ProductGrid = (): JSX.Element => {
    const [mounted, setMounted] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#0A192F' }}>
                <Container>
                    <Box sx={{ height: 300 }} />
                </Container>
            </Box>
        );
    }

    return (
        <Box sx={{
            py: { xs: 8, md: 12 },
            backgroundColor: '#0A192F',
            px: { xs: 2, sm: 0 }
        }}>
            <Container maxWidth="lg">
                <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
                    <Typography
                        variant="overline"
                        color="#10b981"
                        fontWeight={500}
                        sx={{
                            fontSize: { xs: '0.8rem', md: '0.9rem' },
                            letterSpacing: 2,
                            display: 'block',
                            mb: 2
                        }}
                    >
                        EXPLORA NUESTRA GAMA
                    </Typography>
                    <Typography
                        variant="h3"
                        color="white"
                        fontWeight={700}
                        sx={{
                            fontSize: { xs: '2rem', md: '3rem' },
                            mb: 2,
                            lineHeight: 1.1
                        }}
                    >
                        Movilidad del
                        <Box component="span" sx={{ color: '#10b981', ml: 1 }}>
                            Futuro
                        </Box>
                    </Typography>
                    <Typography
                        variant="body1"
                        color="rgba(255,255,255,0.7)"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            maxWidth: 600,
                            mx: 'auto',
                            lineHeight: 1.6
                        }}
                    >
                        Descubre nuestra colección de vehículos eléctricos y soluciones energéticas para un mañana más sostenible.
                    </Typography>
                </Box>

                {isMobile ? (
                    <Box
                        sx={{
                            display: 'flex',
                            overflowX: 'auto',
                            gap: 3,
                            pb: 4,
                            px: 2,
                            scrollSnapType: 'x mandatory',
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': { display: 'none' },
                            '& > *': {
                                flex: '0 0 85%',
                                scrollSnapAlign: 'center',
                                minWidth: 300
                            }
                        }}
                    >
                        {products.map((product, index) => (
                            <ProductCard
                                key={product.name}
                                product={product}
                                isHovered={false}
                                isMobile={isMobile}
                            />
                        ))}
                    </Box>
                ) : (
                    <Grid container spacing={4} justifyContent="center">
                        {products.map((product, index) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                key={product.name}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <Box sx={{ width: '100%', maxWidth: 380 }}>
                                    <ProductCard
                                        product={product}
                                        isHovered={hoveredIndex === index}
                                        isMobile={isMobile}
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                )}

                <Box textAlign="center" mt={{ xs: 6, md: 8 }}>
                    <Button
                        component={Link}
                        href="/productList"
                        variant="contained"
                        size="large"
                        endIcon={<ElectricBoltIcon />}
                        sx={{
                            backgroundColor: '#10b981',
                            color: '#000',
                            fontWeight: 600,
                            borderRadius: '50px',
                            px: 5,
                            py: 1.5,
                            fontSize: '1.1rem',
                            '&:hover': {
                                backgroundColor: '#059669',
                                transform: 'translateY(-2px)'
                            },
                            transition: 'all 0.2s ease'
                        }}
                    >
                        Ver Todos los Productos
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ProductGrid;