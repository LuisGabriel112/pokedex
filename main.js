window.onload = function() {
  // Código que quieres ejecutar después de que la página haya cargado completamente
  let x = 0
  while (x <= 11) {
    x++
    let aleatorioInt = Math.floor(Math.random()* 1008)
  console.log("La página se ha cargado completamente");
  let urlApi = `https://pokeapi.co/api/v2/pokemon/${aleatorioInt}`;

  // Manejo de errores
  fetch(urlApi)
    .then(respuesta => {
      if (!respuesta.ok) {
        throw new Error(`Error al obtener información del Pokémon: ${respuesta.statusText}`);
      }
      return respuesta.json();
    })
    .then(datosPokemon => idAleatorio(datosPokemon))
    .then(datosPokemon => separarTipo(datosPokemon) )
};

const idAleatorio = (datosPokemon) =>{
    let infoDiv = document.getElementById('pokemonInfo1');

  infoDiv.innerHTML += `
    
    <div class="card m-2" style="width: 18rem;">
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
  
    } 
  }


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

const separarTipo = (datosPokemon) =>{
  console.log('hola');
} 


addEventListener( "click", buscarPokemon );

const mostrarError = (contenedorNum, error) => {
    let infoDivId = `pokemonInfo${contenedorNum}`
    let infoDiv = document.getElementById(infoDivId)
    infoDiv.innerHTML= "No se encontró el Pokémon con ese nombre."
}