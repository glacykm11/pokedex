import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pokedex-type-chip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './type-chip.component.html',
  styleUrls: ['./type-chip.component.scss'],
})
export class TypeChipComponent {
  @Input() pokemonType!: string;

  public backgroundColor(pokemonType: string): any {
    return `{ 'background': var(--pokemon-type-${pokemonType.toLowerCase()}) }`;
  }
}
