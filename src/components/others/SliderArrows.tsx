import React from 'react'
import Box from '@mui/material/Box'
import Image from 'next/image'

export const CustomPrevArrow = (props: any): JSX.Element => {
    const { className, onClick } = props
    return (
        <Box
            component="div"
            className={className}
            onClick={onClick}
            sx={{
                position: 'absolute',
                top: '50%',
                left: '100px',
                transform: 'translateY(-50%)',
                zIndex: 3,
                cursor: 'pointer',
                width: 56,
                height: 56,
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '50%',
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
            }}
        >
            <img
                src="/public/images/icons/left-arrow.svg"
                alt="Left Arrow"
                width={24}
                height={24}
            />
        </Box>
    )
}

export const CustomNextArrow = (props: any): JSX.Element => {
    const { className, onClick } = props
    return (
        <Box
            component="div"
            className={className}
            onClick={onClick}
            sx={{
                position: 'absolute',
                top: '50%',
                right: '100px',
                transform: 'translateY(-50%)',
                zIndex: 3,
                cursor: 'pointer',
                width: 56,
                height: 56,
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '50%',
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
            }}
        >
            <img
                src="/images/icons/right-arrow.svg"
                alt="Right Arrow"
                width={24}
                height={24}
            />
        </Box>
    )
}