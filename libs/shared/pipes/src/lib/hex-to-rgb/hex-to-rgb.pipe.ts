import { Pipe, PipeTransform } from '@angular/core';

interface RgbColors {
  [key: string]: string;
}
const rgbColor: RgbColors = {
  grass: '116, 203, 72',
  poison: '164, 62, 158',
  fire: '245, 125, 49',
  water: '100, 147, 235',
  bug: '167, 183, 35',
  eletric: '249, 207, 48',
  ghost: '112, 85, 155',
  normal: '170, 166, 127',
  psyhic: '251, 85, 132',
  steel: '183, 185, 208',
};

@Pipe({
  name: 'hexToRgb',
})
export class HexToRgbPipe implements PipeTransform {
  transform(value: string): string {
    return `rgb(${rgbColor[value]}, 0.2)`;
  }
}
