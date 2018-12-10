import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  @Output() changedStatus = new EventEmitter<{ id: number; newStatus: string }>();
  constructor(private logging: LoggingService) {}

  ngOnInit() {}

  changeTo(value: string) {
    this.changedStatus.emit({
      id: this.id,
      newStatus: value
    });
    this.logging.logOnConsole(value);
  }
}
