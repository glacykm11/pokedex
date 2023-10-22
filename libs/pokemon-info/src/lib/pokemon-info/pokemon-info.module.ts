import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonInfoRoutingModule } from './pokemon-info-routing.module';
import { PokemonInfoComponent } from './pokemon-info.component';

@NgModule({
  declarations: [PokemonInfoComponent],
  imports: [CommonModule, PokemonInfoRoutingModule],
  exports: [PokemonInfoComponent],
})
export class PokemonInfoModule {}
