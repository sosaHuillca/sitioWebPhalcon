import {Header} from "./components/Header.js";
import {Router} from "./components/Router.js";
import {Posts} from "./components/Posts.js";
import {Loader} from "./components/Loader.js";
import {InfiniteScroll} from "./helpers/infinite_scroll.js";

export function App(){
  let root = document.getElementById("root");
  root.innerHTML = null;
  root.appendChild(Header());
  root.appendChild(Posts());
  root.appendChild(Loader());

  Router();
  InfiniteScroll();
}
