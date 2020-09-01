import { Component } from '@angular/core';

// Component Decorator
@Component({
  selector: 'app-root',
  // selector: '[app-root]' // this is selected by attribute <div app-root>
  // selector: '.app-root' // this is selected by class
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
}

// app-<<whatever>> is convention
// functions as a css selector
// [attribute]