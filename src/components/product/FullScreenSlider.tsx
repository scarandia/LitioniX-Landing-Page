import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Slider, { Settings } from 'react-slick'
import Image from 'next/image'

const vehicles = [
    {
        name: 'Modelo 1',
        imageUrl: '/images/products/Moto_IA1.png',
        speed: '75 km/h',
        autonomy: '200 km',
        colors: ['#000000', '#FFFFFF', '#B59F5A'], // Example colors
    },
    {
        name: 'Modelo 2',
        imageUrl: '/images/products/Moto_IA2.png',
        speed: '80 km/h',
        autonomy: '250 km',
        colors: ['#FF0000', '#00FF00', '#0000FF'], // Example colors
    },
    {
        name: 'Modelo 3',
        imageUrl: '/images/products/van3.png',
        speed: '90 km/h',
        autonomy: '300 km',
        colors: ['#123456', '#654321', '#ABCDEF'], // Example colors
    },
]

// Custom Left Arrow Component
const CustomPrevArrow = (props: any) => {
    const { className, onClick } = props
    return (
        <Box
            component="div"
            className={className}
            onClick={onClick}
            sx={{
                position: 'absolute',
                top: '50%',
                left: '0', // Align to the left border
                transform: 'translateY(-50%)',
                zIndex: 3,
                cursor: 'pointer',
                width: 48, // Increase clickable area
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional background for better visibility
                borderRadius: '50%',
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker background on hover
                },
            }}
        >
            <Image
                src="/images/icons/left-arrow.svg"
                alt="Left Arrow"
                width={24}
                height={24}
            />
        </Box>
    )
}

// Custom Right Arrow Component
const CustomNextArrow = (props: any) => {
    const { className, onClick } = props
    return (
        <Box
            component="div"
            className={className}
            onClick={onClick}
            sx={{
                top: '50%', // Center vertically
                right: 'calc(100% - 48px)', // Align to the right border of the screen
                transform: 'translateY(-50%)', // Adjust for vertical centering
                zIndex: 3,
                cursor: 'pointer',
                width: 48, // Increase clickable area
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional background for better visibility
                borderRadius: '50%',
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker background on hover
                },
            }}
        >
            <Image
                src="/images/icons/right-arrow.svg"
                alt="Right Arrow"
                width={24}
                height={24}
            />
        </Box>
    )
}

const FullScreenSlider: FC = () => {
    const sliderConfig: Settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, // Enable navigation arrows
        dots: false, // Disable dots
        prevArrow: <CustomPrevArrow />, // Use custom left arrow
        nextArrow: <CustomNextArrow />, // Use custom right arrow
    }

    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#EFEAE7',
            }}
        >
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

            {/* Opacity Layer */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 0,
                }}
            />

            {/* Slider */}
            <Slider {...sliderConfig}>
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
                                flexWrap: 'wrap', // Allow wrapping for smaller screens
                                justifyContent: 'space-between', // Align left and right sections
                                px: { xs: 2, md: 8 }, // Add padding for responsiveness
                                color: '#000',
                                zIndex: 5,
                            }}
                        >
                            {/* Left Section: Colores and Precio */}
                            <Box sx={{ flex: '1 1 50%', mb: { xs: 2, md: 0 } }}> {/* Adjust width and spacing */}
                                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    Colores
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: 2,
                                        mb: 2,
                                    }}
                                >
                                    {vehicle.colors.map((color, idx) => (
                                        <Box
                                            key={idx}
                                            sx={{
                                                width: 24,
                                                height: 24,
                                                borderRadius: '50%',
                                                backgroundColor: color,
                                                border: '1px solid #000',
                                            }}
                                        />
                                    ))}
                                </Box>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                                    $ 2220
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#555' }}>
                                    (Precio Unitario del Vehículo)
                                </Typography>
                            </Box>

                            {/* Right Section: Velocidad Máxima and Autonomía */}
                            <Box sx={{ flex: '1 1 50%', textAlign: 'right' }}> {/* Adjust width and alignment */}
                                <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 1 }}>
                                    <strong>Velocidad Máxima:</strong> {vehicle.speed}
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 1 }}>
                                    <strong>Autonomía:</strong> {vehicle.autonomy}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    )
}

export default FullScreenSlider