Pokemon Team Builder App
-an app that lets you create a team of 6 Pokemon

tools:
Pokemon API
React
Jest

features:
user can search pokemon api using a string(name)
user can interact with UI to add Pokemon to a list by clicking an item(Pokemon) in the returned list
user can interact with UI to remove Pokemon from list by clicking on an item(Pokemon) in their team list

Task:
create function that accepts a string param that fetches list of Pokemon from API endpoint
    -function should be called onLoad to render random Pokemon

UI searchbox element that passes search string into fetchPokemon function
    -pokemonList UI element should update onChange when list is less than 10 items(Pokemon)
    - should only accept characters

UI list element that renders returned Pokemon from fetchPokemon function

UI list element that shows user's selected Pokemon
    -use memoization to optimize it

bonus stuff:
search list should display picture of pokemon to interact with (also name should be there)

team list should display 'game version' picture of pokemon alongside it's name in the list

reset button to remove pokemon from list

onMouseOver you'll see extra information on Pokemon