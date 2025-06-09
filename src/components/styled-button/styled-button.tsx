import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Theme, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import { fontFamily } from '@/config/theme/typography'

interface BaseButtonProps extends Pick<ButtonProps, 'onClick' | 'type' | 'startIcon' | 'endIcon'> {
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'default' | 'primary' | 'secondary' | 'dark' | 'light'
  size?: 'small' | 'medium' | 'large'
  disableHoverEffect?: boolean
}

const sizeStyles = {
  small: { outlined: '4px 10px', default: '6px 12px', fontSize: 14 },
  medium: { outlined: '6px 14px', default: '8px 16px', fontSize: 14 },
  large: { outlined: '10px 18px', default: '12px 20px', fontSize: 15 },
}

const StyledButtonRoot = styled('button', {
  shouldForwardProp: (prop) =>
    !['variant', 'color', 'size', 'disableHoverEffect'].includes(String(prop)),
})<BaseButtonProps>(({ theme, color = 'primary', variant = 'contained', size = 'medium', disableHoverEffect }) => {
  const isOutlined = variant === 'outlined'
  const padding = isOutlined ? sizeStyles[size].outlined : sizeStyles[size].default
  const fontSize = sizeStyles[size].fontSize

  return {
    fontFamily,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: Number(theme.shape.borderRadius) * 3,
    padding,
    fontSize,
    fontWeight: 500,
    letterSpacing: 1,
    border: 'none',
    outline: 'none',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    transition: theme.transitions.create(['transform']),
    ...(variant === 'contained' && {
      boxShadow: 'none',
      backgroundColor:
        color === 'primary'
          ? theme.palette.primary.main
          : color === 'secondary'
            ? theme.palette.secondary.main
            : color === 'dark'
              ? '#313d56'
              : color === 'light'
                ? theme.palette.primary.contrastText
                : theme.palette.text.primary,
      color:
        color === 'light'
          ? theme.palette.text.primary
          : theme.palette.primary.contrastText,
    }),
    ...(variant === 'outlined' && {
      border: `2px solid ${color === 'primary'
        ? theme.palette.primary.main
        : color === 'secondary'
          ? theme.palette.secondary.main
          : '#313d56'
        }`,
      color:
        color === 'primary'
          ? theme.palette.primary.main
          : color === 'secondary'
            ? theme.palette.secondary.main
            : '#313d56',
    }),
    ...(variant === 'text' && {
      color:
        color === 'primary'
          ? theme.palette.primary.main
          : color === 'secondary'
            ? theme.palette.secondary.main
            : color === 'dark'
              ? '#313d56'
              : theme.palette.primary.contrastText,
    }),
    '&:hover': !disableHoverEffect && {
      transform: 'translateY(-3px)',
    },
    '& svg': {
      fontSize: 20,
    },
  }
})

interface Props extends BaseButtonProps {
  children: ReactNode
}

const StyledButton: FC<Props> = ({
  children,
  onClick,
  startIcon,
  endIcon,
  disableHoverEffect,
  ...rest
}) => (
  <StyledButtonRoot onClick={onClick} disableHoverEffect={disableHoverEffect} {...rest}>
    {startIcon && <Box component="span" sx={{ display: 'inherit', mr: 1, ml: -0.5 }}>{startIcon}</Box>}
    <Box component="span">{children}</Box>
    {endIcon && <Box component="span" sx={{ display: 'inherit', ml: 1, mr: -0.5 }}>{endIcon}</Box>}
  </StyledButtonRoot>
)

export default StyledButton