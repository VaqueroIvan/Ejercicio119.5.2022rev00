//Written by: Ivan Vaquero;
//Title: Calculator;
//Declarations of variables;
let btnCalcular = <HTMLButtonElement>document.getElementById("btnCalcular");

let numero1: number = <HTMLInputElement>document.getElementById("numero1");
let valor1: number = 0;

//Main
btnCalcular.addEventListener("click", () => {
  valor1 = Number(numero1.value);

  if (valor1 > 8) {
    document.getElementById("resultado").value = "Excelente";
  }
  if (valor1 < 9 && valor1 > 4) {
    document.getElementById("resultado").value = "Aprobado";
  }
  if (valor1 < 5) {
    document.getElementById("resultado").value = "Desaprobado";
  }
});
