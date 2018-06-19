import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    { 
      name: 'A test recipe', 
      description: 'A test recipe description', 
      imagePath: 'https://www.ndtv.com/cooks/images/Vegetarian%20Khow%20Suey.jpg?downsize=650:400&output-quality=70&output-format=webp' 
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
