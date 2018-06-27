import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: { name: string }[] = [
    { name: 'Bob' }, 
    { name: 'Mark' }, 
    { name: 'Brien' },
    { name: 'Josh' },
    { name: 'Bill' },
    { name: 'Donald' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
