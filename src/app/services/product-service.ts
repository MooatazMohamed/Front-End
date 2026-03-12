import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Product {
  id?: number;
  name: string;
  brand: string;
  price: number;
  size: string;
  image?:string
}
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

getProducts():Observable<Product[]>{
  return this.http.get<Product[]>(this.url)
}
addProduct(product:Product):Observable<Product>{
  return this.http.post<Product>(this.url,product)
}
}
