import { createStore, createLogger } from 'vuex'
import { PokemonInterface } from '@/models/pokemons/PokemonInterface'
import { PokemonsStateInterface } from '@/models/store/PokemonsStateInterface'
import apiClient from '@/api-client'

const state: PokemonsStateInterface = {
  loading: false,
  pokemons: [],
  selectedPokemons: []
}

export default createStore({
  state: state,
  mutations: {
    loadingPokemons (state: PokemonsStateInterface) {
      state.loading = true
      state.pokemons = []
    },
    loadedPokemons (state: PokemonsStateInterface, pokemons: PokemonInterface[]) {
      state.pokemons = pokemons
      state.loading = false
    },
    selectPokemon (state: PokemonsStateInterface, params: {
      id: number,
      name: string,
      image: string
    }) {
      const { selectedPokemons } = state
      if (selectedPokemons.find(myPokemon => myPokemon.id === params.id)) return null
      Object.assign(selectedPokemons, [...selectedPokemons, params])
    }
  },
  actions: {
    loadPokemons ({ commit }) {
      commit('loadingPokemons')

      setTimeout(() => {
        apiClient
          .pokemons
          .fetchPokemons().then((data: PokemonInterface[]) => {
            commit('loadedPokemons', data)
          })
      }, 1000)
    },
    selectPokemon ({ commit }, pokemon: {
      id: number,
      name: string,
      image: string
    }) {
      commit('selectPokemon', pokemon)
    }
  },
  modules: {
  },
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
})
