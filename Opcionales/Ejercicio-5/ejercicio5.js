const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let numeroDNI = prompt("Introduce el número de tu DNI");
let letraDNImin = prompt("Introduce la letra de tu DNI");
let letraDNI = letraDNImin.toUpperCase();

console.log("Número DNI: " + numeroDNI);
console.log("Letra DNI: " + letraDNI);

if (numeroDNI < 0 || numeroDNI > 99999999) {
    alert("¡El número de DNI introducido no es valido!");
} else {
    let resto = numeroDNI % 23;
    console.log("Resto calculo letra: " + resto);

    let letraCorrecta = letras[resto];
    console.log("Letra correcta DNI: " + letraCorrecta);

    if (letraCorrecta != letraDNI) {
        alert("¡La letra del DNI introducida no es correcta!");
    } else {
        alert(`¡El número ${numeroDNI} y la letra ${letraDNI} introducidos son correctos!`);
    }
}