import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // Common data list
  private dessertListSource: BehaviorSubject<any> = new BehaviorSubject(Object); 
  currentDessertList = this.dessertListSource.asObservable(); // components will subscribe to "current..."

  constructor() { }

  updateList(list: Array<any>) {
    this.dessertListSource.next(list);
  }

}
