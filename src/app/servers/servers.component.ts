import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: { id: number, name: string, status: 'up' | 'down' }[];
  selectedServer: { id: number, name: string, status: 'up' | 'down' };

  constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
    this.selectedServer = this.servers[0];
    this.activatedRoute.params.subscribe((params: Params) => {
      const serverId = params['id'];
      if(serverId) {
        this.selectedServer = this.serversService.getServer(serverId);
      }
    });
  }

  onServerSelect(server: { id: number, name: string, status: 'up' | 'down' }) {
    this.selectedServer = server;
  }
}
