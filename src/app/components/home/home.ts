import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product-service';
import { IProduct, ProductAPI } from '../../model/iproduct';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  product = signal<ProductAPI[]>([])
  formData:any
  constructor(private service:ProductService , private fb:FormBuilder){
    this.formData = this.fb.group({
      name:['',[Validators.required]],
      brand:['',[Validators.required]],
      price:['',[Validators.required]],
      size:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
   this.getProducts()
  }

  getProducts(){
    this.service.getAllProducts().subscribe((res)=>{
/*       console.log(res);
 */      this.product.set(res)
      /* this.product = res */
    })
  }
  delete(id:number){
    this.service.deleteProduct(id).subscribe(()=>{
      console.log(`Delete product id : ${id}`);
      this.getProducts()
    })
  }

  submit(){
    console.log("Before send Data");
    if(this.formData.valid){
      this.service.addProduct(this.formData.value).subscribe(()=>{
        console.log("Data Sent Succssfully");
      })
    }
    console.log("After Send Data");
  }
}