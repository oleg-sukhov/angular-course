import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging-service.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @ViewChild('accountName') accountNameInput: ElementRef;
  @ViewChild('accountName') accountStatusSelect: ElementRef;

  constructor(private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe((status: string) => {
      alert(`New status is ${status}`);
    })
  }

  onCreateAccount() {
    const newAccount = {
      name: this.accountNameInput.nativeElement.value,
      status: this.accountStatusSelect.nativeElement.value
    };
    this.accountsService.addAccount(newAccount);
  }
}
