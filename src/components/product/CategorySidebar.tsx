import React from 'react';
import { Box, Typography, List, ListItem, ListItemButton, ListItemText, useTheme } from '@mui/material';

interface Props {
    categories: string[];
    selectedCategory: string;
    onCategoryClick: (category: string) => void;
}

const CategorySidebar: React.FC<Props> = ({ categories, selectedCategory, onCategoryClick }) => {
    const theme = useTheme();

    return (
        <Box sx={{
            position: 'sticky',
            top: 80,
            borderRadius: '16px',
            background: theme.palette.mode === 'dark'
                ? 'linear-gradient(145deg, #252525, #303030)'
                : 'linear-gradient(145deg, #F8F8F8, #EEEEEE)',
            boxShadow: theme.shadows[1],
            p: 2,
            border: `1px solid ${theme.palette.divider}`
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Typography
                    variant="h6"
                    fontWeight={700}
                    color="text.primary"
                    sx={{
                        position: 'relative',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -8,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 40,
                            height: 3,
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: 2
                        }
                    }}
                >
                    Categorías
                </Typography>
            </Box>
            <List sx={{ p: 0 }}>
                {categories.map((cat) => (
                    <ListItem key={cat} disablePadding sx={{ mb: 0.5 }}>
                        <ListItemButton
                            selected={cat === selectedCategory}
                            onClick={() => onCategoryClick(cat)}
                            sx={{
                                borderRadius: '8px',
                                px: 2,
                                py: 1.5,
                                '&.Mui-selected': {
                                    background: theme.palette.primary.light,
                                    color: theme.palette.primary.main,
                                    fontWeight: 600,
                                    '&:hover': {
                                        background: theme.palette.primary.light,
                                    }
                                },
                                '&:hover': {
                                    background: theme.palette.action.hover,
                                }
                            }}
                        >
                            <ListItemText
                                primary={cat}
                                primaryTypographyProps={{
                                    fontWeight: 500,
                                    textAlign: 'center'
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default CategorySidebar;