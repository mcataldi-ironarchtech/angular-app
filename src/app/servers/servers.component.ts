import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: `./servers.component.html`,  // can use backticks
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // This is where all the business logic / server-side code is written
  _isDisabled = false;
  _serverCreationStatus = `No server was created.`;
  _serverName = '';

  constructor() { 
    setTimeout(() => {
      this.setIsDisabled(true);
    }, 2000)
  }

  setIsDisabled = (disable) => {
    this._isDisabled = disable;
    console.log('In the setIsDisabled method.', disable)
  }

  getIsDisabled = () => this._isDisabled;

  onCreateServer = () => {
    this._serverCreationStatus = `Server was created.  The name is '${ this._serverName}.`;
  }

  onUpdateServerName = (value: string) => {
    // console.log(value);
    // this._serverName = (<HTMLInputElement>event.target).value;
    this._serverName = value;
  }

  ngOnInit(): void {
  }

}
