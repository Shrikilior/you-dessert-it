import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'dessert-chart',
  templateUrl: './dessert-chart.component.html',
  styleUrls: ['./dessert-chart.component.css']
})
export class DessertChartComponent implements OnInit, AfterViewInit {

  labels: any[] = new Array
  data: any[] = new Array

  @ViewChild('pieCanvas') private pieCanvas!: ElementRef;
  pieChart: any;

  constructor(private _store: StoreService) { }

  ngOnInit(): void {
    Chart.register(...registerables);
    this._store.currentDessertList.subscribe(list => {
      this.labels = [];
      this.data = [];
      for (let i = 0 ;  i< list.length; i++ ) {
        this.labels.push(list[i].name);
        this.data.push(list[i].amount);
      }
      this.pieChartBrowser();
    })
  }

  ngAfterViewInit() {
    // this.pieChartBrowser();
  }

  // Creating a promise so we can await the response from the _store
  // before we input the list parameters to the chart
  // need to edit the colors here, colors repeat when # of items exceed 6. 
  // Maybe try to have the colors consistenet for each dessert
  readList() {
    let promise = new Promise ((resolve, reject) => {
      this._store.currentDessertList.subscribe(list => {
        resolve(list);
      })
    });
    return promise;
  }

  async pieChartBrowser() {

    // holding until values are updated
    await this.readList();

    // resetting
    if (this.pieChart) this.pieChart.destroy();

    // Chart definitions
    
    this.pieChart = new Chart(this.pieCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.labels,
        datasets: [{
          backgroundColor: [
            '#cca364',
            '#a13b1d',
            '#f3dbd2',
            '#7d5643',
            '#f2c5bf',
            '#c2875b',
            '#ff7591',
          ],
          borderColor: '#7d5643',
          borderWidth: 3,
          data: this.data
        }]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'left',
            labels: {
              font: {
                family: "'Norican', cursive",
                size: 20
              }
            }
          }
        },
        responsive: true,
        cutout: '40%'
      }
    });
  }

}
/* Color palette

super light pink: #f8e9e0
light pink: #f3dbd2
dark pink: #f2c5bf
light brown: #cca364
dark brown: #7d5643
peru brown: #c2875b
grey: #6a7a8b
bordo: #a13b1d

*/