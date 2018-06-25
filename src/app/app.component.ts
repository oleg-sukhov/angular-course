import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
import { UsersService } from './users.service';
import { CountService } from './count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count: number = 0;
  accounts: { name: string, status: string }[] = []

  constructor(
    private accountsService: AccountsService,
    private usersService: UsersService,
    private countService: CountService
  ) { }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}
