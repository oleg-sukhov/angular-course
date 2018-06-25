import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: []
})
export class ActiveUsersComponent implements OnInit, DoCheck {
  users: { name: string, status: 'active' | 'inactive' }[] = []

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers('active');
  }

  deactivateUser(name: string) {
    this.usersService.chnageStatus(name);
  }

  ngDoCheck() {
    this.users = this.usersService.getUsers('active');
  }
}
