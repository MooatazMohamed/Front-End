import { Component } from '@angular/core';
import { ICaegory, IProduct } from '../../model/iproduct';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards',
  imports: [CommonModule ,  FormsModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
 product:IProduct[]=[]
 category:ICaegory[]=[]
 selectedCatID:number=0
  totalOrderPrice:number=0;
  selectedCount=0
 constructor(){
  this.product=[
    {
      id:1,
      name:"Laptop",
      price:100,
      quantity:1,
      image:"https://picsum.photos/seed/picsum/100/100",
      catId:1
  },
      {
      id:2,
      name:"PC",
      price:90,
      quantity:2,
      image:"https://picsum.photos/seed/picsum/100/100",
      catId:1
 },
      {
      id:3,
      name:"Mobile",
      price:150,
      quantity:0,
      image:"https://picsum.photos/seed/picsum/100/100",
      catId:2
  },
  {
      id:4,
      name:"IPhone",
      price:150,
      quantity:10,
      image:"https://picsum.photos/seed/picsum/100/100",
      catId:2
  },
]
this.category=[
  {
    id:1,
    name:"PC"
  },
  {
    id:2,
    name:"Smart Phone"
  }
]
 }
 buy( price:number , inputValue:string , prd:IProduct , count:any){
  this.totalOrderPrice += price * Number(inputValue)
  prd.quantity -= +inputValue
  count.value=1
 }
 x:Date = new Date
 }
