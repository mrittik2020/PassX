import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  
  @Input() status:any;

  items=[
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

}
