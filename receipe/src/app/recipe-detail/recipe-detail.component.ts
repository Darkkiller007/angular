import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  constructor(private service:RecipeService){}

  save(name:string, desc:string, ingredients:string, image:string){
      if (name == ""){
        alert('Name is empty');
        return;
      } else if(desc == ""){
        alert('Description is empty');
        return;
      } else if(ingredients == ""){
        alert('Ingredients is empty');
        return;
      } else if(image == ""){
        alert('Image link is empty');
        return;
      }
      else{
        alert('Recipe Added!');
      }

    console.log(image);
    let ing = ingredients.split(',');
    this.service.addRecipe(name, desc, ing, image);
  }

   clear(name: any, desc: any, ingredients: any, image: any){
        name.value = "";
        desc.value = "";
        ingredients.value = "";
        image.value = "";
  }
}


