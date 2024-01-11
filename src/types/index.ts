export interface IProduct {
    id: number;
    title: string;
    category: string;
    brand: string;
    price: number;
    stock: number;
    rating: number;
}

export interface IApiResponse {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}