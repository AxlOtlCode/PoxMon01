let ataqueJugador
let ataqueEnemigo
let GatoJugador
let GatoEnemigo
let VidasJugador = 10
let VidasEnemigo = 10

function inicarJuego(){

    let sectionSeleccionarAtaque = document.getElementById('elige-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionSeleccionarMascota = document.getElementById('elige-gato')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionReiniciar = document.getElementById('reset')
    sectionReiniciar.style.display = 'none'

    let botonTitulo = document.getElementById('iniciar')
    botonTitulo.addEventListener('click',PantallaTitulo)

    let botonGatoJugador = document.getElementById('botonGato')
    botonGatoJugador.addEventListener('click', seleccionarGatoJugador)

    let botonMachete = document.getElementById('boton-machete')
    botonMachete.addEventListener('click',ataqueMachete)

    let botonDinero = document.getElementById('boton-dinero')
    botonDinero.addEventListener('click',ataqueDinero)

    let botonbaile = document.getElementById('boton-baile')
    botonbaile.addEventListener('click',ataqueBaile)



    let botonReinicio = document.getElementById('reset')
    botonReinicio.addEventListener('click',reiniciarJuego)
}

function ataqueMachete(){
    ataqueJugador = 'Machetazo'
    ataqueAleatorioEnemigo()
}
function ataqueDinero(){
    ataqueJugador = 'Dinero'
    ataqueAleatorioEnemigo()
}
function ataqueBaile(){
    ataqueJugador = 'Baile'
    ataqueAleatorioEnemigo()
}

function PantallaTitulo() {
    let sectionSeleccionarMascota = document.getElementById('elige-gato')
    sectionSeleccionarMascota.style.display = 'block'

    let sectionPantallaInicio = document.getElementById('Titulo')
    sectionPantallaInicio.style.display = 'none'
    
}

function seleccionarGatoJugador(){
    let sectionSeleccionarMascota = document.getElementById('elige-gato')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('elige-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let inputMaxwell = document.getElementById('maxwell')
    let inputFloppa = document.getElementById('floppa')
    let inputMiguel = document.getElementById('miguel')

    let SpanGatoJugador = document.getElementById('GatoJugador')

    if (inputMaxwell.checked) {
        SpanGatoJugador.innerHTML = 'MAXWELL'
        GatoJugador = 'MAXWELL'
    } 
    else if(inputFloppa.checked){
        SpanGatoJugador.innerHTML = 'FLOOPA'
        GatoJugador = 'FLOOPA'
    }
    else if(inputMiguel.checked){
        SpanGatoJugador.innerHTML = 'MIGUEL'
        GatoJugador = 'MIGUEL'
    }
    else{
        alert('Selecciona una mascota')
    }

    seleccionarGatoEnemigo()
    
}

function seleccionarGatoEnemigo(){
    let Seleccionleatorio = aleatorio(1,3)
    let SpanGatoEnemigo = document.getElementById('GatoEnemigo')

    if (Seleccionleatorio == 1) {
        SpanGatoEnemigo.innerHTML = 'MAXWELL'
        GatoEnemigo = 'MAXWELL'
    }else if (Seleccionleatorio == 2) {
        SpanGatoEnemigo.innerHTML = 'FLOPPA'
        GatoEnemigo = 'FLOPPA'
    }else{
        SpanGatoEnemigo.innerHTML = 'MIGUEL'
        GatoEnemigo = 'MIGUEL'
    }
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Machetazo'
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Dinero'
    }else{
        ataqueEnemigo = 'Baile'
    }

    combate()
}

function combate() {
    let spanVideasJugador = document.getElementById('VidasJugador')
    let spanVideasEnemigo = document.getElementById('VidasEnemigo')

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje('EMPATE')
    }else if (ataqueJugador == 'Machetazo' && ataqueEnemigo == 'Dinero') {
        crearMensaje('TU ATAQUE ES EFECTIVO')
        VidasEnemigo--
        spanVideasEnemigo.innerHTML = VidasEnemigo
    }else if (ataqueJugador == 'Dinero' && ataqueEnemigo == 'Baile') {
        crearMensaje('TU ATAQUE ES EFECTIVO')
        VidasEnemigo--
        spanVideasEnemigo.innerHTML = VidasEnemigo
    }else if (ataqueJugador == 'Baile' && ataqueEnemigo == 'Machetazo') {
        crearMensaje('TU ATAQUE ES EFECTIVO')
        VidasEnemigo--
        spanVideasEnemigo.innerHTML = VidasEnemigo
    }else {
        crearMensaje('RECIBES DAÑO')
        VidasJugador--
        spanVideasJugador.innerHTML = VidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if (VidasEnemigo == 0) {
        crearMensajeFinal("VICTORIA")
    }else if (VidasJugador == 0) {
        crearMensajeFinal("DERROTA")
    }

}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu '+ GatoJugador + ' ha usado '+ ataqueJugador + '.  El '+ GatoEnemigo + ' Enemigo ha usado ' + ataqueEnemigo + '. ' + resultado
    
    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    
    sectionMensajes.appendChild(parrafo)

    let botonMachete = document.getElementById('boton-machete')
    botonMachete.disabled = true

    let botonDinero = document.getElementById('boton-dinero')
    botonDinero.disabled = true

    let botonbaile = document.getElementById('boton-baile')
    botonbaile.disabled = true
    
    let sectionReiniciar = document.getElementById('reset')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', inicarJuego)

