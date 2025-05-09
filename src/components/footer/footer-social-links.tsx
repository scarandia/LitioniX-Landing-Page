import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { SocialLink } from '@/interfaces/social-link'

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/litionix?igsh=MThlZ3U5NG1jNjRxYg==',
    icon: '/images/icons/instagram.svg',
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/',
    icon: '/images/icons/youtube.svg',
  },
  {
    name: 'Twitter',
    link: 'https://x.com',
    icon: '/images/icons/Xicon.png',
  },
  {
    name: 'Facebook',
    link: 'https://facebook.com',
    icon: '/images/icons/white_facebook.png',
  },
  {
    name: 'WhatsApp',
    link: 'https://wa.me/59170715199',
    icon: '/images/icons/D_whatsapp.png',
  },
]

interface SocialLinkItemProps {
  item: SocialLink
}

const SocialLinkItem: FC<SocialLinkItemProps> = ({ item }) => (
  <Box
    component="li"
    sx={{
      display: 'inline-block',
      color: 'primary.contrastText',
      mr: 0.5,
    }}
  >
    <Link
      target="_blank"
      sx={{
        lineHeight: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        borderRadius: '50%',
        color: 'inherit',
        '&:hover': {
          backgroundColor: '#C11720',
        },
        '& img': {
          fill: 'currentColor',
          width: 36,
          height: 'auto',
        },
      }}
      href={item.link}
    >
      {/* eslint-disable-next-line */}
      <img src={item.icon} alt={item.name + 'icon'} />
    </Link>
  </Box>
)

// default
const SocialLinks: FC = () => {
  return (
    <Box sx={{ ml: -1 }}>
      <Box
        component="ul"
        sx={{
          m: 0,
          p: 0,
          lineHeight: 0,
          borderRadius: 3,
          listStyle: 'none',
        }}
      >
        {socialLinks.map((item) => {
          return <SocialLinkItem key={item.name} item={item} />
        })}
      </Box>
    </Box>
  )
}

export default SocialLinks
