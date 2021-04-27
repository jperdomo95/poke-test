<template>
  <div class="container mx-2 md:mx-auto">
    <h1 class="text-3xl mb-4 text-center">Wild Pokemon</h1>
    <div class="grid gap-5 md:gap-10  grid-cols-1 md:grid-cols-3">
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

export default defineComponent({
  components: {
    PokemonComponent
  },
  props: {
    pokemons: {
      type: Array as PropType<PokemonInterface[]>
    }
  },
  setup () {
    let selectedPokemon = 'none'
    const myPokemons: PokemonInterface[] = []
    const onPokemonSelect = (pokemon: PokemonInterface) => {
      if (myPokemons.find(myPokemon => myPokemon.id === pokemon.id)) return null
      Object.assign(myPokemons, [...myPokemons, pokemon])
      selectedPokemon = pokemon.name
    }

    return {
      selectedPokemon,
      myPokemons,
      onPokemonSelect
    }
  }
})
</script>

<style>

</style>
