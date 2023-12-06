import outsideClick from './dropdownmenu.js'


export default function initMenuMobile() {
 
};

const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');

function openMenu(event){
    menuList.classList.toggle('active')
    menuButton.classList.toggle('active')
    outsideClick(menuList, ['click', 'touchstart'], () =>{
        menuList.classList.remove('active')
        menuButton.classList.remove('active')
    })
};

menuButton.addEventListener('click', openMenu)