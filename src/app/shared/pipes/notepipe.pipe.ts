import { Pipe, PipeTransform } from '@angular/core';


interface DataItem {
  name: string,
  username: string,
  para: string,
  color: string
}


@Pipe({
  name: 'notepipe'
})


export class NotepipePipe implements PipeTransform {


  transform(items: DataItem[], searchTerm: string): DataItem[] {
    if (!items || !searchTerm || searchTerm.length === 0) {
      return items;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();

    // Filter the items based on the search term
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(lowerSearchTerm) ||
      item.username.toLowerCase().includes(lowerSearchTerm)
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
  return matchCount;
}