import { PokemonsService } from '@pokedex/services';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'pokedex-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss'],
})
export class PokemonInfoComponent {
  public pokemonInfo$!: Observable<any>;
  public pokemonSpecies$!: Observable<any>;
  private pokemonId!: string;
  private routeSub!: Subscription;
  private flowThroughApp!: boolean;

  constructor(
    private router: Router,
    private pokemonService: PokemonsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.routeSub = this.activatedRoute.params.subscribe((params) => {
      this.pokemonId = params['id'];
    });
    this.routeSub = this.activatedRoute.fragment.subscribe((fragment) =>
      fragment != null
        ? (this.flowThroughApp = true)
        : (this.flowThroughApp = false)
    );
    this.pokemonInfo$ = this.flowThroughApp
      ? this.pokemonService.getPokemonInfoAsObservable(this.pokemonId)
      : this.pokemonService.getPokemonById(this.pokemonId);
    this.pokemonSpecies$ = this.pokemonService.getPokemonSpeciesById(
      this.pokemonId
    );
  }

  public navigateToHome(): void {
    this.router.navigate(['/']);
  }

  public navigateToForward(id: any) {
    const idForward = id + 1;
    const fragment = this.flowThroughApp
      ? {
          fragment: 'flow',
        }
      : {};

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`pokemon-info/${idForward}`], fragment);
    });
  }

  public navigateToBackward(id: any) {
    const idBackward = id - 1;
    const fragment = this.flowThroughApp
      ? {
          fragment: 'flow',
        }
      : {};
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`pokemon-info/${idBackward}`], fragment);
    });
  }
}
