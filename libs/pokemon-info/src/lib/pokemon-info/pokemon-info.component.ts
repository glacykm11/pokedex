import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pokedex-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss'],
})
export class PokemonInfoComponent {
  constructor(private router: Router) {}

  public navigateToHome(): void {
    this.router.navigate(['/']);
  }
}
