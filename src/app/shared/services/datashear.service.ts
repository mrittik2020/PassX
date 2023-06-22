import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashearService {


  private sharedData = new BehaviorSubject<string>('');;
  public data$ = this.sharedData.asObservable();

  setSharedData(data: any) {
    this.sharedData.next(data);
  }


  constructor() { }
}
