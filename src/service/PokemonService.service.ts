import { POKEAPI_BASE_URL } from "../pokeproject.consts"
import { PokemonI, PokemonList } from "../views/Homepage/Homepage.models"
import axios, { AxiosError } from 'axios';
import React, { useState } from 'react'
import { PokemonDetailI } from "../views/PokemonDetail/PokemonDetail.models";


export async function fetchPokemonDetailList(pokemonList: PokemonList) {

  const pokemonDetailList: PokemonI[] = []
try {
  await Promise.all(
    pokemonList.map((pokemon) => {
      return axios
        .get(`${POKEAPI_BASE_URL}/pokemon/${pokemon.name}`)
        .then((res) => {
          const { name, abilities, id, types }: PokemonI = res.data
          pokemonDetailList.push({ name, abilities, id, types });
        });
    })
  );

}catch (error) {
  const err = error as AxiosError
  if (err.response) {
     alert(err.response.status)
     alert(err.response.data)
  }
}
return pokemonDetailList
}

export async function fetchPokemonListPage(pokemonsPerPage: number, offset: number) {
  let pokemonsData: PokemonList = [];
  try {
    const pokemonsListUrl = `${POKEAPI_BASE_URL}/pokemon/?limit=${pokemonsPerPage}&offset=${offset}`
   await axios.get(pokemonsListUrl).then(res => pokemonsData = res.data.results)
  
  }catch (error) {
    const err = error as AxiosError
    if (err.response) {
       alert(err.response.status)
       alert(err.response.data)
    }
  }
  return pokemonsData
}
export async function fetchPokemonDetailData(pokeName: string | undefined) {
  const pokemonDetail: PokemonDetailI[] = []
  const pokemonsDetailUrl = `${POKEAPI_BASE_URL}/pokemon/${pokeName}`;
  
  try {
    const data = await axios.get(pokemonsDetailUrl).then(res => res.data)
  const { name, id, base_experience, weight, height, abilities, types } = data
  pokemonDetail.push(data)
  
  } catch (error) {
    const err = error as AxiosError
    if (err.response) {
       alert(err.response.status)
       alert(err.response.data)
    }
  }
  return pokemonDetail
}