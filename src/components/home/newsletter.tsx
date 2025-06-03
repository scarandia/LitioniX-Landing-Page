import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { StyledButton } from '../styled-button';

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
    padding: theme.spacing(10, 8),
    borderRadius: '40px'
  }
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '12px',
  width: '100%',
  height: 56,
  padding: theme.spacing(0, 3),
  marginRight: theme.spacing(3),
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  border: '2px solid transparent',
  '&:focus-within': {
    borderColor: '#4ECDC4',
    boxShadow: '0 0 0 3px rgba(78, 205, 196, 0.2)'
  },
  [theme.breakpoints.down('md')]: {
    marginRight: 0,
    height: 48
  }
}));

const HomeNewsLetter: FC = () => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!message.trim()) return;

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://your-backend-api.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'sc.arandia2@gmail.com',
          subject: 'Consulta sobre productos',
          message: message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message || 'Email sending failed');
      }

      setIsSuccess(true);
      setMessage('');
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || 'Error sending email. Please try again later.');
      } else {
        setError('Error sending email. Please try again later.');
      }
      console.error('Email sending error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{
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
              mb: 2,
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
            ¡Envíanos un Correo!
          </Typography>
          <Typography sx={{
            mb: 6,
            fontSize: { xs: 16, md: 18 },
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: 600,
            mx: 'auto',
            lineHeight: 1.6
          }}>
            Si deseas más información sobre nuestros productos, no dudes en escribirnos por correo.
            Estaremos encantados de ayudarte.
          </Typography>

          {isSuccess && (
            <Typography sx={{
              color: '#4ECDC4',
              mb: 2,
              fontWeight: 500
            }}>
              ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
            </Typography>
          )}

          {error && (
            <Typography sx={{
              color: '#ff6b6b',
              mb: 2,
              fontWeight: 500
            }}>
              {error}
            </Typography>
          )}

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'center',
              width: '100%',
              maxWidth: 640,
              mx: 'auto',
            }}
          >
            <StyledInput
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe tu mensaje aquí..."
              multiline
              minRows={1}
              maxRows={4}
            />
            <Box sx={{ width: { xs: '100%', md: 'auto' } }}>
              <StyledButton
                disableHoverEffect
                size="large"
                onClick={handleSubmit}
                disabled={!message.trim() || isLoading}
                sx={{
                  width: { xs: '100%', md: 'auto' },
                  minWidth: 120,
                  py: 1.5,
                  '&:disabled': {
                    opacity: 0.7,
                    cursor: 'not-allowed'
                  }
                }}
              >
                {isLoading ? 'Enviando...' : 'Enviar'}
              </StyledButton>
            </Box>
          </Box>
        </AnimatedBox>
      </Container>
    </Box>
  );
};

export default HomeNewsLetter;