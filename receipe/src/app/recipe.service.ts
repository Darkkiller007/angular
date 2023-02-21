import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  targetRecipe: string = "";

  ingredientsList: {name: string, quantity:string} [] = [];

  recipes: any[] = [
    {
      name: "Soup",
      desc: "Another classic comfort food, tomato soup became an American household staple when a chemist working at Campbell’s came up with the idea to condense the stuff back in 1897. And while we have no problem reaching for a can every now and then, you can’t beat snuggling up with a homemade bowl of sweet and silky tomato soup (preferably served with a side of grilled cheese).",
      items: ["Cabbage","Pepper","Tomato","Cheese","Bread"],
      img: "https://images.pexels.com/photos/6405531/pexels-photo-6405531.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Pizza",
      desc: "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.",
      items: ["Wheat crust","Tomato","Onion","Corn","Paneer","Cheese","Olives","Red Paprika"],
      img: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Frankie",
      desc: "Frankie is a wrap made with various stuffings and served as a street food snack served in various parts of India. A vegetarian frankie usually includes assorted toppings of veggie stir fry, legumes, paneer, cheese, potato tikki, veg cutlet, lentils kabab. You can also add any other leftover vegetable as a filling.",
      items: ["Tomato","Potato","Peas","Onion","Paneer","Ketchup","Spices"],
      img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
    },
    {
      name: "Burger",
      desc: "Meat or vegetables cut into very small pieces and made into a flat round-shaped cutlet, that you eat between two pieces of bread",
      items: ["Tomato","Potato","Peas","Onion","Lettuce","Mayonese","Spices","Cheese","Chipotle Sauce"],
      img: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Sandwich",
      desc: "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.",
      items: ["Tomato","Potato","Onion","Mayonese","Spices","Cheese","Cucumber"],
      img: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Brownie",
      desc: "A chocolate brownie or simply a brownie is a chocolate baked confection. Brownies come in a variety of forms and may be either fudgy or cakey, depending on their density. Brownies often, but not always, have a glossy skin on their upper crust. They may also include nuts, frosting, cream cheese, chocolate chips, or other ingredients",
      items: ["Sugar","Chocolate","Chocolate syrup","Butter","Eggs","Cocoa powder","Vanilla Extract"],
      img: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  addRecipe(name: string, description:string, ingredients:string [], img:string){
    this.recipes.push({
      name: name,
      desc: description,
      items: ingredients,
      image: img
    });
    console.log(img);
  }
  
  updateRecipeList(ingredients: string[]){
    ingredients.forEach(ing => {
      this.ingredientsList.push({name: ing, quantity: "1"});
    })    
  }

  addIngredients(name:string, quantity:string){
    this.ingredientsList.push({name:name, quantity:quantity});
  }

  updatetargetname(name:any){
    this.targetRecipe = name;
  }
  constructor() {
    this.recipes[0].desc;
   }
}