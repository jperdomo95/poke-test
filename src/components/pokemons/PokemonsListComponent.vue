<template>
  <div class="container mx-2 md:mx-auto">
    <h1 class="text-3xl mb-4 text-center">Wild Pokemon</h1>
    <h2 class="2x text-center">Loading Pokemons {{ loading }}:</h2>
    <Loader v-if="loading" :show="loading" />
    <div v-else class="grid gap-5 md:gap-10  grid-cols-1 md:grid-cols-3">
      <PokemonComponent
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :model="pokemon"
        @selectPokemon="onPokemonSelect" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { PokemonInterface } from '@/models/pokemons/PokemonInterface'
import PokemonComponent from '@/components/pokemons/children/PokemonComponent.vue'
import Loader from '@/components/shared/LoaderComponent.vue'

export default defineComponent({
  components: {
    PokemonComponent,
    Loader
  },
  props: {
    pokemons: {
      type: Array as PropType<PokemonInterface[]>
    },
    loading: {
      type: Boolean
    }
  },
  emits: ['selectPokemon'],
  setup (props, { emit }) {
    const myPokemons: PokemonInterface[] = []
    const onPokemonSelect = (pokemon: PokemonInterface) => {
      emit('selectPokemon', pokemon)
    }

    return {
      myPokemons,
      onPokemonSelect
    }
  }
})
</script>

<style>

</style>
