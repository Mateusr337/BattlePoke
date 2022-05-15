import { Pokemon } from "./pokemonInterface";
import { PokemonLevel } from "./pokemonLevelInterface";
import { PokemonType } from "./pokemonTypeInterface";
import { PokemonTypePokemon } from "./pokemonTypePokemon";
import { PokemonUser } from "./PokemonUser";

export interface CardsByUser {
  card: PokemonUser & {
    pokemon: Pokemon & {
      pokemonLevel: PokemonLevel;

      PokemonTypePokemon: Array<PokemonTypePokemon> & {
        pokemonType: PokemonType;
      };
    };
  };
}
