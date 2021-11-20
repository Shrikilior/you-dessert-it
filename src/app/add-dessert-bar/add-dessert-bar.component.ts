import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'add-dessert-bar',
  templateUrl: './add-dessert-bar.component.html',
  styleUrls: ['./add-dessert-bar.component.css']
})
export class AddDessertBarComponent implements OnInit {

  constructor(private _store: StoreService) { }

  newDessert = {
    name: "",
    amount: ""
  };
  dessertList: any[] = new Array;
  isDuplicate = false;

  ngOnInit(): void {
    this._store.currentDessertList.subscribe(list => {
      this.dessertList = list;
    });
  }

  async submit(f: any) {

    // If the dessert already exists, update amount. Else - add new entry
    this.dessertList.forEach((item, i) => {
      if (item.name.toLowerCase() == f.value.name.toLowerCase()) {
        this.dessertList[i].amount = this.dessertList[i].amount + f.value.amount;
        this.isDuplicate = true;
      }
    });
    if (!this.isDuplicate) {
      this.dessertList.push(f.value);
    }
    this.isDuplicate = false;
    this._store.updateList(this.dessertList);
    this.newDessert.name = "";
    this.newDessert.amount = "";

  }

}
