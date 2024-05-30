const pokemonName = document.getElementById('pokemon-name');
const pokemonImage = document.getElementById('pokemon-image');
const hpStat = document.getElementById('hp');
const attackStat = document.getElementById('attack');
const defenseStat = document.getElementById('defense');
const spAtkStat = document.getElementById('sp-atk');
const spDefStat = document.getElementById('sp-def');
const speedStat = document.getElementById('speed');

const totalPokemon = 1010; // Update this if more Pokémon are added

function getPokemonOfTheDay() {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + 
                 (today.getMonth() + 1) * 100 + 
                 today.getDate();
    const pokemonId = (seed % totalPokemon) + 1; // Ensure ID is within range

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then(data => {
            pokemonName.textContent = data.name;
            pokemonImage.src = data.sprites.front_default;

            hpStat.textContent = data.stats[0].base_stat;
            attackStat.textContent = data.stats[1].base_stat;
            defenseStat.textContent = data.stats[2].base_stat;
            spAtkStat.textContent = data.stats[3].base_stat;
            spDefStat.textContent = data.stats[4].base_stat;
            speedStat.textContent = data.stats[5].base_stat;
        })
        .catch(error => {
            console.error("Error fetching Pokémon:", error);
            pokemonName.textContent = "Error!";
        });
}

getPokemonOfTheDay();