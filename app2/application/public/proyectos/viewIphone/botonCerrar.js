import './miCart.js'

window.customElements.define(
'btn-cerrar',
class Element extends HTMLElement {
  
  static get observedAttributes(){
    return ['codigo'];
  }

  constructor(){
    super();
    this.attachShadow({mode:'open'});
  }

  attributeChangedCallback(attr, oldVal, newVal){
    this.codigo = newVal
  }

  connectedCallback(){
    this.shadowRoot.innerHTML =
      `
    <style>
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
    </style>
    <button data-id='${this.codigo}'>agregar al carrito</button>
    `;
    this.shadowRoot.addEventListener('click', e =>{
      let storage = JSON.parse(localStorage.getItem('products')) || []
      const id = e.target
      console.log(id)
      let product = storage.filter(obj => obj.id == id.dataset.id)
      let agregadosStorage = JSON.parse(localStorage.getItem('productosAgregados')) || []
      agregadosStorage.push(product[0])
      localStorage.setItem('productosAgregados',JSON.stringify(agregadosStorage))
      document.querySelector('mi-cart').setAttribute('count',agregadosStorage.length)
    })
  }

})

