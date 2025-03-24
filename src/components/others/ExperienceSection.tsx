import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

interface Exp {
    label: string
    value: string
}
interface ExpItemProps {
    item: Exp
}

const exps: Array<Exp> = [
    {
        label: 'Modelos',
        value: '25 +',
    },
    {
        label: 'Clientes',
        value: '200 +',
    },
    {
        label: 'Experiencia',
        value: '10 años +',
    },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
    const { value, label } = item
    return (
        <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
            <Typography
                sx={{ color: 'secondary.main', mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
            >
                {value}
            </Typography>
            <Typography color="text.secondary" variant="h5">
                {label}
            </Typography>
        </Box>
    )
}

const ExperienceSection: FC = () => {
    return (
        <Box sx={{ boxShadow: 2, py: 4, px: 7, borderRadius: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <Grid container spacing={2}>
                {exps.map((item) => (
                    <Grid key={item.value} item xs={12} md={4}>
                        <ExpItem item={item} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default ExperienceSection