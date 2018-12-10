import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('status') statusInput: ElementRef;
  @Output() newAccountData = new EventEmitter<{ name: string; status: string }>();
  constructor() {}

  ngOnInit() {}

  addAccount() {
    this.newAccountData.emit({
      name: this.nameInput.nativeElement.value,
      status: this.statusInput.nativeElement.value
    });
  }
}
