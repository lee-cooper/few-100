import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  PokemonList,
  PokemonListItem,
} from '../../models/pokemon-list.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  @Input() pokemonList!: PokemonList | null;
  @Output() emitSelectedPokemon: EventEmitter<PokemonListItem> =
    new EventEmitter();

  selectedPokemon!: PokemonListItem;

  constructor() {}

  ngOnInit(): void {}

  selectPokemon(pokemonListItem: PokemonListItem): void {
    this.selectedPokemon = pokemonListItem; //
    this.emitSelectedPokemon.emit(pokemonListItem);
  }
}
