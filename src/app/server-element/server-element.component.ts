import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
  // this is Custom type... -- it is actually a type defination so that element property (typr can onnly have these elements)
  // whereas input is custom property binding decorater
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: { type: string; name: string; content: string };
  constructor() {}

  ngOnInit() {}
}
