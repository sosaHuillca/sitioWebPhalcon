import './miCart.js'

window.customElements.define(
'btn-agregar',
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
background:#0071e3;
color:white;
min-width: 100px;
min-height: 40px;
border-radius: 10px;
font-size: 1.1rem;
}
    </style>
    <button data-id='${this.codigo}'>agregar al carrito</button>
    `;
      this.shadowRoot.addEventListener('click', e =>{
        let storage = JSON.parse(localStorage.getItem('products')) || []
        const id = e.target
        let [product] = storage.filter(obj => obj.id == id.dataset.id)
        let agregadosStorage = JSON.parse(localStorage.getItem('productosAgregados')) || []
        //console.log('recogidoStorage',agregadosStorage)//{3:12}

        const Product = agregadosStorage.find(obj => Object.keys(obj)[0] == product.id);
        //console.log('objeto encontrado',Product)
        if(Product){
          let idProduct= Object.keys(Product)
          idProduct = idProduct[0]
          console.log('idProcuto',idProduct)
          let [idArray]= Object.entries(Product)
          idArray[1]+=1
          let nuevo = agregadosStorage.map(item =>{
            if(Object.keys(item)[0] == idProduct){
              return {
                [Object.keys(item)[0]]:idArray[1]
              }
            }
            return item
          })
          localStorage.setItem('productosAgregados',JSON.stringify(nuevo))
          document.querySelector('mi-cart').setAttribute('count',nuevo.length)
        }else{
          agregadosStorage.push({[product.id]:1})
          localStorage.setItem('productosAgregados',JSON.stringify(agregadosStorage))
          document.querySelector('mi-cart').setAttribute('count',agregadosStorage.length)

        }

      })
    }

  })
