import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mslice'
})
export class MslicePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
