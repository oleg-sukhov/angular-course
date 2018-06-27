import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  servers: { id: number, name: string, status: 'up' | 'down' }[] = [
    { id: 1, name: 'dev-server', status: 'down' },
    { id: 2, name: 'auto-qa-server', status: 'up' },
    { id: 3, name: 'qa-server', status: 'up' },
    { id: 4, name: 'uat-server', status: 'down' },
    { id: 5, name: 'production-server', status: 'up' }
  ]

  constructor() { }

  getServers() {
    return this.servers.slice();
  }

  updateServer(id: number, data: { name: string, status: 'up' | 'down' }) {
    let server = this.servers.find((server) => server.id === id);
    server.name = data.name;
    server.status = data.status;
  }

  getServer(id) {
    return this.servers.find((server) => server.id == id);
  }
}
