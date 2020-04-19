import responsivemenu from './assets/js/responsive-menu';

const name = 'Modern WorkFlow';
console.log(`Hello ${name}`);

let brand = document.querySelector('.c-main-menu__brand');

brand.addEventListener('mouseenter', function(event) {
  event.target.style.transform = 'rotateY(180deg)';
});

brand.addEventListener('mouseleave', function(event) {
  event.target.style.transform = 'rotateY(0deg)';
});
