const data = ['hola', 2, 5, 'adios'];

if (data[1] > data[2]) {
    console.log(`${data[1]} es mayor que ${data[2]}`);
} else if (data[1] < data[2]) {
    console.log(`${data[2]} es mayor que ${data[1]}`);
} else {
    console.log(`${data[1]} y ${data[2]} son iguales`);
}

let suma = data[1] + data[2];
console.log('La suma de los dos números es ' + suma);

let resta = data[1] - data[2];
console.log('La resta de los dos números es ' + resta);

let producto = data[1] * data[2];
console.log('El producto de los dos números es ' + producto);

let cociente = data[1] / data[2];
console.log('El cociente de los dos números es ' + cociente);

let resto = data[1] % data[2];
console.log('El resto de los dos números es ' + resto);