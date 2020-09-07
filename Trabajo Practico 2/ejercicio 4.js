// Juego del señor de los anillos

function Jugador(nombre){
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;
    this.tirarFlecha = function(Jugador){
        if (Jugador.pv <= 0){
            console.log(`El jugador ${Jugador.nombre} ha muerto.`)
        }else{
            Jugador.pv = Jugador.pv - 10;
        }
    }
    this.curar = function(Jugador){
        Jugador.pv = Jugador.pv + 5;
        console.log(`+5 de viad para ${Jugador.nombre}`)
    }
};

let orco = new Jugador("Orco");
let legolas = new Jugador("Legolas");
console.log(orco);
console.log(legolas);
function mostrarEstado(){
    console.log(orco);
    console.log(legolas);   
}