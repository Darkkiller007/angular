import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipeData: any[] = [];

  constructor(private service: RecipeService){
    this.recipeData = service.recipes;
    
  }
  // displayDetails(name:string, desc:string, ingredients:string, image:string){}

  targetname(name:any){
    this.service.updatetargetname(name);
  } 

  // this.recipeData.forEach(element => {
  //   console.log(element.name);
  // });

}
