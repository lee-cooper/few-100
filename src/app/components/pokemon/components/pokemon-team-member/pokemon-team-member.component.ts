import { Component, Input } from '@angular/core';
import { PokemonDetail } from '../../models';

@Component({
  selector: 'app-pokemon-team-member',
  templateUrl: './pokemon-team-member.component.html',
  styleUrls: ['./pokemon-team-member.component.scss'],
})
export class PokemonTeamMemberComponent {
  @Input() pokemonTeamMember!: PokemonDetail | null;

  removePokemonFromTeam(pokemonToRemove: PokemonDetail | null): void {}
}
