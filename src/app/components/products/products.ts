import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  items=[
    {
      name:"Laptop",
      description:"Description Laptop",
      quantity:10
    },
    {
      name:"PC",
      description:"Description PC",
      quantity:5
    }
  ]

  sayHello(){
    console.log("Event Binding");
  }
increaseQuantity(index:number){
this.items[index].quantity++
}

decreaseeQuantity(index:number){
  if(this.items[index].quantity>0){
    this.items[index].quantity--
  }
}
selectedName=""
selectedColor="#416586";

danger=false
}
