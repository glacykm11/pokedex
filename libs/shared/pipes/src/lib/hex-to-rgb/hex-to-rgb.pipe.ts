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
  electric: '249, 207, 48',
  ghost: '112, 85, 155',
  normal: '170, 166, 127',
  psyhic: '251, 85, 132',
  steel: '183, 185, 208',
  rock: '182, 158, 49',
  ground: '224, 192, 104',
  fairy: '224, 58, 131',
  fighting: '255, 80, 31',
  psychic: '248, 88, 136',
};

@Pipe({
  name: 'hexToRgb',
})
export class HexToRgbPipe implements PipeTransform {
  transform(value: string): string {
    return `rgb(${rgbColor[value]}, 0.2)`;
  }
}
