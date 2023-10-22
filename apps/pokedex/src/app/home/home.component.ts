import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '@pokedex/services';

@Component({
  selector: 'pokedex-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public pokemon$: any;
  constructor(private pokemonService: PokemonsService) {}

  ngOnInit() {
    this.pokemon$ = this.pokemonService.getPokemonNames();
  }
}
