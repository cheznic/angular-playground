import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length === 0) {
      return value;
    }
    if (args.length > 0 && !(args === 'asc' || args === 'desc')){
      return value;
    }
    const resultArray = value.sort(function (a, b) {
      if (args == 'asc') {
        return (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
      }
      else {
        return (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
      }
    })
    return resultArray;
  }
}
