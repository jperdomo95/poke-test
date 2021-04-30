import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { PokemonsApiClientUrlsInterface } from './PokemonsApiClientUrlsInterface'
import { PokemonsApiClientInterface } from './PokemonsApiClientInterface'

export class PokemonsApiClientModel implements PokemonsApiClientInterface {
  private readonly urls!: PokemonsApiClientUrlsInterface

  constructor (urls: PokemonsApiClientUrlsInterface) {
    this.urls = urls
  }

  fetchPokemons (): Promise<any[]> {
    return new Promise<any[]>((resolve) => {
      const url = this.urls.fetchPokemons

      const options: AxiosRequestConfig = {
        headers: {}
      }
      axios
        .get(url, options)
        .then((response: AxiosResponse) => {
          resolve(response.data.results as any[])
        })
        .catch((error: any) => {
          console.error('PokemonsApiClient: HttpClient: Get: error', error)
        })
    })
  }
}
