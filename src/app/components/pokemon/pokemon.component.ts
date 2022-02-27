import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetail, PokemonList, PokemonListItem } from './models';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemonList$!: Observable<PokemonList>;
  pokemonDetail$!: Observable<PokemonDetail>;

  // Pokemon service is injected into the component via dependency injection.
  // - See Dependency Injection in Angular --> https://angular.io/guide/dependency-injection
  constructor(private pokemonService: PokemonService) {}

  // Angular Lifecycle Hook that is called after Angular has initialized all data bound properties
  // - See NgOnInit docs --> https://angular.io/api/core/OnInit
  // - See Angular Lifecycle Hooks --> https://angular.io/guide/lifecycle-hooks
  ngOnInit(): void {
    this.requestPokemonList();
  }

  requestPokemonList(): void {
    this.pokemonList$ = this.pokemonService.getPokemonList();
  }

  requestPokemonDetail(pokemonListItem: PokemonListItem): void {
    this.pokemonDetail$ = this.pokemonService.getPokemonDetail(
      pokemonListItem.url
    );
  }
}
