import { AbilityI } from "../Homepage/Homepage.models"

export interface PokemonDetailI {
    name: string,
    id: number,
    base_experience: number,
    height: number,
    weight: number,
    abilities: AbilityI[]
    types: TypeDetailI[]
}

interface TypeDetailI {
 type: {name: string,
    url: string}
}

