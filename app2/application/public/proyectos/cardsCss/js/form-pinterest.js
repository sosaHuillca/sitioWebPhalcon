window.customElements.define('form-pinterest',
class Element extends HTMLElement {

  constructor(){super()
    this.attachShadow({mode:'open'})
  }

  connectedCallback(){
    this.render();
  }
  style(){
    return `
@import url('https://fonts.googleapis.com/css2?family=Cantarell:wght@400;700&display=swap');
:host{
  font-family: 'Cantarell', sans-serif;
}
a{
  text-decoration:none;
}
h2{
margin: 0 0 10px 0px;
text-align:center;
}
.card{
border-radius: 25px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
padding:10px;
max-width:500px;
}
.card form{
display: grid;
gap: 10px;
width: 90%;
margin: auto;
}

label{
  display: grid;
font-size: unset;
font-weight: normal;
}

.card>i{
font-size: 3.3rem;
}
.input{
  border: 2px solid gainsboro;
border-radius: 10px;
padding: 10px;
font-size: medium;
color: silver;
margin-top: 5px;
}
label{
  position:relative;
}
input+i{
    position: absolute;
  top: 45px;
  right: 20px;
  font-size: smaller;
  opacity: 0.8;
}
form a{
  color: #1877f2;
font-size: small;
font-weight: bold;
}

form button{
border: none;
padding: 5px;
min-width: 200px;
border-radius: 16px;
color: white;
font-weight: bold;
font-size: smaller;
height: 45px;
width: 300px;
margin-left: auto;
margin-right: auto;
}

form p{
  margin: .1px;
  text-align:center;
}
.card>p{
color: #8b8b8b;
font-size: 0.8rem;
font-weight: normal;
text-align: center;
line-height: 1.2;
margin: 10px;
}

.card hr{
  width: 50%;
color: gainsboro;
}
.card{
  background:white;
}

.btn-login{

background: #e60023;
}
.btn-facebook{
background:#1877f2;
}
.btn-google{
background:#f7faff;
color: slategray;
border:1px solid #dadce0;
}
.btn-google i{
  color: tomato;
}
p>a,
p>strong{
  color:black;
  font-weight: bold;
}
    `

  }
  html(){
    return `
  <div class="card">
    <i class="fa-brands fa-pinterest"></i>
    <h2>Log in to see more</h2>
    <form>
      <label>Email
        <input class='input' type=text placeholder="Email"></label>
      <label>Password
        <input class='input'type=text placeholder="Password"><i class="fa-solid fa-eye"></i></label>
      <a href="">Forgot your password?</a>
      <button class='btn-login'>Log in</button>
      <p>OR</p>
      <button class='btn-facebook'><i class="fa-brands fa-facebook"></i> Continue With Facebook </button>
      <button class='btn-google'><i class="fa-brands fa-google"></i> Continue With Google </button>
    </form>
    <p>By continuing, you agree to Pinterest's <strong>Terms of Service</strong> and acknowledge you've read our <strong>Privacy Policy. Notice at collection</strong></p>
    <hr>
    <p>Already a member? <a href="">Not on Pinterest yet? Sign Up</a></p>
    <p>Are you a business? <a href="">Get started here!</a></p>
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
