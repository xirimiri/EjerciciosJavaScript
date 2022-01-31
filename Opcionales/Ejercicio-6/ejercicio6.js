const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];

let sumaFor = 0;

for (let i = 0; i < 9; i++) {
    sumaFor += notas[i]; 
}

console.log("Suma total utilizando el bucle for: " + sumaFor);

let sumaForOf = 0;

for (let nota of notas) {
    sumaForOf += nota;
}

console.log("Suma total utilizando el bucle for of: " + sumaForOf);