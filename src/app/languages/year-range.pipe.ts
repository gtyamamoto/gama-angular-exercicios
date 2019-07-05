import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearRange'
})
export class YearRangePipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    return value>2000 ? 'Após anos 2000' : 'Antes dos anos 2000';
  }

}
