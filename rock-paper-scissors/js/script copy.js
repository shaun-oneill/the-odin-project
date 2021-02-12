// Available Pokemon
const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle'];

// Functions
function playerChoice(playerPokemon) {
    document.getElementById("playerChoice").innerHTML = playerPokemon;
    pokeBattle(playerPokemon, computerChoice(pokemon));
}

function computerChoice(pokemonChoices) {
    return pokemonChoices[Math.floor(Math.random() * pokemonChoices.length)];
}

function pokeBattle(playerPokemon, computerPokemon) {
    // Computer chooses Pokemon once Player has
    document.getElementById("computerChoice").innerHTML = computerPokemon;

    // shorthand Pokemon variables
    const BUL = pokemon[0];
    const CHA = pokemon[1];
    const SQU = pokemon[2];
    
    // logic gates
    if (
        (playerPokemon === BUL && computerPokemon === SQU) ||
        (playerPokemon === CHA && computerPokemon === BUL) ||
        (playerPokemon === SQU && computerPokemon === CHA)
    ) {
        document.getElementById("winner").innerHTML = "Player";
        return "Win";
    } else if (
        (playerPokemon === computerPokemon)
    ) {
        document.getElementById("winner").innerHTML = "No one";
        return "Tie";
    } else {
        document.getElementById("winner").innerHTML = "Computer";
        return "Lose";
    }
}

function startBattle() {
    document.getElementById("arena").style.display = "block";
}


startBattle();