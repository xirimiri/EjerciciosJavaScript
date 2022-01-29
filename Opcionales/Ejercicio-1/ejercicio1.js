var anchura = 16;
var longitud = 23;
var altura = 13;

const volumen = anchura * longitud * altura; 
console.log('Volumen: ', volumen + ' cm3');

const areaLateral = altura * longitud; 
const areaBase = anchura * longitud; 
const areaTotal = areaLateral + (2 * areaBase);
console.log('Área total: ', areaTotal + ' cm2');