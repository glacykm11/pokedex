import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent } from '@pokedex/ui';
import { HeaderComponent } from '@pokedex/ui';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, CardComponent, HeaderComponent],
})
export class HomeModule {}
