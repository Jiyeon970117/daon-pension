function init(){
    const elUl = document.querySelector('.contents3 ul');
    const Zoom = document.querySelectorAll('.con-2 figure img');
    console.log(Zoom)
    let xhr,res,tagList='';
    xhr = new XMLHttpRequest();
    xhr.open('get','../js/data.json');
    xhr.send(null);
    xhr.onload = function(){
        res = JSON.parse(xhr.responseText);
        console.log(res)
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
        console.log(elLi,555)

        const elImg = document.querySelectorAll('.container > div')
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

    

    





        const text = document.querySelector('.ma_txt1');
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


}
window.onload = init;