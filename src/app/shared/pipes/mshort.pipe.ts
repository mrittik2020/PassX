import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mshort'
})
export class MshortPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
