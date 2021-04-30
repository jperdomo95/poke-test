<template>
  <div :id="'pokemon'+model.id" class="flex flex-col items-center px-5 shadow-lg rounded-lg pb-5 hover:border-blue-300">
    <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`" :alt="model.name" class="w-40">
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
    },
    index: {
      type: Number
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
