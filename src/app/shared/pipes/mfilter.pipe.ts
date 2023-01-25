import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mfilter'
})
export class MfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
