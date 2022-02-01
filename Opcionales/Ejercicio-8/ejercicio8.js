let frase = prompt("Introduce una frase");

let letras = frase.split("");
console.log(letras);

let may = 0;
let min = 0;
let esp = 0;
for (let letra of letras) {
    if (letra == " ") {
        esp++;
    } else if (letra == letra.toLowerCase()) {
        min++;
    } else {
        may++;
    }
};

alert(`La frase introducida contiene ${may} mayusculas, ${min} minusculas y ${esp} espacios`);