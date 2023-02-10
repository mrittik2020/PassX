import { Component } from '@angular/core';

import { faLock, faBars, faNoteSticky, faCreditCard, faBuildingColumns, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nevbar',
  templateUrl: './nevbar.component.html',
  styleUrls: ['./nevbar.component.css']
})
export class NevbarComponent {

    
    
  status = 1;



  lock = faLock;
  dashb = faBars;
  note = faNoteSticky;
  card = faCreditCard;
  bank = faBuildingColumns;
  logout = faRightFromBracket;


  items = [
    {
      link:"/home/dashboard",
      icon: this.dashb,
      name:"DashBord"
    },
    { 
      link:"/home/passwords",
      icon: this.lock,
      name:"Passwords"
    },
    { 
      link:"/home/notes",
      icon: this.note,
      name:"Notes"
    },
    { 
      link:"/home/cards",
      icon: this.card,
      name:"Payment Cards"
    },
    { 
      link:"/home/banks",
      icon: this.bank,
      name:"Bank Accounts"
    },
    { 
      link:"/logout",
      icon: this.logout,
      name:"LogOut"
    }
  ];


}
