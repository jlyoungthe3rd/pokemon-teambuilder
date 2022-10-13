import { useState } from "react"
import SearchBox from "./SearchBox"
import PokemonList from "./PokemonList"
import PokemonTeam from "./PokemonTeam"

const url = `https://pokeapi.co/api/v2/pokemon`


function App() {
  const [selectedPokemon, setSelectedPokemon] = useState([])

  return <>

    <PokemonList selectedPokemon={selectedPokemon}
    />
    <PokemonTeam />
  </>
}

export default App