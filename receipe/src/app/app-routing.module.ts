import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "recipes",
    component: RecipeComponent
  },
  {
    path: "shoplist",
    component: ShoppingListComponent
  },
  {
    path: "recipelist",
    component: RecipeListComponent
  },
  {
    path: "recipedetail",
    component: RecipeDetailComponent
  },
  {
    path:"receipeitem",
    component: RecipeItemComponent
  }, {
    path: "shoppingList",
    component: ShoppingListComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
