import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'font'
})
export class FontPipe implements PipeTransform {

  transform(value: any): unknown {

    return value.substr(0, 10)+' ,...';
  }

}
