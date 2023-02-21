import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})

export class CardviewComponent implements OnInit {


  @Input() dataChild:DataArray[]=[];

  // protected cssM = "";

  // protected name=''
  // protected username=''
  // protected para=''
  // protected color=''

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

  applyColor(color:string) { 
    return this.colorsbord[color];
  }



  ngOnInit(): void {
    // this.name=this.dataChild[0]['name'];
    // this.username=this.dataChild[0]['username'];
    // this.para=this.dataChild[0]['para'];
    // this.color=this.dataChild[0]['color'];
    // this.cssM = this.colorsbord[this.color];

    console.log(this.dataChild)
    // console.log(this.name,this.username,this.para,this.color);
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
