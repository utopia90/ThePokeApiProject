import React, {  useState } from 'react'
import { Link } from 'react-router-dom';
import './PokemonContainer.scss'


interface Props {
    children: React.ReactNode;
    isHomepage?: boolean
  }

export  const PokemonContainer:React.FC<Props> = ({ children, isHomepage = true}) => {


  return (
    <div className='pokemon__container'>
      {!isHomepage &&  <Link to="/" className='pokemon__container__backBtn'>Atrás</Link> }
        {children}
    </div>
    
  )
}

