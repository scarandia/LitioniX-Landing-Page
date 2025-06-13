import React from 'react'
import Box from '@mui/material/Box'
import { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import { useTheme, styled } from '@mui/material/styles'
import { IconButton, useMediaQuery } from '@mui/material'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import ProductGrid from './ProductGrid'
import FullScreenSlider from './FullScreenSlider'

interface SliderArrowProps {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: string
}

const SliderArrow = ({ onClick, type, className }: SliderArrowProps): JSX.Element => {
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': {
          backgroundColor: 'primary.main',
          color: 'primary.contrastText'
        },
        bottom: { xs: '-70px !important', md: '-28px !important' },
        left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? (
        <IconArrowForward sx={{ fontSize: 22 }} />
      ) : (
        <IconArrowBack sx={{ fontSize: 22 }} />
      )}
    </IconButton>
  )
}

const StyledDots = styled('ul')(({ theme }) => ({
  '&.slick-dots': {
    position: 'absolute',
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: 'left',
    '& li': {
      marginRight: theme.spacing(2),
      '&.slick-active > div': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}))

const HomePopularCourse = (): JSX.Element => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box
        sx={{
          height: 8,
          width: 30,
          backgroundColor: 'divider',
          display: 'inline-block',
          borderRadius: 4,
        }}
      />
    ),
  }

  return (
    <Box
      sx={{
        pt: { xs: 4, md: 8 },
        pb: { xs: 8, md: 14 },
        backgroundColor: '#05334A',
        backgroundImage: {
          xs: 'linear-gradient(to bottom, #042A3F 0%, #05334A 100%)',
          md: `radial-gradient(circle at 75% 30%, rgba(23,85,121,0.7) 0%, transparent 50%),
                linear-gradient(to bottom, #042A3F 0%, #05334A 100%)`
        },
      }}
    >
      <Container maxWidth="lg">
        <ProductGrid />
      </Container>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          marginTop: 8,
          backgroundColor: '#042A3F',
          backgroundImage: 'linear-gradient(to top, #021C29 0%, #042A3F 100%)',
          borderTop: '1px solid rgba(78, 205, 196, 0.15)',
        }}
      >
        <FullScreenSlider />
      </Box>
    </Box>
  )
}

export default HomePopularCourse