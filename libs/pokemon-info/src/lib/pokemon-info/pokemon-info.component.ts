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
  private pokemonId!: string;
  private routeSub!: Subscription;

  constructor(
    private router: Router,
    private pokemonService: PokemonsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.pokemonId = params['id'];
    });
    this.pokemonInfo$ = this.pokemonService.getPokemonById(this.pokemonId);
    this.pokemonInfo$.subscribe((x) => console.log(x));
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
