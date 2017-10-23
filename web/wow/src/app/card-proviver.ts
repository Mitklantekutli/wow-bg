import {Card} from './card';

export class CardProviver {
  getCards() {
    var cards = [];

    var c1 = new Card();
    c1.id=0;
    c1.tags = [];
    c1.tags.push('spell');
    c1.tags.push('rogue');
    c1.tags.push('level-1');
    c1.url = 'assets\\images\\base\\spells\\rogue\\spell\\level-1\\file-011_1_1.jpg';
    c1.nameRu = 'слепота';
    c1.nameEn = 'blind';

    var c2 = new Card();
    c2.id=1;
    c2.tags = [];
    c2.tags.push('spell');
    c2.tags.push('rogue');
    c2.tags.push('level-1');
    c2.url = 'assets\\images\\base\\spells\\rogue\\spell\\level-1\\file-011_1_2.jpg';
    c2.nameRu = 'ложный выпад';
    c2.nameEn = 'fient';

    var c3 = new Card();
    c3.id=2;
    c3.tags = [];
    c3.tags.push('spell');
    c3.tags.push('rogue');
    c3.tags.push('level-1');
    c3.url = 'assets\\images\\base\\spells\\rogue\\spell\\level-1\\file-011_1_3.jpg';
    c3.nameRu = 'подлый удар';
    c3.nameEn = 'gouge';

    cards.push(c1);
    cards.push(c2);
    cards.push(c3);

    return cards;
  }
}
