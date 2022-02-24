import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { WeatherComponent } from './components/weather/weather.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { TodoComponent } from './components/todo/todo.component';
import { ExperimentComponent } from './components/experiment/experiment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { PokemonHeaderComponent } from './components/pokemon/components/pokemon-header/pokemon-header.component';
import { PokemonDetailComponent } from './components/pokemon/components/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './components/pokemon/components/pokemon-list/pokemon-list.component';
import { PokemonService } from './components/pokemon/services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WeatherComponent,
    PokemonComponent,
    TodoComponent,
    ExperimentComponent,
    PokemonHeaderComponent,
    PokemonDetailComponent,
    PokemonListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
