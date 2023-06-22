import { Pipe, PipeTransform } from '@angular/core';


interface DataItem {
  id:number,
  name: string,
  username: string,
  dob: Date,
  last_seen: Date
}


@Pipe({
  name: 'passpipe'
})


export class PasspipePipe implements PipeTransform {

  transform(items: DataItem[], searchTerm: string): DataItem[] {
    if (!items || !searchTerm || searchTerm.length === 0) {
      return items;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();

    // Filter the items based on the search term
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(lowerSearchTerm) ||
      item.username.toLowerCase().includes(lowerSearchTerm)||
      item.dob.toString().toLowerCase().includes(lowerSearchTerm)
    );

    // Sort the filtered items based on the matching pattern
    filteredItems.sort((a, b) => {
      const aMatchCount = getMatchCount(a, lowerSearchTerm);
      const bMatchCount = getMatchCount(b, lowerSearchTerm);
      return bMatchCount - aMatchCount;
    });

    return filteredItems;
  }

}

function getMatchCount(item: DataItem, searchTerm: string): number {
  let matchCount = 0;
  if (item.name.toLowerCase().includes(searchTerm)) {
    matchCount += 3;
  }
  if (item.username.toLowerCase().includes(searchTerm)) {
    matchCount += 2;
  }
  if (item.dob.toString().toLowerCase().includes(searchTerm)) {
    matchCount += 1;
  }
  return matchCount;
}
