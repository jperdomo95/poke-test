import {
  PokemonsApiClientUrlsInterface,
  PokemonsApiClientInterface,
  PokemonsApiClientModel
} from '@/models/api-client/pokemons'

const urls: PokemonsApiClientUrlsInterface = {
  fetchPokemons: 'https://pokeapi.co/api/v2/pokemon'
}

const pokemonsApiClient: PokemonsApiClientInterface = new PokemonsApiClientModel(urls)

export default pokemonsApiClient
