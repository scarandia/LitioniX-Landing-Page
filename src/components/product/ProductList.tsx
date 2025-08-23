import { ReactNode } from "react";

export interface ColorVariant {
    colorName: ReactNode;
    colorCode: string;
    imageUrl: string;
    productUrl: string;
}

export interface Vehicle {
    mainImage: string;
    name: string;
    speed: string;
    autonomy: string;
    defaultColor: string;
    variants: ColorVariant[];
}
// PRODUCT LIST FOR FULLSCREEN SLIDER
export const vehicles: Vehicle[] = [
    {
        name: 'NX 127',
        speed: '70 km/h',
        autonomy: '100 km',
        defaultColor: '#FFFFFF',
        variants: [
            {
                colorCode: '#FFFFFF',
                imageUrl: '/images/products/Motos/Moto7.png',
                productUrl: '/products//',
                colorName: undefined
            },
        ],
        mainImage: ""
    },
    {
        name: 'NX 2S+',
        speed: '75 km/h',
        autonomy: '110 km',
        defaultColor: '#FFFFFF',
        variants: [
            {
                colorCode: '#FFFFFF',
                imageUrl: '/images/products/Motos/Moto1.png',
                productUrl: '/products//',
                colorName: undefined
            },
            {
                colorCode: '#000000',
                imageUrl: '/images/products/Motos/Moto2.png',
                productUrl: '/products//',
                colorName: undefined
            },

            {
                colorCode: '#c92121',
                imageUrl: '/images/products/Motos/Moto3.png',
                productUrl: '/products//',
                colorName: undefined
            },
        ],
        mainImage: ""
    },
    {
        name: 'Bicicletas',
        speed: '30 km/h',
        autonomy: '70 km',
        defaultColor: '#E6FC74',
        variants: [
            {
                colorCode: '#E6FC74',
                imageUrl: '/images/products/Bicis/bici2.png',
                productUrl: '/products//',
                colorName: undefined
            },
            {
                colorCode: '#C92121',
                imageUrl: '/images/products/Bicis/bici3.png',
                productUrl: '/products//',
                colorName: undefined
            },
        ],
        mainImage: ""
    },
    {
        name: 'NX 3.0',
        speed: '85 km/h',
        autonomy: '105 km',
        defaultColor: '#FFFFFF',
        variants: [
            {
                colorCode: '#ff0000ff',
                imageUrl: '/images/products/Motos/Moto5/Moto1-NoBg.png',
                productUrl: '/products//',
                colorName: undefined
            },
        ],
        mainImage: ""
    },
    {
        name: 'Hoverboards',
        speed: '10 km/h',
        autonomy: '50 km',
        defaultColor: '#016cb6',
        variants: [
            {
                colorCode: '#016cb6',
                imageUrl: '/images/products/Hovers/hover2.png',
                productUrl: '/products//',
                colorName: undefined
            },
            {
                colorCode: '#DADADA',
                imageUrl: '/images/products/Hovers/hover3.png',
                productUrl: '/products//',
                colorName: undefined
            },
            {
                colorCode: '#228340',
                imageUrl: '/images/products/Hovers/hover9.png',
                productUrl: '/products//',
                colorName: undefined
            },
        ],
        mainImage: ""
    },
];