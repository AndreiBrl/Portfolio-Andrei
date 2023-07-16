// Lógica hover menu
// SOBRE
let sobre = document.querySelector("#sobre");
let h1Sobre = document.querySelector("#sobre h1");

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

