import { Box, CircularProgress } from '@mui/material';

export const LoadingScreen = () => (
    <Box
        sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#EFEAE7', // Match your site's background
            zIndex: 9999,
        }}
    >
        <CircularProgress color="primary" size={60} />
    </Box>
);