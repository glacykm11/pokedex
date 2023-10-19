import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokedex-card',
  templateUrl: './card.component.html',
  standalone: true,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() pokemonImage =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png';
  @Input() pokemonId = '001';
  @Input() pokemonName = 'Bulbasaur';
}
