
// Ejercicio 1 – Números primos 
// Crea un programa que: muestre todos los números primos entre 1 y 50. 
// Utiliza ciclos y condicionales para verificar qué números cumplen la condición de ser primos. 


// Inicializamos la variable num en 1 será el número que vamos a evaluar
let num = 1;

// Inicializamos la variable i en 1 será el divisor en el segundo ciclo
let i = 1
// Primer ciclo for: recorre todos los números desde 1 hasta 50
for(num = 1; num <= 50; num++){
        // Variable que contará cuántos divisores tiene el número actual
    let divisor = 0;
        // Segundo ciclo for anidado prueba todos los posibles divisores desde 1 hasta 50
    for(i = 1; i <= 50; i++){
        // Si el número actual es divisible por i (residuo 0), aumentamos el contador de divisores
        if(num % i === 0){
            divisor++;
    
        }     
}
// Un número primo solo tiene exactamente 2 divisores 1 y él mismo
if(divisor === 2)
    console.log(num +" este es un numero primo ");

}

