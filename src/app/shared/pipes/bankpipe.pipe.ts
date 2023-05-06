import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bankpipe'
})
export class BankpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
