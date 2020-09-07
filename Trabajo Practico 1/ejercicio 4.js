console.log("-----------Ejercicio 4----------");
let ed = 50;
let apo = 25;
let sex = "femenino";
let edJubilacion = 0;

if (sex == "masculino"){
    if(ed < 65){
        let restoEdad = 65 - ed;
        let restoAporte = 30 - apo;
        if(apo < 30){
            edJubilacion = ed + restoEdad;
        }else{
            restoAporte = restoAporte - restoEdad;
            edJubilacion = ed + restoEdad + restoAporte;
        }
    }else{
        if(apo < 30){
            let restoAporte = 30-apo
            edJubilacion = ed+restoAporte;
        }else{
            edJubilacion = ed;
            console.log("Ya esta en edad de jubilarse.");
        }
    }
    console.log(`Usted es hombre, se jubila a los ${edJubilacion}`);
}else if(sex == "femenino"){
    if(ed < 60){
        let restoEdad = 60 - ed;
        let restoAporte = 30 - apo;
        if(restoAporte < restoEdad){
            edJubilacion = ed + restoEdad;
        }else{
            restoAporte = restoAporte - restoEdad;
            edJubilacion = ed + restoEdad + restoAporte;
        }
    }else{
        if(apo < 30){
            let restoAporte = 30-apo
            edJubilacion = ed+restoAporte;
        }else{
            edJubilacion = ed;
            console.log("Ya esta en edad de jubilarse.");
        }
    }
    console.log(`Usted es mujer, se jubila a los ${edJubilacion}`);
}
console.log("--------------------------------");