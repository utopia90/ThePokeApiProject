import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { POKEAPI_BASE_URL } from '../../pokeproject.consts';
import { PokemonList } from './Homepage.models';
import { PokemonGallery } from '../../components/PokemonGallery/PokemonGallery';
import { fetchPokemonListPage } from '../../service/PokemonService.service';
import './Homepage.styles.scss'
import { PokemonContainer } from '../../components/PokemonContainer/PokemonContainer';
import { ReactComponent as LeftArrowIcon } from './../../assets/icons/LeftIcon.svg'
import { ReactComponent as RightArrowIcon } from './../../assets/icons/RightIcon.svg'
import { ReactComponent as DownArrow } from './../../assets/icons/DownArrow.svg'




export default function Homepage() {

  const [loading, setIsloading] = useState<boolean>(true)
  const [pokemonsList, setPokemonsList] = useState<PokemonList>([])
  const [pokemonsPage, setPokemonsPage] = useState<number>(1)
  const [pokemonPerPage, setPokemonsPerPage] = useState(8);



  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetchPokemonListPage(pokemonPerPage, pokemonsPage)
      setPokemonsList(response)
      setIsloading(false);
    };
    fetchPokemons();

    if(pokemonsPage === 0){
      alert("No hay más pokemons!")
      setPokemonsPage(1)
    }
  }, [pokemonsPage, pokemonPerPage])

  return (
    <>
      {loading ? <p>loading gallery... </p> :
        <>
          <div className="homepage__container">
              <div className='homepage__container__img'><img src={require('./../../assets/images/pokeapi_logo.png')} ></img></div>
           
              <PokemonContainer>
                <PokemonGallery pokemonList={pokemonsList} />
                <div className="homepage__container__btns">
                  <div className="homepage__container__btns--left" onClick={() => setPokemonsPage((prevState) => (prevState - 1))}><LeftArrowIcon /></div>
                  <div className="homepage__container__btns--right" onClick={() => setPokemonsPage((prevState) => (prevState + 1))}><RightArrowIcon /></div>
                </div>
              </PokemonContainer>
          </div>
        </>
      }
    </>
  )
}
