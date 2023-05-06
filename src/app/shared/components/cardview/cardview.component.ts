import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DatashearService } from '../../services/datashear.service';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})

export class CardviewComponent implements OnInit, OnDestroy {


  @Input() dataChild: DataArray[] = [];

  filter: string = '';
  subs:any;

  colorsbord: ColorInt = {
    red: "--primary-card:#fd0000;     --background-card:#ff00008a;",
    yellow: "--primary-card:#b4b400;     --background-card:#ffff009c;",
    green: "--primary-card:#00b400;     --background-card:#00ff00bf;",
    blue: "--primary-card:#0000ff;     --background-card:#0000ff8a;",
    violet: "--primary-card:#9400D3;     --background-card:#9400D38a; ",
    orange: "--primary-card:#e99900;     --background-card:#ffa5008a;",
  };

  onclick() {
    console.log("Working");
    // this.setRandomColor(this.colors,this.lastcolor);
  }

  applyColor(color: string) {
    return this.colorsbord[color];
  }

  constructor(private dataShare: DatashearService) { };


  ngOnInit(): void {
    this.subs = this.dataShare.data$.subscribe((data)=>{
      this.filter = data;
      console.log(this.filter);
    })
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}



interface ColorInt {
  [key: string]: string;
}

interface DataArray {
  name: string,
  username: string,
  para: string,
  color: string
}
