
let miArray 


miArray.push([1,"espadas"])
miArray.pop()
miArray.unshift([1,"espadas"])
miArray.shift()

console.log(miArray)    

const palos = ["espadas", "copas", "bastos", "oros"]
let barajaEspañola = []

for (let palo of palos){
    for (let numero = 1; numero <= 10; numero++){
        barajaEspañola.push([palo, numero])
    
        if(numero === 1){
            barajaEspañola.push(["As",palo])
        }else if(numero === 8){
            barajaEspañola.push(["Sota",palo])
        }else if(numero === 9){
            barajaEspañola.push(["Caballo",palo])

        }else if(numero === 10){
            barajaEspañola.push(["Rey",palo])
        }else {
            barajaEspañola.push([String.numero,palo])
        }
    
    }

return baraja

}
function barajar(baraja){
    baraja.sort(() => Math.random() - 0.5)
}

function robar(baraja,mano){
    mano.unshift(baraja[0])
    baraja.unshift()
}
console.log(barajaEspañola)

function robarAleatoria(baraja,mano){
    cartaSeleccionada=baraja(Math.floor(Math.random()*barajaEspañola.length))
    mano.unshift(cartaSeleccionada)
    //Buscar indice de la carta que voy a eliminar
    for(let i=0;i<baraja.length;i++){
        if(baraja[i][0]===cartaSeleccionada[0]&&baraja[i][1]===cartaSeleccionada[1]){
            indiceEliminar=i
        }
    }
    //con array.indexOf(elemento)
    baraja.splice(indiceEliminar)
}

let BarajaEspañola = generarBaraja()
    barajar(barajaEspañola)
    robarAleatoria(barajaEspañola,mano)

console.log(mano)
console.log(barajaEspañola)

