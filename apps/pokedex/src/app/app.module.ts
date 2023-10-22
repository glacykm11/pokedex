import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { PokemonInfoModule } from '@pokedex/pokemon-info';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HomeModule,
    HttpClientModule,
    PokemonInfoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
