const botaoPlayPause = document.getElementById('play-pause');
const botaoProxCapitulo = document.getElementById('proximo');
const botaoCapituloAnterior = document.getElementById('anterior');
const capa = document.getElementById('capa');
const audioCapitulo = document.getElementById('audio-capitulo');
const marcadorCapitulo = document.getElementById('capitulo');
const titulo = document.getElementById('titulo');
const numeroCapitulos = 10;
let capituloAtual = 1;

function tocarAudio() {
    audioCapitulo.play();
    botaoPlayPause.innerHTML = 'pause_circle';
    marcadorCapitulo.innerHTML = 'Capítulo ' + capituloAtual;
    opacidadeBotao();
    alterarTitulo();
}
function pausarAudio() {
    audioCapitulo.pause();
    botaoPlayPause.innerHTML = 'play_circle';
}
function alterarTitulo() {
    titulo.innerHTML = 'Dom Casmurro - Capítulo ' + capituloAtual;
}
function opacidadeBotao() {
    if (capituloAtual === 1) {
        botaoCapituloAnterior.style = 'opacity: 0.5;';
    } else if (capituloAtual === numeroCapitulos) {
        botaoProxCapitulo.style = 'opacity: 0.5;';
    } else {
        botaoCapituloAnterior.style = 'opacity: 1;';
        botaoProxCapitulo.style = 'opacity: 1;';
    }
}
function switchAudio() {
    if (!audioCapitulo.paused) {
        pausarAudio();
    } else {
        tocarAudio();
    }
}
function proxAudio() {
    if (capituloAtual === numeroCapitulos) {
        return
    }
    capituloAtual++;
    audioCapitulo.src = "./books/dom-casmurro/"+capituloAtual+".mp3";
    tocarAudio();
    capa.style = 'opacity: 0.5;';
    setInterval(function () {
        capa.style = 'opacity: 1.0;';
    }, 300);
}
function ultAudio() {
    if (capituloAtual === 1) {
        return
    }
    capituloAtual--;
    audioCapitulo.src = "./books/dom-casmurro/"+capituloAtual+".mp3";
    tocarAudio();
    capa.style = 'opacity: 0.5;';
    setInterval(function () {
        capa.style = 'opacity: 1.0;';
    }, 300);
}

opacidadeBotao();
alterarTitulo();
botaoPlayPause.addEventListener('click', switchAudio);
botaoProxCapitulo.addEventListener('click', proxAudio);
botaoCapituloAnterior.addEventListener('click', ultAudio);