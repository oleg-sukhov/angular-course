import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { EmptyRecipeDetailComponent } from "./recipes/empty-recipe-detail/empty-recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

const routes: Routes = [
    { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: EmptyRecipeDetailComponent },
      { path: 'create', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent} ]
    },
    { path: 'shoppingList', component: ShoppingListComponent },
    { path: '', pathMatch: 'full', redirectTo: '/recipes' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}