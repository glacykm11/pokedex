import { PokemonsService } from '@pokedex/services';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'pokedex-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss'],
})
export class PokemonInfoComponent implements OnDestroy {
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

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  public navigateToHome(): void {
    this.router.navigate(['/']);
  }
}
