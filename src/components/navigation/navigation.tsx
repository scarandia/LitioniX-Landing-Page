import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Link as ScrollLink } from 'react-scroll'
import { navigations } from './navigation.data'

const Navigation: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => (
        <Box
          component={ScrollLink}
          key={destination}
          activeClass="current"
          to={destination}
          spy={true}
          smooth={true}
          duration={350}
          sx={{
            position: 'relative',
            color: 'black', // Text color
            cursor: 'pointer',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 0 },
            fontSize: { xs: '1.2rem', md: 'inherit' },
            border: '2px solid transparent',
            boxSizing: 'border-box', // Ensures the border is included in the element's size
            '& img': {
              width: 24, // Default width for images
              height: 24, // Default height for images
            },
            '&:hover': {
              color: '#C11720',
              border: '2px solid #C11720', // Change the border color on hover
              borderRadius: '4px', // Optional: Rounds the corners of the square
            },
          }}
        >
          {typeof label === 'string' && label.endsWith('.svg') ? (
            <img src={label} alt="Navigation Icon" style={{ width: 30, height: 30 }} />
          ) : (
            label
          )}
        </Box>
      ))}
    </Box>
  )
}

export default Navigation