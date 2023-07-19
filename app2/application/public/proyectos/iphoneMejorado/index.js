import './wc/card-product.js'

let url = 'products.json'

async function mifetch(URL){
  const response = await fetch(URL)
  const data = await response.json()
  render(data)
}

async function render(data){
  const fragment = new DocumentFragment()
  for(const product of data){
    const template = document.createElement('template')
    const { id, name, color, ROM, price, modeName, modelNumber, size, camera, Description, productImage } = product

    template.innerHTML = `
    <card-product
      _id="${id}"
      _name="${name}"
      color="${color}"
      rom="${ROM}"
      price="${price}"
      modename="${modeName}"
      modelnumber="${modelNumber}"
      _size="${size}"
      camera="${camera}"
      description="${Description}"
      productimage="${productImage}"
      >
      <btn-add slot="btn-add" code=${id}></btn-add>
      </card-product>
  `
    fragment.appendChild(template.content.cloneNode(true))
  }
  document.querySelector('main').appendChild(fragment)
}

mifetch(url)
