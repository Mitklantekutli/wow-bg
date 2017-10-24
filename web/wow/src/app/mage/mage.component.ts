import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mage',
  templateUrl: './mage.component.html',
  styleUrls: ['./mage.component.css']
})
export class MageComponent implements OnInit {

  spellIds = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  constructor() { }

  ngOnInit() {
  }

}
