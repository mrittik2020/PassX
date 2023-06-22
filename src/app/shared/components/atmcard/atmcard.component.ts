import { AtminfoComponent } from './../atminfo/atminfo.component';
import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { DatashearService } from '../../services/datashear.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-atmcard',
  templateUrl: './atmcard.component.html',
  styleUrls: ['./atmcard.component.css']
})
export class AtmcardComponent implements OnInit, OnDestroy {
  @Input() dataGet: DataType[] = [];

  filter: string = '';
  ddf: any;
  element = (<HTMLElement>this.elem.nativeElement);


  onEnter(num: number) {
    const actfont = this.element.querySelector('.front' + num) as HTMLElement;
    const actback = this.element.querySelector('.back' + num) as HTMLElement;
    

    actfont.classList.toggle('active');
    actback.classList.toggle('active');
    // console.log(this.dataGet);
  }

  onLeave(num: number) {
    const actfont = this.element.querySelector('.front' + num) as HTMLElement;
    const actback = this.element.querySelector('.back' + num) as HTMLElement;

    actfont.classList.remove('active');
    actback.classList.remove('active');
  }

  onShow(num: number) {
    const mat_icons = this.element.querySelectorAll('.mat' + num) as NodeListOf<HTMLElement>;
    mat_icons.forEach(icons => {
      icons.style.cssText = "opacity: 1";
    })
  }
  onHide(num: number) {
    const mat_icons = this.element.querySelectorAll('.mat' + num) as NodeListOf<HTMLElement>;
    mat_icons.forEach(icons => {
      icons.style.cssText = "opacity: 0";
    })
  }

  
  openFromDialog(): void {
    const dialogRef = this.dialog.open(AtminfoComponent, {
      width: '50%',
      data: { type: 'Form' }
    });
  }

  openViewDialog(cardNo:number,name:string,expDate:string,cvv:number): void {
    const dialogRef = this.dialog.open(AtminfoComponent, {
      width: '45%',
      data: { type: 'View', cno:cardNo, cname:name, exp: expDate, cvv: cvv}
    });
  }

  constructor(private elem: ElementRef, private dataShare: DatashearService, private dialog: MatDialog) { }



  ngOnInit(): void {
    this.ddf = this.dataShare.data$.subscribe((data) => {
      this.filter = data;
    });
  }

  ngOnDestroy(): void {
    this.ddf.unsubscribe();
  }

}

interface DataType {
  id: number;
  cardNumber: number;
  name: string;
  exp_Date: string;
  cvv: number;
}

