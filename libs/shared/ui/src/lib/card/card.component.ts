import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output() clickCard = new EventEmitter<string>();

  public emitCardClick(pokemonId: string): void {
    this.clickCard.emit(pokemonId);
  }
}
