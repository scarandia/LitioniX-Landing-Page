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
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: 900, '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' } }}
        >
          Litioni<span>X</span>
        </Typography>
      </Link>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
