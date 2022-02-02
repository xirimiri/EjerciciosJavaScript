class Peri_Area_Cuad {
    perimetro(lado) {
        return lado * 4;
    };
    area(lado) {
        return lado * lado;
    };
};

const cua_Peq = new Peri_Area_Cuad();
console.log("El perímetro de un cuadrado de 2 cm de lado es " + cua_Peq.perimetro(2));
console.log("El área de un cuadrado de 2 cm de lado es " + cua_Peq.area(2));

const cua_Med = new Peri_Area_Cuad();
console.log("El perímetro de un cuadrado de 5 cm de lado es " + cua_Med.perimetro(5));
console.log("El área de un cuadrado de 5 cm de lado es " + cua_Med.area(5));

const cua_Gran = new Peri_Area_Cuad();
console.log("El perímetro de un cuadrado de 10 cm de lado es " + cua_Gran.perimetro(10));
console.log("El área de un cuadrado de 10 cm de lado es " + cua_Gran.area(10));
