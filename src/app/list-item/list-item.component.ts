import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor(private _store: StoreService) { }

  @Input() itemName = '';
  @Input() amount = 0;
  @Input() index = 0;

  dessertList: any;

  ngOnInit(): void {
    this._store.currentDessertList.subscribe(list => {
      this.dessertList = list;
    });
  }

  deleteDessert() {
    this.dessertList.splice(this.index, 1);
    this._store.updateList(this.dessertList);
  }

}
