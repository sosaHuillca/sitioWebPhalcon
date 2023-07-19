import './card.js'
import './botonAgregar.js'
import './miCart.js'
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

function render(){
  let storage = JSON.parse(localStorage.getItem('products')) || []
  const fragment = new DocumentFragment()
  for (const key of Object.keys(storage)) {
    const botonAgregar = document.createElement('btn-agregar')
    botonAgregar.setAttribute('codigo',storage[key].id)
    const productsString = JSON.stringify(storage[key])
    const cardsProduct = document.createElement('cards-products')
    cardsProduct.setAttribute('render',productsString)
    cardsProduct.appendChild(botonAgregar)
    fragment.appendChild(cardsProduct)
  }
  document.querySelector('main').appendChild(fragment)
}


let agregadosStorage = JSON.parse(localStorage.getItem('productosAgregados')) || []


document.addEventListener('DOMContentLoaded',e=>{
  const shoping = document.createElement('mi-cart')
  document.body.appendChild(shoping)
  
  render()
})
render()
