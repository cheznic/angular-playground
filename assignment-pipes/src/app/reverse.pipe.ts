import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!(value.constructor === String)) {
      return value;
    }
    let reversed = value.split("").reverse().join("");
    return reversed;
  }
}
