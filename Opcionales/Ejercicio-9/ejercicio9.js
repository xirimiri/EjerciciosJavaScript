const topics = ["JavaScript", "Variables", "Funciones", "Condicionales", "Bucles"];
console.log(topics);

let mayusculas = [];
for (let palabra of topics) {
    palabraMay = palabra.toUpperCase();
    mayusculas.push(palabraMay);
}
console.log(mayusculas);

let inverso = [];
inverso = mayusculas.reverse();
console.log(inverso);