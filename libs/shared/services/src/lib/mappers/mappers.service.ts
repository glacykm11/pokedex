import { Injectable } from '@angular/core';
import { PokemonCard, PokemonInfo } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class MappersService {
  public pokemonInfoMapper(pokemonInfo: PokemonInfo[]): any {
    return pokemonInfo.map((pokemon: PokemonInfo) => ({
      abilities: this.abilitiesMapper(pokemon.abilities),
      name: pokemon.name,
      height: pokemon.height,
      id: pokemon.id,
      image: pokemon.sprites.other['official-artwork'].front_default,
      stats: pokemon.stats,
      types: pokemon.types,
      weight: pokemon.weight,
      mainType: pokemon.types[0].type.name,
    }));
  }

  public pokemonAboutMapper(pokemon: any) {
    return {
      abilities: this.abilitiesMapper(pokemon.abilities),
      name: pokemon.name,
      height: pokemon.height,
      id: pokemon.id,
      image: pokemon.sprites.other['official-artwork'].front_default,
      stats: pokemon.stats,
      types: pokemon.types,
      weight: pokemon.weight,
      mainType: pokemon.types[0].type.name,
    };
  }

  private abilitiesMapper(abilities: any) {
    const result = abilities.map(
      (pokemon: any) =>
        pokemon.ability.name[0].toUpperCase() + pokemon.ability.name.slice(1)
    );

    return result.join(' ');
  }

  public pokemonDescriptionMapper(valor: any): any {
    return {
      description: valor.flavor_text_entries[9].flavor_text,
    };
  }
}
