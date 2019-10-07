import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myTitle = 'angular-webcomponent';
  open = false;

  toggle(event) {
    console.log(event);
    this.open = event.detail;
  }
}
