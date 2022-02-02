const times = [60, 75, 79, 80, 55, 59];
console.log("Array: ", times);

let suma = 0;
for (let numero of times) {
    suma += numero;
};
console.log("Suma de todos los números del array: " + suma);

console.log("Longitud del array: " + times.length);
let media = suma / times.length;
console.log("Media del array: " + media);