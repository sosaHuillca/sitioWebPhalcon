window.customElements.define('btn-regresar',
class Element extends HTMLElement {
  
  static get observedAttributes(){
    return [
      "mihref",
      "miname"
    ];
  }

  html(){
    return `
    <a href="${this.mihref}">${this.miname}</a>
    `;
  }

  style(){
    return `
    a{
      display: block;
      background: midnightblue;
      color: white;
      font-size: 1.6rem;
      min-height: 50px;
      margin-bottom: 10px;
      text-align: center;
      line-height: 1.8;
      text-decoration: none;
      border-radius: 15px;
    }
    `;
  }

  connectedCallback(){
  }

  constructor(){super();
    this.attachShadow({mode:'open'});
    this.render();
  }

  attributeChangedCallback(attr, oldVal, newVal){
    this[attr] = newVal
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML =  `
      <style>${this.style()}</style>
      ${this.html()}
    `;
}

})

