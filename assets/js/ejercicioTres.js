// assignamos variables
let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector(".resultado");
let btnSumar = document.querySelector("#btn-sumar");
let btnRestar = document.querySelector("#btn-restar");

// evento de click para la suma
btnSumar.addEventListener("click", function () {
  let suma = +(valor1.value) + +(valor2.value);
  resultado.innerHTML = suma;
});

// evento de click para la resta
btnRestar.addEventListener("click", function () {
  let resta = +(valor1.value) - +(valor2.value);
  // si el resultado nos da negatico, mostrar un 0
  if (resta < 0) {
    resultado.innerHTML = 0;
  } else {
    resultado.innerHTML = resta;
  }
});
