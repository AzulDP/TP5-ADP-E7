/*
Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 : 
crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez. Este ejercicio forma parte del TP4 (se puede realizar con los conceptos vistos hasta hoy)
*/
let userMove = [];
let formulario = document.querySelector("form");
console.log(formulario);

formulario.addEventListener("submit", obtenerDato);

function obtenerDato(e){
    e.preventDefault();
    console.log("Ejecutando el evento submit del formulario");
    let input = [document.querySelector("input")];
    console.log(typeof input);
    console.log(input.value);
    tirada();
}

function tirada(){
    for(tirada=0; tirada<6; tirada++){
        // let userMove = obtenerDato(input.value);
        
let userMove = parseInt(prompt("Seleccione un valor del cero al 2 donde:  Piedra -> 0; Papel -> 1; Tijera  -> 2"));
console.log(`user move is ${userMove}`);
let computerMove = Math.floor(Math.random()*3)+1;
console.log(`computer move is ${computerMove}`);

// if (userMove === 0 || userMove === 1 || userMove === 2){
//     document.write(`${userMove}`);
// } else if (userMove > 2 || userMove == NaN || userMove == ""){
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
// alert("¿Quieres jugar de nuevo?");
}
    
// }




