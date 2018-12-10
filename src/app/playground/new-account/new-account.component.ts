import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('status') statusInput: ElementRef;
  @Output() newAccountData = new EventEmitter<{ name: string; status: string }>();
  constructor(private logg: LoggingService) {}

  ngOnInit() {}

  addAccount() {
    this.newAccountData.emit({
      name: this.nameInput.nativeElement.value,
      status: this.statusInput.nativeElement.value
    });
    this.logg.logOnConsole(
      `New Account: ${this.nameInput.nativeElement.value} : ${this.statusInput.nativeElement.value}`
    );
  }
}
