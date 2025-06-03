import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { Link as ScrollLink } from 'react-scroll'
import NextLink from 'next/link'
import { navigations } from './navigation.data'

const Navigation: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => {
        const isPageLink = destination.startsWith('/')
        const isAnchor = destination.startsWith('#')
        const isSvg = typeof label === 'string' && label.endsWith('.svg')

        if (isPageLink) {
          return (
            <NextLink href={destination} passHref key={destination}>
              <Box
                component="a"
                sx={{
                  position: 'relative',
                  color: 'black',
                  cursor: 'pointer',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  px: { xs: 0, md: 3 },
                  mb: { xs: 3, md: 0 },
                  fontSize: { xs: '1.2rem', md: '1.1rem' },
                  border: '2px solid transparent',
                  boxSizing: 'border-box',
                  '& img': {
                    width: 24,
                    height: 24,
                  },
                  '&:hover': {
                    color: '#C11720',
                    border: '2px solid #C11720',
                    borderRadius: '4px',
                  },
                  textDecoration: 'none',
                }}
              >
                {isSvg ? (
                  <img src={label} alt="Navigation Icon" style={{ width: 30, height: 30 }} />
                ) : (
                  label
                )}
              </Box>
            </NextLink>
          )
        }
        if (isAnchor) {
          return (
            <Box
              component={ScrollLink}
              key={destination}
              activeClass="current"
              to={destination.replace('#', '')}
              spy={true}
              smooth={true}
              duration={350}
              sx={{
                position: 'relative',
                color: 'black',
                cursor: 'pointer',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: { xs: 0, md: 3 },
                mb: { xs: 3, md: 0 },
                fontSize: { xs: '1.2rem', md: 'inherit' },
                border: '2px solid transparent',
                boxSizing: 'border-box',
                '& img': {
                  width: 24,
                  height: 24,
                },
                '&:hover': {
                  color: '#C11720',
                  border: '2px solid #C11720',
                  borderRadius: '4px',
                },
              }}
            >
              {isSvg ? (
                <img src={label} alt="Navigation Icon" style={{ width: 30, height: 30 }} />
              ) : (
                label
              )}
            </Box>
          )
        }

        return null
      })}
    </Box>
  )
}

export default Navigation