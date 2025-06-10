'use client';
import React, { FC, useRef, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider, { Settings } from 'react-slick';
import Image from 'next/image';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProductDetails from './ProductDetails';
import { LoadingScreen } from '../others/LoadingScreen';
import { vehicles } from './ProductList';

const FullScreenSlider: FC = () => {
    const sliderRef = useRef<Slider | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [currentVariantImages, setCurrentVariantImages] = useState<Record<number, string>>({});

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
            width: { xs: '100%', md: '100vw' },
            height: { xs: '100vh', md: '100vh' },
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: '#EFEAE7',
            pt: { xs: 10, md: 0 },
            margin: { xs: 0, md: 'auto' },
            borderRadius: { xs: 0, md: 4 },
            boxShadow: { xs: 'none', md: 3 },
        }}>
            {/* Background Image */}
            {isMounted && (
                <Box sx={{
                    position: 'absolute',
                    top: { xs: '10%', md: '-10%' },
                    left: { xs: '-10%', md: '-10%' },
                    right: { xs: '-10%', md: '-10%' },
                    bottom: { xs: 'auto', md: '-10%' },
                    height: { xs: '60%', md: 'auto' },
                    zIndex: 0,
                    opacity: 0.45,
                    pointerEvents: 'none',
                }}>
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                    }}>
                        <Image
                            src="/images/Banners_Backgrounds/Marca_NoBG.png"
                            alt="Background Brand"
                            fill
                            style={{
                                objectFit: 'contain',
                                objectPosition: 'center',
                            }}
                            quality={100}
                            priority
                        />
                    </div>
                </Box>
            )}

            {/* Navigation Arrows */}
            <Box sx={{
                display: { xs: 'none', md: 'flex' },
                position: 'absolute',
                top: '50%',
                left: 90,
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
                right: 90,
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
            <Slider ref={sliderRef} {...sliderConfig}>
                {vehicles.map((vehicle, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1,
                            pt: { xs: 6, md: 0 },
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                width: { xs: '80%', md: '50%' },
                                height: { xs: '45%', md: '75%' },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto',
                            }}
                        >
                            <div style={{ position: 'relative', width: '100%', height: '500px' }}>
                                <Image
                                    src={currentVariantImages[index] ||
                                        vehicle.variants.find(v => v.colorCode === vehicle.defaultColor)?.imageUrl ||
                                        vehicle.variants[0].imageUrl}
                                    alt={vehicle.name}
                                    fill
                                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 40vw"
                                    style={{ objectFit: 'contain' }}
                                    quality={100}
                                />
                            </div>
                        </Box>
                        <ProductDetails
                            vehicle={vehicle}
                            onVariantChange={handleVariantChange}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default FullScreenSlider;