import { ApiClientInterface } from '@/models/api-client/ApiClientInterface'
import pokemonsApiClient from './pokemons'

const apiMockClient: ApiClientInterface = {
  pokemons: pokemonsApiClient
}

export default apiMockClient
