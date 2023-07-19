window.customElements.define('order-summary',
class Element extends HTMLElement {

  constructor(){super()
    this.attachShadow({mode:'open'})
  }

  connectedCallback(){
    this.render();
  }
  style(){
    return `
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap');
body{
  font-family: 'Red Hat Display', sans-serif;
}

img{
  width:100%;
}
.card{
  border-radius: 15px;
  gap:15px;
  width: 90%;
  box-sizing: border-box;
  overflow: hidden;
  display:grid;
  min-height:493px;
  justify-items:center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.plan{
  padding: 17px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 75%;
  border-radius: 10px;
}
.plan div{
  display: grid;
  text-align: center;
}
.card p{

  margin:5px;
  width: 80%;
}
.plan img{
  width: 40px;
}
.card h3{
  text-align: center;
  font-weight: 800;
  margin:5px;
}
.card p{
  font-size: small;
  text-align: center;
  line-height: 1.5;
}
.plan div{
  font-size: smaller;
}
.plan>a{
  font-size: smaller;
  font-weight: bold;
}

.card>button{
  border: none;
  font-size: small;
  font-weight: bold;
  padding: 10px;
  min-width: 200px;
  border-radius: 8px;
}
.card>button:last-child{
  margin-bottom: 18px;
}
.card>button:hover{
  background: #382ae1;
color: white;
}
.card{
  background: white;
}

.card p{
  color: #979eaf;
}
.plan{
  background: #f7f8fd;
}
.plan span{
  color: #8991a6;
}

.card>button{
  color:#79829d;
}
.card>button.cta{
  background: #382ae1;
  color: white;
}
.plan div{
  color: #1e2435;
}
.card h3{

  color: #000b29;
}

.plan>a{
  color: #4336bc;
}
    `

  }
  html(){
    return `
  <section class="card">
    <img src="./images/order-summary/illustration-hero.svg">
    <h3>Order Summary</h3>
    <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
    <div class="plan">
      <img src="./images/order-summary/icon-music.svg">
      <div>
        <strong>Annual Plan</strong>
        <span>$59.99/year</span>
      </div>
      <a href="">Change</a>
    </div>
    <button class="page cta">Proceed to Payment</button>
    <button class="cancel">Cancel Order</button>
  </section> 
    `
  }
  render(){
    this.shadowRoot.innerHTML = `
    <style>
    ${this.style()}
    </style>
    ${this.html()}
    `
  }

})
