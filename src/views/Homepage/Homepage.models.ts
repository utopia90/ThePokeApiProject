
 export interface PokemonI {
    name: string,
    id: number,
    types: TypeI[]
    abilities: AbilityI[]
  }
export type PokemonList = PokemonI[]

export interface pokemonList {
    pokemonList: PokemonList
  }

  export interface TypeI {
    type: { name: string, url: string }
  }
  export interface AbilityI {
    ability: { name: string, url: string }
  }