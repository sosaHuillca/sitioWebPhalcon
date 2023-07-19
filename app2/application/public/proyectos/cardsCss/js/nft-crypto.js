window.customElements.define('nft-crypto',
class Element extends HTMLElement {

  constructor(){super()
    this.attachShadow({mode:'open'})
  }

  connectedCallback(){
    this.render();
  }
  style(){
    return `
    <style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap');
/*
body{
  background:var(--main-BG);
  font-family:var(--font);
}
*/
:host{
  --main-BG: #0D192B;
  --card-BG: #14253D;
  --font: 'Outfit', sans-serif;
  --cl-blue-1: #8BACDA;
  --cl-blue-2: #00F2F2;
  --cl-white: #EEEEEE;

  --font-l: 300;
  --font-m: 400;
  --font-b: 600;
  --md: 18px;
}
.contentCard{
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  gap:20px;
}
.card{
  padding: 0px;
border-radius: 10px;
width:90%;
box-sizing:border-box;

}
.infoCard{
  display: flex;
justify-content: space-between;
padding:7px;
}
.infoCard div{
  display: flex;
}
.infoCard img{
  margin-right: 11px;
}
.avatarContent{
  display: flex;
  align-items:center;
}
.card hr{
  margin: 5px 5px 10px 5px;
}
.infoCard img{
  width: 20px;
height: 20px;
}
.avatarContent img{
  width: 45px;
margin: 10px 5px 10px;
height: 45px;
}
img{
  width:100%;
  height:100%;
}

.card{
  background:#14253D;
}
.imagenCard img{
border-radius:10px 10px 0 0;
}
.imagenCard h2{
  color: white;
font-size: larger;
font-weight: revert-layer;
margin:7px;
}
.imagenCard p{
  color: var(--cl-blue-1);
font-size: unset;
font-weight: lighter;
padding:0 10px;
margin:5px 0;
}

.infoCard div:first-child span{
  color: var(--cl-blue-2);
font-weight: bold;
}
.t-resalt{
  color: var(--cl-blue-1);
  font-weight: inherit;
  font-size: medium;
}

.avatarContent p{
  color: white;
  margin:10px 0px;
}
    </style>

    `

  }
  html(){
    return `
  <div class="card">
    <div class=imagenCard>
      <img src="./images/nft-crypto/image-equilibrium.jpg">
      <h2>Equilibrium #3429</h2>
      <p>Our Equilibrium collection promotes balance and calm.</p>
    </div>
    <div class=infoCard>
      <div>
        <img src="./images/nft-crypto/icon-ethereum.svg">
        <span>0.041 ETH</span>
      </div>
      <div>
        <img src="./images/nft-crypto/icon-clock.svg">
        <span class="t-resalt">3 days left</span>
      </div>
    </div>
    <hr>
    <div class=avatarContent>
      <img src="./images/nft-crypto/image-avatar.png">
      <p><span class="t-resalt">Creation of </span>Jules Wyvern</p>
    </div>
  </div>
    `
  }
  render(){
    this.shadowRoot.innerHTML = `
    ${this.style()}
    ${this.html()}
    `
  }

})
