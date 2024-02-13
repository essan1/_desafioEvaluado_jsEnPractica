//
let inputNombre = document.querySelector("#nombre");
let inputAsunto = document.querySelector("#asunto");
let inputMensaje = document.querySelector("#mensaje");

//vacios donde debo generar la alerta, positiva o negativa
let resultadoPositivo = document.querySelector(".resultadoPositivo");
let errorNombre = document.querySelector(".errorNombre");
let errorAsunto = document.querySelector(".errorAsunto");
let errorMensaje = document.querySelector(".errorMensaje");

//
let form = document.querySelector("#formulario");

form.addEventListener("submit", (event) => {
    event.preventDefault(); //para que se queden los msjs en pantalla

  let inputName = inputNombre.value.trim();
  let inputMatter = inputAsunto.value.trim();
  let inputMessage = inputMensaje.value.trim();

  let patron = /^[A-Za-z\s]+$/; // ahora permite espacion en blanco

  if (!patron.test(inputName)) {
    errorNombre.innerHTML = "El nombre es requerido";
  } else {
    errorNombre.innerHTML = "";
  }

  if (!patron.test(inputMatter)) {
    errorAsunto.innerHTML = "El asunto es requerido.";
  } else {
    errorAsunto.innerHTML = "";
  }

  if (!patron.test(inputMessage)) {
    errorMensaje.innerHTML = "El mensaje es requerido.";
  } else {
    errorMensaje.innerHTML = "";
  }

  // Si todos los campos son válidos, muestra un mensaje de éxito
  if (
    patron.test(inputName) &&
    patron.test(inputMatter) &&
    patron.test(inputMessage)
  ) {
    resultadoPositivo.innerHTML = "Formulario enviado con éxito!";
  }
});
