//rightside menu
let headerBtn = document.querySelector('.header__btn');
let rightsideMenu = document.querySelector('.rightside__menu');
let signClose = document.querySelector('.rightside__menu-close');

console.log(headerBtn);
console.log(rightsideMenu);


headerBtn.addEventListener('click', ()=> rightsideMenu.classList.remove('hidden'));
signClose.addEventListener('click', ()=> rightsideMenu.classList.add('hidden'));
console.log('test');
