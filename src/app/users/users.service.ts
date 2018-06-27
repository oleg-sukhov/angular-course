import { Injectable } from '@angular/core';

export class UsersService {
  private users: { id: number, firstName: string, lastName: string, birthday: Date }[] = [
    { id: 100, firstName: 'Bob', lastName: 'Martin', birthday: new Date('1970-01-25') },
    { id: 200, firstName: 'Mark', lastName: 'Reinhold', birthday: new Date('1973-07-15') },
    { id: 300, firstName: 'Brien', lastName: 'Goetz', birthday: new Date('1968-05-06') },
    { id: 400, firstName: 'Josh', lastName: 'Long', birthday: new Date('1972-09-18') },
    { id: 500, firstName: 'Bill', lastName: 'Balmer', birthday: new Date('1983-02-24') },
    { id: 100, firstName: 'Donald', lastName: 'Richards', birthday: new Date('1975-08-11') }
  ]

  constructor() { }

  getUsers() {
    return this.users.slice();
  }

  getUser(id) {
    return this.users.find((user) => user.id == id);
  }
}
