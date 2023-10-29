import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backgroundColor',
})
export class BackgroundColorPipe implements PipeTransform {
  transform(value: string): string {
    return `var(--pokemon-type-${value.toLowerCase()})`;
  }
}
