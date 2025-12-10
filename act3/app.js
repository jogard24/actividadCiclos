
// Ejercicio 3 – Cajero automático 
// Crea un programa que: simule un cajero automático. El usuario inicia con un saldo definido en una variable 
// constante. Podrá retirar dinero varias veces mientras tenga fondos suficientes. Si intenta retirar más 
// de lo que tiene, debe aparecer un mensaje de error y no permitir la transacción. 


const prompt = require("prompt-sync")();


console.log("-- cajero automatico --");
console.log("-- inserta tu tarjeta --");

let saldo = 100000; //se crea una variable para guardar el saldo 
let menu ; //se crea la variable del menu desde afuera Para que al llegar al while, la variable menu no se rompa.

do {
    
    menu = Number(prompt(
        "que deseas hacer? elije una opcion \n" +
        "1) conocer saldo \n" +
        "2) retirar dinero \n" +
        "3) salir \n"
    ));
    //se crea un if para mostra la opcion que elija el usuario
    if (menu === 1){
        console.log("tu saldo actual es : " + saldo);
    }else if(menu === 2){
        //se solicita al usuario cuanto desea retirar
        let retiro = Number(prompt("cuanto deseas retirar? : "));
        //se anida un if para saber si es posible el retiro 
        if (retiro <= saldo){
            //se va restando el saldo por transaccion 
            saldo -= retiro;
            console.log("retiro exitoso! , tu saldo actual es : " + saldo);          
        }else {
            //si lo que solicita el usuario es mayor se mostrar insuficiente
            console.log("fondos insuficientes ");
            
        }
    }else if (menu === 3){
        //salir del programa
        console.log("gracias por usar nuestro servicio \n !no olvides retirar tu tarjeta¡ \n programa finalizado");       
    }else {
        //en caso de que el usuario ingrese una opcion incorrecta 
        console.log("error");
        
    }
    //el ciclo se repite hasta que la condicion sea 3 finaliza el ciclo
} while (menu !== 3);
