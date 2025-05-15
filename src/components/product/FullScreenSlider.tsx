import React, { FC, useRef } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Slider, { Settings } from 'react-slick'
import Image from 'next/image'
import { CustomPrevArrow, CustomNextArrow } from '../others/SliderArrows'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const vehicles = [
    {
        name: 'Modelo 1',
        imageUrl: '/images/products/Moto_IA1.png',
        speed: '75 km/h',
        autonomy: '200 km',
        colors: ['#000000', '#FFFFFF', '#B59F5A'],
    },
    {
        name: 'Modelo 2',
        imageUrl: '/images/products/Moto_IA2.png',
        speed: '80 km/h',
        autonomy: '250 km',
        colors: ['#000000', '#FFFFFF', '#B59F5A'],
    },
    {
        name: 'Modelo 3',
        imageUrl: '/images/products/hover1.png',
        speed: '90 km/h',
        autonomy: '300 km',
        colors: ['#000000', '#FFFFFF', '#B59F5A'],
    },
]
const FullScreenSlider: FC = () => {
    const sliderRef = useRef<Slider | null>(null);
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
    }

    return (
        <Box
            sx={{
                width: { xs: '100%', md: '100vw' },
                height: { xs: '100vh', md: '100vh' },
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#EFEAE7',
                pt: { xs: 10, md: 0 },
                margin: { xs: 0, md: 'auto' },
                borderRadius: { xs: 0, md: 4 },
                boxShadow: { xs: 'none', md: 3 },
            }}
        >

            {/* Decorative Left Arrow */}
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    position: 'absolute',
                    top: '50%',
                    left: 24,
                    transform: 'translateY(-50%)',
                    zIndex: 11,
                    pointerEvents: 'none',
                    color: '#000',
                    fontSize: 48,
                }}
            >
                <ArrowBackIosNewIcon fontSize="inherit" />
            </Box>
            {/* Decorative Right Arrow */}
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    position: 'absolute',
                    top: '50%',
                    right: 24,
                    transform: 'translateY(-50%)',
                    zIndex: 11,
                    pointerEvents: 'none',
                    color: '#000',
                    fontSize: 48,
                }}
            >
                <ArrowForwardIosIcon fontSize="inherit" />
            </Box>
            {/* Left click area */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '25%',
                    height: '100%',
                    zIndex: 10,
                    cursor: 'pointer',
                }}
                onClick={() => sliderRef.current?.slickPrev()}
            />
            {/* Right click area */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '25%',
                    height: '100%',
                    zIndex: 10,
                    cursor: 'pointer',
                }}
                onClick={() => sliderRef.current?.slickNext()}
            />

            {/* Background Image */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0,
                    width: { xs: '100%', sm: '80%', md: '60%' },
                    height: 'auto',
                    opacity: 0.45,
                    pointerEvents: 'none',
                }}
            >
                <Image
                    src="/images/Banners_Backgrounds/Marca_NoBG.png"
                    alt="Marca NoBG"
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="contain"
                />
            </Box>
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
                        {/* Product Image */}
                        <Box
                            sx={{
                                position: 'relative',
                                width: { xs: '80%', md: '50%' },
                                height: { xs: '60%', md: '75%' },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto',
                            }}
                        >
                            <Image
                                src={vehicle.imageUrl}
                                alt={vehicle.name}
                                layout="intrinsic"
                                width={600}
                                height={600}
                                objectFit="contain"
                                quality={100}
                            />
                        </Box>

                        {/* Product Details */}
                        <Box
                            sx={{
                                mt: 0,
                                width: '100%',
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                px: { xs: 2, md: 8 },
                                color: '#000',
                                zIndex: 5,
                                alignItems: { xs: 'flex-start', md: 'flex-start' },
                                minHeight: { xs: 'auto', md: '220px' },
                                gap: { xs: 2, md: 8 },
                            }}
                        >
                            {/* Left Section: Colores */}
                            <Box
                                sx={{
                                    flex: '1 1 300px',
                                    maxWidth: 400,
                                    mb: { xs: 2, md: 0 },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: 'bold',
                                        mb: 1,
                                        fontSize: { xs: '1.5rem', md: '2.2rem', lg: '2.8rem' },
                                        lineHeight: 1.1,
                                    }}
                                >
                                    Colores
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#444',
                                            fontWeight: 500,
                                            fontSize: { xs: '1rem', md: '1.1rem' },
                                            mr: 1,
                                        }}
                                    >
                                        Disponible en :
                                    </Typography>
                                    {vehicle.colors.map((color, idx) => (
                                        <Box
                                            key={idx}
                                            sx={{
                                                width: 22,
                                                height: 22,
                                                borderRadius: '50%',
                                                backgroundColor: color,
                                                border: '1.5px solid #bbb',
                                                mx: 0.5,
                                                display: 'inline-block',
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>

                            {/* Right Section: Velocidad Máxima and Autonomía */}
                            <Box
                                sx={{
                                    flex: '1 1 260px',
                                    maxWidth: 320,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: { xs: 'center', md: 'flex-end' },
                                    justifyContent: { xs: 'center', md: 'flex-start' },
                                    textAlign: { xs: 'center', md: 'right' },
                                    gap: 2,
                                    mt: { xs: 0, md: -4 }, // Move up on desktop
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#444',
                                        fontWeight: 500,
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        mb: 0,
                                    }}
                                >
                                    Velocidad Máxima
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 0 }}>
                                    <Typography
                                        component="span"
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: { xs: '1.5rem', md: '2rem' }, // smaller
                                            mr: 1,
                                        }}
                                    >
                                        {vehicle.speed.split(' ')[0]}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        sx={{
                                            color: '#888',
                                            fontSize: { xs: '1rem', md: '1.1rem' },
                                            fontWeight: 400,
                                        }}
                                    >
                                        {vehicle.speed.split(' ').slice(1).join(' ')}
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#444',
                                        fontWeight: 500,
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        mb: 0.5,
                                    }}
                                >
                                    Autonomía{' '}
                                    <span style={{ fontSize: '0.8rem', color: '#aaa', fontWeight: 600 }}>
                                    </span>
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                                    <Typography
                                        component="span"
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: { xs: '1.5rem', md: '2rem' }, // smaller
                                            mr: 1,
                                        }}
                                    >
                                        {vehicle.autonomy.split(' ')[0]}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        sx={{
                                            color: '#888',
                                            fontSize: { xs: '1rem', md: '1.1rem' },
                                            fontWeight: 400,
                                        }}
                                    >
                                        {vehicle.autonomy.split(' ').slice(1).join(' ')}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    )
}

export default FullScreenSlider