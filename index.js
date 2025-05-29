window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})
window.addEventListener("scroll", () => {
    let h2 = document.querySelector('#h2');
    if (h2) {
        h2.classList.add('traço-baixo', window.scrollY > 2800);
    }
});

document.addEventListener("touchstart", function() {}, true);

document.getElementById("bronze").addEventListener("click", function() {
    setTimeout(() => {
        window.location.href = "https://api.whatsapp.com/send?phone=+5519971316301&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+o+plano+BRONZE%21";
    }, 400);
});
document.getElementById("prata").addEventListener("click", function() {
    setTimeout(() => {
        window.location.href = "https://api.whatsapp.com/send?phone=+5519971316301&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+o+plano+PRATA%21";
    }, 400);
});
document.getElementById("ouro").addEventListener("click", function() {
    setTimeout(() => {
        window.location.href = "https://api.whatsapp.com/send?phone=+5519971316301&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+o+plano+OURO%21";
    }, 400);
});



let btnMenu = document.getElementById('abrir-menu')
let menu = document.getElementById('menu-mobile')
let over = document.getElementById('overlay')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
over.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

new SplitType('.frase-missao', { types: 'chars' });

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('.char',
  { opacity: 0.3},
  {
    opacity: 1,
    stagger: 0.009,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: '.frase',
      start: '230% 100%',
      end:'300% 80%',
      scrub: 1.5, 
      markers: false,
    }
  }
);


const btnRight = document.getElementById('seta-direita')
const btnLeft = document.getElementById('seta-esquerda')
const cards1 = document.querySelectorAll('.cards-feedbacks')
const cards2 = document.querySelectorAll('.cards-feedbacks2')

btnRight.addEventListener('click', () =>{
    cards1.forEach((card) =>{
        card.classList.toggle('invisivel')
    })
    cards2.forEach((card2) =>{
        card2.classList.toggle('invisivel')
    })
})
btnLeft.addEventListener('click', () =>{
    cards1.forEach((card) =>{
        card.classList.toggle('invisivel')
    })
    cards2.forEach((card2) =>{
        card2.classList.toggle('invisivel')
    })
})


const mulheresquerda = document.querySelector('.evolucao1mu')
const mulherecentro = document.querySelector('.evolucao2mu')
const homemdireita = document.querySelector('.evolucao1ho')

mulheresquerda.onmouseover = () =>{
    mulherecentro.classList.add('efeitoBlur')
    homemdireita.classList.add('efeitoBlur')
}
mulheresquerda.onmouseout = () =>{
    mulherecentro.classList.remove('efeitoBlur')
    homemdireita.classList.remove('efeitoBlur')
}

mulherecentro.onmouseover = () =>{
    mulheresquerda.classList.add('efeitoBlur')
    homemdireita.classList.add('efeitoBlur')
}
mulherecentro.onmouseout = () =>{
    mulheresquerda.classList.remove('efeitoBlur')
    homemdireita.classList.remove('efeitoBlur')
}

homemdireita.onmouseover = () =>{
    mulherecentro.classList.add('efeitoBlur')
    mulheresquerda.classList.add('efeitoBlur')
}
homemdireita.onmouseout = () =>{
    mulherecentro.classList.remove('efeitoBlur')
    mulheresquerda.classList.remove('efeitoBlur')
}
