import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Pokemon } from './pokemon.interface';
import { PokemonService } from './pokemon.service';

@Controller('api/v1/pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  listAllPokemon(): Array<Pokemon> {
    return this.pokemonService.listAllPokemon();
  }
}
