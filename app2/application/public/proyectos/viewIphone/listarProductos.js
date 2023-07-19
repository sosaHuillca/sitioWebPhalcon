window.customElements.define(
'li-product',
class Element extends HTMLElement {
  
  static get observedAttributes(){
    return ['codigo','name','price','cantidad'];
  }

  constructor(){
    super();
    this.attachShadow({mode:'open'});
  }

  attributeChangedCallback(attr, oldVal, newVal){
    this[attr] = newVal
    //this.shadowRoot.querySelector('h3').textContent = this.name
    //this.shadowRoot.querySelector('span').textContent = this.price
    //this.shadowRoot.querySelector('strong').textContent = this.codigo
  }

  connectedCallback(){
    this.shadowRoot.innerHTML =
      `
    <style>
    div{
    display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
max-width: 700px;
border: 1px solid;
background:white;
color:#333;
    }
    </style>
<div class="card">
<strong>${this.codigo}</strong>
<h3>${this.name}</h3>
<span>$./ ${this.price}</span>
<code>${this.cantidad}</code>
<code>${eval(this.cantidad*this.price)}</code>
<button data-id='${this.codigo}'>eliminar</button>
</div>
    `;

    this.shadowRoot.querySelector('button').addEventListener('click',e=>{
      let storage = JSON.parse(localStorage.getItem('productosAgregados')) || []

      let array = storage.filter(item => {
        let idStorage = Object.entries(item)
        let [id] = idStorage
       if(id[0] !== e.target.dataset.id){
         return item
      }
      })
      document.querySelector('mi-cart').setAttribute('count',array.length)
      localStorage.setItem('productosAgregados',JSON.stringify(array))
      this.parentNode.removeChild(this)

    })
  }

})

