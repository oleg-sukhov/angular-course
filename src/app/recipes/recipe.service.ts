import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Yummy Honey Chicken Kabobs',
      description: 'Honey chicken kabobs with veggies',
      imagePath: 'https://images.media-allrecipes.com/userphotos/720x405/5486145.jpg',
      ingredients: [
        new Ingredient('Meat', 100),
        new Ingredient('Onion', 20)
      ]
    },
    {
      id: 2,
      name: 'Creamy Ham and Cheese Quiche',
      description: 'This quiche is creamy, simple, and delicious!',
      imagePath: 'https://images.media-allrecipes.com/userphotos/720x405/2134337.jpg',
      ingredients: [
        new Ingredient('Cheese', 10),
        new Ingredient('Onion', 15)
      ]
    },
    {
      id: 3,
      name: 'Roasted Vegetables',
      description: 'A casserole dish of seasonal vegetables',
      imagePath: 'https://images.media-allrecipes.com/userphotos/720x405/5391316.jpg',
      ingredients: [
        new Ingredient('Potato', 45),
        new Ingredient('Tomato', 3)
      ]
    }
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes;
  }

  selectRecipe(id: number): Recipe {
    const selectedRecipe = this.recipes.find((recipe: Recipe) => recipe.id === id);
    return { ...selectedRecipe };
  }

  sendIngredientsToShoppingList(recipeName: string) {
    let recipe = this.recipes.find((recipe) => recipe.name === recipeName);
    recipe.ingredients.forEach((ingredient: Ingredient) => {
      this.shoppingListService.addIngredient(ingredient);
    })
  }
}
