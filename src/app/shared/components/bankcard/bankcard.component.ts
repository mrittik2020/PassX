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


  filter:string = '';
  ddf: any;
  sortdata: SortArray[] = [];


  ngOnInit(): void {

    this.sortdata = this.dataChild.map(data => {
      return {
        name: data.name,
        acc_number: data.acc_number,
      };
    });

    this.ddf = this.dataShare.data$.subscribe((data) => {
      this.filter = data;
    });
  }

  ngOnDestroy(): void {
      this.ddf.unsubscribe();
  }

  constructor( private dataShare: DatashearService, private dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(BankinfoComponent, {
      width: '50%',
      // data: { message: 'This is a Material Dialog!' }
    });
  }

}



interface DataArray {
  id: number,
  name: string,
  bank_name: string,
  branch_name: string,
  acc_type: string,
  acc_number: string,
  ifsc_code: string
}

interface SortArray {
  name: string,
  acc_number: string
}