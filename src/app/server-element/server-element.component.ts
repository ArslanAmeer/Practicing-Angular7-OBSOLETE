import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  // this is Custom type... -- it is actually a type defination so that element property type can only have these elements
  // - whereas @Input() is custom property binding decorater
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: { type: string; name: string; content: string };

  // We use this name property and bind it because every other component element is rendered through <ng-content>
  // - which is in app-component
  @Input() name: string;

  // getting data from html template through heading local reference
  @ViewChild('heading') header: ElementRef;

  // getting data of paragraph from Projected content written in app-component
  @ContentChild('contentParagraph') paragraphText: ElementRef;

  constructor() {
    console.log('constructor Called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngonInit Called!');

    // You CANNOT have the template content before view init
    console.log('Text Content: ' + this.header.nativeElement.textContent);

    // You CANNOT have content data from projected content before Content Init
    console.log('Paragraph Content: ' + this.paragraphText.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Called!');

    // You CAN have content data from projected content after Content Init
    console.log('Paragraph Content: ' + this.paragraphText.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Called!');

    // You can have the template content after view init
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Called!');
  }
}
