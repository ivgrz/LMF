let button = document.querySelector(".MiBoton")
let audio = document.querySelector("audio")

button.addEventListener("click",emitSound)


function emitSound(){
    audio.currentTime=0
    audio.play()
}