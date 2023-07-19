window.customElements.define('btn-add',
class Element extends HTMLElement {

  constructor(){super()
    this.attachShadow({mode:'open'})
    this.render()
  }

  static get observedAttributes(){
    return ["code"];
  }

  attributeChangedCallback(attr, oldVal, newVal){
    this[attr] = newVal
    this.render()
  }

  connectedCallback(){
    this.render()
  }
  html(){
    return `
    <button id=${this.code}>agregar</button>
    `
  }
  render(){
    this.shadowRoot.innerHTML = this.html()

  }

})

