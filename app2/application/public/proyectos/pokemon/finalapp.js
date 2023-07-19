const list = document.querySelector(".products-container")
const btnRight = document.querySelector("#right")
const btnLeft = document.querySelector("#left")

let x = 0.9,
  y = 1;
function callback(points){
  points.forEach( async (point) => {
    if(point.isIntersecting){
      await point.target.play()
    }else{
        point.target.pause()
    }
  });
}
const observer = new IntersectionObserver(callback,{ threshold:[x,y] });

const fetchPokemon = async (url) => {
  const response = await fetch(url);
  const results = await response.json()
    list.classList.add('hide');
  renderPokemon(results.results)
  btnRight.setAttribute('data-url',results.next)
  btnLeft.setAttribute('data-url',results.previous)
    window.scrollTo(0, 0); 
    list.classList.remove('hide');
    localStorage.setItem('lastPageUrl', url);
}

//let urlY ="https://pokeapi.co/api/v2/pokemon" 
//fetchPokemon(urlY)
let urlY = "https://pokeapi.co/api/v2/pokemon";
const lastPageUrl = localStorage.getItem('lastPageUrl');

if (lastPageUrl) {
  urlY = lastPageUrl;
}

fetchPokemon(urlY);


const renderPokemon = async (pokemon) => {
  try{
        list.classList.add('hide');
    const promises = pokemon.map(async item => {
      const response = await fetch(item.url);
      if (response.ok) {
        const pokemonData = await response.json();
        /*habilidades*/
        const abilitiesPromises = pokemonData.abilities.map(async poke =>{
          const response = await fetch(poke.ability.url);
          if (response.ok) {
            const data = await response.json();
            const es = data.names.find(data => data.language.name === "es");
            return es.name;
          } else {
            throw new Error('Error en la petición del contenido.');
          }
        });
        /*tipos*/
        const typesPromises = pokemonData.types.map(async poke =>{
          const response = await fetch(poke.type.url);
          if (response.ok) {
            const data = await response.json();
            const es = data.names.find(data => data.language.name === "es");
            return es.name;
          } else {
            throw new Error('Error en la petición del contenido.');
          }
        });
        /*especies*/
        async function getSpiece(){
          const urlspiece = await fetch(pokemonData.species.url);
          if (urlspiece.ok) {
            const spice = await urlspiece.json();
            const es = spice.flavor_text_entries.find(data => data.language.name === "es");
            return es.flavor_text
          } else {
            throw new Error('Error en la petición del contenido.');
          }
        }
        /*color*/
        async function getColor(){
          const urlspiece = await fetch(pokemonData.species.url);
          if (urlspiece.ok) {
            const spice = await urlspiece.json();
            return spice.color.name
          } else {
            throw new Error('Error en la petición del contenido.');
          }
        }
        /*estadistica*/
        const [stats] = pokemonData.stats
        const nombre = pokemonData.name

        /*image*/
        let img1 = pokemonData.sprites.front_default;
        let img2 = pokemonData.sprites.other.dream_world.front_default;
        const img = img2

        const habilidad = await Promise.all(abilitiesPromises);
        const tipo = await Promise.all(typesPromises);


        return {
          habilidad,
          tipo,
          hp: stats.base_stat,
          imagen: img,
          especie: await getSpiece(),
          nombre,
          color: await getColor(),
          id:pokemonData.id,
          peso: pokemonData.weight,
          experiencia: pokemonData.base_experience,
        };

      }
      else { throw new Error('Error en la petición del contenido.'); }
    })
    const results = await Promise.all(promises);
    const productsContainer = document.querySelector('.products-container');
    list.innerHTML = results.map(pokemon =>{
      return `
        <div class="card ${pokemon.color}">
  <img style="background-color:${pokemon.color}" src="${pokemon.imagen}" alt="Pokémon ${pokemon.nombre}" class="card-image">
  <div class="card-content">
    <h2 class="card-title">${pokemon.nombre}</h2>
    <p class="card-description">${pokemon.especie}</p>
    <p class="card-type">Type: ${pokemon.tipo}</p>
    <p class="card-stats">HP: ${pokemon.hp} | Attack: ${pokemon.experiencia} | peso: ${pokemon.peso}</p>
  </div>
</div>
        `
    }).join(' ')
        list.classList.remove('hide');
  } catch(error) {
    console.error(error)
  }
}
btnRight.addEventListener("click",(e)=>{
  fetchPokemon(e.target.dataset.url)
})
btnLeft.addEventListener("click",(e)=>{
  fetchPokemon(e.target.dataset.url)
})

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".buttons").style.top = "0";
  } else {
    document.querySelector(".buttons").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

window.addEventListener('scroll', function() {
  // Verificar si se ha llegado al final del scroll
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    // Ejecutar la función cuando se llegue al final del scroll
    document.querySelector(".buttons").style.top = "0";
  }
});

