import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './PokemonDetail.styles.scss';
import { useParams } from 'react-router-dom';
import { fetchPokemonDetailData } from '../../service/PokemonService.service';
import { PokemonDetailI } from './PokemonDetail.models';
import { POKE_BASE_IMG_URL } from '../../pokeproject.consts';
import { PokemonContainer } from '../../components/PokemonContainer/PokemonContainer';
import { typeNameToIconMapper } from './PokemonDetail.utils';




export default function PokemonDetailPage() {
    const { name: pokeName } = useParams();
    const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailI[]>([])
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        const fetchPokemonDetail = async () => {
            const response = await fetchPokemonDetailData(pokeName)
            setPokemonDetail(response)
            setLoading(false)
        };
        fetchPokemonDetail();
    }, [])
    return (<>
        {loading ? <p>loading pokemons...</p> : 
        <PokemonContainer isHomepage={false}>
            <div className="pokemondetail__container">
            <figure className="pokemondetail__container__figure"><img className="pokemondetail__container__figure__img" src={`${POKE_BASE_IMG_URL}${pokemonDetail[0].id}.png`} />
            </figure>
            <div className='pokemondetail__container__description-container'>
            <div className='pokemondetail__container__txt'><p>{pokemonDetail[0].name}</p></div>
            <div className='pokemondetail__container__txt'><p>Base Experience: </p><p>{pokemonDetail[0].base_experience}</p></div>
            <div className='pokemondetail__container__txt'><p>Weight: </p><p>{pokemonDetail[0].weight}</p></div>
            <div className='pokemondetail__container__txt'><p>Height: </p><p>{pokemonDetail[0].height}</p></div>
            <div className='pokemondetail__container__txt'><p>Abilities: </p>{pokemonDetail[0].abilities.map(({ ability: { name } }) => <p>{name}</p>)}</div>
            <div className='pokemondetail__container__txt'><p>Types: </p>{pokemonDetail[0].types.map(({ type: { name } }) => typeNameToIconMapper(name))}</div>
            </div>
            </div>
        </PokemonContainer>
        
        }
    </>)
}