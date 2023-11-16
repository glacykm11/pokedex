import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  forkJoin,
  switchMap,
  map,
  tap,
  BehaviorSubject,
} from 'rxjs';
import { PokemonInfo } from '@pokedex/services';
import { MappersService } from '../mappers/mappers.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private readonly AMOUNT_POKEMONS = '1017';
  private readonly API_VERSION = 'v2';
  private readonly URI_POKEMON = `https://pokeapi.co/api/${this.API_VERSION}`;
  private readonly URL_POKEMON = `https://pokeapi.co/api/${this.API_VERSION}/pokemon?limit=${this.AMOUNT_POKEMONS}&offset=0`;
  private pokemonsInfos$ = new BehaviorSubject([{}]);
  private pokemonInfo$ = new BehaviorSubject({});
  constructor(
    private httpClient: HttpClient,
    private mapperService: MappersService
  ) {}

  public getPokemonNames(): Observable<any[]> {
    return this.httpClient.get<PokemonInfo>(this.URL_POKEMON).pipe(
      switchMap((value: any) => {
        const objectValues = Object.values(value.results);
        const allObs$ = objectValues.map((pokemon: any) =>
          this.getPokemonByUrl(pokemon.url)
        );
        return forkJoin(allObs$);
      }),
      map((valor: any) => this.mapperService.pokemonInfoMapper(valor)),
      tap((pokemonInfo) => this.pokemonsInfos$.next(pokemonInfo))
    );
  }

  public getPokemonInfoAsObservable(id: string): Observable<any> {
    const realId = Number(id) - 1;
    const pokemonsInfos = this.pokemonsInfos$.value;

    this.pokemonsInfos$.complete();

    const mapperPokemonInfo: any = pokemonsInfos[realId];

    this.pokemonInfo$.next(mapperPokemonInfo);

    return this.pokemonInfo$.asObservable();
  }

  public getPokemonByUrl(url: string): Observable<object> {
    return this.httpClient.get(url);
  }

  public getPokemonById(id: string): Observable<any> {
    return this.httpClient
      .get(`${this.URI_POKEMON}/pokemon/${id}/`)
      .pipe(map((valor: any) => this.mapperService.pokemonAboutMapper(valor)));
  }

  public getPokemonSpeciesById(id: string): Observable<any> {
    return this.httpClient
      .get(`${this.URI_POKEMON}/pokemon-species/${id}/`)
      .pipe(
        map((valor: any) => this.mapperService.pokemonDescriptionMapper(valor))
      );
  }
}
