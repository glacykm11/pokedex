import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokedex-card',
  templateUrl: './card.component.html',
  standalone: true,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() pokemonImage!: string;
  @Input() pokemonId!: string;
  @Input() pokemonName!: string;
}
