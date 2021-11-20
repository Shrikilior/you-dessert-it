import { Component, ElementRef, OnInit } from '@angular/core';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'app-add-dessert-dialog',
  templateUrl: './add-dessert-dialog.component.html',
  styleUrls: ['./add-dessert-dialog.component.css']
})
export class AddDessertDialogComponent implements OnInit {

  constructor(private _store: StoreService, private elRef: ElementRef) { }

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

    // adjusting the dialog box background color
    this.elRef.nativeElement.parentElement.style.backgroundColor = '#f8e9e0';
  }

  submit(f: any) {

    // If the dessert already exists, update amount. Else - add new entry
    this.dessertList.forEach((item, i) => {
      if (item.name.toLowerCase() == this.newDessert.name.toLowerCase()) {
        this.dessertList[i].amount = this.dessertList[i].amount + this.newDessert.amount;
        console.log("new amount: ", this.dessertList[i].amount);
        this.isDuplicate = true;
      }
    });
    if (!this.isDuplicate) {
      this.dessertList.push(this.newDessert);
    }
    this.isDuplicate = false;
    this._store.updateList(this.dessertList);
  }
}
