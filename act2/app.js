
// Ejercicio 2 – Tabla de multiplicar personalizada 
// Crea un programa que: dado un número ingresado por el usuario, muestre su tabla de multiplicar hasta el 12. 
// El ciclo debe permitir repetir el proceso si el usuario desea consultar otra tabla. 


const prompt = require("prompt-sync")();

console.log("-- tabla de multiplicar --");

//se solicita al usuario que ingrese por teclado un numero para multiplicar 
let i = Number(prompt("ingrese un numero : "));
// se inicializa una variable para multiplicarla con el valor ingresado por el usuario
let j = 1;
//se crea un for para iterar hasta 12 
for (j = 1; j <= 12; j++) {
    //se imprime y se hace la operacion 
    console.log(i + "x" + j + "=" + (i * j));

}

