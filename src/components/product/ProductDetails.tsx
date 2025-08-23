import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ColorVariant, Vehicle } from './ProductList';

interface ProductDetailsProps {
    vehicle: Vehicle;
    onVariantChange?: (variant: ColorVariant) => void;
    isMobile?: boolean;
}

const ProductDetails = ({ vehicle, onVariantChange, isMobile }: ProductDetailsProps): JSX.Element => {
    const [selectedVariant, setSelectedVariant] = useState<ColorVariant>(
        vehicle.variants.find(v => v.colorCode === vehicle.defaultColor) || vehicle.variants[0]
    );

    const handleVariantClick = (variant: ColorVariant) => {
        setSelectedVariant(variant);
        onVariantChange?.(variant);
    };

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                px: { xs: 2, md: 8 },
                color: '#000',
                zIndex: 5,
                alignItems: { xs: 'center', md: 'flex-end' }, // Align to bottom
                minHeight: { xs: 'auto', md: 'auto' },
                gap: { xs: 0, md: 4 },
            }}
        >
            {/* Velocidad Máxima - Moved lower (left side) */}
            <Box
                sx={{
                    flex: '1 1 200px',
                    maxWidth: 400,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    justifyContent: 'flex-end', // Align to bottom
                    textAlign: { xs: 'center', md: 'left' },
                    order: { xs: 1, md: 1 },
                    mb: { xs: -8, md: 0 },
                    mt: { xs: 16, md: 0 },
                    paddingBottom: { md: '0px' }
                }}
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-start' }
                }}>
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#444',
                            fontWeight: 500,
                            fontSize: { xs: '0.9rem', md: '1.1rem' },
                            mb: 0.5
                        }}
                    >
                        Velocidad Máxima
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 0 }}>
                        <Typography
                            component="span"
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: '1.4rem', md: '2rem' },
                                mr: 0.5,
                            }}
                        >
                            {vehicle.speed.split(' ')[0]}
                        </Typography>
                        <Typography
                            component="span"
                            sx={{
                                color: '#888',
                                fontSize: { xs: '0.9rem', md: '1.1rem' },
                                fontWeight: 400,
                            }}
                        >
                            {vehicle.speed.split(' ').slice(1).join(' ')}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Autonomía - Kept in original position (right side) */}
            <Box
                sx={{
                    flex: '1 1 260px',
                    maxWidth: { xs: '100%', md: 320 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-end' },
                    justifyContent: { xs: 'center', md: 'flex-start' }, // Original alignment
                    textAlign: { xs: 'center', md: 'right' },
                    gap: 2,
                    mb: { xs: 5, md: 0 },
                    px: { xs: 1, md: 0 },
                    order: { xs: 2, md: 2 }
                }}
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-end' }
                }}>
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#444',
                            fontWeight: 500,
                            fontSize: { xs: '0.9rem', md: '1.1rem' },
                            mb: 0.5,
                        }}
                    >
                        Autonomía{' '}
                        <span style={{
                            fontSize: '0.7rem',
                            color: '#aaa',
                            fontWeight: 600,
                            display: isMobile ? 'block' : 'inline'
                        }}>
                        </span>
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                        <Typography
                            component="span"
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: '1.4rem', md: '2rem' },
                                mr: 0.5,
                            }}
                        >
                            {vehicle.autonomy.split(' ')[0]}
                        </Typography>
                        <Typography
                            component="span"
                            sx={{
                                color: '#888',
                                fontSize: { xs: '0.9rem', md: '1.1rem' },
                                fontWeight: 400,
                            }}
                        >
                            {vehicle.autonomy.split(' ').slice(1).join(' ')}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductDetails;