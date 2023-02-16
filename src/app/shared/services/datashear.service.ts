import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashearService {


  sharedData = new BehaviorSubject<string>('');;
  readonly dataSS = this.sharedData.asObservable();

  setSharedData(data: any) {
    this.sharedData.next(data);
  }


  constructor() { }
}
