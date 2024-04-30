let card_container = document.getElementById("card-container");
const input = document.getElementById('BuscarPok');
const btn = document.getElementById('btn-pok');

const buscarPokemon = () => {
  let nombre = document.getElementById('BuscarPok').value.trim().toLowerCase();
  let urlApi = `https://pokeapi.co/api/v2/pokemon/${nombre}`;

  fetch(urlApi)
    .then(respuesta => {
      if (!respuesta.ok) {
        throw new Error(`Error al obtener información del Pokémon: ${respuesta.statusText}`);
      }
      return respuesta.json();
    })
    .then(datosPokemon => {
      mostrarPokemon(datosPokemon);
      bucleCartas(datosPokemon);
      
    })};

const mostrarPokemon = (datosPokemon) => {
  
  console.log(datosPokemon.name.toUpperCase());

  card_container.innerHTML = `
  <div class="col-md-3 mb-4"> <!-- Cada tarjeta ocupa 3 columnas en pantallas medianas y se deja un margen inferior -->
  <div class="card">
    <img src="${datosPokemon.sprites.front_default}" class="card-img-top" alt="${datosPokemon.name}">
    <div class="card-body">
      <h5 class="card-title">${datosPokemon.name}</h5>
      <p class="card-text">Tipo: ${datosPokemon.types[0].type.name}</p>
      <a href="#" class="btn btn-primary">Más detalles</a>
    </div>
  </div>
</div>
  `
};

const bucleCartas = (datosPokemon) => {
  let html = '';
  for (let i = 0; i < 12; i++) {
    html += `
    <div class="col-md-3 mb-4"> <!-- Cada tarjeta ocupa 3 columnas en pantallas medianas y se deja un margen inferior -->
      <div class="card">
        <img src="${datosPokemon.sprites.front_default}" class="card-img-top" alt="${datosPokemon.name}">
        <div class="card-body">
          <h5 class="card-title">${datosPokemon.name}</h5>
          <p class="card-text">Tipo: ${datosPokemon.types[0].type.name}</p>
          <a href="#" class="btn btn-primary">Más detalles</a>
        </div>
      </div>
    </div>
    `;
  }
  card_container.innerHTML += html;
};

btn.addEventListener('click', buscarPokemon); // Pasar la función buscarPokemon como callback al event listener

window.addEventListener('load', buscarPokemon);