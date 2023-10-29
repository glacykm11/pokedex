import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '@pokedex/pipes';

@Component({
  selector: 'pokedex-type-chip',
  standalone: true,
  imports: [CommonModule, PipesModule],
  templateUrl: './type-chip.component.html',
  styleUrls: ['./type-chip.component.scss'],
})
export class TypeChipComponent {
  @Input() pokemonType!: string;
}
