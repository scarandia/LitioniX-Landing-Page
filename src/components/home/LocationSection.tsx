import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import dynamic from 'next/dynamic';

// Dynamic import to avoid SSR issues
const MapImage = dynamic(() => import('../others/StoreMap'), {
  ssr: false,
  loading: () => (
    <Box sx={{ height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography>Cargando mapa...</Typography>
    </Box>
  )
});

const AnimatedBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#144861',
  borderRadius: '24px',
  padding: theme.spacing(6, 4),
  textAlign: 'center',
  transition: 'all 0.3s ease',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
    borderRadius: '40px'
  }
}));

const LocationSection: React.FC = () => {
  const address = 'Av. Calampampa 3002, Cochabamba';

  return (
    <Box id="location" sx={{
      backgroundColor: '#EFEAE7',
      py: { xs: 6, md: 8 },
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
        backgroundColor: 'rgba(78, 205, 196, 0.1)',
        zIndex: 0
      }
    }}>
      <Container maxWidth="md">
        <AnimatedBox>
          <Typography
            variant="h1"
            component="h2"
            sx={{
              mb: 3,
              fontSize: { xs: 32, md: 42 },
              fontWeight: 700,
              color: 'white',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -12,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                backgroundColor: '#4ECDC4',
                borderRadius: 2
              }
            }}
          >
            Visítanos
          </Typography>
          <Typography sx={{
            mb: 4,
            fontSize: { xs: 16, md: 18 },
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: 600,
            mx: 'auto',
            lineHeight: 1.6
          }}>
            Nuestra tienda está ubicada en {address}.
          </Typography>

          <Box sx={{
            borderRadius: '16px',
            overflow: 'hidden',
            height: { xs: 300, md: 400 },
            width: '100%',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
          }}>
            <MapImage />
          </Box>

          <Typography sx={{
            mt: 3,
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 14
          }}>
            Horario de atención: Lunes a Jueves 8:00 - 18:30 | Viernes 8:00 - 16:00
          </Typography>
        </AnimatedBox>
      </Container>
    </Box>
  );
};

export default LocationSection;