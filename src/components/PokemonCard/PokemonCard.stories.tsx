import React from 'react';
import { storiesOf } from '@storybook/react';
import PokemonCard from './PokemonCard';

export const pokemonCard = {
  name: 'Pikachu',
  id: 1,
  types: [ {type : {name: 'electric', url: ''}}],
  abilities: [{ability: {name: 'Static Lightning Rod', url: ''}}],
};

storiesOf('PokemonCard', module)
  .add('default', () => <PokemonCard {...pokemonCard} />)