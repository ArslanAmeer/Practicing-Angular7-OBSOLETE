import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
  // --- We have Declair this Service Provider globally in AppModule.ts file
  // providers: [AccountsService]
})
export class PlaygroundComponent implements OnInit {
  sectionSelected = 'section3';
  numbers = [1, 2, 3, 4, 5, 6];
  even = [2, 4, 6];
  odd = [1, 3, 5];
  isEven = false;
  value = 10;
  // Account & New Account logics (Service 7 dependency Injection Topic)
  accounts: { name: string; status: string }[] = [];
  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

  onSectionClick(section: string) {
    this.sectionSelected = section;
  }
}
