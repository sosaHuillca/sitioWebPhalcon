export function ContactForm(){
  let form = document.createElement('form');
  form.classList.add("contact-form");
  form.innerHTML = `
  <legend>Envianos tus comentarios</legend>
  <input type=text name=name placeholder="escribe tu nombre" title="Nombre solo aceptan letras y seapcios en blanco" pattern="^[A-Za-z\s]+$" required>
  `
  let style = document.getElementById("dynamic-style");
  style.innerHTML = `
    .contact-form{
      border:1px solid green;
    }
  `
  return form;
}
