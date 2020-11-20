const bg = document.getElementById('bg');
const moon = document.getElementById('moon');
const mountain = document.getElementById('mountain');
const road = document.getElementById('road');
const text = document.getElementById('text');

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
})

const navbar = document.querySelector('.navbar');

const hamMenu = document.querySelector('.hamburger-menu');

hamMenu.addEventListener('click', function (e) {
    navbar.classList.toggle('slide');
    hamMenu.classList.toggle('change');
})

let carts = document.querySelectorAll('.add-cart');

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', function() {
        alert('This site is in maintanance')
    })
}
