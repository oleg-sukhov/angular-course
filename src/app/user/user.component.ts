import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId: number;

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.userId = +this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = +params['id'];
    });
  }

  onActivate() {
    this.usersService.userActivated.next(this.userId);
  }
}
