const cumple = {
    dia: 27,
    mes: 'Junio'
};

console.log('Mi cumpleaños es el ' + cumple.dia + ' de ' + cumple.mes);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

for (let i = 0; i < 12; i++) {
    if (meses[i] == cumple.mes) {
        if (meses[i] == 'Diciembre') {
            console.log(meses[0]);
        } else {
            console.log(meses[i+1]);    
        }
    };
};