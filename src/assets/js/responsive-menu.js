/*const openMobMenu = document.querySelector('.c-main-menu__hamburguer');
const closeMobMenu = document.querySelector('.c-main-menu__close');
const menu = document.querySelector('.c-main-menu__list');

openMobMenu.addEventListener('click', () => {
  menu.classList.add('c-main-menu__list--isactive');
  openMobMenu.classList.add('c-main-menu__hamburguer--noactive');
  closeMobMenu.classList.add('c-main-menu__close--isactive');
});

closeMobMenu.addEventListener('click', () => {
  menu.classList.remove('c-main-menu__list--isactive');
  openMobMenu.classList.remove('c-main-menu__hamburguer--noactive');
  closeMobMenu.classList.remove('c-main-menu__close--isactive');
});*/

const openMobMenu = document.querySelector('.c-main-menu__hamburguer');
const menu = document.querySelector('.c-main-menu__list');

openMobMenu.addEventListener('click', () => {
  menu.classList.toggle('c-main-menu__list--isactive');
  openMobMenu.classList.toggle('c-main-menu__hamburguer--noactive');
});

/*Atención, classlist tiene la función toogle() que permite simplicar el código js*/
/* Actualizado ;) */
