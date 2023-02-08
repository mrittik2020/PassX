import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mshort'
})
export class MshortPipe implements PipeTransform {

  transform(data: any[], fild: String, type: String, order: Boolean) {
    var state = 1;
    if (order === true) {
      state = 1;
    }
    else state = -1;

    
    if (type === "Str") {
      return this.textSort(data, fild, state);
    }
    else if (type === "Num") {
      // console.log("Number Type");
      return this.numSort(data, fild, state);
    }
    else if (type === "Date") {
      // console.log("Date Type");
      return this.dateSort(data, fild, state);
    }
    return ["Data Type Is Not Valid"];
  }


  textSort(data: any[], fild: any, state: number) {
    var name = data.sort((a, b): any => {
      const aa = "" + a[fild] + "".toLowerCase();
      const bb = "" + b[fild] + "".toLowerCase();
      if (aa > bb) {
        return 1 * state;
      }
      else if (aa < bb) return -1 * state;
      else return 0
    });
    return name;
  }

  numSort(data: any[], fild: any, state: number) {
    var num = data.sort((a, b) => {
      if (a[fild] < b[fild]) return -1 * state;
      else if (a[fild] > b[fild]) return 1 * state;
      return 0
    });
    return num;
  }

  dateSort(data: any[], fild: any, state: number) {
    var date = data.sort((a, b) => {
      var dateA = new Date(a[fild]);
      var dateB = new Date(b[fild]);
      if (dateA < dateB) return -1 * state;
      else if (dateA > dateB) return 1 * state;
      return 0
    });
    return date;
  }
}
