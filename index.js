

// function iniciar(){
//     nave = inicio()
//     mover(nave)
// }

// iniciar()

var juego = new Juego()
alert("nuevo juego")
juego.iniciar()


function replay(){
    console.log("replay")
    window.clearInterval(juego.frame)
    juego.iniciarNuevo()
}










