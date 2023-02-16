import { DatashearService } from './../shared/services/datashear.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  btnS=[false,true,false,false,true];
  navS=1;
  setfilter: string='';

  constructor (public ShearDd: DatashearService){}

  onRouterChange(){
    this.ShearDd.setSharedData(this.setfilter);
  }


}
