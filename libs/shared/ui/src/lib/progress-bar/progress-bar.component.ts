import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '@pokedex/pipes';

@Component({
  selector: 'pokedex-progress-bar',
  standalone: true,
  imports: [CommonModule, PipesModule],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() pokemonType!: string;
}
