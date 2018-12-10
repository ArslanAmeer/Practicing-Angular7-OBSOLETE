import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  // --- We have Declair this Service Provider globally in AppModule.ts file
  // providers: [LoggingService] // we will not add AccountsService in provider beacause we need same instance everywhere
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  // @Output() changedStatus = new EventEmitter<{ id: number; newStatus: string }>();
  // ----
  // -- commenting out above OUTPUT decorator because we are injecting service for that specific task
  constructor(private logging: LoggingService, private accountsservice: AccountsService) {}

  ngOnInit() {}

  changeTo(value: string) {
    // this.changedStatus.emit({
    //   id: this.id,
    //   newStatus: value
    // });
    // ----
    // -- commenting out above Event Emiter because we are injecting service for that specific task
    this.accountsservice.onStatusChanged(this.id, value);
    // this.logging.logOnConsole(value);
  }
}
