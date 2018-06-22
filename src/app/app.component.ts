import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content: 'recipe'|'shopping-list' = 'recipe'

  onContentChanged(content: 'recipe'|'shopping-list') {
    this.content = content;
  }
}