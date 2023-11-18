import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonCard, PokemonsService } from '@pokedex/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'pokedex-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public pokemon$!: Observable<any>;
  constructor(
    private pokemonService: PokemonsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.pokemonService.pokemonArrayIsEmpty.value == true
      ? (this.pokemon$ = this.pokemonService.getPokemonNames())
      : (this.pokemon$ = this.pokemonService.getPokemonsInfosAsObservable());
  }

  public getCardClick(pokemonId: string): void {
    this.navigateToPokemonInfoPage(pokemonId);
  }

  private navigateToPokemonInfoPage(pokemonId: string): void {
    this.router.navigate([`pokemon-info/${pokemonId}`], { fragment: 'flow' });
  }
}
