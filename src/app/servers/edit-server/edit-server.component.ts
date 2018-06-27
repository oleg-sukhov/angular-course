import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent {
  @Input() server: { id: number, name: string, status: 'up' | 'down' };

  constructor() { }
}
