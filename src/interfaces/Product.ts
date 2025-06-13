export interface Product {
    id?: string | number;
    _id?: string;
    name?: string;
    title?: string;
    imageUrl?: string;
    cover?: string;
    category?: string;
    price?: number;
    description?: string;
    variants?: Array<{
        colorCode: string;
        imageUrl: string;
        productUrl: string;
    }>;
    speed?: string;
    autonomy?: string;
}