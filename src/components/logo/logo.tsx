import React, { FC } from 'react'
import { Box } from '@mui/material'
import Link from 'next/link'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant = 'primary' }) => {
  return (
    <Box onClick={onClick}>
      <Link href="/" passHref>
        <img
          src="/images/icons/Logo_noBG_cropped.png"
          alt="Litionix Logo"
          style={{
            width: '150px',
            maxWidth: '200px',
            height: 'auto',
            cursor: 'pointer',
          }}
        />
      </Link>
    </Box>
  )
}

export default Logo
