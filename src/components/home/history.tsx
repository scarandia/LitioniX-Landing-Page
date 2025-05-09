import React, { FC, useRef } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'

interface SliderArrowArrow {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: { xs: '-28px !important', md: '64px !important' },
        left: 'unset !important',
        right: type === 'prev' ? '90px !important' : '30px !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  )
}

const StyledSlickContainer = styled('div')(() => ({
  position: 'relative',

  '& .slick-list': { marginLeft: '-30px', marginBottom: '24px' },
}))

const HomeTestimonial: FC = () => {
  const sliderRef = useRef(null)

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
  }

  return (
    //Color Seccion Testimonios
    <Box id="testimonial" sx={{ pb: { xs: 6, md: 10 }, backgroundColor: '' }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Typography
              component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 36, md: 46 },
                mt: { xs: 0, md: 7 },
                mb: 4,
                lineHeight: 1,
                fontWeight: 'bold',
              }}
            >
              <Typography
                component="span"
                sx={{
                  color: '#EFEAE7', // Change this to your desired color
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                }}
              >
                Nuestra Historia
              </Typography>{' '}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              backgroundColor: '#144861',
              borderRadius: 2,
              p: 4,
              color: '#EFEAE7',
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                2017 - Fundación
              </Typography>
              <Typography variant="body1">
                Litionix comenzó como un pequeño emprendimiento enfocado en soluciones de movilidad eléctrica.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                2018 - Primer Producto
              </Typography>
              <Typography variant="body1">
                Lanzamos nuestra primera bicicleta eléctrica, revolucionando el mercado local.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                2021 - Expansión Global
              </Typography>
              <Typography variant="body1">
                Nos expandimos a mercados internacionales, llevando nuestras soluciones a más de 10 países.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                2025 - Innovación Continua
              </Typography>
              <Typography variant="body1">
                Hoy, Litionix es el resultado de años de aprendizaje, desafíos superados y un compromiso firme con la sostenibilidad.
                Apostamos por el litio no solo porque es el futuro, sino porque está aquí, en casa. Convertimos un recurso boliviano en energía para movernos, trabajar, y vivir mejor.
                Podés cerrar con una frase tipo:
                “Este no es solo un cambio de tecnología. Es un cambio de rumbo
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeTestimonial
