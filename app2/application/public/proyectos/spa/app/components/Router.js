import api from "../helpers/wp_api.js";
import {ajax} from "../helpers/ajax.js";
import {PostCard} from "./PostCard.js";
import {Post} from "./Post.js";
import {SearchCard} from "./SearchCard.js";
import {ContactForm} from "./ContactForm.js";

export async function Router(){
  let {hash} = location;
  let posts = document.getElementById("posts");

  posts.innerHTML = null;

  if(!hash || hash === "#/"){
    await ajax({
      url:api.POSTS,
      cbSuccess:(posts)=>{
        let html = "";
        posts.forEach((post) => (html += PostCard(post)));
        document.querySelector("#posts").innerHTML = html;
      },
    })
  } else if(hash.includes("#/search")){
    posts.innerHTML = `<h2>Seccion del Buscador</h2>`;
    let query = localStorage.getItem("wpSearch");

    if(!query) return false;

    await ajax({
      url:`${api.SEARCH}${query}`,
      cbSuccess: (search)=>{
        let html = "";
        if(search.lenght === 0){
          html =`
            <p class="error">
              No existen resultados de busqueda para el termino
              <mark>${query}</mark>
            </p>
          `;
        } else{
          search.forEach(post => (html += SearchCard(post)));
        }
        document.querySelector("#posts").innerHTML = html;
      }
    })
  } else if(hash === "#/contacto"){
    posts.appendChild(ContactForm());
  } else {
    posts.innerHTML = "<h2>Aqui cargara el contenido de le Post previamente seleccionado</h2>";
    await ajax({
      url:`${api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess:(post)=>{
        document.querySelector("#posts").innerHTML = Post(post);
      }
    })
  }
  document.querySelector(".loader").style.display = "none";
}
