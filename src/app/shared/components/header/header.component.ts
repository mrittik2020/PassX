import { DatashearService } from './../../services/datashear.service';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

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

  constructor(private dataShare: DatashearService) { };



  onDataChange() {
    this.dataShare.setSharedData(this.filterValue);
    // console.log(this.filterValue);
  }
}
