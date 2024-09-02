imagen = document.querySelector("#img-mc");
let contador = 0;
imagen.addEventListener("click", () => {
  contador++;
  if (contador % 2 === 0) {
    imagen = document.querySelector("img");
    imagen.style.border = "2px solid";
  } else {
    imagen.style.border = "none";
  }
});

document.getElementById("verificar").addEventListener("click", () => {
  const cantidad1 = document.getElementById("input1").value;
  const cantidad2 = document.getElementById("input2").value;
  const cantidad3 = document.getElementById("input3").value;
  const resultado = document.getElementById("resultado");
  const total = Number(cantidad1) + Number(cantidad2) + Number(cantidad3);
  if (total < 11) {
    resultado.textContent = `Llevas ${total} stickers`;
  } else {
    resultado.textContent = "Llevas demasiados stickers";
  }
});

document.getElementById("btn-ingresar").addEventListener("click", () => {
  const select1 = document.getElementById("select1").value;
  const select2 = document.getElementById("select2").value;
  const select3 = document.getElementById("select3").value;
  const password = select1 + select2 + select3;
  const resultado = document.getElementById("result");
  if (password === "911") {
    resultado.textContent = "Password 1 correcto";
  } else if (password === "714") {
    resultado.textContent = "Password 2 correcto";
  } else {
    resultado.textContent = "Password incorrecto";
  }
});
