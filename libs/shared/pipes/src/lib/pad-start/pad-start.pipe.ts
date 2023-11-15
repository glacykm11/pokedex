import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padStart',
})
export class PadStartPipe implements PipeTransform {
  transform(value: number | string): string {
    const valueWithPadStart =
      value != undefined ? value.toString().padStart(3, '0') : '';

    return valueWithPadStart;
  }
}
