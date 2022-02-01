const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
console.log("Array original: ", number);

let pares = number.filter(function(par) {
    if (par % 2 == 0) {
        return par;
    }
});
console.log("Pares: ", pares);

let impares = number.filter(function(impar) {
    if (impar % 2 != 0) {
        return impar;
    }
});
console.log("Impares: ", impares);