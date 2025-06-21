import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { data } from './benefits.data'

const HomeFeature: FC = () => {
  return (
    <Box
      id="feature"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(135deg, #0d2d3e 0%, #1a5276 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',  // contenido vacío con comillas dobles
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(26,82,118,0.3) 0%, transparent 30%)',
        }
      }}
    >
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  transform: 'perspective(1000px) rotateY(-5deg)',
                  transition: 'transform 0.5s',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateY(0)'
                  },
                  border: '1px solid rgba(78, 205, 196, 0.3)'
                }}
              >
                <img
                  src="/images/products/Motos/41.jpg"
                  alt="Beneficios de movilidad eléctrica"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                  loading="lazy"
                />
                <Box sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  p: 3,
                  color: 'white'
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#4ecdc4' }}>
                    Movilidad Sostenible
                  </Typography>
                  <Typography variant="body2">
                    Soluciones eléctricas que transforman el transporte boliviano
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: 36, md: 46 },
                  fontWeight: 800,
                  lineHeight: 1.2,
                  mb: 3,
                  color: 'white',
                  position: 'relative',
                  '&::after': {
                    content: '""', // comillas dobles para contenido vacío
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    width: 80,
                    height: 4,
                    backgroundColor: '#4ecdc4',
                    borderRadius: 2
                  }
                }}
              >
                ¿Por qué Litionix?
              </Typography>

              <Typography sx={{
                color: '#EFEAE7',
                mb: 4,
                fontSize: 18,
                lineHeight: 1.7
              }}>
                {`Los vehículos eléctricos ofrecen múltiples beneficios tanto para el medio ambiente como para sus usuarios.
                Al no emitir gases contaminantes, ayudan a reducir la huella de carbono y mejorar la calidad del aire en las ciudades.`}
              </Typography>

              <Grid container spacing={3}>
                {data.map(({ title, description, icon }, index) => (
                  <Grid key={index} item xs={12} md={6}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Box sx={{
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        borderRadius: 3,
                        p: 3,
                        height: '100%',
                        border: '1px solid rgba(78, 205, 196, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(78, 205, 196, 0.1)',
                          transform: 'translateY(-5px)',
                          borderColor: 'rgba(78, 205, 196, 0.3)'
                        }
                      }}>
                        <Box sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 2
                        }}>
                          <Box sx={{
                            mr: 2,
                            backgroundColor: 'rgba(78, 205, 196, 0.2)',
                            borderRadius: '50%',
                            height: 50,
                            width: 50,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#4ecdc4',
                            fontSize: 24
                          }}>
                            {icon}
                          </Box>
                          <Typography variant="h6" sx={{
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '1.1rem'
                          }}>
                            {title}
                          </Typography>
                        </Box>
                        <Typography sx={{
                          color: '#EFEAE7',
                          lineHeight: 1.6,
                          fontSize: '0.95rem'
                        }}>
                          {description}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{
                backgroundColor: 'rgba(78, 205, 196, 0.15)',
                borderRadius: 3,
                p: 3,
                mt: 4,
                borderLeft: '4px solid #4ecdc4'
              }}>
                <Typography sx={{
                  color: '#EFEAE7',
                  fontStyle: 'italic',
                  fontSize: 18,
                  lineHeight: 1.7
                }}>
                  {`"Al elegir Litionix, no solo adquieres un vehículo, sino que te unes a un movimiento
                  que transforma el transporte boliviano con tecnología sostenible."`}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeFeature