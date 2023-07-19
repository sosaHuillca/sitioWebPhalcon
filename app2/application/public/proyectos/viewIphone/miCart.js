import './listarProductos.js'
import './listaCarrito.js'
window.customElements.define(
'mi-cart',
class Element extends HTMLElement {

  static get observedAttributes(){
    return ['count'];
  }

  constructor(){
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.innerHTML =
      `
    <style>
    img{
    width: 100%;
    display: block;
    }
    span{
    position: relative;
top: 5px;
left: 21px;
font-size: x-large;
color: white;
font-weight: bold;
    }
    img{
    width: 53%;
display: block;
color: white;
position: relative;
top: 1px;
left: 14px;
    }
    div{
    width: 70px;
border-radius: 50%;
background: teal;
height: 70px;
position: fixed;
bottom: 19px;
right: 5px;
    }
    </style>
    <div>
    <span>${this.count}</span>
    <img src='shopping-cart.png'/>
    </div>
    `;
  }

  attributeChangedCallback(attr, oldVal, newVal){
    this.count = eval(newVal)
    this.shadowRoot.querySelector('span').textContent = this.count
  }

  connectedCallback(){

    let agregadosStorage = JSON.parse(localStorage.getItem('productosAgregados')) || []
    this.shadowRoot.querySelector('span').textContent = agregadosStorage.length

    this.shadowRoot.addEventListener('click',e=>{
      let IdsStorage = JSON.parse(localStorage.getItem('productosAgregados')) || []

      let storage = JSON.parse(localStorage.getItem('products')) || []

      const idsStorage = storage.filter(obj => {
        const objId = obj.id;
        return IdsStorage.some(item => objId.toString() in item);
      });

      const listaCarrito = document.createElement('mi-carrito')
      let fragment = new DocumentFragment()

      for(const prop in idsStorage){
        let cantidad = Object.values(IdsStorage[prop])
        const liProduct = document.createElement('li-product')
        liProduct.setAttribute('codigo',idsStorage[prop].id)
        liProduct.setAttribute('name',idsStorage[prop].name)
        liProduct.setAttribute('price',idsStorage[prop].price)
        liProduct.setAttribute('cantidad',cantidad)
        fragment.appendChild(liProduct)
      }

      listaCarrito.appendChild(fragment)
      document.body.appendChild(listaCarrito)
    })
  }

})

