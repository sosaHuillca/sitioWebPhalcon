import api from "./wp_api.js";
import {SearchCard} from "../components/SearchCard.js";
import {PostCard} from "../components/PostCard.js";
import {ajax} from "./ajax.js";

export async function InfiniteScroll(){
  let query = localStorage.getItem("wpSearch"),
    apiURL,
    Component;//High Order Component (HOC) - https://es.reactjs.org/docs/higher-order-components.html

  window.addEventListener("scroll", async (e)=>{
    let {scrollTop, clientHeight, scrollHeight}=document.documentElement,
      {hash}=window.location;

    console.log(scrollTop,clientHeight,scrollHeight,hash);

    if(scrollTop + clientHeight >= scrollHeight){
      api.page++;

      if(!hash || hash === "#/"){
        apiURL = `${api.POSTS}&page=${api.page}`;
        Component = PostCard;
      } else if(hash.includes("#/search")){
        apiURL = `${api.SEARCH}${query}&page=${api.page}`;
        Component = SearchCard;
      } else {
        return false;
      }
      await ajax({
        url:apiURL,
        cbSuccess:(posts)=>{
          //console.log(posts);
          let html = "";
          posts.forEach((post) => (html += Component(post)));
          document.querySelector("#posts").insertAdjacentHTML("beforeend",html);
          document.querySelector(".loader").style.display = "none";
        }
      })
    }
  })
}
