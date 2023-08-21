// Lógica hover menu
let fechaCortinha = document.querySelector(".fechaCortina");
let nomeMenu = document.querySelector(".nomeMenu h1")
// SOBRE
let sobre = document.querySelector("#sobre");
let h1Sobre = document.querySelector("#sobre h1");
let sobreConteudo = document.querySelector(".sobreConteudo");
let minhaCarreira =document.querySelector(".minhaCarreira");
let principal = document.querySelector(".principal")
let cortina = document.querySelector(".cortina")
let arrow = document.querySelector(".fechaCortina img")

let flagSobre = 0;

sobre.addEventListener('mouseover', function () {

    // h1Sobre.classList.add('h1SobreHover');
    nomeMenu.textContent = "sobre";
    nomeMenu.style.opacity = "100%";

})
sobre.addEventListener('mouseleave', function () {

    // h1Sobre.classList.remove('h1SobreHover');
    nomeMenu.style.opacity = "0";

})
// logica nav CLIQUE

sobre.addEventListener("click", function () {
    flagSobre++;

    // if (flagSobre % 2 != 0) {
    // sobre.classList.add('abreNav');
    // h1Sobre.classList.add('h1CliqueSobre');
    // sobreConteudo.classList.add('visible');
    // principal.classList.add('opacidade');

    cortina.classList.add('abreCortina');
    // cortina.style.backgroundColor = "wheat";
    fechaCortinha.classList.add("visible");
    rocket.classList.replace("lancaFoguete","pousaFoguete");
    chama.classList.replace("acendeChama","apagaChama");
    sobreConteudo.style.opacity = "100%";
    projetosClasse.style.opacity = "0";
    minhaCarreira.style.opacity = "0";
    
    setTimeout(() => {
        
        arrow.style.opacity="80%";
    }, 1000);

    // }
    // else {

    //     principal.classList.remove('opacidade');
    //     sobreConteudo.style.opacity="0";
    //     setTimeout(() => {
    //         sobreConteudo.classList.remove('visible');
    //         sobre.classList.remove('abreNav');
    //         h1Sobre.classList.remove('h1CliqueSobre');

    //     }, 100);
    // }


})
// ---------------------

// PROJETOS
let projetos = document.querySelector("#projetos");
let h1Projetos = document.querySelector("#projetos h1");
let flagProjetos = 0;
let projetosClasse = document.querySelector(".projetos");
let rocket = document.querySelector(".rocket");
let chama = document.querySelector(".chama");
projetos.addEventListener('mouseover', function () {

    // h1Projetos.classList.add('h1ProjetosHover');

    nomeMenu.textContent = "projetos";
    nomeMenu.style.opacity = "100%";
})
projetos.addEventListener('mouseleave', function () {

    // h1Projetos.classList.remove('h1ProjetosHover');
    nomeMenu.style.opacity = "0";

})
// logica nav CLIQUE

projetos.addEventListener("click", function () {

    flagProjetos++;

    // if (flagProjetos % 2 != 0) {
    // sobreConteudo.style.opacity="0";
    // projetos.classList.add('abreNav');
    // h1Projetos.classList.add('h1CliqueProjetos');
    // projetosClasse.classList.add('visible');
    rocket.classList.remove("pousaFoguete");
    rocket.classList.add("lancaFoguete");
    chama.classList.remove("apagaChama");
    chama.classList.add("acendeChama");
    sobreConteudo.style.opacity = "0";
    minhaCarreira.style.opacity = "0";
    // cortina.style.backgroundColor = "lightblue";
    cortina.classList.add('abreCortina');
    fechaCortinha.classList.add("visible");
    projetosClasse.style.opacity = "100%";
    setTimeout(() => {
        
        arrow.style.opacity="80%";
    }, 1000);
    // }
    // else {
    //     projetosClasse.classList.remove('opacidade');
    //     setTimeout(() => {
    //         projetosClasse.classList.remove('visible');
    //         projetos.classList.remove('abreNav');
    //         h1Projetos.classList.remove('h1CliqueProjetos');

    //     }, 100);
    // }


})
// ---------------------

