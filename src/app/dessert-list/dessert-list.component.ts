import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'dessert-list',
  templateUrl: './dessert-list.component.html',
  styleUrls: ['./dessert-list.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0}),
        animate(1000)
      ]),
      transition('* => void', [
        animate(300, style({opacity: 0, height: '0px', margin: '0px'}))
      ])
    ])
  ]
})

export class DessertListComponent implements OnInit {

  constructor(private _store: StoreService) { }

  itemList = [
    {
      name: "Chocolate cake",
      amount: 3,
      url: ""
    },
    {
      name: "Cheese cake",
      amount: 6,
      url: ""
    },
    {
      name: "Frozen yogurt",
      amount: 1,
      url: ""
    },
  ]
  isLoaded = false;

  ngOnInit(): void {
    this._store.currentDessertList.subscribe(list => {
      this.itemList = list;
    })
  }

}
