import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  concat,
  forkJoin,
  switchMap,
  map,
  tap,
  OperatorFunction,
} from 'rxjs';
import {
  PokemonAPI,
  PokemonCard,
  PokemonInfo,
  Results,
} from '@pokedex/services';
@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private readonly AMOUNT_POKEMONS = '100';
  private readonly API_VERSION = 'v2';
  private readonly URL_POKEMON = `https://pokeapi.co/api/${this.API_VERSION}/pokemon?limit=${this.AMOUNT_POKEMONS}&offset=0`;

  constructor(private httpClient: HttpClient) {}

  public getPokemonNames(): Observable<PokemonCard[]> {
    return this.httpClient.get<PokemonInfo>(this.URL_POKEMON).pipe(
      switchMap((value: any) => {
        const objectValues = Object.values(value.results);
        const allObs$ = objectValues.map((pokemon: any) =>
          this.getPokemonById(pokemon.url)
        );
        return forkJoin(allObs$);
      }),
      map((valor: any) => this.pokemonCardMapper(valor))
    );
  }

  public getPokemonById(url: string) {
    return this.httpClient.get(url);
  }

  private pokemonCardMapper(pokemon: PokemonInfo[]): PokemonCard[] {
    return pokemon.map((value: PokemonInfo) => ({
      id: value.id,
      image: value.sprites.front_default,
      name: value.name,
    }));
  }
}
