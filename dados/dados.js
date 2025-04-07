
let boton = document.querySelector(".Boton")
var dado = document.querySelector(".dado_sitio")


function numerorandom(){
    let r= Math.floor(Math.random() * 6) + 1;
    return r  }


function TirarDado(){
    let numero=numerorandom();
    dado.innerHTML=`<img id="Boton" src="imagenes/imagen${numero}.png" width="200">`;
}


