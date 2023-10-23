import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonInfoRoutingModule } from './pokemon-info-routing.module';
import { PokemonInfoComponent } from './pokemon-info.component';
import { TypeChipComponent } from '@pokedex/ui';

@NgModule({
  declarations: [PokemonInfoComponent],
  imports: [CommonModule, PokemonInfoRoutingModule, TypeChipComponent],
  exports: [PokemonInfoComponent],
})
export class PokemonInfoModule {}
