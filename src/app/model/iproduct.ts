export interface IProduct {
    id:number;
    name:string;
    price:number;
    quantity:number;
    image:string;
    catId:number
}

export interface ICaegory{
    id:number;
    name:string
}


export interface ProductAPI{
    id:number;
    name:string;
    brand:string
    price:number
    size:string
}