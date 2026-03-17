import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductAPI } from '../model/iproduct';


@Injectable({
  providedIn: 'root',
})


export class ProductService {

  constructor(private http:HttpClient){}
  url = "http://localhost:3000/products"

  getAllProducts():Observable<ProductAPI[]>{
    return this.http.get<ProductAPI[]>(this.url)
  }

  deleteProduct(id:number):Observable<void>{
   return this.http.delete<void>(`${this.url}/${id}`)
    /* http://localhost:3000/products/id */
  }

  addProduct(product:ProductAPI):Observable<ProductAPI>{
    return this.http.post<ProductAPI>(this.url,product)
  }
}
