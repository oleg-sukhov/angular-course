import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: []
})
export class InactiveUsersComponent implements OnInit, DoCheck {
  users: { name: string, status: 'active' | 'inactive' }[]

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers('inactive');
  }

  activateUser(name: string) {
    this.usersService.chnageStatus(name);
  }

  ngDoCheck() {
    this.users = this.usersService.getUsers('inactive');
  }
}
