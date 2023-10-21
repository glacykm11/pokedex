import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent, SearchComponent } from '@pokedex/ui';
import { HeaderComponent } from '@pokedex/ui';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardComponent,
    HeaderComponent,
    SearchComponent,
  ],
})
export class HomeModule {}
