import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() onIngredientAdded = new EventEmitter<Ingredient>()

  constructor() { }

  addIngredient() {
    this.onIngredientAdded.emit({
      name: this.nameInputRef.nativeElement.value,
      amount: this.amountInputRef.nativeElement.value
    });
  }
}
