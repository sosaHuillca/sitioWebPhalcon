window.customElements.define('results-summary',
class Element extends HTMLElement {

  constructor(){super()
    this.attachShadow({mode:'open'})
  }

  connectedCallback(){
    this.render();
  }
  style(){
    return `
:host{
  font-family: 'Hanken Grotesk', sans-serif;
}

@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;700;800&display=swap');
.center-grid{
  display: grid;
  justify-items:center;
}
.card{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  padding-bottom: 10px;
}
.view{
border-radius: 36px;
width:90%;
min-height: 330px;
margin: 10px 0 10px 10px;
}
.view h3+p{
  position:relative;
}
.view h3+p::before{
  position: absolute;
  top: -17px;

  width: 120px;
  height: 120px;

  border-radius: 50%;
}
.view p:last-child{
  width: 70%;
}
.view > span {
margin-top:20px;
}

.score{
  display: grid;
  gap:10px;
  margin:0;
  width:90%;
}
.score{
  margin: 20px;
  width:80%;
}
.info-sumary{
padding: 7px;
display: flex;
align-items: center;
justify-content:space-between;
border-radius: 10px;
}
.info-sumary div{
  display: flex;
}
.info-sumary img{
  margin-right: 10px;
}
.score+button{
place-self: center;
width: 200px;
border:none;
padding: 5px;
height: 50px;
border-radius: 10px;
font-size: 1.3rem;
}
.view h3+p span:first-child{
  font-weight: 800;
  font-size: 50px;
}
.view h3+p span:last-child{
font-weight: 800;
font-size: 1rem;
}
.view > span {
  font-size: x-large;
font-weight: 700;
}

.score>h2{
font-size: x-large;
margin: 10px 0px 0;
}

.score+button{
font-size: unset;
font-weight: bold;
}
.view h3+p::before{
  background: hsla(246, 86%, 57%, 1);
  background: linear-gradient(0deg, hsla(246, 86%, 57%, 1) 40%, hsla(255, 71%, 46%, 1) 100%);
  content: '';
}
.view p:last-child{
  text-align:center;
}
.view h3+p span{
  z-index:1;
}
@media screen and (min-width:500px){
  /*layaout*/
  .card{
    grid-template-columns:1fr 2fr;
    grid-template-rows: 80% 20%;
    grid-template-areas:
    "result sumary"
    "result button";
  }
  .view{
    grid-area:result;
    min-width:230px;

  }
  .score{
    grid-area:sumary;
  }
  .score>button{
    grid-area:button;
  }
}
@media screen and (min-width:800px){
  .card{
    max-width:700px;
    margin-left:auto;margin-right:auto;
  }
}
.score+button{
transition:background .3s linear; 
}
.score+button:hover{
background: #303b59;
}
.view{
  background: hsla(242, 82%, 55%, 1);

background: linear-gradient(0deg, hsla(242, 82%, 55%, 1) 0%, hsla(251, 100%, 63%, 1) 50%);

background: -moz-linear-gradient(0deg, hsla(242, 82%, 55%, 1) 0%, hsla(251, 100%, 63%, 1) 50%);

background: -webkit-linear-gradient(0deg, hsla(242, 82%, 55%, 1) 0%, hsla(251, 100%, 63%, 1) 50%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#312CEA", endColorstr="#6743FF", GradientType=1 );
}

.view > h3{
  color: #d4c5ff
}

.view h3+p span:first-child{
  color: white;
}
.view h3+p span:last-child{
   color: #8a7eff;
 }
.view > span {
color:white;
}
.view>p:last-child{
  color: #ada7ff;
}
.score>h2{
  color: #28303d;
}
.info-sumary div:last-child{
  color:#373741
}
.info-sumary div:last-child span{
  color:#9b949b
}

.reaction{
  background: #fff6f5;
}
.reaction img+span{
  color: #db6a6c;
}
.memory{
  background:#fffbf2;
}
.memory img+span{
  color: #ddaf4f;
}
.verbal{
  background: #f2fbfa;
}
.verbal img+span{
  color: #ddaf4f;
}
.visual{
  background: #f3f3fd;
}
.visual img+span{
  color: #2b2d78;
}

.score+button{
  background: hsla(246, 86%, 57%, 1);
  background: linear-gradient(0deg, hsla(246, 86%, 57%, 1) 40%, hsla(255, 71%, 46%, 1) 100%);
  place-self: center;
width: 200px;
padding: 5px;
height: 50px;
border-radius: 10px;
font-size: 1.3rem;
}
.score+button>span{
  color: white;
}
    `

  }
  html(){
    return `
  <div class="card center-grid">
    <section class="view center-grid">
      <h3>Your Result</h3>
      <p class="center-grid">
        <span>76</span>
        <span>of 100</span>
      </p>
      <span>Great</span>
      <p>You scored higher than 65% of the people who have taken these tests.</p>
    </section>
    <section class=score>
      <h2>Summary</h2>
      <div class="info-sumary reaction">
        <div>
          <img src="images/results-summary/images/icon-reaction.svg">
          <span>Reaction</span>
        </div>
        <div>
          80 <span>/ 100</span></div>
      </div>
      <div class="info-sumary memory">
        <div>
        <img src="images/results-summary/images/icon-memory.svg">
        <span>Memory</span>
        </div>
        <span>92 / 100</span>
      </div>
      <div class="info-sumary verbal">
        <div>
        <img src="images/results-summary/images/icon-verbal.svg">
        <span>Verbal</span>
        </div>
        <span>61 / 100</span>
      </div>
      <div class="info-sumary visual">
        <div>
        <img src="images/results-summary/images/icon-visual.svg">
        <span>Visual</span>
        </div>
        <span>72 / 100</span>
      </div>
    </section>
    <button><span>Continue</span></button>
  </div>
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
