function calcularIva(precio)
{
    let iva = (precio * 21)/100;
    precio = iva + precio;
    return precio
}

function Coche (marca, modelo, precio)
{
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.precioConIva = calcularIva(precio);
}


var coche1 = new Coche("Renault", "Laguna", 1800);
var coche2 = new Coche("Ford", "Mondeo", 2300);
var coche3 = new Coche("Mercedes", "600", 8500);
var coche4 = new Coche("Seat", "Cordoba", 3000);

let cadena;
cadena = `El coche ${coche1.marca} ${coche1.modelo} vale ${coche1.precio} dolares y con iva incluido ${coche1.precioConIva} dolares.`
document.write(cadena + '<br>');
cadena = `El coche ${coche2.marca} ${coche2.modelo} vale ${coche2.precio} dolares y con iva incluido ${coche2.precioConIva} dolares.`
document.write(cadena + '<br>');
cadena = `El coche ${coche3.marca} ${coche3.modelo} vale ${coche3.precio} dolares y con iva incluido ${coche3.precioConIva} dolares.`
document.write(cadena + '<br>');
cadena = `El coche ${coche4.marca} ${coche4.modelo} vale ${coche4.precio} dolares y con iva incluido ${coche4.precioConIva} dolares.`
document.write(cadena + '<br>');
