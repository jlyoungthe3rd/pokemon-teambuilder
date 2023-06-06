import { useState } from "react"
import PokemonList from "./components/PokemonList"
import './styles/styles.css'

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState([])

  return <>

    <PokemonList selectedPokemon={selectedPokemon}
    />
  </>
}

export default App