import { Component } from '@angular/core';
import {CardProviver} from './card-proviver';
import {Card} from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  card1: Card;
  card2: Card;
  card3: Card;
  provider: CardProviver;
  constructor(){
    this.provider = new CardProviver();
    var cards = this.provider.getCards();
    this.card1 = cards[0];
    this.card2 = cards[1];
    this.card3 = cards[2];
  }
}
