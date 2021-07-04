burger = document.querySelector('.burger');
ul = document.querySelector('ul');
navbar = document.querySelector('.navbar');
navright = document.querySelector('.navright');

burger.addEventListener('click', ()=>{
    navright.classList.toggle('v-class');
    ul.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})

