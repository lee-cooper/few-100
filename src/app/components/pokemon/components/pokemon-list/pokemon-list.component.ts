import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonList, PokemonListItem } from '../../models';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  @Input() pokemonList!: PokemonList | null;
  @Output() emitSelectedPokemon: EventEmitter<PokemonListItem> =
    new EventEmitter();

  selectedPokemon!: PokemonListItem;

  selectPokemon(pokemonListItem: PokemonListItem): void {
    this.selectedPokemon = pokemonListItem;
    this.emitSelectedPokemon.emit(pokemonListItem);
  }
}
