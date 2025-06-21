import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'

const courseMenu: Array<Navigation> = [
  {
    label: 'Bicicletas',
    path: '/productList?category=Bicicletas+eléctricas',
  },
  {
    label: 'Motocicletas',
    path: '/productList?category=Motocicletas+eléctricas',
  },
  {
    label: 'Baterías de Litio',
    path: '/productList?category=Celdas+de+Litio',
  },
]

const pageMenu = headerNavigations

const companyMenu: Array<Navigation> = [
  { label: 'Instagram', path: 'https://www.instagram.com/litionix?igsh=MThlZ3U5NG1jNjRxYg==' },
  { label: 'Whatsapp', path: 'https://wa.me/59170715199', },
  { label: 'Facebook', path: 'https://www.facebook.com/litionix/' },
  { label: 'TikTok', path: 'https://www.tiktok.com/@litionix' },
]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <MuiLink
      component={Link}
      href={path}
      underline="hover"
      sx={{
        display: 'block',
        mb: 1,
        color: 'primary.contrastText',
      }}
    >
      {label}
    </MuiLink>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={4}>
        <FooterSectionTitle title="Productos" />
        {courseMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label as string} path={path} />
        ))}
      </Grid>
      <Grid item xs={6} md={4}>
        <FooterSectionTitle title="Menú" />
        {pageMenu
          .filter((item): item is { label: string; path: string } =>
            typeof item.label === 'string' && item.label !== '/images/icons/location3.svg'
          )
          .map(({ label, path }, index) => (
            <NavigationItem key={index + path} label={label} path={path} />
          ))}

      </Grid>
    </Grid>
  )
}

export default FooterNavigation