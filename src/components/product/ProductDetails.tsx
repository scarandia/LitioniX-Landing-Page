import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const ProductDetails = ({ vehicle }: { vehicle: any }) => (
    <Box
        sx={{
            mt: 0,
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            flexWrap: 'wrap',
            justifyContent: 'center',
            px: { xs: 2, md: 8 },
            color: '#000',
            zIndex: 5,
            alignItems: { xs: 'center', md: 'flex-start' },
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
                alignItems: { xs: 'center', md: 'flex-start' },
                justifyContent: 'center',
                textAlign: { xs: 'center', md: 'left' },
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 'bold',
                    mb: 1,
                    fontSize: { xs: '1.5rem', md: '2.2rem', lg: '2.8rem' },
                    lineHeight: 1.1,
                    display: { xs: 'none', md: 'block' },
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
                        display: { xs: 'none', md: 'block' },
                    }}
                >
                    Disponible en :
                </Typography>
                {vehicle.colors.map((color: string, idx: number) => (
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
                mt: { xs: 0, md: -4 },
                mb: { xs: 2, md: 0 },
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
                        fontSize: { xs: '1.3rem', md: '2rem' },
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
                    (2 BATERÍAS)
                </span>
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                <Typography
                    component="span"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '1.3rem', md: '2rem' },
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
)

export default ProductDetails