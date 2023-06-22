import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { DatashearService } from '../../services/datashear.service';
import { MatDialog } from '@angular/material/dialog';
import { BankinfoComponent } from '../bankinfo/bankinfo.component';

@Component({
  selector: 'app-bankcard',
  templateUrl: './bankcard.component.html',
  styleUrls: ['./bankcard.component.css']
})
export class BankcardComponent implements OnInit, OnDestroy {

  @Input() dataChild: DataArray[] = [];


  filter: string = '';
  ddf: any;


  openFromDialog(): void {
    const dialogRef = this.dialog.open(BankinfoComponent, {
      width: '50%',
      data: { type: 'Form' }
    });
  }

  openViewDialog(id: number, name: string,rmn:string, bname: string, brname: string, acc_typ: string, acc_num: string, ifsc: string, mirc: string, note: string): void {
    const dialogRef = this.dialog.open(BankinfoComponent, {
      width: '45%',
      data: { type: 'View', bid: id, name: name,rmn:rmn, bname: bname, brname: brname, acc_typ: acc_typ, acc_num: acc_num, ifsc: ifsc, mirc: mirc, note: note },
    });
  }




  constructor(private dataShare: DatashearService, private dialog: MatDialog) { }



  ngOnInit(): void {
    // this.sortdata = this.dataChild.map(data => {
    //   return {
    //     name: data.name,
    //     acc_number: data.acc_number,
    //   };
    // });


    this.ddf = this.dataShare.data$.subscribe((data) => {
      this.filter = data;
    });
    // console.log(this.dataChild);
  }

  ngOnDestroy(): void {
    this.ddf.unsubscribe();
  }
}



interface DataArray {
  id: number,
  name: string,
  bank_name: string,
  branch_name: string,
  acc_type: string,
  acc_number: string,
  ifsc_code: string,
  mirc_code: string,
  note: string,
  rmn: string,
}

// interface SortArray {
//   name: string,
//   acc_number: string
// }