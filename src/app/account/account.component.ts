import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging-service.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(
    private accountsService: AccountsService
  ) { }

  onSetTo(status: string) {
    this.accountsService.updateStatus({ id: this.id, status: status })
    this.accountsService.statusUpdated.emit(status);
  }
}
