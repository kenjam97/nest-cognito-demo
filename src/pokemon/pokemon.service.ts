import { Injectable } from '@nestjs/common';
import { Pokemon } from './pokemon.interface';

@Injectable()
export class PokemonService {
  listAllPokemon(): Array<Pokemon> {
    return [
      {
        name: 'Pikachu',
        type: 'Electric',
      },
      {
        name: 'Charmander',
        type: 'Fire',
      },
      {
        name: 'Bulbasaur',
        type: 'Grass',
      },
    ];
  }
}
