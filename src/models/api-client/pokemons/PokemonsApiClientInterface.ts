import { PokemonInterface } from '@/models/pokemons/PokemonInterface'

export interface PokemonsApiClientInterface {
  fetchPokemons: () => Promise<PokemonInterface[]>
}