// seleccionamos el cuadro principal que debe cambiar de color
let caja = document.querySelector("#caja");

// le asigno un let a cada boton individualmente
let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let btn3 = document.querySelector("#btn-3");
let btn4 = document.querySelector("#btn-4");
let btn5 = document.querySelector("#btn-5");
let btn6 = document.querySelector("#btn-6");

// A cada botón le añadimos un evento de clic
btn1.addEventListener("click", function () {
  caja.style.backgroundColor = btn1.style.backgroundColor;
});
btn2.addEventListener("click", function () {
  caja.style.backgroundColor = btn2.style.backgroundColor;
});
btn3.addEventListener("click", function () {
  caja.style.backgroundColor = btn3.style.backgroundColor;
});
btn4.addEventListener("click", function () {
  caja.style.backgroundColor = btn4.style.backgroundColor;
});
btn5.addEventListener("click", function () {
  caja.style.backgroundColor = btn5.style.backgroundColor;
});
btn6.addEventListener("click", function () {
  caja.style.backgroundColor = btn6.style.backgroundColor;
});
