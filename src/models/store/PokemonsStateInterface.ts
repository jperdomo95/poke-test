import { PokemonInterface } from '@/models/pokemons/PokemonInterface'

export interface PokemonsStateInterface {
  loading: boolean,
  pokemons: PokemonInterface[],
  selectedPokemons: PokemonInterface[]
}
