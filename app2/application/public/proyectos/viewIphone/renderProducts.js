import './cardProducts.js'
window.customElements.define(
'render-productos',
class Element extends HTMLElement {
  
  static get observedAttributes(){
    return ['url'];
  }

  constructor(){
    super();
    this.attachShadow({mode:'open'});

    let controller = new AbortController();

    (localStorage.getItem('products'))
      ? controller.abort()
      : fetch('./products.json', {
        signal: controller.signal
      })
      .then(data => data.json())
      .then(data => {
        localStorage.setItem('products',JSON.stringify(data))
      })
  }

  attributeChangedCallback(attr, oldVal, newVal){
  }

  connectedCallback(){
function render(){
  let storage = JSON.parse(localStorage.getItem('products')) || []
  const fragment = new DocumentFragment()
  for (const key of Object.keys(storage)) {
    const botonAgregar = document.createElement('btn-agregar')
    botonAgregar.setAttribute('codigo',storage[key].id)
    const productsString = JSON.stringify(storage[key])
    const cardsProduct = document.createElement('card-product')
    cardsProduct.setAttribute('render',productsString)
    cardsProduct.appendChild(botonAgregar)
    fragment.appendChild(cardsProduct)
  }
  document.querySelector('main').appendChild(fragment)
}

render()
    this.shadowRoot.innerHTML =
      `
    <style>
    </style>
    <div>
    </div>
    `;
  }

})

