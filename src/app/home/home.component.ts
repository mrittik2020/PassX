import { DatashearService } from './../shared/services/datashear.service';
import { NavigationEnd, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy { 

  btnS = [false, true, false, false, true];
  dd: any;
  
  constructor(private rout: Router, private datashear:DatashearService) { }


  ngOnInit() {
    this.dd=this.rout.events.pipe(filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.datashear.setSharedData('');
      // console.log("Navigation Working");
    });
  }

  ngOnDestroy() {
    this.datashear.setSharedData('');
    this.dd.unsubscribe()
    // console.log("Navigation");
  }

}
