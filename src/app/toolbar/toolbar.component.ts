import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDessertDialogComponent } from '../add-dessert-dialog/add-dessert-dialog.component';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog() {
    let dialogDef = {
      width: '500px',
      data: {
        name: "", 
        value: "",
        text: "",
        altText: ""
      }
    };
    this.dialog.open(AddDessertDialogComponent);
  }

}
