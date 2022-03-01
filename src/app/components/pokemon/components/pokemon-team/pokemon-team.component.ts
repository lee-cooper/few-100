import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetail } from '../../models';

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrls: ['./pokemon-team.component.scss'],
})
export class PokemonTeamComponent implements OnInit {
  @Input() currentPokemonTeam: PokemonDetail[] = [];

  constructor() {}

  ngOnInit(): void {}
}
