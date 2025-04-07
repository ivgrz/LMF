let boton = document.querySelector("button"); // Selecciona el botón
let titulo = document.querySelector("#excusa"); // Selecciona el elemento donde se mostrará la excusa

boton.addEventListener("click", generarExcusa); // Agrega un evento al botón

function generarExcusa() {
    titulo.innerHTML = quien() + " " + que() + " " + como() + " " + palabraFinal();
}

function quien() {
    let opciones = [
        "Mi perro",
        "El gato",
        "Un extraterrestre",
        "Mi vecino",
        "Mi hermano menor",
        "El vigilante de la entrada",
        "El repartidor de pizza"
    ];
    return randomItem(opciones);
}

function que() {
    let opciones = [
        "se comió",
        "rompió",
        "escondió",
        "perdió",
        "tiró mis tareas por la ventana",
        "arrugó mis tareas",
        "quemó mis tareas"
    ];
    return randomItem(opciones);
}

function como() {
    let opciones = [
        "sin darse cuenta",
        "mientras dormía",
        "cuando intentaba ayudar",
        "gritando de pánico",
        "mientras grababa un TikTok",
        "con cara de pocos amigos",
        "corriendo como loco"
    ];
    return randomItem(opciones);
}

function palabraFinal() {
    let opciones = [
        "y tuve que empezar de cero.",
        "y todo se arruinó por completo.",
        "y desapareció sin dejar rastro.",
        "y ya no pude presentarlas a tiempo.",
        "y nunca logré recuperarlas.",
        "y terminé metido en un gran lío."
    ];
    return randomItem(opciones);
}

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}