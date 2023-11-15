import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonInfoRoutingModule } from './pokemon-info-routing.module';
import { PokemonInfoComponent } from './pokemon-info.component';
import {
  TypeChipComponent,
  AttributeComponent,
  ProgressBarComponent,
} from '@pokedex/ui';
import { PipesModule } from '@pokedex/pipes';

@NgModule({
  declarations: [PokemonInfoComponent],
  imports: [
    CommonModule,
    PokemonInfoRoutingModule,
    TypeChipComponent,
    AttributeComponent,
    ProgressBarComponent,
    PipesModule,
  ],
  exports: [PokemonInfoComponent],
})
export class PokemonInfoModule {}
