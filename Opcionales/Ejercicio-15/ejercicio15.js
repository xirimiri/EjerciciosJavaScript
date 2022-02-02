class Factura {
    constructor(nomCliente, elementos) {
        this.nomCliente = nomCliente;
        this.elementos = elementos;
        this.informacion = {
            baseImponible: 0,
            iva: 21,
            total: 0,
            formaPago: "tarjeta de débito/crédito"
        };

        this.totalFactura = function() {
            for (var i = 0; i < this.elementos.length; i++) {
                this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
            };
            this.informacion.total = this.informacion.baseImponible * (1 + (this.informacion.iva / 100));
        };

        this.muestraTotalFactura = function() {
            this.totalFactura();
            alert("Total Factura: " + this.informacion.total + " euros");
        };
    };
};

class Cliente {
    constructor(nombre, direccion, telefono, nif) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    };
};

class Elemento {
    constructor(descripcion, cantidad, precio) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    };
};

const cliente_1 = new Cliente("Javier", "Lugo", "610334455", "11222333T");
const listaElementos = [new Elemento("Elemento 1", 5, 5), new Elemento("Elemento 2", 8, 10)];
const facturaCliente_1 = new Factura(cliente_1, listaElementos);

facturaCliente_1.muestraTotalFactura();