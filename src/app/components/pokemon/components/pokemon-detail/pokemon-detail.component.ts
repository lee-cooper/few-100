import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetail } from '../../models/pokemon-detail.interface';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  @Input() selectedPokemon!: PokemonDetail | null;

  constructor() {}

  ngOnInit(): void {}
}
