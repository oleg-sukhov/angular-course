import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('target') element: { type: 'server'|'blueprint', name: string, content: string }

  constructor() { }

  ngOnInit() {
  }

}
