import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: { id: number, name: string, status: 'up' | 'down' }[];
  selectedServer: { id: number, name: string, status: 'up' | 'down' };

  constructor() { }

  ngOnInit() {
    this.servers = [
      { id: 1, name: 'dev-server', status: 'down' },
      { id: 2, name: 'auto-qa-server', status: 'up' },
      { id: 3, name: 'qa-server', status: 'up' },
      { id: 4, name: 'uat-server', status: 'down' },
      { id: 5, name: 'production-server', status: 'up' }
    ];
    this.selectedServer = this.servers[0];
  }

  onServerSelect(server: { id: number, name: string, status: 'up' | 'down' }) {
    this.selectedServer = server;
  }
}
