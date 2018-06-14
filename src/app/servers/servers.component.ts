import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  isAddingServerDisabled = true;
  serverCreationStatus = '';
  serverName = ''
  userName = ''
  servers = []

  constructor() {
    setTimeout(() => {
      this.isAddingServerDisabled = false;
    }, 2000);
  }

  onServerCreated() {
    this.serverCreationStatus = `Server was created at ${new Date().toUTCString()}`
    this.servers.push(this.serverName);
  }

  onResetUserName() {
    this.userName = ''
  }
}
