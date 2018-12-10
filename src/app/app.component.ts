import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageSelected = 'page2';
  serverElements = [{ type: 'server', name: 'test name', content: 'test content' }];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onFirstElementChange() {
    this.serverElements[0].name = 'Changed!';
  }

  destroyFirstComponent() {
    this.serverElements.splice(0, 1);
  }

  pageChange(page: string) {
    this.pageSelected = page;
  }
}
