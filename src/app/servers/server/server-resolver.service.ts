import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ServersService } from "../servers.service";
import { Inject, Injectable } from "@angular/core";

interface Server {
    id: number,
    name: string,
    status: 'up' | 'down'
}

@Injectable()
export class ServerResolver implements Resolve<Server> {

    constructor(private serverService: ServersService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.serverService.getServer(route.params['id']);
    }

}