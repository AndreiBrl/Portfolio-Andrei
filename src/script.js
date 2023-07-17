// Lógica hover menu
// SOBRE
let sobre = document.querySelector("#sobre");
let h1Sobre = document.querySelector("#sobre h1");
let pSobre = document.querySelector("#sobre p");

sobre.addEventListener('mouseover', function () {

    h1Sobre.classList.add('h1SobreHover');

})
sobre.addEventListener('mouseleave', function () {

    h1Sobre.classList.remove('h1SobreHover');

})
// logica nav CLIQUE

sobre.addEventListener("click", function () {

    sobre.classList.toggle('abreNav');
    h1Sobre.classList.toggle('h1CliqueSobre');
    pSobre.classList.toggle('visible');


})
// ---------------------

// PROJETOS
let projetos = document.querySelector("#projetos");
let h1Projetos = document.querySelector("#projetos h1");

projetos.addEventListener('mouseover', function () {

    h1Projetos.classList.add('h1ProjetosHover');

})
projetos.addEventListener('mouseleave', function () {

    h1Projetos.classList.remove('h1ProjetosHover');

})
// logica nav CLIQUE

projetos.addEventListener("click", function () {

    projetos.classList.toggle('abreNav');
    h1Projetos.classList.toggle('h1CliqueProjetos');


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
let neonPerfil3= document.querySelector(".neonPerfil3")
let neonPerfil4 = document.querySelector(".neonPerfil4")
let neonPerfil5 = document.querySelector(".neonPerfil5")
let neonPerfil6 = document.querySelector(".neonPerfil6")
let neonPerfil7 = document.querySelector(".neonPerfil7")
let neonPerfil8 = document.querySelector(".neonPerfil8")

function neon (){
neonPerfil.classList.add("neonRosa");
setTimeout(() => {
    neonPerfil2.classList.add("neonAzul");
}, 600);
setTimeout(() => {
    neonPerfil3.classList.add("neonRosa");
}, 1200);
setTimeout(() => {
    neonPerfil4.classList.add("neonAzul");
}, 1800);
setTimeout(() => {
    neonPerfil5.classList.add("neonRosa");
}, 2400);
setTimeout(() => {
    neonPerfil6.classList.add("neonAzul");
}, 3000);
setTimeout(() => {
    neonPerfil7.classList.add("neonRosa");
}, 3600);
setTimeout(() => {
    neonPerfil8.classList.add("neonAzul");
}, 4200);
}
neon();