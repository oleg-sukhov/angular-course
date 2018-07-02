import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) { }

  sendIngredientsToShoppingList() {
    this.recipeService.sendIngredientsToShoppingList(this.recipe.name);
  }

  ngOnInit() {
    this.recipe = this.recipeService.selectRecipe(+this.activatedRoute.snapshot.params['id']);
    this.activatedRoute.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.selectRecipe(+params['id']);
    })
  }
}
