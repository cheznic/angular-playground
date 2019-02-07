import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'filter',
   pure: false
})
export class FilterPipe implements PipeTransform {
   transform(value: any, filterString?: any, propName?: string) {
      if (value.length === 0 || filterString === '') {
         return value;
      }
      const resultArray = [];
      for (const item of value) {
         if (item[propName].substr(0, filterString.length) === filterString) {
            resultArray.push(item);
         }
      }
      return resultArray;
   }
}