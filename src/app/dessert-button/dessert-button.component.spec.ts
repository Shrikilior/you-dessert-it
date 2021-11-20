import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertButtonComponent } from './dessert-button.component';

describe('DessertButtonComponent', () => {
  let component: DessertButtonComponent;
  let fixture: ComponentFixture<DessertButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DessertButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DessertButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
