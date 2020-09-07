console.log("-----------Ejercicio 3----------");
let edad = 50;
let aporte = 2;
let edadJubilacion = 0;

if(edad < 65){
    let restoEdad = 65 - edad;
    let restoAporte = 30 - aporte;
    if(restoAporte < restoEdad){
        edadJubilacion = edad + restoEdad;
    }else{
        restoAporte = restoAporte - restoEdad;
        edadJubilacion = edad + restoEdad + restoAporte;
    }
}else{
    if(aporte < 30){
        let restoAporte = 30-aporte
        edadJubilacion = edad+restoAporte;
    }else{
        edadJubilacion = edad;
        console.log("Ya esta en edad de jubilarse.");
    }
}

console.log(`Su edad de jubilacion es ${edadJubilacion}`);

console.log("--------------------------------");