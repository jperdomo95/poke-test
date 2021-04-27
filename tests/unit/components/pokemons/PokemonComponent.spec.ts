import { shallowMount } from '@vue/test-utils'
import PokemonComponent from '@/components/pokemons/children/PokemonComponent.vue'
import { PokemonInterface } from '@/models/pokemons/PokemonInterface'

describe('Pokemon.component.vue', () => {
  test('renders a pokemon correctly', () => {
    const model: PokemonInterface = {
      id: 1,
      name: 'Unit test pokemon 1',
      image: 'http://localhost:8080/favico.ico'
    }

    const wrapper = shallowMount(PokemonComponent, {
      props: {
        model: model
      }
    })

    let pokemonElement = wrapper.find('p#pokemonName'+model.id)
    expect(pokemonElement.text()).toBe('Unit test pokemon 1')
  })
})