// CARREIRA
let carreira = document.querySelector("#carreira");
let h1Carreira = document.querySelector("#carreira h1");
let linha = document.querySelectorAll(".linha");
carreira.addEventListener('mouseover', function () {

    // h1Carreira.classList.add('h1CarreiraHover');
    // sobreConteudo.style.opacity="0";
    nomeMenu.textContent = "carreira";
    nomeMenu.style.opacity = "100%";

})
carreira.addEventListener('mouseleave', function () {

    nomeMenu.style.opacity = "0";
    // h1Carreira.classList.remove('h1CarreiraHover');

})

// logica nav CLIQUE

carreira.addEventListener("click", function () {
    // cortina.style.backgroundColor = "lightgray";
    cortina.classList.add('abreCortina');
    fechaCortinha.classList.add("visible");
    sobreConteudo.style.opacity = "0";
    projetosClasse.style.opacity = "0";
    rocket.classList.replace("lancaFoguete", "pousaFoguete");
    chama.classList.replace("acendeChama", "apagaChama");
    minhaCarreira.style.opacity = "100%";
    linha.forEach(element => {
        
        // element.classList.add("criaLinha");
    });
    setTimeout(() => {
        
        arrow.style.opacity="80%";
    }, 1000);
    // carreira.classList.toggle('abreNav');
    // h1Carreira.classList.toggle('h1CliqueCarreira');



})
let boxCarreira = document.querySelectorAll(".box-carreira, .box-carreira h1, .box-carreira h2");

boxCarreira.forEach(element => {
    let sobreCarreira = document.querySelector(".minhaCarreira p");
    element.addEventListener("mouseover",function(){
        
        if(element.getAttribute('alt')=="bacharel"){
            sobreCarreira.style.opacity="0%"
            setTimeout(() => {
                
                sobreCarreira.style.opacity="100%"
                sobreCarreira.textContent="bacha"
            }, 200);
        }
        else if(element.getAttribute('alt')=="advogado"){
            sobreCarreira.style.opacity="0%"
            setTimeout(() => {
                
                sobreCarreira.style.opacity="100%"
                sobreCarreira.textContent="advogado"
            }, 200);
        }
        else if(element.getAttribute('alt')=="tecnico"){
            sobreCarreira.style.opacity="0%"
            setTimeout(() => {
                
                sobreCarreira.style.opacity="100%"
                sobreCarreira.textContent="tecnico"
            }, 200);
        }
        else{
            sobreCarreira.style.opacity="0%"
            setTimeout(() => {
                
                sobreCarreira.style.opacity="100%"
                sobreCarreira.textContent="estagio"
                
            }, 200);
        }
        
        
    })
    element.addEventListener("mouseout",function(){
        
        sobreCarreira.style.opacity="0%"
        setTimeout(() => {
                sobreCarreira.style.opacity="100%"
                
                sobreCarreira.textContent="passe o mouse"
                
            }, 500);
    })
});
// ---------------------

// VISAO
let visao = document.querySelector("#visao");
let h1Visao = document.querySelector("#visao h1");

visao.addEventListener('mouseover', function () {
    nomeMenu.textContent = "visão";
    nomeMenu.style.opacity = "100%";
    // h1Visao.classList.add('h1VisaoHover');
    // sobreConteudo.style.opacity="0";

})
visao.addEventListener('mouseleave', function () {

    nomeMenu.style.opacity = "0";
    // h1Visao.classList.remove('h1VisaoHover');

})

// logica nav CLIQUE

