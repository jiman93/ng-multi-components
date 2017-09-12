import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // initializing serverElements model with a testing data
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];

  // onServerAdded method logics triggered when Add Server button clicked
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  // onBlueprintAdded method logics triggered when Add Server Blueprint button clicked
  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Server Name has Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
