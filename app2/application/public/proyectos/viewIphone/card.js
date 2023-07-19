import './showCard.js'
import './miCart.js'

window.customElements.define(
'cards-products',
class Element extends HTMLElement {
  
  static get observedAttributes(){
    return ['render'];
  }

  constructor(){
    super();
    this.attachShadow({mode:'open'});
  }

  attributeChangedCallback(attr, oldVal, newVal){
    const productos = JSON.parse(newVal)
    Object.entries(productos).forEach(([key, value]) => {
      if(key == 'name'){
        this.name = value
      }
      if(key == 'price')
        this.price = value
      if(key == 'productImage')
        this.thisImage = value
      if(key == 'id')
        this.id = value

    });

  }

  connectedCallback(){
    this.shadowRoot.innerHTML =
      `
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');

img{
width:200px;
height:200px;
display:block;
}
.card{
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius:10px;
padding: 15px;
font-size: 1.3rem;
display: grid;
place-content: center;
}
button{
background:#0071e3;
color:white;
min-width: 100px;
min-height: 40px;
border-radius: 10px;
font-size: 1.1rem;
}
h3{
font-family: 'Lato', sans-serif;
}
</style>

<div class="card">
<h3>${this.name}</h3>
<img src='${this.thisImage}'/>
<p>$./ ${this.price}</p>
<slot></slot>
</div>
    `;
    this.shadowRoot.querySelector('div').addEventListener('click', e =>{
      if(e.target.nodeName == 'BTN-AGREGAR'){
        return
      }else{
        let storage = JSON.parse(localStorage.getItem('products')) || []
        let product = storage.filter(obj => obj.id == e.target.id)
        const botonAgregar = document.createElement('btn-agregar')
        botonAgregar.setAttribute('codigo',product[0].id)
        const string = JSON.stringify(product[0])
        const miTag = document.createElement('show-card')
        miTag.setAttribute('product',string)
        miTag.appendChild(botonAgregar)
        document.body.appendChild(miTag)
      }
    })

  }
})
