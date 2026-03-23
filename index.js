
// Menu Mobile
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
});

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

// Efeito no Header ao rolar
window.addEventListener("scroll", function() {
    let header = document.querySelector('#header');
    header.classList.toggle('rolar', window.scrollY > 100);
});

// Botão Voltar ao Topo
let btnTopo = document.getElementById('btnTopo');

window.onscroll = function() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

btnTopo.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
