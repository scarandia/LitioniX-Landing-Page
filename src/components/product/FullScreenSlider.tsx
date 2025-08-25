'use client';
import React, { useRef, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider, { Settings } from 'react-slick';
import Image from 'next/image';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProductDetails from './ProductDetails';
import { LoadingScreen } from '../others/LoadingScreen';
import { vehicles } from './ProductList';
import { IconButton, useMediaQuery, useTheme, Typography } from '@mui/material';

const FullScreenSlider = (): JSX.Element => {
    const sliderRef = useRef<Slider | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [currentVariantImages, setCurrentVariantImages] = useState<Record<number, string>>({});
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    useEffect(() => {
        setIsMounted(true);
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 900);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Initialize with default images for each vehicle
        const initialImages: Record<number, string> = {};
        vehicles.forEach((vehicle, index) => {
            initialImages[index] = vehicle.variants.find(v => v.colorCode === vehicle.defaultColor)?.imageUrl ||
                vehicle.variants[0].imageUrl;
        });
        setCurrentVariantImages(initialImages);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const sliderConfig: Settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        cssEase: 'ease-in-out',
        pauseOnHover: true,
        beforeChange: (current, next) => setCurrentSlideIndex(next),
    };

    const handleVariantChange = (variant: { colorCode: string; imageUrl: string; productUrl: string }) => {
        setCurrentVariantImages(prev => ({
            ...prev,
            [currentSlideIndex]: variant.imageUrl
        }));
    };

    const currentVehicle = vehicles[currentSlideIndex];

    if (!isMounted) {
        return (
            <Box sx={{
                width: '100%',
                height: '100vh',
                backgroundColor: '#EFEAE7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <LoadingScreen />
            </Box>
        );
    }

    return (
        <Box sx={{
            width: '100vw',
            height: { xs: '90vh', md: '90vh' },
            minHeight: '600px',
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: '#EFEAE7',
            pt: { xs: 2, md: 0 },
            margin: 'auto',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
        }}>
            {/* Background Image - Behind everything */}
            {isMounted && (
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '140%', sm: '120%', md: '100%', lg: '110%' },
                    height: { xs: '70%', sm: '100%', md: '110%' },
                    zIndex: 0,
                    opacity: 0.15,
                    pointerEvents: 'none',
                }}>
                    <Image
                        src="/images/Banners_Backgrounds/Marca_NoBG.png"
                        alt="Background Brand"
                        fill
                        style={{
                            objectFit: 'contain',
                            objectPosition: 'center'
                        }}
                        quality={100}
                        priority
                    />
                </Box>
            )}

            {/* Navigation Arrows */}
            <Box sx={{
                display: { xs: 'none', md: 'flex' },
                position: 'absolute',
                top: '50%',
                left: 40,
                transform: 'translateY(-50%)',
                zIndex: 11,
                pointerEvents: 'none',
                color: '#000',
                fontSize: 48,
            }}>
                <ArrowBackIosNewIcon fontSize="inherit" />
            </Box>
            <Box sx={{
                display: { xs: 'none', md: 'flex' },
                position: 'absolute',
                top: '50%',
                right: 40,
                transform: 'translateY(-50%)',
                zIndex: 11,
                pointerEvents: 'none',
                color: '#000',
                fontSize: 48,
            }}>
                <ArrowForwardIosIcon fontSize="inherit" />
            </Box>

            {/* Clickable areas for navigation */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '25%',
                height: '100%',
                zIndex: 10,
                cursor: 'pointer',
            }} onClick={() => sliderRef.current?.slickPrev()} />
            <Box sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '25%',
                height: '100%',
                zIndex: 10,
                cursor: 'pointer',
            }} onClick={() => sliderRef.current?.slickNext()} />

            {/* Slider */}
            <Box sx={{ position: 'relative', width: '100%', height: '100%', zIndex: 2 }}>
                <Slider ref={sliderRef} {...sliderConfig}>
                    {vehicles.map((vehicle, index) => (
                        <Box
                            key={index}
                            sx={{
                                position: 'relative',
                                width: '100%',
                                height: { xs: '85vh', md: '90vh' },
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                pt: { xs: 1, md: 0 },
                                pb: { xs: 8, md: 0 },
                            }}
                        >
                            {/* Product Image */}
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: { xs: '95%', sm: '90%', md: '80%', lg: '70%' },
                                    height: { xs: '40%', sm: '45%', md: '55%', lg: '65%' },
                                    maxWidth: '600px',
                                    maxHeight: '450px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto',
                                    mb: { xs: 6, md: 8 },
                                    zIndex: 3,
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Image
                                        src={
                                            currentVariantImages[index] ||
                                            vehicle.variants.find((v) => v.colorCode === vehicle.defaultColor)?.imageUrl ||
                                            vehicle.variants[0].imageUrl
                                        }
                                        alt={vehicle.name}
                                        fill
                                        sizes="(max-width: 600px) 95vw, (max-width: 900px) 80vw, (max-width: 1200px) 70vw, 60vw"
                                        style={{
                                            objectFit: 'contain',
                                            objectPosition: 'center',
                                        }}
                                        quality={100}
                                        priority={index === 0}
                                    />
                                </Box>
                            </Box>

                            {/* Product Details */}
                            <Box sx={{
                                position: 'absolute',
                                bottom: { xs: 40, md: 50 },
                                left: 0,
                                right: 0,
                                zIndex: 4,
                            }}>
                                <ProductDetails
                                    vehicle={vehicle}
                                    onVariantChange={handleVariantChange}
                                    isMobile={isMobile}
                                />
                            </Box>
                        </Box>
                    ))}
                </Slider>

                {/* Permanent Color Selector - Fixed positioning to avoid overlap */}
                <Box sx={{
                    position: 'absolute',
                    bottom: {
                        xs: 100,
                        sm: 110,
                        md: 80, // Higher on large screens
                        lg: 100
                    },
                    left: 0,
                    right: 0,
                    zIndex: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                    px: 2,
                }}>
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#000',
                            fontWeight: 600,
                            fontSize: { xs: '0.8rem', md: '1rem' },
                            mb: { xs: 0.5, md: 1 },
                            textAlign: 'center'
                        }}
                    >
                        Seleccionar Color
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: { xs: 0.8, md: 2 },
                        flexWrap: 'wrap',
                        backgroundColor: 'rgba(255,255,255,0.95)',
                        padding: { xs: '6px 10px', md: '12px 16px' },
                        borderRadius: '25px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        maxWidth: { xs: '95%', md: '90%' },
                        margin: '0 auto',
                    }}>
                        {currentVehicle?.variants.map((variant, idx) => {
                            const isSelected = currentVariantImages[currentSlideIndex] === variant.imageUrl;
                            return (
                                <Box
                                    key={idx}
                                    sx={{
                                        width: { xs: 30, sm: 35, md: 40 },
                                        height: { xs: 30, sm: 35, md: 40 },
                                        borderRadius: '50%',
                                        backgroundColor: variant.colorCode,
                                        border: isSelected ? '3px solid #000' : '2px solid rgba(0,0,0,0.3)',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            transform: 'scale(1.15)',
                                            border: '3px solid #000',
                                        },
                                        position: 'relative',
                                    }}
                                    onClick={() => handleVariantChange(variant)}
                                >
                                    {isSelected && (
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: -4,
                                                right: -4,
                                                width: { xs: 10, md: 12 },
                                                height: { xs: 10, md: 12 },
                                                borderRadius: '50%',
                                                backgroundColor: '#000',
                                                border: '2px solid #fff',
                                            }}
                                        />
                                    )}
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default FullScreenSlider;