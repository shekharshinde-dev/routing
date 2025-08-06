
export interface Product {
    id: string;
    name: string;
    brand: string;
    category: string;
    price: number;
    discount: number;
    rating: number;
    stock: number;
    imageUrl: string;
    description: string;
    status: "Dispatched" | "InProgress" | "Delivered";
    role : "buyer" | "admin" | "seller"
}