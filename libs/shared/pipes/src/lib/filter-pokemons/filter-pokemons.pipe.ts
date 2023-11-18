import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemons',
})
export class FilterPokemonsPipe implements PipeTransform {
  transform(pokemons: any, search: any): any {
    if (!pokemons) return [];
    if (!search) return pokemons;
    search = search.toLowerCase();

    return pokemons.filter((it: any) => {
      return it.name.includes(search);
    });
  }
}
