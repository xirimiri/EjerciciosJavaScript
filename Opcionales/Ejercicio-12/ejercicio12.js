const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
console.log("Meses: ", meses);

const meses7Mayus = meses
    .filter(mes => mes.length > 7)
    .map(mes => mes.toUpperCase());

const numMeses = meses7Mayus.length;

console.log(`Existen ${numMeses} meses con más de 7 letras y son: `, meses7Mayus);