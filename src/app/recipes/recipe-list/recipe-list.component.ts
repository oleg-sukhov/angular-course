import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() onRecipeSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    { 
      name: 'Yummy Honey Chicken Kabobs', 
      description: 'Honey chicken kabobs with veggies', 
      imagePath: 'https://images.media-allrecipes.com/userphotos/720x405/5486145.jpg' 
    },
    { 
      name: 'Creamy Ham and Cheese Quiche', 
      description: 'This quiche is creamy, simple, and delicious!', 
      imagePath: 'https://images.media-allrecipes.com/userphotos/720x405/2134337.jpg' 
    },
    { 
      name: 'Roasted Vegetables', 
      description: 'A casserole dish of seasonal vegetables', 
      imagePath: 'https://images.media-allrecipes.com/userphotos/720x405/5391316.jpg' 
    }
  ];

  constructor() { }

  selectRecipe(recipe: Recipe) {
    this.onRecipeSelected.emit(recipe);
  }
}
