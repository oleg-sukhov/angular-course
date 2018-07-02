import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-empty-recipe-detail',
  templateUrl: './empty-recipe-detail.component.html',
  styleUrls: []
})
export class EmptyRecipeDetailComponent {

  constructor() { }
}
