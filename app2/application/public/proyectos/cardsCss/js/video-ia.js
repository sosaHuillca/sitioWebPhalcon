window.customElements.define('video-ia',
class Element extends HTMLElement {

  constructor(){super()
    this.attachShadow({mode:'open'})
  }

  connectedCallback(){
    this.render();
let x = 0.9,
  y = 1;

const observer = new IntersectionObserver(callback, { threshold: [x, y] });

function callback(points) {
  points.forEach( async (point) => {
    if(point.isIntersecting){
        await point.target.play()
    }else{
        point.target.pause()

    }
  });
}

const video = this.shadowRoot.querySelector('video');
observer.observe(video);


  }
    style(){
      return `
      div{
      display:grid;
      justify-items:center;
      }
      video{
      width:85%;
      }
    `

    }
//<video src="./images/pantalla-verde-29684.mp4" controls ></video>
    html(){
      return `
      <div>
        <video src="video/animation_letras.mp4" controls ></video>
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
