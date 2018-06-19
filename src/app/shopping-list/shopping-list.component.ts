import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    { name: 'Test Ingredient 1', amount: 10 },
    { name: 'Test Ingredient 2', amount: 12 },
    { name: 'Test Ingredient 3', amount: 29 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
