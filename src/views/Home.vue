<template>
  <div>
    <h1 class="text-5xl text-center mb-4">Home</h1>
    <PokemonsListComponent
      :pokemons="pokemons"
      :loading="loading"
      @selectPokemon="onSelectPokemon"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import PokemonsListComponent from '@/components/pokemons/PokemonsListComponent.vue'
import store from '@/store'
import { PokemonInterface } from '@/models/pokemons/PokemonInterface'

export default defineComponent({
  name: 'Home',
  components: {
    PokemonsListComponent
  },
  setup () {
    const pokemons = computed(() => store.state.pokemons)

    const loading = computed(() => store.state.loading)

    onMounted(() => {
      store.dispatch('loadPokemons')
    })

    const onSelectPokemon = (pokemon: PokemonInterface) => {
      store.dispatch('selectPokemon', pokemon)
    }

    return {
      onSelectPokemon,
      pokemons,
      loading
    }
  }
})
</script>
