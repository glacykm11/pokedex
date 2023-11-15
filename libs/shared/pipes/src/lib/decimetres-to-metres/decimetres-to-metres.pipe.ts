import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimetresToMetres',
})
export class DecimetresToMetresPipe implements PipeTransform {
  transform(value: number): string {
    const resultInMetres = value / 10;

    return `${resultInMetres.toString()} m`;
  }
}
