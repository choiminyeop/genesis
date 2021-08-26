const toggleBtn = document.querySelector('.toggle-btn');
const menu = document.querySelector('.main-menu');

toggleBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active')
});



$('.safety-slide-menu-2').click(function(){
    $('.safety-slide-menu-text-line-2').fadeIn();
    $('.safety-slide-menu-text-line-1').fadeOut();
    $('.safety-slide-menu-text-line-3').fadeOut();
    $('.safety-slide-img-2').fadeIn();
    $('.safety-slide-img-1').css('display','none');
    $('.safety-slide-img-3').css('display','none');
})

$('.safety-slide-menu-1').click(function(){
    $('.safety-slide-menu-text-line-1').fadeIn();
    $('.safety-slide-menu-text-line-2').fadeOut();
    $('.safety-slide-menu-text-line-3').fadeOut();
    $('.safety-slide-img-1').fadeIn();
    $('.safety-slide-img-2').css('display','none');
    $('.safety-slide-img-3').css('display','none');
})

$('.safety-slide-menu-3').click(function(){
    $('.safety-slide-menu-text-line-3').fadeIn();
    $('.safety-slide-menu-text-line-2').fadeOut();
    $('.safety-slide-menu-text-line-1').fadeOut();
    $('.safety-slide-img-3').fadeIn();
    $('.safety-slide-img-2').css('display','none');
    $('.safety-slide-img-1').css('display','none');
})



