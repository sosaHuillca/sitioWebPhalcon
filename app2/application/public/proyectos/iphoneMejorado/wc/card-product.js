import './btn-add.js'
window.customElements.define('card-product',
class Element extends HTMLElement {

  static get observedAttributes(){
    return [
      "_id",
      "_name",
      "color",
      "rom",
      "price",
      "modename",
      "modelnumber",
      "_size",
      "camera",
      "description",
      "productimage"
    ];
  }

  style(){
    return `
    .card{
    border:1px solid;
    }
    img{
    width:150px;
    height:200px;
    }
    .card h3{
    display:none
    }
    .card.mostrar h3{
    display:block;
    }
    .card.mostrar{
      position:fixed;
      width:100%;
      height:100vh;
      background:blue;
      top:0;
      left:0;

      display: grid;
      place-content:center;
    }
    .card.mostrar .content{
      max-width: 500px;
      height:90vh;
  background: floralwhite;
  width: 90%;
  margin: auto;
padding: 5px 7px;
    }
    .card p,
    .card h3,
    .card h2
    {
    margin: 10px 0;
    }
    `;
  }
  html(){
    return `
    <style>
    ${this.style()}
    </style>
    <div class="card">
      <div class="content">
      <div>
        <h2>${this._name}</h2>
        <h3>capacidad ${this.rom}</h3>
        <p>
          <span>precio : ${this.price}</span>
          <span>modelo : ${this.modename}</span>
          <span>numero serie : ${this.modelnumber}</span>
          <span>tamanio : ${this._size}</span>
        </p>
      </div>
      <div>
        <img src="${this.productimage}" />
        <span>color : ${this.color}</span>
      </div>
      <div>
        <h3>Descripcion</h3>
        <p>${this.description}</p>
      </div>
      <div>
      <button>detalles</button>
      <slot name="btn-add"></slot>
      </div>
      </div>
    </div>
    `;
  }

  connectedCallback(){
    this.render()
    let boton = this.shadowRoot.querySelector('button')
    let card = this.shadowRoot.querySelector('.card')
    boton.addEventListener('click',()=>{
      card.classList.toggle('mostrar')
      if(card.classList.contains('mostrar')){
        boton.textContent = "ocultar"
        document.querySelector('body').style.overflow = "hidden"
      }else{
        boton.textContent = "detalles"
        document.querySelector('body').style.overflow = "visible"
      }
    })

  }

  constructor(){super();
    this.attachShadow({mode:'open'})
    this.render()
  }

  attributeChangedCallback(attr, oldVal, newVal){
    this[attr] = newVal
    this.render()
  }

  render(){
    this.shadowRoot.innerHTML = this.html()
  }

})

