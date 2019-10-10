import { Component } from '@angular/core';
import './components/web-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  moods: Array<string> = ['awesome', 'formidable', 'great', 'terrifying', 'wonderful', 'astonishing', 'breathtaking'];
  mood: string;
  myTitle = 'angular-webcomponent';
  open = false;

  constructor() {
    this.randomMood();
  }

  toggle(event) {
    this.open = event.detail;
  }

  randomMood() {
    const index = Math.floor(Math.random() * this.moods.length);
    this.mood = this.moods[index];
  }

}
