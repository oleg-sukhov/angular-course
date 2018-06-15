import { Component, OnInit } from "@angular/core";
import { pureFunction0 } from "@angular/core/src/render3/pure_function";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [` 
        h3 { 
            color: lightgreen; 
        }
        .online {
            color: yellow;
        }
    `]
})
export class ServerComponent {
    min = 1000;
    max = 9999;
    disableAddingNewServer = true;
    serverId: number;
    serverStatus: string;

    constructor() {
        this.serverStatus  = Math.random() > 0.5 ? 'online' : 'offline';
        this.serverId = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        setTimeout(() => {
            this.disableAddingNewServer = false;
        }, 3000);
    }
}