import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService } from '@pokedex/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'pokedex-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public pokemon$!: Observable<any>;
  public searchText!: string | null;
  public showSortCard = false;
  constructor(
    private pokemonService: PokemonsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.pokemonService.pokemonArrayIsEmpty.value == true
      ? (this.pokemon$ = this.pokemonService.getPokemonNames())
      : (this.pokemon$ = this.pokemonService.getPokemonsInfosAsObservable());
  }

  public getCardClick(pokemonId: string): void {
    this.navigateToPokemonInfoPage(pokemonId);
  }

  private navigateToPokemonInfoPage(pokemonId: string): void {
    this.router.navigate([`pokemon-info/${pokemonId}`], { fragment: 'flow' });
  }

  public getSearchText(text: string | null) {
    this.searchText = text;
  }

  public getClickSortButton(sortButton: any) {
    console.log(this.showSortCard, 'valor Inicial')
    this.showSortCard = !this.showSortCard;
    console.log(this.showSortCard, 'valor dps')
  }
}
