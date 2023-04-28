alert("Hola Mundo")

function inicarJuego(){
    let botonGatoJugador = document.getElementById('botonGato')
    botonGatoJugador.addEventListener('click', seleccionarGatoJugador)
}

function seleccionarGatoJugador(){
    let inputMaxwell = document.getElementById('maxwell')
    let inputFloppa = document.getElementById('floppa')
    let inputMiguel = document.getElementById('miguel')

    if (inputMaxwell.checked) {
        alert('Maxwell Elegido')
    } else if(inputFloppa.checked){
        alert('Floppa Elegido')
    } else if(inputMiguel.checked){
        alert('Miguel Elegido')
    }
    
}

window.addEventListener('load', inicarJuego)

