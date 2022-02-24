import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokemonDetail } from '../models/pokemon-detail.interface';
import { PokemonList } from '../models/pokemon-list.interface';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  pokemonList$!: Observable<PokemonList>;
  pokemonDetail$!: Observable<any>;

  requestPokemon(): void {
    this.pokemonList$ = this.httpClient.get<PokemonList>(
      'https://pokeapi.co/api/v2/pokemon/?limit=151'
    );
  }

  requestPokemonDetail(url: string): void {
    this.pokemonDetail$ = this.httpClient.get<any>(url).pipe(
      map(
        (response) =>
          ({
            id: response.id,
            image: response.sprites.front_default,
            name: response.name,
            type: response.types.map((poke: any) => poke.type.name).join(' / '),
          } as PokemonDetail)
      )
    );
  }
}
