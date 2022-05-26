"use strict"
let contadorIntentos = 1; 

const premiosPosibles = ["Xbox", "Play 5", "Switch", "Silla Gamer", "Diademas Gamer", "Teclado mecanico"];

let random = premiosPosibles[Math.floor(Math.random() * premiosPosibles.length)];
let random1 = premiosPosibles[Math.floor(Math.random() * premiosPosibles.length)];
let random2 = premiosPosibles[Math.floor(Math.random() * premiosPosibles.length)];
let random3 = premiosPosibles[Math.floor(Math.random() * premiosPosibles.length)];

alert(random);

while (contadorIntentos <4) {

    let jugar = parseInt(prompt("Prueba Suerte (Solo puedes escoger los números 1 - 2 - 3), (no puedes repetir tu elección) \n *1 \n *2 \n *3"));

    if (jugar == 1){
        alert(random1 + " - " + `Intento: ${contadorIntentos}`);
        contadorIntentos++;
    }
    if (jugar == 2){
        alert(random2 + " - " + `Intento: ${contadorIntentos}`);
        contadorIntentos++;
    }
    if (jugar == 3){
        alert(random3 + " - " + `Intento: ${contadorIntentos}`);
        contadorIntentos++;
    }
    if (jugar > 4) {
        alert("Valor no valido");
    }
    }
    if (contadorIntentos > 4) {
        window.close();
}
if (random == random1 || random == random2 || random == random3){
    alert("¡Ganaste!");
}
else {
    alert("Perdiste todo :(");
}

