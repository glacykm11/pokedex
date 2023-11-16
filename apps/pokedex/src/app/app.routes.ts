import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from '@pokedex/not-found';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'pokemon-info/:id',
    loadChildren: () =>
      import('@pokedex/pokemon-info').then((m) => m.PokemonInfoModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
