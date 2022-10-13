import { useEffect, useState } from "react"
import SearchBox from "./SearchBox"


function PokemonSelection() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchItem, setSearchItem] = useState('')
    const [searchResult, setSearchResult] = useState('')
    const [searchResultPhoto, setSearchResultPhoto] = useState('')

    const url = 'https://pokeapi.co/api/v2/pokemon'
    const photoUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

    //fetches random pokemon on load
    const getRandomPokemon = async () => {
        setLoading(true)
        setSearchResult('')
        setSearchResultPhoto('')
        const pokemonNumber = Math.floor(Math.random() * 898)
        try {
            const response = await fetch(`${url}/${pokemonNumber}`)
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`)
            }

            let data = await response.json()
            let name = data.name

            setSearchResult(name);
            setSearchResultPhoto(`${photoUrl}${pokemonNumber}.png`)
            setError(null)
        } catch (err) {
            setError(err.message);
            setSearchResult(null)
        } finally {
            setLoading(false)
        }
    }

    const getPokemon = async (pokemonName) => {
        const searchUrl = `${url}/${pokemonName}`
        try {
            let response = await fetch(searchUrl)
            if (response === 'Not Found') {
                setError('Pokemon not found')
                throw new Error(`Error: ${response.status}`)
            }
            response = await response.json()
            let name = response.name
            let photo = response.sprites.front_default
            setSearchResult(name)
            setSearchResultPhoto(photo)
            setError(null)
        } catch (err) {
            setError(err.message);
            setSearchResult(null)
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e) => {
        setSearchItem(e.target.value)
    }

    const handleSubmit = (e) => {
        setSearchItem('')
        getPokemon(searchItem)
        e.preventDefault()
    }


    useEffect(() => {
        getRandomPokemon()
    }, [])

    return <>
        <SearchBox onChange={handleChange} onSubmit={handleSubmit} searchItem={searchItem} />
        <div >
            {loading === true && <p>Loading...</p>}
            <ul>{!error ? searchResult : 'pokemon not found'}</ul>
            <div>
                <img src={searchResultPhoto}></img>
            </div>
            <button onClick={getRandomPokemon}>Random</button>
        </div>
    </>
}

export default PokemonSelection

