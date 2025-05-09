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
    title: 'Energía Inteligente y Limpia.',
    description: 'Movete con la potencia del litio: cero emisiones, cero gasolina. Cuidás el planeta en cada trayecto.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Ahorro en serio',
    description: 'Menos mantenimiento, cero gasolina y larga duración. Con nuestros vehículos, el ahorro es real.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Batería de larga duración',
    description: 'Olvidate de las paradas constantes: nuestras celdas de litio te llevan más lejos con menos carga.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'La opción inteligente',
    description: 'Comodidad, eficiencia y tecnología en un solo vehículo.',
    icon: <ContactSupportIcon />,
  },
]
