/*
Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 : 
crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez. Este ejercicio forma parte del TP4 (se puede realizar con los conceptos vistos hasta hoy)

piedra 0 le gana a tijera 2
piedra 0 pierde contra papel 1 == papel 1 gana contra piedra 0
papel 1 pierde contra tijera 2 == tijera 2 gana contra papel 1
piedra 0 = a piedra 0 empata
papel 1 = papel 1 empata
tijera 2 = tijera 2 empata

// }else if (isNaN(true)) {
//   alert("Ingrese un número");
 */
let userMove = [];
let computerMove = [];

for(tiradas=0; tiradas<6; tiradas++){
    
    let userMove = parseInt(prompt("Seleccione un valor del cero al 2 donde:  Piedra -> 0; Papel -> 1; Tijera  -> 2"));
    let computerMove = Math.floor(Math.random()*3)+1;
    console.log(computerMove);

    if (userMove === 0 || userMove === 1 || userMove === 2){
        document.write(`${userMove}`);
    } else if (userMove > 2){
        alert("El valor ingresado no es válido. Ingrese un número del 0 al 2, por favor.")
    }
    // } else if (userMove1 === ("")){
    //     alert("El valor ingresado no es válido. Ingrese un número del 0 al 2, por favor.")
    // }
     
if (userMove === 0 && computerMove === 0 ||
    userMove === 1 && computerMove === 1 ||
    userMove === 2 && computerMove === 2 ) {
        document.write(`<p>Empataron!</p>`)
    }
if (userMove === 0 && computerMove === 1 ||
    userMove === 1 && computerMove === 2 ||
    userMove === 2 && computerMove === 0 ) {
        document.write(`<p>Perdiste! Mejor suerte la próxima vez!</p>`)
    }
if (userMove === 0 && computerMove === 2 ||
    userMove === 1 && computerMove === 0 ||
    userMove === 2 && computerMove === 1 ) {
        document.write(`<p>Ganaste!</p>`)
    }
}




