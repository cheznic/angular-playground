import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Emulated, None, Native
})
export class CockpitComponent implements OnInit {

  @Output('serverCreatedEvent') serverCreatedEmitter = new EventEmitter<ItemCreatedEvent>();
  @Output('blueprintCreatedEvent') blueprintCreatedEmitter = new EventEmitter<ItemCreatedEvent>();
  newServerName: string;
  newServerContent: string;
  allowAdd: boolean;

  constructor() {
    this.initControls();
  }

  private initControls() {
    this.newServerName = '';
    this.newServerContent = '';
    this.allowAdd = false;
  }

  ngOnInit() {
  }

  onAddServer() {
    let event = new ItemCreatedEvent(this.newServerName, this.newServerContent);
    this.serverCreatedEmitter.emit(event);
    this.initControls();
  }

  onAddBlueprint() {
    let event = new ItemCreatedEvent(this.newServerName, this.newServerContent);
    this.blueprintCreatedEmitter.emit(event);
    this.initControls();
  }

  onUpdate(event: Event) {
    let nameLength = this.newServerName.trim().length;
    let contentLength = this.newServerContent.trim().length;
    this.allowAdd = (contentLength > 2 && nameLength > 2) ? true : false;
  }
}

class ItemCreatedEvent {
  name: string;
  content: string;
  constructor(name: string, content: string) {
    this.content = content;
    this.name = name;
  }
}
