let hamburger = document.querySelector('.hamburger');
let change = document.querySelector('.navbar__content');



hamburger.addEventListener('click', () => {
    change.classList.toggle('change');
})


// *************************onload*************************
let container = document.querySelector('.container');
let main = document.querySelector('.main');
let load = document.querySelector('.muscle');

window.addEventListener('load', () => {
    load.classList.add('animate');
    main.classList.add('none');
})

setTimeout(() => {
    main.classList.remove('none');
    container.style.display = 'none';
    load.classList.remove('animate');

}, 2000);