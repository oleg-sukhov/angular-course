import { LoggingService } from "./logging-service.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Test Account',
      status: 'inactive',
    },
    {
      name: 'Hidden account',
      status: 'unknown',
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) { }

  updateStatus(data: { id: number, status: string }) {
    this.accounts[data.id].status = data.status;
    this.loggingService.logStatusChanged(data.status);
  }

  addAccount(data: { name: string, status: string }) {
    this.accounts.push(data);
    this.loggingService.logAccountCreated(`New server was created - ${JSON.stringify(data)}`)
  }
}
