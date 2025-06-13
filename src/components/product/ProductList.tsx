export interface ColorVariant {
    colorCode: string;
    imageUrl: string;
    productUrl: string; // Same for all variants of a product
}

export interface Vehicle {
    name: string;
    speed: string;
    autonomy: string;
    defaultColor: string;
    variants: ColorVariant[];
}
// PRODUCT LIST FOR FULLSCREEN SLIDER
export const vehicles: Vehicle[] = [
    {
        name: 'Modelo 1',
        speed: '75 km/h',
        autonomy: '200 km',
        defaultColor: '#000000',
        variants: [
            {
                colorCode: '#FFFFFF',
                imageUrl: '/images/products/Motos/Moto1.png',
                productUrl: '/products//',
            },
            {
                colorCode: '#000000',
                imageUrl: '/images/products/Motos/Moto2.png',
                productUrl: '/products//',
            },

            {
                colorCode: '#c92121',
                imageUrl: '/images/products/Motos/Moto3.png',
                productUrl: '/products//',
            },
        ],
    },
    {
        name: 'Modelo 2',
        speed: '80 km/h',
        autonomy: '250 km',
        defaultColor: '#000000',
        variants: [
            {
                colorCode: '#E6FC74',
                imageUrl: '/images/products/Bicis/Bici2.png',
                productUrl: '/products//',
            },
            {
                colorCode: '#C92121',
                imageUrl: '/images/products/Bicis/Bici3.png',
                productUrl: '/products//',
            },
        ],
    },
    {
        name: 'Modelo 3',
        speed: '90 km/h',
        autonomy: '300 km',
        defaultColor: '#000000',
        variants: [
            {
                colorCode: '#016cb6',
                imageUrl: '/images/products/Hovers/hover2.png',
                productUrl: '/products//',
            },
            {
                colorCode: '#DADADA',
                imageUrl: '/images/products/Hovers/hover3.png',
                productUrl: '/products//',
            },
            {
                colorCode: '#228340',
                imageUrl: '/images/products/Hovers/hover9.png',
                productUrl: '/products//',
            },
        ],
    },
];