visao.addEventListener("click", function () {
    // cortina.style.backgroundColor = "white";
    cortina.classList.add('abreCortina');
    fechaCortinha.classList.add("visible");
    sobreConteudo.style.opacity = "0";
    minhaCarreira.style.opacity = "0";
    projetosClasse.style.opacity = "0";
    rocket.classList.replace("lancaFoguete", "pousaFoguete");
    chama.classList.replace("acendeChama", "apagaChama");
    setTimeout(() => {
        
        arrow.style.opacity="80%";
    }, 1000);
    // visao.classList.toggle('abreNav');
    // h1Visao.classList.toggle('h1CliqueVisao');




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
        neonPerfil.style.visibility = "visible"
    }, 1000);
    setTimeout(() => {
        neonPerfil2.style.visibility = "visible"
        neonPerfil3.classList.add("neonRosa");
    }, 2000);
    setTimeout(() => {
        neonPerfil3.style.visibility = "visible"
        neonPerfil4.classList.add("neonRosa");
    }, 3000);
    setTimeout(() => {
        neonPerfil4.style.visibility = "visible"
        neonPerfil5.classList.add("neonRosa");
    }, 4000);
    setTimeout(() => {
        neonPerfil5.style.visibility = "visible"
        neonPerfil6.classList.add("neonRosa");
    }, 5000);
    setTimeout(() => {
        neonPerfil6.style.visibility = "visible"
        neonPerfil7.classList.add("neonRosa");
    }, 6000);
    setTimeout(() => {
        neonPerfil7.style.visibility = "visible"
        neonPerfil8.classList.add("neonRosa");
    }, 7000);
    setTimeout(() => {
        neonPerfil8.style.visibility = "visible"

    }, 8000);
}
neon();

// SCROOL REVEAL
// 	/* ---- Scroll smooth reveal ---- */
// window.sr = ScrollReveal({ reset: false });


// ScrollReveal().reveal('#sobre', {

//     distance: '300px',
//     duration: 2000,

//     delay: 600
// });
// ScrollReveal().reveal('#projetos', {

//     distance: '300px',
//     duration: 2000,

//     delay: 700
// });
// ScrollReveal().reveal('#carreira', {

//     distance: '300px',
//     duration: 2000,

//     delay: 800
// });
// ScrollReveal().reveal('#visao', {

//     distance: '300px',
//     duration: 2000,

//     delay: 900
// });
// ScrollReveal().reveal('.principal', {

//     distance: '100px',
//     duration: 2000,

//     delay: 50
// });


// FECHA CORTINA


fechaCortinha.addEventListener("click", function () {

    cortina.classList.remove('abreCortina');
    fechaCortinha.classList.remove("visible");
    minhaCarreira.style.opacity="0"
    arrow.style.opacity="0";
    sobreConteudo.style.opacity = "0";
    projetosClasse.style.opacity = "0";
    rocket.classList.replace("lancaFoguete", "pousaFoguete");
    chama.classList.replace("acendeChama", "apagaChama");
    console.log(1);

})
// LOGICA MENU MOBILE
let contaMenu = 0;
let menuMobile = document.querySelector(".menu-mobile");
let linha1 = document.querySelector(".linha1")
let linha2 = document.querySelector(".linha2")
let linha3 = document.querySelector(".linha3")

// grau random para menu
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// menuMobile.addEventListener('click', function () {
//     const randomAngle1 = getRandomInt(0, 360);
//     const randomAngle2 = getRandomInt(0, 360);
//     const randomAngle3 = getRandomInt(0, 360);
//     contaMenu++;
//     if (contaMenu % 2 != 0) {

        // linha1.style.rotate=""+randomAngle1+"deg";
        // linha2.style.rotate = "" + randomAngle2 + "deg";
        // linha3.style.rotate=""+randomAngle3+"deg";

    //     sobre.classList.add("mostra");
    //     carreira.classList.add("mostra");
    //     visao.classList.add("mostra");
    //     projetos.classList.add("mostra");

    // }
    // else {

    //     sobre.classList.remove("mostra");
    //     carreira.classList.remove("mostra");
    //     visao.classList.remove("mostra");
    //     projetos.classList.remove("mostra");

    //     linha1.style.rotate = "deg";
    //     linha2.style.rotate = "0deg";
    //     linha3.style.rotate = "0deg";
        // linha3.style.opacity="100%";
//     }
// })

