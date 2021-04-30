import { ApiClientInterface } from '@/models/api-client/ApiClientInterface'
import PokemonsApiClient from './pokemons'

const apiLiveClient: ApiClientInterface = {
	pokemons: PokemonsApiClient
}

export default apiLiveClient