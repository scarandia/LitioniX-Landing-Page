'use client';
import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Container, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const products = [
    {
        name: 'Bicicletas Eléctricas',
        imageUrl: '/images/products/Bicis/bici1.jpg',
        category: 'Bicicletas+eléctricas',
        accentColor: '#4ECDC4',
        description: 'Movilidad urbana sostenible'
    },
    {
        name: 'Motocicletas Eléctricas',
        imageUrl: '/images/products/Motos/moto6.jpg',
        category: 'Motocicletas+eléctricas',
        accentColor: '#FFD166',
        description: 'Potencia y autonomía'
    },
    {
        name: 'Hoverboards',
        imageUrl: '/images/products/Hovers/hover8.jpg',
        category: 'Hoverboards',
        accentColor: '#F25F5C',
        description: 'Diversión y movilidad'
    },
    {
        name: 'Miniván Eléctrico',
        imageUrl: '/images/products/Vans/Litvan0.png',
        category: 'Minivan+eléctrico',
        accentColor: '#7E6B8F',
        description: 'Transporte familiar sin emisiones'
    },
    {
        name: 'Baterías de Litio',
        imageUrl: '/images/products/Celdas/Litio_batteries.png',
        category: 'Celdas+de+Litio',
        accentColor: '#A5D8FF',
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
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isHovered }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 900);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (!mounted) {
        return <Box sx={{ width: '100%', height: 300, bgcolor: 'rgba(0,0,0,0.1)' }} />;
    }

    return (
        <motion.div
            animate={!isMobile && isHovered ? { scale: 1.03 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%' }}
        >
            <Link href={`/productList?category=${product.category}`} passHref>
                <Box
                    sx={{
                        position: 'relative',
                        borderRadius: 2,
                        overflow: 'hidden',
                        height: isMobile ? 240 : 300,
                        cursor: 'pointer',
                        boxShadow: 3,
                        display: 'block'
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

                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            p: 2,
                            color: '#fff',
                            background: !isMobile && isHovered
                                ? product.accentColor
                                : 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                            transition: 'background 0.3s ease'
                        }}
                    >
                        <Typography variant="h6" fontWeight={700}>
                            {product.name}
                        </Typography>
                        <Typography variant="body2">{product.description}</Typography>
                    </Box>
                </Box>
            </Link>
        </motion.div>
    );
};

const ProductGrid = () => {
    const [mounted, setMounted] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 900);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (!mounted) {
        return (
            <Box sx={{ py: 8, backgroundColor: '#0A192F' }}>
                <Container>
                    <Box sx={{ height: 300 }} />
                </Container>
            </Box>
        );
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
                        sx={{
                            display: 'flex',
                            overflowX: 'auto',
                            gap: 2,
                            pb: 2,
                            px: 1,
                            scrollSnapType: 'x mandatory',
                            '& > *': {
                                flex: '0 0 85%',
                                scrollSnapAlign: 'center'
                            }
                        }}
                    >
                        {products.map((product) => (
                            <ProductCard
                                key={product.name}
                                product={product}
                                isHovered={false}
                            />
                        ))}
                    </Box>
                ) : (
                    <Grid container spacing={3} justifyContent="center">
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
                                <Box sx={{ width: '100%', maxWidth: 350 }}>
                                    <ProductCard
                                        product={product}
                                        isHovered={hoveredIndex === index}
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                )}

                <Box textAlign="center" mt={6}>
                    <IconButton
                        component={Link}
                        href="/productList"
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
                </Box>
            </Container>
        </Box>
    );
};

export default ProductGrid;