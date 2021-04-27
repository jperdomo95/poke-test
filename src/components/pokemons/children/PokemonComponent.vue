<template>
  <div :id="'pokemon'+model.id" class="flex flex-col items-center px-5 shadow-lg rounded-lg border-2 pb-5">
    <img :src="model.image" :alt="model.name" class="w-40">
    <p :id="'pokemonName'+model.id" class="text-center text-xl mb-5">{{ model.name }}</p>
    <button class="py-2 px-4 bg-blue-500 rounded-full text-white font-bold" @click="onPokemonSelect(model)">CATCH!</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { PokemonInterface } from '@/models/pokemons/PokemonInterface'

export default defineComponent({
  props: {
    model: {
      type: Object as PropType<PokemonInterface>
    }
  },
  emits: ['selectPokemon'],
  setup (props, { emit }) {
    const onPokemonSelect = () => {
      emit('selectPokemon', props.model)
    }

    return {
      onPokemonSelect
    }
  }
})
</script>

<style>

</style>
