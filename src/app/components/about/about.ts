import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit , OnDestroy {

  intrvalId: any;

  ngOnInit(): void {
    /*
this.sayHello()
 */
this.printHelloWorld()
  }

  /*   sayHello(){
    console.log("Hello World");
  } */

  printHelloWorld() {
    this.intrvalId = setInterval(() => {
      console.log('Hello World');
    }, 1000);
  }
    ngOnDestroy(): void {
    clearInterval(this.intrvalId)
    console.log("Component Destroyed");
  }
}
