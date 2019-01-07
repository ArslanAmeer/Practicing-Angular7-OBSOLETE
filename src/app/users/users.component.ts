import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [{ id: 1, name: 'Arslan' }, { id: 2, name: 'Usman' }, { id: 3, name: 'Ali' }];

  constructor() {}

  ngOnInit() {}
}
