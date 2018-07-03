import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChnaged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    { name: 'Test Ingredient 1', amount: 10 },
    { name: 'Test Ingredient 2', amount: 12 },
    { name: 'Test Ingredient 3', amount: 29 }
  ];

  constructor() { }

  addIngredient(ingredient: Ingredient) {
    let existedIngredient = this.ingredients.find((ing: Ingredient) => ing.name === ingredient.name);
    if(existedIngredient) {
      existedIngredient.amount += ingredient.amount;
    } else {
      this.ingredients.push(ingredient);
    }
    this.ingredientsChnaged.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }
}
