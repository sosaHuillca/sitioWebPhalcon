import './botonAgregar.js'
window.customElements.define(
'show-card',
class Element extends HTMLElement {
  
  static get observedAttributes(){
    return ['product'];
  }

  constructor(){
    super();
    this.attachShadow({mode:'open'});
  }

  attributeChangedCallback(attr, oldVal, newVal){
    const product = JSON.parse(newVal)
    Object.entries(product).forEach(([key, value]) => {
      if(key == 'name'){
        this.name = value
      }
      if(key == 'price')
        this.price = value
      if(key == 'productImage')
        this.thisImage = value
      if(key == 'Description')
        this.Description = value
      if(key == 'id')
        this.codigo = value

    });

  }

  connectedCallback(){
    this.shadowRoot.innerHTML =
      `
<style>
body{
overflow-y:hidden;
overflow-x:hidden;
}
img{

  width: 90%;
  width: 250px;
  height: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
h3{
text-align: center;
font-size: 1.5rem;
}
span{
font-size: 1.4rem;
display: block;
text-align: center;
color: steelblue;
margin: 14px;
}
.card-product{
top:0px;
position:fixed;
left:0;
z-index:100;
height:100vh;
width:100%;
background:white;
color:#333;
}
button{
border-radius: 10px;
font-size: 1.1rem;
font-weight: bold;
border: none;
}
.botonCerrar{
background: #0071e3;
color: white;
min-width: 46px;
min-height: 45px;
position: relative;

top: 15px;
left: 15px;

}
.botonAgregar{
padding: 10px;
margin-left: auto;
display: inherit;
margin-right: auto;
min-width: 114px;
background: palegreen;
}
p{
line-height: 1.4;
width: 90%;
margin-left: auto;
margin-right: auto;
color: lightslategray;
}
.card{
}

</style>

<div class="card-product">
  <div class=card>
    <button class=botonCerrar>X</button>
    <img src='${this.thisImage}' />
    <h3>${this.name}</h3>
    <span>Precio $/.${this.price}</span>
    <p>${this.Description}</p>
    <slot></slot>
  </div>
</div>
    `;

    // desactivando scroll del body
    document.body.style.overflowY = 'hidden'

    this.shadowRoot.addEventListener('click',e=>{
      // activando scroll del body
      if(e.target.nodeName == 'BUTTON' && e.target.textContent == 'X'){
        document.body.style.overflowY = 'visible'
        this.parentNode.removeChild(this)
      }
      if(e.target.nodeName == 'BUTTON' && e.target.textContent == 'agregar'){
        console.log('agregado')
      }
    })
  }
})
