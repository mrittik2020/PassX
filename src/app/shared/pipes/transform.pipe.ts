import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(data: Array<DataSheet>, fild: String, type: String, order: Boolean) {
    var state = 1;
    if (order === true) {
      state = 1;
    }
    else state = -1;

    if (type === "String") {
      return this.textSort(data, fild, state);
    }
    else if (type === "Number") {
      console.log("Number Type");
      return this.numSort(data, fild, state);
    }
    else if (type === "Date") {
      console.log("Date Type");
      return this.dateSort(data, fild, state);
    }
    return ["Data Type Is Not Valid"];
  }


  textSort(data: Array<any>, fild: any, state: Number) {
    var name = data.sort((a, b): any => {
      const aa = "" + a[fild] + "".toLowerCase();
      const bb = "" + b[fild] + "".toLowerCase();
      if (aa > bb) {
        return 1 * Number(state);
      }
      else if (aa < bb) return -1 * Number(state);
      else return 0
    });
    return name;
  }

  numSort(data: Array<any>, fild: any, state: Number) {
    var num = data.sort((a, b) => {
      if (a[fild] < b[fild]) return -1 * Number(state);
      else if (a[fild] > b[fild]) return 1 * Number(state);
      return 0
    });
    return num;
  }

  dateSort(data: Array<any>, fild: any, state: Number) {
    var date = data.sort((a, b) => {
      var dateA = new Date(a[fild]);
      var dateB = new Date(b[fild]);
      if (dateA < dateB) return -1 * Number(state);
      else if (dateA > dateB) return 1 * Number(state);
      return 0
    });
    return date;
  }

}

export interface DataSheet {
  id: Number;
  name: String;
  username: String;
  dob: String;
  last_seen: String;
}