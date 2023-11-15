import { Pipe, PipeTransform } from '@angular/core';

interface Stats {
  [key: string]: string;
}
const stats: Stats = {
  hp: 'HP',
  attack: 'ATK',
  defense: 'DEF',
  'special-attack': 'SATK',
  'special-defense': 'SDEF',
  speed: 'SPD',
};

@Pipe({
  name: 'convertStatsToUpperCase',
})
export class ConvertStatsToUpperCasePipe implements PipeTransform {
  transform(value: string): string {
    return stats[`${value}`];
  }
}
