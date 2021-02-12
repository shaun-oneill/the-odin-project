const type = [ "Grass", "Fire", "Water"];
const pokemon = [
    {
        "id": 001,
        "name": "Bulbasaur",
        "type": type[0]
    },
    {
        "id": 004,
        "name": "Charmander",
        "type": type[1]
    },
    {
        "id": 007,
        "name": "Squirtle",
        "type": type[2]
    }
]

let playerPokemon, computerPokemon, playerPoints = 0, computerPoints = 0;
const MAX_POINTS = 10;

// Start the game

// Player selects Pokemon
function playerSelect(selectedPokemon) {
    playerPokemon = selectedPokemon;
    computerSelect();
    document.getElementById("playerPokemon").innerHTML = playerPokemon.name;
    document.getElementById("computerPokemon").innerHTML = computerPokemon.name;
    battle();
}

// Computer selects Pokemon
function computerSelect() {
    computerPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
}

// See who wins
function battle() {
    if (
        (playerPokemon.type === "Grass" && computerPokemon.type === "Water") ||
        (playerPokemon.type === "Fire" && computerPokemon.type === "Grass") ||
        (playerPokemon.type === "Water" && computerPokemon.type === "Fire")
    ) {
        document.getElementById("winningPokemon").innerHTML = playerPokemon.name;
        playerPoints++;
        document.getElementById("playerPoints").innerHTML = playerPoints;
    } else if (playerPokemon.type === computerPokemon.type) {
        document.getElementById("winningPokemon").innerHTML = "no winner";
    } else {
        document.getElementById("winningPokemon").innerHTML = computerPokemon.name;
        computerPoints++;
        document.getElementById("computerPoints").innerHTML = computerPoints;
    }

    if (playerPoints === MAX_POINTS || computerPoints === MAX_POINTS) {
        if (playerPoints > computerPoints) {
            document.getElementById("matchWinner").innerHTML = "Player";
        } else {
            document.getElementById("matchWinner").innerHTML = "Computer";
        }
        document.getElementById("pokemon").style.display = "none";
        document.getElementById("commentary").style.display = "none";
    }
}
