function init(){
    const elUl = document.querySelector('.contents3 ul');
    const Zoom = document.querySelectorAll('.con-2 figure img');
    let xhr,res,tagList='';
    xhr = new XMLHttpRequest();
    xhr.open('get','../js/data.json');
    xhr.send(null);
    xhr.onload = function(){
        res = JSON.parse(xhr.responseText);
        res.more.forEach(function(v,k){
            tagList += `<li>
                            <figure>
                                <img src = ${v.img}>
                                <p> 
                                <a href ="${v.photo}"></a>
                                <span> ${v.tit} </span>
                                </p>
                            </figure>
                        </li>`;
        });
        elUl.innerHTML = tagList;
        const elLi = document.querySelectorAll('.contents3 ul li');

        const elImg = document.querySelectorAll('.container > div')
        let elHei;
        let winHei = window.innerHeight;

        // 스크롤이벤트로 화면 나타내기
        window.addEventListener('scroll',function(){
            for(let i=0; i<elImg.length; i++){
                elHei = elImg[i].offsetTop;

                if(elHei-winHei <= window.scrollY){
                    elImg[i].classList.add('active');
                }
            }
        })

        // 컨텐츠 클릭시 html이동

        for(let j=0; j<Zoom.length; j++){
            Zoom[j].addEventListener('mousemove',function(){
                Zoom[j].style = 'transform: scale(1.2); transition: .5s;';
            });
            Zoom[j].addEventListener('click',function(){
                newPage();
            });


            Zoom[j].addEventListener('mouseout',function(){
                Zoom[j].style = 'transform: scale(1); transition: .5s;';
            });


        }

        function newPage(){
            location.href = 'tourguide.html';
        }

        for(let i=0; i<elLi.length; i++){
            elLi[i].addEventListener('click',function(){
                location.href = 'information.html';
            })
        }

    

    





        // 텍스트 이벤트
        const text = document.querySelector('.ma_txt1');
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
window.onload = init;