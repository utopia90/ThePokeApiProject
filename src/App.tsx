import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './views/Homepage/Homepage.view';
import PokemonDetailPage from './views/PokemonDetail/PokemonDetail.view';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />
          } />
          <Route path="/pokemondetail/:name" element={<PokemonDetailPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;