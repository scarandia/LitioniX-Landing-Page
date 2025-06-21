import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import Image from 'next/image';

const HistorySection: FC = () => {
  const historyItems = [
    {
      year: '2017',
      title: 'El Comienzo',
      content:
        'Un sueño en 2017 con una visión clara: impulsar la movilidad eléctrica en Bolivia con tecnología de calidad.',
      color: '#59656F',
    },
    {
      year: '2020',
      title: 'Los Desafíos',
      content:
        'Los desafíos no tardaron en llegar. El mercado aún no estaba preparado y la pandemia nos obligó a replantear el camino.',
      color: '#59656F',
    },
    {
      year: '2021',
      title: 'Un giro hacia la Sostenibilidad',
      content:
        'Nos adaptamos. Redirigimos nuestro enfoque a lo esencial: la comercialización de celdas de litio, apostando por energía limpia y eficiente.',
      color: '#59656F',
    },
    {
      year: '2025',
      title: 'Innovación Continua',
      content:
        'Bolivia enfrenta una nueva realidad energética, y Litionix está preparada para responder. Regresamos con motos eléctricas confiables, duraderas y tecnológicas, comprometidas con un futuro más sostenible.',
      color: '#59656F',
    },
  ]

  return (
    <Box
      id="history"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #0d2d3e 0%, #1a5276 100%)',
        color: '#EFEAE7',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 30%, rgba(26, 82, 118, 0.4) 0%, transparent 40%)',
        },
      }}
    >
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    width: 80,
                    height: 4,
                    backgroundColor: '#4ecdc4',
                    borderRadius: 2,
                  },
                }}
              >
                Nuestra Historia
              </Typography>
              <Box
                sx={{
                  backgroundColor: 'rgba(78, 205, 196, 0.15)',
                  borderRadius: 3,
                  p: 3,
                  borderLeft: '4px solid #4ecdc4',
                  mb: 3,
                }}
              >

                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: 25, md: 25 },
                    fontWeight: 800,
                    lineHeight: 1.2,
                    mb: 3,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -10,
                      left: 0,
                      width: 80,
                      height: 4,
                      backgroundColor: '#4ecdc4',
                      borderRadius: 2,
                    },
                  }}
                >
                  Misión
                </Typography>

                <Typography variant="body1" sx={{ fontSize: 18, lineHeight: 1.7, fontStyle: 'italic' }}>
                  &quot;Impulsamos la innovación y sostenibilidad en la movilidad eléctrica de alta
                  tecnología, diseñadas para quienes buscan eficiencia, durabilidad y calidad.
                  Ofrecemos confiabilidad en nuestros productos y servicios, reforzando nuestro
                  compromiso con nuestros clientes y el medio ambiente. .&quot;
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: 'rgba(78, 205, 196, 0.15)',
                  borderRadius: 3,
                  p: 3,
                  borderLeft: '4px solid #4ecdc4',
                  mb: 3,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: 25, md: 25 },
                    fontWeight: 800,
                    lineHeight: 1.2,
                    mb: 3,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -10,
                      left: 0,
                      width: 80,
                      height: 4,
                      backgroundColor: '#4ecdc4',
                      borderRadius: 2,
                    },
                  }}
                >
                  Visión
                </Typography>

                <Typography variant="body1" sx={{ fontSize: 18, lineHeight: 1.7, fontStyle: 'italic' }}>
                  &quot;Referencia en movilidad eléctrica: innovación, sostenibilidad y preferencia.
                  Transformando el transporte urbano..&quot;
                </Typography>
              </Box>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: '#4ecdc4',
                  textAlign: 'center',
                  mt: 4,
                  position: 'relative',
                  '&::before, &::after': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    width: '30%',
                    height: 2,
                    background: 'linear-gradient(90deg, transparent, #4ecdc4, transparent)',
                  },
                  '&::before': { left: 0 },
                  '&::after': { right: 0 },
                }}
              >
                Este no es solo un cambio de tecnología.
                <br />
                Es un cambio de rumbo.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box sx={{ position: 'relative', pl: { xs: 0, md: 4 } }}>
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: 24, md: 44 },
                  top: 0,
                  bottom: 0,
                  width: 4,
                  background: 'linear-gradient(to bottom, #4ecdc4, #1a5276)',
                  borderRadius: 2,
                  zIndex: 1,
                }}
              />

              {historyItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      mb: 6,
                      ml: { xs: 6, md: 8 },
                      zIndex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        left: { xs: -36, md: -46 },
                        top: 8,
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        backgroundColor: '#4ecdc4',
                        border: '4px solid #0d2d3e',
                        boxShadow: '0 0 0 2px #4ecdc4',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2,
                        fontSize: 14,
                      }}
                    >

                    </Box>

                    <Box
                      sx={{
                        background: `linear-gradient(135deg, ${item.color} 0%, #0d2d3e 100%)`,
                        borderRadius: 3,
                        p: 4,
                        boxShadow: 3,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: 6,
                        },
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                          color: '#4ecdc4',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                        }}
                      >
                        <Box
                          component="span"
                        /* sx={{
                          fontSize: 28,
                          width: 40,
                          height: 40,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'rgba(78, 205, 196, 0.2)',
                          borderRadius: '50%',
                        }} */
                        >
                          <img src="/images/icons/gear.png" alt="Img_Historia" width={56} height={56} />
                        </Box>
                        {item.year} — {item.title}
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize: 17, lineHeight: 1.7 }}>
                        {item.content}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                style={{ position: 'relative', zIndex: 3 }}
              >
                <Box
                  sx={{
                    backgroundColor: '#c53030',
                    color: 'white',
                    borderRadius: 3,
                    p: 3,
                    textAlign: 'center',
                    maxWidth: 300,
                    ml: { xs: 6, md: 8 },
                    mt: 2,
                    boxShadow: 3,
                    border: '2px solid #fbd38d',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    Hecho en Bolivia
                  </Typography>
                  <Typography variant="body2">
                    Transformando recursos locales en soluciones globales
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HistorySection
