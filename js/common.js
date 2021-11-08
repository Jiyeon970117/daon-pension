$(function(){
    $('header').load('inc.html header > div',head);
});

function head(){
    $.getScript('https://kit.fontawesome.com/bf0adeb074.js');
    const toggleBtn = document.querySelector('header div .menu_buger');
    const icons = document.querySelector('header .icon');
    const menu = document.querySelector('header .menu');

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        icons.classList.toggle('active');
    });
}



