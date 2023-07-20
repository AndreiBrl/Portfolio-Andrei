// Lógica hover menu
// SOBRE
let sobre = document.querySelector("#sobre");
let h1Sobre = document.querySelector("#sobre h1");
let pSobre = document.querySelector("#sobre p");
let flagSobre = 0;

sobre.addEventListener('mouseover', function () {

    h1Sobre.classList.add('h1SobreHover');

})
sobre.addEventListener('mouseleave', function () {

    h1Sobre.classList.remove('h1SobreHover');

})
// logica nav CLIQUE

sobre.addEventListener("click", function () {
    flagSobre++;

    if (flagSobre % 2 != 0) {
        sobre.classList.add('abreNav');
        h1Sobre.classList.add('h1CliqueSobre');
        pSobre.classList.add('visible');
        setTimeout(() => {
            pSobre.classList.add('opacidade');

        }, 600);
    }
    else {
        pSobre.classList.remove('opacidade');
        setTimeout(() => {
            pSobre.classList.remove('visible');
            sobre.classList.remove('abreNav');
            h1Sobre.classList.remove('h1CliqueSobre');

        }, 100);
    }


})
// ---------------------

// PROJETOS
let projetos = document.querySelector("#projetos");
let h1Projetos = document.querySelector("#projetos h1");
let flagProjetos = 0;
let projetosClasse = document.querySelector(".projetos");
projetos.addEventListener('mouseover', function () {

    h1Projetos.classList.add('h1ProjetosHover');

})
projetos.addEventListener('mouseleave', function () {

    h1Projetos.classList.remove('h1ProjetosHover');

})
// logica nav CLIQUE

projetos.addEventListener("click", function () {

    flagProjetos++;

    if (flagProjetos % 2 != 0) {

        projetos.classList.add('abreNav');
        h1Projetos.classList.add('h1CliqueProjetos');
        projetosClasse.classList.add('visible');
        setTimeout(() => {
            projetosClasse.classList.add('opacidade');
            
        }, 600);
    }
    else {
        projetosClasse.classList.remove('opacidade');
        setTimeout(() => {
            projetosClasse.classList.remove('visible');
            projetos.classList.remove('abreNav');
            h1Projetos.classList.remove('h1CliqueProjetos');

        }, 100);
    }


})
// ---------------------

// CARREIRA
let carreira = document.querySelector("#carreira");
let h1Carreira = document.querySelector("#carreira h1");

carreira.addEventListener('mouseover', function () {

    h1Carreira.classList.add('h1CarreiraHover');

})
carreira.addEventListener('mouseleave', function () {

    h1Carreira.classList.remove('h1CarreiraHover');

})

// logica nav CLIQUE

carreira.addEventListener("click", function () {

    carreira.classList.toggle('abreNav');
    h1Carreira.classList.toggle('h1CliqueCarreira');


})
// ---------------------

// VISAO
let visao = document.querySelector("#visao");
let h1Visao = document.querySelector("#visao h1");

visao.addEventListener('mouseover', function () {

    h1Visao.classList.add('h1VisaoHover');

})
visao.addEventListener('mouseleave', function () {

    h1Visao.classList.remove('h1VisaoHover');

})

// logica nav CLIQUE

visao.addEventListener("click", function () {

    visao.classList.toggle('abreNav');
    h1Visao.classList.toggle('h1CliqueVisao');




})
// ---------------------

// LOGICA NEON PERFIL

let neonPerfil = document.querySelector(".neonPerfil")
let neonPerfil2 = document.querySelector(".neonPerfil2")
let neonPerfil3 = document.querySelector(".neonPerfil3")
let neonPerfil4 = document.querySelector(".neonPerfil4")
let neonPerfil5 = document.querySelector(".neonPerfil5")
let neonPerfil6 = document.querySelector(".neonPerfil6")
let neonPerfil7 = document.querySelector(".neonPerfil7")
let neonPerfil8 = document.querySelector(".neonPerfil8")

function neon() {
    neonPerfil.classList.add("neonRosa");
    setTimeout(() => {
        neonPerfil2.classList.add("neonRosa");
    }, 1000);
    setTimeout(() => {
        neonPerfil3.classList.add("neonRosa");
    }, 2000);
    setTimeout(() => {
        neonPerfil4.classList.add("neonRosa");
    }, 3000);
    setTimeout(() => {
        neonPerfil5.classList.add("neonRosa");
    }, 4000);
    setTimeout(() => {
        neonPerfil6.classList.add("neonRosa");
    }, 5000);
    setTimeout(() => {
        neonPerfil7.classList.add("neonRosa");
    }, 6000);
    setTimeout(() => {
        neonPerfil8.classList.add("neonRosa");
    }, 7000);
}
neon();

// SCROOL REVEAL
// 	/* ---- Scroll smooth reveal ---- */
window.sr = ScrollReveal({ reset: false });


ScrollReveal().reveal('#sobre', {

    distance: '300px',
    duration: 2000,

    delay: 600
});
ScrollReveal().reveal('#projetos', {

    distance: '300px',
    duration: 2000,

    delay: 700
});
ScrollReveal().reveal('#carreira', {

    distance: '300px',
    duration: 2000,

    delay: 800
});
ScrollReveal().reveal('#visao', {

    distance: '300px',
    duration: 2000,

    delay: 900
});
ScrollReveal().reveal('.principal', {

    distance: '100px',
    duration: 2000,

    delay: 50
});

