import { Injectable } from '@angular/core';
import { CountService } from './count.service';

@Injectable()
export class UsersService {
  users: { name: string, status: 'active' | 'inactive' }[] = [
    {
      name: 'Mike',
      status: 'active'
    },
    {
      name: 'Monika',
      status: 'active'
    },
    {
      name: 'Filip',
      status: 'active'
    },
    {
      name: 'Rebeca',
      status: 'inactive'
    },
    {
      name: 'Jesica',
      status: 'inactive'
    },
    {
      name: 'Ben',
      status: 'inactive'
    }
  ];

  constructor(private conuntService: CountService) { }

  chnageStatus(name: string) {
    let user = this.users.find(user => user.name === name);
    user.status = user.status === 'active' ? 'inactive' : 'active';
    this.conuntService.increment();
  }

  getUsers(status: 'active' | 'inactive') {
    return this.users.filter(user => user.status === status);
  }
}
