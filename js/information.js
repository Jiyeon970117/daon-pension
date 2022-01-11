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

function result(){
    let xhr,res,tagList = '';
    xhr = new XMLHttpRequest();
    xhr.open('get','../js/data.json');
    xhr.send(null);
    xhr.onload = function(){
        slide();
        res = JSON.parse(xhr.responseText);
        const elUl = document.querySelector('.con-5 > ul');
        res.more.forEach( function(v,k) {
            tagList += `<li>
                        <figure>
                        <img src="${v.img}" >
                        <p>
                        <a href = "#">${v.tit}</a>
                        <span>${v.tit}</span>
                        </p>
                        </figure>
                        </li>`
        });
        elUl.innerHTML = tagList;
        const elLi = document.querySelectorAll('.con-5 ul li');
        const Popup = document.querySelector('.popup');

        for(let i=0; i<elLi.length; i++){
            elLi[i].addEventListener('click',function(){
                Popup.style = 'display: flex'
                datachange(i);
            });
        }

        Popup.addEventListener('click',function(){
            this.style = 'display: none';
        })


        function datachange(i){
            img = res.more[i].img;
            photo = res.more[i].photo;
            tit = res.more[i].tit;
            info = res.more[i].info;


            tagList = `<figure>
                            <img src = ${img}>
                            <p>
                            <strong>${tit}</strong>
                            <br></br>
                            <br></br>
                            ${info}
                            </p>
                        </figure>`;
            Popup.innerHTML = tagList;
        };

                // mousewheel event
                const elImg = document.querySelectorAll('.contents1 > div');
                let elHei;
                let winHei = window.innerHeight;
        
                window.addEventListener('scroll',function(){
                    for(let i=0; i<elImg.length; i++){
                        elHei = elImg[i].offsetTop;
        
                        if(elHei-winHei <= window.scrollY){
                            elImg[i].classList.add('active');
                        }
                    }
                })
        

        // Text event
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
window.onload = result();