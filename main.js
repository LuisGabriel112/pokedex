// Buscar Pokémon
const buscarPokemon = (contenedorNum) => {
  let inputId = `pokemonInput${contenedorNum}`;
  let nombre = document.getElementById(inputId).value.trim().toLowerCase();
  let urlApi = `https://pokeapi.co/api/v2/pokemon/${nombre}`;

  // Manejo de errores
  fetch(urlApi)
    .then(respuesta => {
      if (!respuesta.ok) {
        throw new Error(`Error al obtener información del Pokémon: ${respuesta.statusText}`);
      }
      return respuesta.json();
    })
    .then(datosPokemon => mostrarPokemon(datosPokemon, contenedorNum))
    .then(datosPokemon => generar_poks(datosPokemon))
    .catch(error => mostrarError(contenedorNum, error)); // Llama a la función de manejo de errores
};

// Mostrar información (asumiendo que mostrarError está definida en otro lugar)
const mostrarPokemon = (datosPokemon, contenedorNum) => {
  let infoDivId = `pokemonInfo${contenedorNum}`;
  let infoDiv = document.getElementById(infoDivId);

  infoDiv.innerHTML = `
    
    <div class="card" style="width: 18rem;">
  <img class = "PK-img" src="${datosPokemon.sprites.other["official-artwork"].front_default}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title PK-name">${datosPokemon.name.toUpperCase()}</h5>
    <p class="card-text">id: ${datosPokemon.id}</p>
    <p class="card-text">tipo: ${datosPokemon.types.map((type) => type.type.name)}</p>
    <p></p>
    <a href="#" class="btn btn-primary">añadir a mi equipo</a>
  </div>
</div>
    `;
};


const mostrarError = (contenedorNum, error) => {
    let infoDivId = `pokemonInfo${contenedorNum}`
    let infoDiv = document.getElementById(infoDivId)
    infoDiv.innerHTML= "No se encontró el Pokémon con ese nombre."
}

const idAleatorio = () =>{
  let aleatorioInt = Math.floor(Math.random()* 1008)

  let i = 0
  while (i <= 12) {
    i++
    aleatorioInt
    console.log(aleatorioInt);
  }
} 

idAleatorio()