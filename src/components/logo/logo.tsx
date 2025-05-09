import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick}>
      <Link href="/" passHref>
        <Box
          component="img"
          src="/images/icons/Logo_noBG_cropped.png"
          alt="Litionix Logo"
          sx={{
            width: { xs: 150, md: 200 }, // Responsive width
            height: 'auto', // Maintain aspect ratio
            cursor: 'pointer',
          }}
        />
      </Link>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
