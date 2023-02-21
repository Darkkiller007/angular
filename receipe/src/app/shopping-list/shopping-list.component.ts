import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  list: {name: string, quantity:string} [] = [];
  constructor(private service: RecipeService){
    this.list = this.service.ingredientsList;
  }

  removeFromList(ingName:string){
    this.list.forEach((item, idx) => {
      if (ingName == item.name){
        this.list.splice(idx, 1);
      }
    });
  }

  addIngredientsToList(name:string, quantity:string){
    if (name==''||quantity=='') return
    else this.service.addIngredients(name, quantity);
  }
}
