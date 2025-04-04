import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Innovación eléctrica.',
    description: 'Reduce la huella de carbono con un transporte eficiente y ecológico.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Precios Competitivos',
    description: 'Disfruta de una alternativa asequible con menores costos en combustible',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Batería de larga duración',
    description: 'Autonomía extendida para viajes más largos sin preocuparte por la carga.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'La opción inteligente',
    description: 'Comodidad, eficiencia y tecnología en un solo vehículo.',
    icon: <ContactSupportIcon />,
  },
]
