import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../card';
import {CardProviver} from '../card-proviver';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() id: string;
  card: Card;

  constructor() {
  }

  ngOnInit() {
    var provider = new CardProviver();
    this.card = provider.getCards()[this.id];
  }

}
