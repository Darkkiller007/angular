import { Component, OnInit } from '@angular/core';
import { cart } from './../models/cart'

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})


export class ShoppingcartComponent implements OnInit {
  shoppingcart:cart[] = [];


  inputproduct:string = '';


  inputprice:number = 0;
  
  total:number = 0;


  constructor() { }

  ngOnInit(): void {
    this.shoppingcart = []

  }
  productplus (id:number) {
    this.shoppingcart.map((sc, i) =>
     {
      if(i == id) sc.quantity = sc.quantity + 1;
      return sc
    })
  }
  
  
  
  productminus (id:number) {
    this.shoppingcart.map((sc, i) => {
      if (sc.quantity === 1) this.shoppingcart = this.shoppingcart.filter((sc, i) => i !== id);
  
      else if(i == id) sc.quantity = sc.quantity - 1;
        return sc
    
    })
  }
  
  
  
  removefromcart (id:number) {
    this.shoppingcart = this.shoppingcart.filter((sc, i) => i !== id);
  }
  
  
  addtocart () {
    if(this.inputproduct == '') alert("Fields cannot be empty!")
    else if(this.inputprice== 0 || this.inputprice<1) 
    {
      alert("Enter a valid number as price cannot be 0!!");
      return;
    }
    else
    this.shoppingcart.push({
      product: this.inputproduct,
      quantity: 1,
      price: this.inputprice
    });
    this.inputproduct='';
    this.inputprice=0;
  }
  
  
  
  
  getTotal() {
    if(Number.isNaN(this.inputprice)) 
    {
      alert("Invalid price");
      return;
    }
    let total = 0;
    for (var i = 0; i < this.shoppingcart.length; i++) {
        if (this.shoppingcart[i].quantity) {
            total += (this.shoppingcart[i].price * this.shoppingcart[i].quantity);
        }
    }
    return total;
  }
  

}
