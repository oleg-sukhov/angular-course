import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  
  constructor(private shoppingListService: ShoppingListService) { }

  addIngredient() {
    this.shoppingListService.addIngredient({
      name: this.nameInputRef.nativeElement.value,
      amount: this.amountInputRef.nativeElement.value
    });
  }
}
