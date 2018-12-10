import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';
@Injectable()
export class AccountsService {
  accounts: { name: string; status: string }[] = [
    {
      name: 'Dummy Text',
      status: 'Active'
    }
  ];

  constructor(private loggingService: LoggingService) {}

  onNewAccountAdded(name: string, status: string) {
    this.accounts.push({
      name: name,
      status: status
    });
    this.loggingService.logOnConsole(name);
  }

  onStatusChanged(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingService.logOnConsole(newStatus);
  }
}
