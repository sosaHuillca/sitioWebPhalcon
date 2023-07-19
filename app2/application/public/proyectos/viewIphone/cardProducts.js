
window.customElements.define(
'card-product',
class Element extends HTMLElement {
  


  constructor(){
    super();
    this.attachShadow({mode:'open'});
this.shadowRoot.innerHTML =`
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');

img{
width:200px;
height:200px;
display:block;
}
.card{
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius:10px;
padding: 15px;
font-size: 1.3rem;
display: grid;
place-content: center;
}
button{
background:#0071e3;
color:white;
min-width: 100px;
min-height: 40px;
border-radius: 10px;
font-size: 1.1rem;
}
h3{
font-family: 'Lato', sans-serif;
}
</style>

<div class="card">
<h3>${this.name}</h3>
<img src='${this.src}'/>
<p>$./ ${this.price}</p>
</div>
`
  }

  static get observedAttributes(){
    return ['name','price','src'];
  }
  attributeChangedCallback(attr, oldVal, newVal){
    this[attr] = newVal
    this.shadowRoot.querySelector('h3').textContent = this.name
    this.shadowRoot.querySelector('img').setAttribute('src',this.src)
    this.shadowRoot.querySelector('p').textContent = this.price
  }

  connectedCallback(){
  }
})

document.querySelector('card-product').setAttribute('name','luis angel sosa huillca')
document.querySelector('card-product').setAttribute('src','https://cdn.pixabay.com/photo/2023/04/23/09/40/bird-7945398_960_720.jpg')
