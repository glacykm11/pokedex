import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonInfoComponent } from './pokemon-info.component';

const routes: Routes = [{ path: '', component: PokemonInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonInfoRoutingModule {}
