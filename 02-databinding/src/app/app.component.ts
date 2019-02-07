import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Testserver1', content: 'Random content for test 1' },
    { type: 'server', name: 'Testserver2', content: 'Random content for test 2' },
    { type: 'blueprint', name: 'Testblueprint', content: 'More random content for test' }
  ];

  onServerAdded(serverData: { name: string, content: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(blueprintData: { name: string, content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.name,
      content: blueprintData.content
    });
  }
}
