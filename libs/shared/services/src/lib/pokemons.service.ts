import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, switchMap, map } from 'rxjs';
import { PokemonCard, PokemonInfo } from '@pokedex/services';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private readonly AMOUNT_POKEMONS = '100';
  private readonly API_VERSION = 'v2';
  private readonly URI_POKEMON = `https://pokeapi.co/api/${this.API_VERSION}`;
  private readonly URL_POKEMON = `https://pokeapi.co/api/${this.API_VERSION}/pokemon?limit=${this.AMOUNT_POKEMONS}&offset=0`;

  constructor(private httpClient: HttpClient) {}

  public getPokemonNames(): Observable<PokemonCard[]> {
    return this.httpClient.get<PokemonInfo>(this.URL_POKEMON).pipe(
      switchMap((value: any) => {
        const objectValues = Object.values(value.results);
        const allObs$ = objectValues.map((pokemon: any) =>
          this.getPokemonByUrl(pokemon.url)
        );
        return forkJoin(allObs$);
      }),
      map((valor: any) => this.pokemonCardMapper(valor))
    );
  }

  public getPokemonByUrl(url: string): Observable<object> {
    return this.httpClient.get(url);
  }

  public getPokemonById(id: string): Observable<PokemonInfo> {
    return this.httpClient
      .get(`${this.URI_POKEMON}/pokemon/${id}/`)
      .pipe(map((valor: any) => this.pokemonAboutMapper(valor)));
  }

  private pokemonCardMapper(pokemon: PokemonInfo[]): PokemonCard[] {
    return pokemon.map((value: PokemonInfo) => ({
      id: value.id.toString(),
      image: value.sprites.other['official-artwork'].front_default,
      name: value.name,
    }));
  }

  private pokemonAboutMapper(pokemonInfo: PokemonInfo): any {
    return {
      abilities: pokemonInfo.abilities,
      name: pokemonInfo.name,
      height: pokemonInfo.height,
      id: pokemonInfo.id,
      image: pokemonInfo.sprites.other['official-artwork'].front_default,
      stats: pokemonInfo.stats,
      types: pokemonInfo.types,
      weight: pokemonInfo.weight,
      mainType: pokemonInfo.types[0].type.name,
    };
  }
}
