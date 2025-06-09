import React, { FC, useRef } from 'react'
import Box from '@mui/material/Box'
import Slider, { Settings } from 'react-slick'
import Image from 'next/image'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ProductDetails from './ProductDetails'

const vehicles: any[] = [
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
    const sliderRef = useRef<Slider | null>(null)
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
            {/* Decorative Arrows */}
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
            {/* Click areas */}
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
            {/* Background Image */}
            <Box sx={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 0,
                width: { xs: '100%', sm: '80%', md: '60%' },
                height: 'auto',
                opacity: 0.45,
                pointerEvents: 'none',
            }}>
                <Image
                    src="/images/Banners_Backgrounds/Marca_NoBG.png"
                    alt="Marca NoBG"
                    fill
                    style={{ objectFit: 'contain' }}
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
                                height: { xs: '45%', md: '75%' },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto',
                            }}
                        >
                            <div style={{ position: 'relative', width: '100%', height: '500px' }}>
                                <Image
                                    src={vehicle.imageUrl}
                                    alt={vehicle.name}
                                    fill
                                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 40vw"
                                    style={{ objectFit: 'contain' }}
                                    quality={100}
                                />
                            </div>
                        </Box>
                        {/* Product Details */}
                        <ProductDetails vehicle={vehicle} />
                    </Box>
                ))}
            </Slider>
        </Box>
    )
}

export default FullScreenSlider