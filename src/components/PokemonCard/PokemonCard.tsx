import * as React from "react";
import { Link } from 'react-router-dom';
import { POKE_BASE_IMG_URL } from '../../pokeproject.consts'
import { AbilityI, PokemonI, TypeI } from '../../views/Homepage/Homepage.models'
import './PokemonCard.styles.scss';



export default function PokemonCard({ name, id, types, abilities }: PokemonI) {

  return (
    <Link className="card-container" to={`pokemondetail/${name}`}>
        <figure className="card-container__figure">
      <img className="card-container__figure__img" src={`${POKE_BASE_IMG_URL}${id}.png`}/>
      </figure>
      <div className="card-container__descriptionbox">
     <p className="card-container__name">{name.toUpperCase()}</p> 
     <div className='types__block'>
     <div className='types__block__title'>types: </div>
      {types.map((pokeType: TypeI, idx) => {
        const { name: typeName } = pokeType.type
        return <span className="types__block__txt"key={idx}>{typeName}</span>
      })}
      </div>
      <div className='abilities__block'>
      <div className='abilities__block__title'>abilities: </div>
      {abilities.map((pokeType: AbilityI, idx) => {
        const { name: abilityName } = pokeType.ability
        return ( <span className='abilities__block__txt' key={idx}>{abilityName}</span>)
      })} 
      </div>
      </div>
    </Link>

  )
}
