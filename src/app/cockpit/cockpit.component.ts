import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output()
  serverCreated = new EventEmitter<{ name: string, content: string }>();

  @Output()
  blueprintCreated = new EventEmitter<{ name: string, content: string }>();

  @ViewChild('serverContentInput') newServerContent: ElementRef;

  constructor() { }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      name: serverNameInput.value,
      content: this.newServerContent.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: serverNameInput.value,
      content: this.newServerContent.nativeElement.value
    });
  }
}
