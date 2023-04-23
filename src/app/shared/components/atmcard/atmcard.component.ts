import { Component, ElementRef, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-atmcard',
  templateUrl: './atmcard.component.html',
  styleUrls: ['./atmcard.component.css']
})
export class AtmcardComponent {
  @Input() dataGet: DataType[] = [];

  cardNumber: string = "1234567890124569";

  element = (<HTMLElement>this.elem.nativeElement);


  onEnter(num: number) {
    const actfont = this.element.querySelector('.front' + num) as HTMLElement;
    const actback = this.element.querySelector('.back' + num) as HTMLElement;
    // const mat=

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

  constructor(private elem: ElementRef , ) { }

}

interface DataType {
  id: number;
  cardNumber: number;
  name: string;
  exp_Date: string;
  cvv: number;
}
