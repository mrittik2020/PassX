import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bankpipe'
})
export class BankpipePipe implements PipeTransform {

  transform(items: DataItem[], searchTerm: string): DataItem[] {
    if (!items || !searchTerm || searchTerm.length === 0) {
      return items;
    }
    var lowerSearchTerm: string;
    try {
      lowerSearchTerm = searchTerm.toLowerCase();
    } catch (error) {
      lowerSearchTerm = searchTerm;
    }

    // Filter the items based on the search term
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(lowerSearchTerm) ||
      item.acc_number.toString().toLowerCase().includes(lowerSearchTerm)
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
  if (item.acc_number.toString().toLowerCase().includes(searchTerm)) {
    matchCount += 2;
  }
  return matchCount;
}

interface DataItem {
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