import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-priest',
  templateUrl: './priest.component.html',
  styleUrls: ['./priest.component.css']
})
export class PriestComponent implements OnInit {
  spellIds = [1,2,3,4,5,6,7,8,9,10,11,12,13]
  constructor() { }

  ngOnInit() {
  }

}
