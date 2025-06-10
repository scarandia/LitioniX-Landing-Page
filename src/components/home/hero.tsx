'use client';
import React, { FC, useState, useEffect } from 'react';
import { Box, Grid, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { StyledButton } from '@/components/styled-button';
import Image from 'next/image';

const HomeHero: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        pt: 8,
        pb: { xs: 12, md: 16 },
        color: 'white',
        height: { xs: 'auto', md: '100vh' },
        minHeight: 600,
        overflow: 'hidden',
      }}
    >
      {/* Background Image with optimized loading */}
      {loaded && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        >
          <Image
            src="/images/Banners_Backgrounds/Banner/Banner7_edit.jpg"
            alt="Hero background"
            fill
            priority
            quality={90}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </Box>
      )}

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, height: '100%' }}>
        <Grid
          container
          spacing={0}
          sx={{
            height: '100%',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                ml: { xs: 0, md: -18 },
                mt: { xs: 8, md: 12 },
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h1"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                    textShadow: '0px 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      color: 'white',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                    }}
                  >
                    Potencia Eléctrica{' '}
                  </Typography>
                  <br />
                  sin límites.
                </Typography>
              </Box>

              <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: 1.6,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                  }}
                >
                  {/* Add your description text here */}
                </Typography>
              </Box>

              <Box
                sx={{
                  '& button': {
                    mr: 2,
                    mb: { xs: 2, md: 0 }
                  },
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'center',
                }}
              >
                <ScrollLink
                  to="popular-course"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  <StyledButton
                    color="primary"
                    size={isMobile ? 'medium' : 'large'}
                    variant="contained"
                  /* sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 'bold',
                  }} */
                  >
                    Conoce Más
                  </StyledButton>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>

          {!isMobile && (
            <Grid item xs={12} md={5}>
              {/* Add any additional content or images for larger screens */}
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeHero;