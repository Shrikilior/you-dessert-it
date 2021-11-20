import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDessertBarComponent } from './add-dessert-bar.component';

describe('AddDessertBarComponent', () => {
  let component: AddDessertBarComponent;
  let fixture: ComponentFixture<AddDessertBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDessertBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDessertBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
