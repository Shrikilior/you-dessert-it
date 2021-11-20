import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDessertDialogComponent } from './add-dessert-dialog.component';

describe('AddDessertDialogComponent', () => {
  let component: AddDessertDialogComponent;
  let fixture: ComponentFixture<AddDessertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDessertDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDessertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
