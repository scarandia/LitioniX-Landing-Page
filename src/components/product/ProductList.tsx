export interface Vehicle {
    name: string;
    imageUrl: string;
    speed: string;
    autonomy: string;
    colors: string[];
}
// PRODUCT LIST FOR FULLSCREEN SLIDER
export const vehicles: Vehicle[] = [
    {
        /* Motocicletas */
        name: 'Modelo 1',
        imageUrl: '/images/products/Motos/Moto_IA1.png',
        speed: '75 km/h',
        autonomy: '200 km',
        colors: ['#000000', '#FFFFFF', '#c92121'],
    },
    {
        name: 'Modelo 2',
        imageUrl: '/images/products/Motos/Moto_IA2.png',
        speed: '80 km/h',
        autonomy: '250 km',
        colors: ['#000000', '#FFFFFF', '#B59F5A'],
    },
    {
        /* Hovers */
        name: 'Modelo 3',
        imageUrl: '/images/products/Hovers/hover1.png',
        speed: '90 km/h',
        autonomy: '300 km',
        colors: ['#000000', '#FFFFFF', '#B59F5A'],
    },
];