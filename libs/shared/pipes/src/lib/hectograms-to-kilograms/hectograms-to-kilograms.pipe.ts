import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hectogramsToKilograms',
})
export class HectogramsToKilogramsPipe implements PipeTransform {
  transform(value: number): string {
    const resultInKilograms = value / 10;

    return `${resultInKilograms.toString()} kg`;
  }
}
