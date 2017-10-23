import { Component } from '@angular/core';
import {CardProviver} from './card-proviver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = [0,1,2]
  constructor(){
    var provider = new CardProviver();
    console.log(this.cards);
  }
}
