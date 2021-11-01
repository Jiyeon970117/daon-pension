function slide(){
    $(".spot .slider").slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000
    });
}
window.onload = function(){
    slide();
    const Ctn = document.querySelector('.contents1');
    console.log(Ctn)
    const elCon = document.querySelectorAll('.contents1 .con-1 > figure');
    console.log(elCon)
    const elLi = document.querySelectorAll('.contents1 .con-1 ul li');
    const elFig = document.querySelectorAll('.contents1 .con-1 ul li figure');
    console.log(elFig)
    window.addEventListener('scroll',function(e){
        scrollEvent();
    });

    // for(let i=0; i<elLi.length; i++){
    //     elLi[i].addEventListener('mouseenter',function(){
    //         elFig.style = 'transform: scale(1.1)';
    //         // console.log(elFig[i])
    //     });    
    // }


    let scrollEvent = function(){
        // 사용자 모니터 화면 높이 + 스크롤이 움직인 높이
        let scroll = window.innerHeight + window.scrollY;

        // 애니메이션 효과를 넣을 DOM 객체 배열
        let itemList = document.querySelectorAll('.con-1 ul li');

        Array.prototype.forEach.call(itemList,function(li){
            // 객체 위치와 높이 비교 : 화면에 표출되는 높이인지 체크
            if(li.offsetTop < scroll ){
                // 객체 animatable 클래스를 지우고 animated클래스 추가
                li.classList.remove('animatable');
                li.classList.add('animated');
            }
        });
    }

    const text = document.querySelector('.ac_txt2');
    const strText = text.textContent;
    console.log(strText)
    const splitText = strText.split('');    /* split() 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다 */
    console.log(splitText)
    text.textContent = '';   /* '';은 값이 있으면 값을 없애 값을 만들어주고 빈값도 만들어준다? */

    for(let i=0; i < splitText.length; i++){
        text.innerHTML += '<span>'+ splitText[i] +'</span>';
    }

    let char = 0;
    let timer = setInterval(onTick,80);

    function onTick(){
        const span = text.querySelectorAll('span')[char];
        console.log(span)
        span.classList.add('active');
        char++

        if(char === splitText.length){
            complete();
            return;
        }
    };

    function complete(){
        clearInterval(timer);
        timer = null;
    };


}