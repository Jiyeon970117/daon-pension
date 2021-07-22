$(function(){
    $('header').load('inc.html header > div',nav);
    // $('footer').load('inc.html footer > div');

    function nav(){
        $.getScript('https://kit.fontawesome.com/bf0adeb074.js');
        $('header .menu li a').on('mouseenter',function(){
            $(this).css('color','red');
        });
    }

});