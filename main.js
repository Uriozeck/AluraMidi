// function playSonidoPom() {
//     document.querySelector('#sonido_tecla_pom').play();
    
// }
//document.querySelector('.tecla_pom').onclick = playSonidoPom;

// function playSonidoClap() {
//     document.querySelector('#sonido_tecla_clap').play();
// }
// document.querySelector('.tecla_clap').onclick = playSonidoClap;

function playSonido (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
//listaDeTeclas[0].onclick = playSonidoPom;


let contador = 0;
while (contador < 9) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //console.log(instrumento);

    const idAudio = `#sonido_${instrumento}`;
    //console.log(idAudio);
    tecla.onclick = function () {
        playSonido(idAudio);
    };
    contador = contador +1;
    //console.log(contador);
}