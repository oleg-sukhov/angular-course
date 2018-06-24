import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers  = [0, 2, 4]
  oddNumbers = [1, 3, 5]
  onlyOdd: boolean = false;
  value = 71;
}
