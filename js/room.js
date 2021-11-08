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

    $('.con-1 ul').slick({
        arrows: true,
        centerMode: true,
        centerPadding: '60px',
        autoplaySpeed:2000,
        slidesToShow: 1,
    });
}

function operate(){
    const elUl = document.querySelector('.con-2 ul');
    const elDetail = document.querySelector('.con-1 ul li:nth-of-type(1)');

    let xhr,res,tagList='';
    xhr = new XMLHttpRequest();
    xhr.open('get','../js/data.json');
    xhr.send(null);
    xhr.onload = function(){
        res = JSON.parse(xhr.responseText);
        res.work2.forEach(function(v,k){
            tagList += `<li>
                            <figure>
                                <img src="${v.img}">
                                <figcaption>${v.name}</figcaption>
                            </figure>
                        </li>`;
        });
        elUl.innerHTML = tagList;
        slide();

        const elLi = document.querySelectorAll('.con-2 ul li');
        const elCap = document.querySelectorAll('.con-2 ul li figure figcaption');

        for(let i=0; i<elCap.length; i++){
            elCap[i].addEventListener('click',function(){
                change(i);
            })
        }


        function change(i){
            img = res.work2[i].img;
            name = res.work2[i].name;
            info = res.work2[i].info

            tagList = `<figure>
                        <img src = ${img}>
                        <div class ="info">
                            <p>
                                <strong> ${name}</strong>
                                <br>
                                <br>
                                ${info}
                            </p>
                        </div>
                    </figure>`;
            elDetail.innerHTML = tagList;
        }
        const elImg = document.querySelectorAll('.con-2 ul li figure img');
        for(let i=0; i<elLi.length; i++){
            elLi[i].addEventListener('mousemove',function(){
                elImg[i].style = 'transform: scale(1.2); transition: .5s;';
            });

            elLi[i].addEventListener('mouseout',function(){
                elImg[i].style = 'transform: scale(1); transition: .5s;';
            });

        }

        const text = document.querySelector('.ac_txt2');
        const strText = text.textContent;
        const splitText = strText.split('');    
        text.textContent = ''; 

        for(let i=0; i < splitText.length; i++){
            text.innerHTML += '<span>'+ splitText[i] +'</span>';
        }

        let char = 0;
        let timer = setInterval(onTick,80);

        function onTick(){
            const span = text.querySelectorAll('span')[char];
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
}
window.onload = operate;
