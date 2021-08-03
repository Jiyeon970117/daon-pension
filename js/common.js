$(function(){
    $('header').load('inc.html header > div',head);
    // $('footer').load('inc.html footer > div');

    // function nav(){
    //     $.getScript('https://kit.fontawesome.com/bf0adeb074.js');
    //     $('header .menu li a').on('click',function(){
    //         $(this).css('color','#0b3e77');
    //     });
    // }
});

function head(){
    $.getScript('https://kit.fontawesome.com/bf0adeb074.js');
    const toggleBtn = document.querySelector('header div .menu_buger');
    console.log(toggleBtn)
    const icons = document.querySelector('header .icon');
    const menu = document.querySelector('header .menu');

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        icons.classList.toggle('active');
    });
}



