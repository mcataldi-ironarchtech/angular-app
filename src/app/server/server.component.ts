import { Component } from '@angular/core';

// This is the way to have nested components
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }    
    `]
})
export class ServerComponent {
    serverId: number = 10; // typing not necessary
    serverStatus: string = 'offline';
    displayDetails: boolean = false;
    timestampLog = [];
    detailsText = this.displayDetails ? 'Hide Details' : 'Display Details';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    toggleDisplayDetails = () => {
        this.displayDetails = !this.displayDetails;
        this.timestampLog.push(new Date());
        console.log(this.timestampLog);
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
    
    getServerStatus = () => this.serverStatus;
}