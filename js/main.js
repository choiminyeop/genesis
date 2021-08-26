const toggleBtn = document.querySelector('.toggle-btn');
const menu = document.querySelector('.main-menu');

toggleBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active')
})