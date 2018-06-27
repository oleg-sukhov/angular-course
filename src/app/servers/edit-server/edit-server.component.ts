import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number, name: string, status: 'up' | 'down' };
  chnagesSaved: boolean = false;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.server = { ...this.serversService.getServer(this.activatedRoute.snapshot.params['id']) }
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.server.name, status: this.server.status })
    this.chnagesSaved = true;
    this.router.navigate(['/servers', this.server.id]);
  }

  canDeactivate() {
    if(!this.chnagesSaved) {
      return confirm('Please save changes!');
    } else {
      return true;
    }
  }
}
