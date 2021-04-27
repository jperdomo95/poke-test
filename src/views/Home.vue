<template>
  <div>
    <h1 class="text-5xl text-center mb-4">Home</h1>
    <PokemonsListComponent :pokemons="pokemons" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import PokemonsListComponent from '@/components/pokemons/PokemonsListComponent.vue'
import { PokemonInterface } from '@/models/pokemons/PokemonInterface'

export default defineComponent({
  name: 'Home',
  components: {
    PokemonsListComponent
  },
  setup () {
    const pokemons: PokemonInterface[] = reactive([
      {
        id: 1,
        name: 'Bulbasaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        selected: false
      },
      {
        id: 2,
        name: 'ivysaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
        selected: false
      },
      {
        id: 3,
        name: 'venusaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
        selected: false
      }
    ])

    return {
      pokemons
    }
  }
})
</script>
