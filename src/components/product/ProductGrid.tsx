import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useTheme, useMediaQuery, Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from '@mui/material/styles';

const products = [
    {
        name: 'Bicicletas Eléctricas',
        imageUrl: '/images/products/bici1.jpg',
        category: 'bicicletas-electricas',
        accentColor: '#4ECDC4',
        description: 'Movilidad urbana sostenible y eficiente'
    },
    {
        name: 'Motocicletas Eléctricas',
        imageUrl: '/images/products/moto6.jpg',
        category: 'motocicletas-electricas',
        accentColor: '#FFD166',
        description: 'Potencia y autonomía para tus trayectos'
    },
    {
        name: 'Hoverboards',
        imageUrl: '/images/products/hover8.jpg',
        category: 'hoverboards',
        accentColor: '#F25F5C',
        description: 'Diversión y movilidad en un solo dispositivo'
    },
    {
        name: 'Miniván Eléctrico',
        imageUrl: '/images/products/van2_white_bg.png',
        category: 'minivan-electrico',
        accentColor: '#7E6B8F',
        description: 'Transporte familiar cero emisiones'
    },
    {
        name: 'Baterías de Litio',
        imageUrl: '/images/products/Litio_batteries.png',
        category: 'baterias-litio',
        accentColor: '#A5D8FF',
        description: 'Energía limpia para tus dispositivos'
    },
];

const StyledCard = styled(Box)(({ theme }) => ({
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    height: '100%',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
        '& .product-image': {
            transform: 'scale(1.05)'
        },
        '& .product-overlay': {
            opacity: 1,
            backgroundColor: 'rgba(0,0,0,0.7)'
        },
        '& .product-cta': {
            transform: 'translateY(0)',
            opacity: 1
        }
    }
}));

const ProductGrid = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10
            }
        }
    };

    const renderProductCard = (product: typeof products[0]) => (
        <motion.div variants={itemVariants} style={{ height: '100%' }}>
            <Link href={`/productos/${product.category}`} passHref>
                <StyledCard>
                    {/* Product Image */}
                    <Box
                        className="product-image"
                        sx={{
                            position: 'relative',
                            height: isMobile ? '200px' : '280px',
                            backgroundColor: '#000',
                            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    >
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            layout="fill"
                            objectFit="cover"
                            quality={90}
                            priority
                        />

                        {/* Gradient Overlay */}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '60%',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)'
                            }}
                        />
                    </Box>

                    {/* Product Info */}
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            p: 3,
                            zIndex: 2,
                            color: '#fff'
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                mb: 1,
                                fontSize: isMobile ? '1.2rem' : '1.4rem',
                                textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                            }}
                        >
                            {product.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                mb: 2,
                                opacity: 0.9,
                                fontSize: isMobile ? '0.9rem' : '1rem',
                                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                            }}
                        >
                            {product.description}
                        </Typography>

                        {/* CTA Button */}
                        <Box
                            className="product-cta"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                color: product.accentColor,
                                transform: 'translateY(10px)',
                                opacity: 0,
                                transition: 'all 0.3s ease 0.1s',
                                fontWeight: 600
                            }}
                        >
                            Ver detalles
                            <ArrowForwardIcon sx={{ ml: 1, fontSize: '1rem' }} />
                        </Box>
                    </Box>

                    {/* Hover Overlay */}
                    <Box
                        className="product-overlay"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            opacity: 0,
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1
                        }}
                    >
                        <Box
                            sx={{
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                backgroundColor: product.accentColor,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: `0 0 0 8px ${product.accentColor}33`
                            }}
                        >
                            <ArrowForwardIcon sx={{ color: '#fff', fontSize: '1.5rem' }} />
                        </Box>
                    </Box>
                </StyledCard>
            </Link>
        </motion.div>
    );

    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                px: { xs: 2, sm: 4, md: 6 },
                backgroundColor: '#0A192F',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '40%',
                    background: 'linear-gradient(to bottom, rgba(10,25,47,0.9) 0%, transparent 100%)',
                    zIndex: 1
                }
            }}
        >
            {/* Decorative Elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '40%',
                    height: '100%',
                    background: 'radial-gradient(circle at center, rgba(78,205,196,0.1) 0%, transparent 70%)',
                    zIndex: 0
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                {/* Section Header */}
                <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: '#4ECDC4',
                            fontWeight: 600,
                            letterSpacing: '2px',
                            display: 'block',
                            mb: 1
                        }}
                    >
                        EXPLORA NUESTRA GAMA
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            color: '#fff',
                            fontWeight: 700,
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            mb: 2
                        }}
                    >
                        Productos de Movilidad Sostenible
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'rgba(255,255,255,0.7)',
                            maxWidth: '700px',
                            mx: 'auto',
                            fontSize: { xs: '1rem', md: '1.1rem' }
                        }}
                    >
                        Descubre nuestra selección de vehículos eléctricos y soluciones de energía diseñados para un futuro más limpio.
                    </Typography>
                </Box>

                {/* Product Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={containerVariants}
                >
                    <Grid container spacing={3}>
                        {products.map((product) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                key={product.name}
                                sx={{
                                    display: 'flex',
                                    '&:last-child': {
                                        [theme.breakpoints.up('md')]: {
                                            gridColumn: 'span 2'
                                        }
                                    }
                                }}
                            >
                                {renderProductCard(product)}
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>

                {/* View All Button */}
                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Link href="/productos" passHref>
                        <IconButton
                            sx={{
                                color: '#fff',
                                backgroundColor: 'rgba(78,205,196,0.2)',
                                borderRadius: '50px',
                                px: 4,
                                py: 1.5,
                                '&:hover': {
                                    backgroundColor: '#4ECDC4'
                                },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Ver todos los productos
                            <ArrowForwardIcon sx={{ ml: 1 }} />
                        </IconButton>
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default ProductGrid;