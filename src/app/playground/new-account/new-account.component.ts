import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  // --- We have Declair this Service Provider globally in AppModule.ts file
  // providers: [LoggingService] // we will not add AccountsService in provider beacause we need same instance everywhere
})
export class NewAccountComponent implements OnInit {
  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('status') statusInput: ElementRef;
  // @Output() newAccountData = new EventEmitter<{ name: string; status: string }>();
  // ----
  // -- commenting out above OUTPUT decorator because we are injecting service for that specific task
  constructor(private logg: LoggingService, private accountsService: AccountsService) {
    accountsService.accountUpdate.subscribe((status: string) => alert('New Status: ' + status));
  }

  ngOnInit() {}

  addAccount() {
    // this.newAccountData.emit({
    //   name: this.nameInput.nativeElement.value,
    //   status: this.statusInput.nativeElement.value
    // });
    // ----
    // -- commenting out above Event Emitter because we are injecting service for that specific task
    this.accountsService.onNewAccountAdded(
      this.nameInput.nativeElement.value,
      this.statusInput.nativeElement.value
    );
    // this.logg.logOnConsole(
    //   `New Account: ${this.nameInput.nativeElement.value} : ${this.statusInput.nativeElement.value}`
    // );
  }
}
