const btnMobile = document.querySelector('[data-js="button"]');
btnMobile.addEventListener('click',toggleMenu);
btnMobile.addEventListener('touchstart',toggleMenu);
const linkSobre = document.querySelector('[data-js="sobre"]');
const linkCorrespondencia = document.querySelector('[data-js="correspondecia-juridica"]');
const areasAtuacao = document.querySelector('[data-js="areas-atuacao"]');
const consultoriaLgpd = document.querySelector('[data-js="consultoria-lgpd"]');
const contato = document.querySelector('[data-js="contato"]');
linkSobre.addEventListener('click',toggleMenu);
linkCorrespondencia.addEventListener('click',toggleMenu);
areasAtuacao.addEventListener('click',toggleMenu);
consultoriaLgpd.addEventListener('click',toggleMenu);
contato.addEventListener('click',toggleMenu);

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const menu = document.querySelector('[data-js="menu"]');
    const nav = document.querySelector('[data-js="nav"]');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}


 