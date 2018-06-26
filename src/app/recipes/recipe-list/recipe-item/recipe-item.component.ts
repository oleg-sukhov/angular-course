import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() item: Recipe;

  constructor(private recipeService: RecipeService) { }
  
  selectRecipe() {
    this.recipeService.selectRecipe(this.item);
  }
}
