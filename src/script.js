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
        neonPerfil.style.visibility="visible"
    }, 1000);
    setTimeout(() => {
        neonPerfil2.style.visibility="visible"
        neonPerfil3.classList.add("neonRosa");
    }, 2000);
    setTimeout(() => {
        neonPerfil3.style.visibility="visible"
        neonPerfil4.classList.add("neonRosa");
    }, 3000);
    setTimeout(() => {
        neonPerfil4.style.visibility="visible"
        neonPerfil5.classList.add("neonRosa");
    }, 4000);
    setTimeout(() => {
        neonPerfil5.style.visibility="visible"
        neonPerfil6.classList.add("neonRosa");
    }, 5000);
    setTimeout(() => {
        neonPerfil6.style.visibility="visible"
        neonPerfil7.classList.add("neonRosa");
    }, 6000);
    setTimeout(() => {
        neonPerfil7.style.visibility="visible"
        neonPerfil8.classList.add("neonRosa");
    }, 7000);
    setTimeout(() => {
        neonPerfil8.style.visibility="visible"

    }, 8000);
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

// LOGICA MENU MOBILE
let contaMenu=0;
let menuMobile = document.querySelector(".menu-mobile");
let linha1 = document.querySelector(".linha1")
let linha2 = document.querySelector(".linha2")
let linha3 = document.querySelector(".linha3")

// grau random para menu
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
  menuMobile.addEventListener('click',function(){
    const randomAngle1 = getRandomInt(0, 560);
    const randomAngle2= getRandomInt(0, 850);
    const randomAngle3 = getRandomInt(0, 560);
contaMenu++;
if (contaMenu%2!=0) {
        
    // linha1.style.rotate=""+randomAngle1+"deg";
    linha2.style.rotate=""+randomAngle2+"deg";
    // linha3.style.rotate=""+randomAngle3+"deg";
    
    sobre.classList.add("mostra");
    carreira.classList.add("mostra");
    visao.classList.add("mostra");
    projetos.classList.add("mostra");
    
}
else{
    
    sobre.classList.remove("mostra");
    carreira.classList.remove("mostra");
    visao.classList.remove("mostra");
    projetos.classList.remove("mostra");
    
    linha1.style.rotate="deg";
    linha2.style.rotate="0deg";
    linha3.style.rotate="0deg";
    // linha3.style.opacity="100%";
}
})