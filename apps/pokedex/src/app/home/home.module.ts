import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent, SearchComponent, SortComponent } from '@pokedex/ui';
import { HeaderComponent } from '@pokedex/ui';
import { PipesModule } from '@pokedex/pipes';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardComponent,
    HeaderComponent,
    SearchComponent,
    PipesModule,
    SortComponent
  ],
})
export class HomeModule {}
