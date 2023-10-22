import { Component, OnInit } from '@angular/core';
import { PokemonCard, PokemonsService } from '@pokedex/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'pokedex-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public pokemon$!: Observable<PokemonCard[]>;
  constructor(private pokemonService: PokemonsService) {}

  ngOnInit() {
    this.pokemon$ = this.pokemonService.getPokemonNames();
  }

  public getCardClick(pokemonId: string) {
    console.log('any' + pokemonId);
  }
}
