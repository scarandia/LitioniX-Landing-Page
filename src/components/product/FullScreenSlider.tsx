import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Slider, { Settings } from 'react-slick'
import Image from 'next/image'

const vehicles = [
    {
        name: 'Modelo 1',
        imageUrl: '/images/products/bic1.jpg',
        speed: '75 km/h',
        autonomy: '200 km',
        price: '$2220',
    },
    {
        name: 'Modelo 2',
        imageUrl: '/images/products/van1.png',
        speed: '80 km/h',
        autonomy: '250 km',
        price: '$2500',
    },
    {
        name: 'Modelo 3',
        imageUrl: '/images/products/41.jpg',
        speed: '90 km/h',
        autonomy: '300 km',
        price: '$3000',
    },
]

const FullScreenSlider: FC = () => {
    const sliderConfig: Settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000, // Cambia cada 5 segundos
        speed: 1000, // Velocidad de transición
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // Oculta las flechas
        dots: true, // Muestra los puntos de navegación
    }

    return (
        <Box sx={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
            <Slider {...sliderConfig}>
                {vehicles.map((vehicle, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '100vh',
                        }}
                    >
                        {/* Imagen de fondo */}
                        <Image
                            src={vehicle.imageUrl}
                            alt={vehicle.name}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />

                        {/* Contenedor de características */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '10%',
                                transform: 'translateY(-50%)',
                                color: 'white',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                padding: 4,
                                borderRadius: 2,
                                maxWidth: '400px',
                            }}
                        >
                            <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 'bold', mb: 2 }}>
                                {vehicle.name}
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 1 }}>
                                <strong>Velocidad Máxima:</strong> {vehicle.speed}
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 1 }}>
                                <strong>Autonomía:</strong> {vehicle.autonomy}
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 1 }}>
                                <strong>Precio:</strong> {vehicle.price}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    )
}

export default FullScreenSlider