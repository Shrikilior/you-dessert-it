import { Component, OnInit } from '@angular/core';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

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

  ngOnInit(): void {
        // "uploading" initial list to the common service ("store")
        this._store.updateList(this.itemList);
  }

}
