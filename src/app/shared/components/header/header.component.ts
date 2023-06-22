import { DatashearService } from './../../services/datashear.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  protected filterValue: string = '';

  @Input() status: any;

  items = [
    {
      link: '/login',
      name: "Log In"
    },
    {
      link: '/login',
      name: "Log Out"
    },
    {
      link: '/signup',
      name: "Sign Up"
    },
    {
      link: '/home',
      name: "Dashboard"
    }
  ];

  onDataChange() {
    this.dataShare.setSharedData(this.filterValue);
  }

  constructor(private dataShare: DatashearService) { 
    this.dataShare.data$.subscribe ((data)=>{
      this.filterValue=data;
    });
  };

}
