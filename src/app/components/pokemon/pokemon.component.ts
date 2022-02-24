import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetail } from './models/pokemon-detail.interface';
import { PokemonList, PokemonListItem } from './models/pokemon-list.interface';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemonList$!: Observable<PokemonList>;
  pokemonDetail$!: Observable<any>;

  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.requestPokemon();
    this.pokemonList$ = this.pokemonService.pokemonList$;
    this.pokemonDetail$ = this.pokemonService.pokemonDetail$;
  }

  requestPokemonDetail(pokemonListItem: PokemonListItem): void {
    this.pokemonService.requestPokemonDetail(pokemonListItem.url);
    this.pokemonDetail$ = this.pokemonService.pokemonDetail$;
  }
}
