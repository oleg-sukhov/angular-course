import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<h4>Warning Alert!!!</h4>`,
  styles: [` 
      h4 { 
        background-color: #ffcccc;
        border: 1px solid red;
        padding: 20px;
      }
      `]
})
export class WarningAlertComponent {
  constructor() { }
}
