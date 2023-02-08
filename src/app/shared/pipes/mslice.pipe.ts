import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mslice'
})
export class MslicePipe implements PipeTransform {

  transform(data: any[], start: number, item_per_page: number,) {
    const startIndex = (start - 1) * item_per_page;
    const endIndex = startIndex + item_per_page;

    return data.slice(startIndex, endIndex);
  }

}
