import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertChartComponent } from './dessert-chart.component';

describe('DessertChartComponent', () => {
  let component: DessertChartComponent;
  let fixture: ComponentFixture<DessertChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DessertChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DessertChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
