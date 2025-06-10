import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Slider, { Settings } from 'react-slick';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, styled } from '@mui/material/styles';
import IconArrowBack from '@mui/icons-material/ArrowBack';
import IconArrowForward from '@mui/icons-material/ArrowForward';
import { MentorCardItem } from '@/components/mentor';
import { data } from './contacts';

interface SliderArrowArrow {
  onClick?: () => void;
  type: 'next' | 'prev';
}

const SliderArrow: FC<SliderArrowArrow> = ({ onClick, type }) => {
  return (
    <IconButton
      sx={{
        backgroundColor: 'white',
        color: '#05334A',
        border: '2px solid #05334A',
        '&:hover': {
          backgroundColor: '#4ECDC4',
          color: 'white',
          borderColor: '#4ECDC4'
        },
        position: 'absolute',
        bottom: { xs: -40, md: -50 },
        [type === 'prev' ? 'left' : 'right']: { xs: 'calc(50% - 50px)', md: 0 },
        zIndex: 10,
        boxShadow: 2,
        width: 48,
        height: 48,
        '& svg': {
          fontSize: 24
        }
      }}
      disableRipple
      onClick={onClick}
    >
      {type === 'next' ? <IconArrowForward /> : <IconArrowBack />}
    </IconButton>
  );
};

const StyledDots = styled('ul')(({ theme }) => ({
  '&.slick-dots': {
    position: 'absolute',
    bottom: { xs: -35, md: -40 },
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex !important',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    '& li': {
      margin: theme.spacing(0, 0.5),
      '&.slick-active div': {
        backgroundColor: '#05334A',
        width: 24,
      },
    },
  },
}));

const HomeOurMentors: FC = () => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(breakpoints.down('sm'));

  const sliderConfig: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: isSmallMobile ? 1 : isMobile ? 2 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{
        height: 4,
        width: 16,
        backgroundColor: '#BDBDBD',
        borderRadius: 2,
        transition: 'all 0.3s ease'
      }} />
    ),
    responsive: [
      {
        breakpoint: breakpoints.values.md,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box
      id="mentors"
      sx={{
        pt: 10,
        pb: 15,
        backgroundColor: '#EFEAE7',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: 32, md: 40 },
            fontWeight: 700,
            color: '#05334A',
            mb: 6,
            textAlign: 'center',
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
          Contáctanos
        </Typography>

        <Box sx={{
          px: { xs: 0, md: 2 },
          '& .slick-slide': {
            px: { xs: 1, md: 1.5 },
            py: 2
          },
          '& .slick-list': {
            mx: { xs: -1, md: -1.5 },
            py: 2
          }
        }}>
          <Slider {...sliderConfig}>
            {data.map((item) => (
              <Box key={String(item.id)}>
                <Box sx={{
                  mx: 1,
                  border: '1px solid rgba(5, 51, 74, 0.2)',
                  borderRadius: 2,
                  overflow: 'hidden',
                  backgroundColor: 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
                    borderColor: 'rgba(78, 205, 196, 0.5)'
                  }
                }}>
                  <MentorCardItem item={item} />
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeOurMentors;