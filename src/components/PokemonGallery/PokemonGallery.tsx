import React, { useEffect, useState } from 'react'
import { POKEAPI_BASE_URL } from '../../pokeproject.consts'
import { PokemonI, PokemonList } from '../../views/Homepage/Homepage.models'
import PokemonCard from '../PokemonCard/PokemonCard'
import axios from 'axios';
import { fetchPokemonDetailList } from '../../service/PokemonService.service';
import './PokemonGallery.styles.scss'
import {PokemonContainer} from '../PokemonContainer/PokemonContainer';


export const PokemonGallery = ({ pokemonList }: { pokemonList: PokemonList }) => {

  const [pokemonsList, setPokemonsList] = useState<PokemonList>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function getPokemonsDetailList() {
      const data = await fetchPokemonDetailList(pokemonList)
      setPokemonsList(data)
      setLoading(false)
    }
    getPokemonsDetailList()
  }, [pokemonList])
  return (
    <>
    <div className='pokemongallery__container'>
      {loading ? <p>loading gallery...</p> :
       pokemonsList.map(({ name, abilities, id, types }: PokemonI) =>
        (<div className='pokemongallery__container__block' key={id}>
          <PokemonCard name={name} id={id} types={types} abilities={abilities} />
        </div>))
      }
      </div>
    </>
  )
}
