import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'masking'
})
export class MaskingPipe implements PipeTransform {

  transform(cardNumber: string) {
    if (cardNumber != undefined || cardNumber != null) {
      // // mask the card number
      // const last4Digits = cardNumber.slice(-4);
      // const maskedDigits = '*'.repeat(cardNumber.length - 4);
      // const maskedCardNumber = maskedDigits + last4Digits;

      // add a whitespace after every 4th number
      const regex = /(.{4})/g;
      const cardNumberWithSpaces = cardNumber.match(regex)?.join(' ');

      // return cardNumberWithSpaces ?? maskedCardNumber;
      return cardNumberWithSpaces;

    }
    else {
      // return the original card number
      return cardNumber;
    }
  }
}
