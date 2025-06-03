import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { useTheme, useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const products = [
    {
        name: 'Bicicletas eléctricas',
        imageUrl: '/images/products/bici1.jpg',
        category: 'Bicicletas eléctricas',
        accentColor: '#4ECDC4'
    },
    {
        name: 'Motocicletas eléctricas',
        imageUrl: '/images/products/moto6.jpg',
        category: 'Motocicletas eléctricas',
        accentColor: '#FFD166'
    },
    {
        name: 'Hoverboards',
        imageUrl: '/images/products/hover8.jpg',
        category: 'Hoverboards',
        accentColor: '#F25F5C'
    },
    {
        name: 'Miniván eléctrico',
        imageUrl: '/images/products/van2_white_bg.png',
        category: 'Minivan eléctrico',
        accentColor: '#7E6B8F'
    },
    {
        name: 'Celdas de litio',
        imageUrl: '/images/products/Litio_batteries.png',
        category: 'Celdas de Litio',
        accentColor: '#A5D8FF'
    },
];

const ProductGrid = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Mobile slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '24px',
        nextArrow: <SliderArrow direction="next" />,
        prevArrow: <SliderArrow direction="prev" />,
        appendDots: (dots: React.ReactNode) => (
            <Box sx={{ position: 'relative', bottom: 24 }}>
                <ul style={{ margin: 0, padding: 0 }}>{dots}</ul>
            </Box>
        ),
        customPaging: () => (
            <Box sx={{
                width: 10,
                height: 10,
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderRadius: '50%'
            }} />
        )
    };

    function SliderArrow({ direction, onClick }: { direction: 'prev' | 'next'; onClick?: () => void }) {
        return (
            <IconButton
                onClick={onClick}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    color: '#EFEAE7',
                    backgroundColor: 'rgba(5,51,74,0.7)',
                    '&:hover': {
                        backgroundColor: 'rgba(78, 205, 196, 0.7)'
                    },
                    [direction === 'prev' ? 'left' : 'right']: 8,
                }}
            >
                {direction === 'prev' ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
            </IconButton>
        );
    }

    const renderProductCard = (product: typeof products[0]) => (
        <Link href={`/products?category=${encodeURIComponent(product.category)}`} passHref>
            <motion.div
                whileHover={{ y: isMobile ? 0 : -8 }}
                style={{
                    width: '100%',
                    maxWidth: 380,
                    height: 300,
                    padding: isMobile ? '0 8px' : 0
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        borderRadius: 2,
                        overflow: 'hidden',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                        cursor: 'pointer',
                        border: '1px solid rgba(255,255,255,0.1)',
                        '&:hover': {
                            boxShadow: `0 8px 32px ${product.accentColor}33`,
                            '& .product-title': {
                                backgroundColor: `${product.accentColor}CC`
                            }
                        }
                    }}
                >
                    <Box sx={{
                        position: 'relative',
                        height: '70%',
                        backgroundColor: product.category === 'Celdas de Litio' ? '#FFF' : '#000'
                    }}>
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            layout="fill"
                            objectFit={product.category === 'Celdas de Litio' ? 'contain' : 'cover'}
                            style={{
                                padding: product.category === 'Celdas de Litio' ? '20px' : '0'
                            }}
                        />
                    </Box>

                    <Box
                        className="product-title"
                        sx={{
                            height: '30%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(4px)',
                            transition: 'all 0.3s ease',
                            p: 2
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#EFEAE7',
                                fontWeight: 600,
                                textAlign: 'center',
                                fontSize: '1.1rem'
                            }}
                        >
                            {product.name}
                        </Typography>
                    </Box>
                </Box>
            </motion.div>
        </Link>
    );

    return (
        <Box
            sx={{
                py: 8,
                px: { xs: 0, sm: 2, md: 4 },
                backgroundColor: '#05334A',
                background: 'linear-gradient(135deg, #042A3F 0%, #021C29 100%)',
                border: '1px solid rgba(255,255,255,0.05)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(78, 205, 196, 0.05)',
                    zIndex: 0
                }
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    textAlign: 'center',
                    mb: 6,
                    fontWeight: 700,
                    color: '#EFEAE7',
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    position: 'relative',
                    zIndex: 1,
                    px: 2
                }}
            >
                Nuestros Productos
            </Typography>

            {isMobile ? (
                <Box sx={{ px: 2, position: 'relative', zIndex: 1 }}>
                    <Slider {...sliderSettings}>
                        {products.map((product) => (
                            <Box key={product.name}>
                                {renderProductCard(product)}
                            </Box>
                        ))}
                    </Slider>
                </Box>
            ) : (
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    sx={{ position: 'relative', zIndex: 1 }}
                >
                    {products.map((product, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={index < 3 ? 4 : 6}
                            key={product.name}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                '&:nth-of-type(4)': { justifyContent: { md: 'flex-end', lg: 'center' } },
                                '&:nth-of-type(5)': { justifyContent: { md: 'flex-start', lg: 'center' } }
                            }}
                        >
                            {renderProductCard(product)}
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default ProductGrid;