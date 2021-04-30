import {
  PokemonsApiClientUrlsInterface,
  PokemonsApiClientInterface,
  PokemonsApiClientModel
} from '@/models/api-client/pokemons'

const urls: PokemonsApiClientUrlsInterface = {
  fetchPokemons: '/static/data/pokemons.json'
}

const pokemonsApiClient: PokemonsApiClientInterface = new PokemonsApiClientModel(urls)

export default pokemonsApiClient
