import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'font'
})
export class FontPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
