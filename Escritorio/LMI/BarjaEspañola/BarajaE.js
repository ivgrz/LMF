
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