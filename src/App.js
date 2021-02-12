import React, {useState} from "react";
import axios from "axios";
import './App.css';

const App = () => {

const [pokemon, setPokemon] = useState("pikachu");
const [pokemonData, setPokemonData] = useState([]);
const [pokemonType, setPokemonType] = useState("");

const getPokemon = async () => {
  const toArray = [];
  try {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const res = await axios.get(url);
  toArray.push(res.data);
  setPokemonType(res.data.types[0].type.name)
  setPokemonData(toArray);
  console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const handleChange = (e) => {
  setPokemon(e.target.value.toLowerCase());
};

const handleSubmit = (e) => {
e.preventDefault();
getPokemon();
};


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" onChange={handleChange} placeholder="Enter Pokemon Name" />
         </label>
      </form>
        {pokemonData.map((data) => {
          return(
            <div className="container">
              <img src="" alt=""/>
              <div className="divtable">
                <div className="divtableBody"></div>
                <div className="divtableRow">
                  <div className="divtableCell">Type</div>
                  <div className="divtableCell">{pokemonType}</div>
                </div>
                <div className="divtableRow">
                  <div className="divtableCell">Type</div>
                  <div className="divtableCell">{""}{Math.round(data.height * 3.9)}</div>
                </div>
                <div className="divtableRow">
                  <div className="divtableCell">weight</div>
                  <div className="divtableCell">{" "} {Math.round(data.weight / 4.3)} lbs</div>
                </div>
                <div className="divtableRow">
                  <div className="divtableCell">Type</div>
                  <div className="divtableCell">{pokemonType}</div>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  );
};

export default App;
