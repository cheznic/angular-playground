import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
// it's best practice to implement the interfaces for all framework methods
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit {

  // using input with an alias
  @Input('server') serverElement: { type: string, name: string, content: string };

  constructor() {
    //console.log('constructor called');
  }

  ngOnInit() {
    //console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy Called');
  }

  ngDoCheck() {
    // console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    // console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked called');
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked called');
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit called');

  }

}
