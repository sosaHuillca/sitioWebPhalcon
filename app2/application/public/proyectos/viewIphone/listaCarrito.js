window.customElements.define(
'mi-carrito',
class Element extends HTMLElement {
  
  static get observedAttributes(){
    return [];
  }

  constructor(){
    super();
    this.attachShadow({mode:'open'});
  }

  attributeChangedCallback(attr, oldVal, newVal){
  }

  connectedCallback(){
    this.shadowRoot.innerHTML =
      `
    <style>
    div{
    position:fixed;
top:0;
left:0;
z-index:100;
height: 100vh;
width:100%;
background:white;
color:#333;
    }
    </style>
    <div>
    <button>cerrar</button>
    <h1>lista de productos adquiridos</h1>
    <slot></slot>
    </div>
    `;
    this.shadowRoot.querySelector('button').addEventListener('click',e=>{
      this.parentNode.removeChild(this)
    })


    this.shadowRoot.querySelector('div').addEventListener('click',e=>{

    let [span] = this.shadowRoot.querySelector('slot').assignedElements({flatten:true})
    if(span == undefined){
      console.log('lista vacia')
    }
    })
  }

})

