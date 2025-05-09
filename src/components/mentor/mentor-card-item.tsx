import React, { FC } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { Mentor } from '@/interfaces/mentor'
import { IconButton } from '@mui/material'

interface Props {
  item: Mentor
}

const MentorCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 5,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          display: 'flex', // Enables flexbox
          flexDirection: 'column', // Stacks children vertically
          alignItems: 'center', // Centers children horizontally
          justifyContent: 'center', // Centers children vertically
          height: '100%', // Ensures the card takes up full height
          textAlign: 'center', // Centers text alignment
          '&:hover': {
            boxShadow: 2,
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 3,
            height: { xs: 30, md: 0 },
            mb: 1.5,
          }}
        >
          {/* Image or placeholder can go here */}
        </Box>
        <Box sx={{ mb: 1.5 }}>
          <Typography component="h2" variant="h4" sx={{ fontSize: '1.4rem', mt: { xs: -2.5, md: 1 }, }}>
            {item.name}
          </Typography>
          <Typography sx={{ mb: 0.5, mt: { xs: 0, md: 0.5 }, color: 'text.secondary' }}>{item.category}</Typography>
          {/*<Typography sx={{ mb: 1.5, color: 'text.secondary' }} variant="subtitle1">
            {item.description}
          </Typography>*/}
        </Box>
        {item.contact && (
          <IconButton
            component="a"
            href={item.contact}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#25D366',
              mt: 0.5,
            }}
          >
            <Box
              component="img"
              src="images/icons/whatsapp-logo.svg" // Replace with the path to your WhatsApp icon image
              alt="WhatsApp"
              sx={{
                width: 40, // Set the width of the icon
                height: 40, // Set the height of the icon
              }}
            />
          </IconButton>
        )}
      </Box>
    </Box>
  )
}

export default MentorCardItem