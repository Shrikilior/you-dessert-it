import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dessert-button',
  templateUrl: './dessert-button.component.html',
  styleUrls: ['./dessert-button.component.css']
})
export class DessertButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  test() {
    console.log("Button pressed");
  }

}
