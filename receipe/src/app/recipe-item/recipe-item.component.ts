import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  imageUrl: string = "";
  recipeName: string = "";
  desc: string = ""; 
  ingredients: string [] = [];
  
  recipeData: any[] = [];

  constructor(private service: RecipeService){
    this.recipeData = service.recipes;

    this.recipeData.forEach((recipe) => {
      if (recipe.name == service.targetRecipe){
        
        this.recipeName = recipe.name;
        this.imageUrl = recipe.img;
        this.desc = recipe.desc;
        this.ingredients = recipe.items;
      }
    })

  }
  

  addToShoppingList(ingredients: string[]){
    alert("Ingredients added!");
    this.service.updateRecipeList(ingredients);
  }
    
}

