import { Pipe, PipeTransform } from '@angular/core';


interface DataItem {
  id: number;
  name: string;
  username: string;
  dob: Date;
  last_seen: Date;
}


@Pipe({
  name: 'mfilter'
})
export class MfilterPipe implements PipeTransform {

  transform(items: DataItem[], searchTerm: string): DataItem[] {
    if (!items || !searchTerm || searchTerm.length === 0) {
      return items;
    }

    return items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.dob.toString().includes(searchTerm) ||
      item.last_seen.toString().includes(searchTerm)
    );
  }

}
