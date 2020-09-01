import { Component } from '@angular/core';

// This is the way to have nested components
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10; // typing not necessisary
    serverStatus: string = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
}