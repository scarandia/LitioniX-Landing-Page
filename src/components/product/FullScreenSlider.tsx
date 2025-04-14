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
        price: '$2220',
    },
    {
        name: 'Modelo 2',
        imageUrl: '/images/products/Moto_IA2.png',
        speed: '80 km/h',
        autonomy: '250 km',
        price: '$2500',
    },
    {
        name: 'Modelo 3',
        imageUrl: '/images/products/van2.png',
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
        <Box
            sx={{
                width: '100%',
                height: '92vh',
                overflow: 'hidden',
                backgroundColor: '#95A0B4',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Slider {...sliderConfig}>
                {vehicles.map((vehicle, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '100vh',
                            display: 'flex',
                            alignItems: 'center', // Alinea verticalmente
                            justifyContent: 'space-between', // Espacio entre características e imagen
                            flexDirection: 'row', // Coloca las características e imagen en fila
                            padding: '0 50px', // Espaciado horizontal
                        }}
                    >
                        {/* Contenedor de características */}
                        <Box
                            sx={{
                                position: 'relative',
                                zIndex: 3,
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                padding: 4,
                                borderRadius: 2,
                                color: 'white',
                                maxWidth: '400px',
                                textAlign: 'left', // Alinea el texto a la izquierda
                                marginTop: 28,
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

                        {/* Contenedor de la imagen del producto */}
                        <Box
                            sx={{
                                position: 'relative',
                                width: '50%', // Ajusta el ancho de la imagen
                                height: '80%', // Ajusta la altura de la imagen
                                zIndex: 2,
                                marginLeft: 60,
                                marginTop: -56,
                            }}
                        >
                            <Image
                                src={vehicle.imageUrl}
                                alt={vehicle.name}
                                layout="fill"
                                objectFit="contain"
                                quality={100}
                            />
                        </Box>

                        {/* Capa de transparencia */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Ajusta la transparencia aquí
                                zIndex: -1,
                            }}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    )
}

export default FullScreenSlider