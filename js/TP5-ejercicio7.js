/*
Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 : 
crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez. Este ejercicio forma parte del TP4 (se puede realizar con los conceptos vistos hasta hoy)
*/
let userMove = [];
let computerMove = [];
let message = "";
let formulario = document.querySelector("form");


formulario.addEventListener("submit", obtenerDato);

function obtenerDato(e) {
    e.preventDefault();
    console.log("Ejecutando el evento submit del formulario");
    let userMove = parseInt(document.getElementById("userMove").value);
    console.log(`user move is ${userMove}`);
    let computerMove = Math.floor(Math.random() * 3) + 1;
    console.log(`computer move is ${computerMove}`);
    tirada;
}

function tirada() {
    for (tirada = 0; tirada < 6; tirada++) {
        if (userMove === 0 && computerMove === 0 ||
            userMove === 1 && computerMove === 1 ||
            userMove === 2 && computerMove === 2) {
            document.getElementById("displayUserMove").innerHTML(`<p>Tu jugada ${userMove}</p>`)
            document.getElementById("displayComputerMove").innerHTML(`<p>La jugada de la computadora ${computerMove}</p>`)
            document.getElementById("displayResult").innerHTML(`<p>Empataron!</p>`)
        } else if (userMove === 0 && computerMove === 1 ||
            userMove === 1 && computerMove === 2 ||
            userMove === 2 && computerMove === 0) {
            document.getElementById("displayUserMove").innerHTML(`<p>Tu jugada ${userMove}</p>`)
            document.getElementById("displayComputerMove").innerHTML(`<p>La jugada de la computadora ${computerMove}</p>`)
            document.getElementById("displayResult").innerHTML(`<p>Perdiste! Mejor suerte la próxima vez!</p>`)
        } else if (userMove === 0 && computerMove === 2 ||
            userMove === 1 && computerMove === 0 ||
            userMove === 2 && computerMove === 1) {
            document.getElementById("displayUserMove").innerHTML(`<p>Tu jugada ${userMove}</p>`)
            document.getElementById("displayComputerMove").innerHTML(`<p>La jugada de la computadora ${computerMove}</p>`)
            document.getElementById("displayResult").innerHTML(`<p>Ganaste!</p>`)
        }
    }
    // alert("¿Quieres jugar de nuevo?");
}

// }




