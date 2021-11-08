function slide(){
    $(".infotxt2 ul").slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay:true,
        autoplaySpeed:1500
    });
}


function init(){
    const Popup = document.querySelector('.popup');
    const All = document.querySelector('.popup .all');
    const elUl = document.querySelector('.infotxt2 ul');
    let xhr, eff,tagList='';
    xhr = new XMLHttpRequest();
    xhr.open('get','../js/data.json');
    xhr.send(null);
    xhr.onload = function(){
        eff = JSON.parse(xhr.responseText);
        eff.work.forEach(function(v,k) {
            tagList += `<li>
                            <figure>
                                <img src = ${v.img}>
                                <figcaption> ${v.tit} </figcaption>
                            </figure>
                        </li>`;
        });
        elUl.innerHTML = tagList;
        slide();

        const elLi = document.querySelectorAll('.infotxt2 ul li');
        const elImg = document.querySelectorAll('.infotxt2 ul li figure img');
    
        for(let i=0; i<elLi.length; i++){
            elLi[i].addEventListener('click',function(){
                Popup.style='display: flex';
                details(i-4);
            });
            
            elLi[i].addEventListener('mousemove',function(){
                elImg[i].style = 'transform: scale(1.2); transition: .5s;';
            });
            
            elLi[i].addEventListener('mouseout',function(){
                elImg[i].style = 'transform: scale(1); transition: .5s;';
            });    
        }
        function details(i){
            img2 = eff.work[i].img2;
            tit = eff.work[i].tit;
            info = eff.work[i].info;

            tagList = `<figure>
                            <img src = ${img2}>
                            <figcaption> ${tit} </figcaption>
                        </figure>
                        <div>${info}</div>`;
            All.innerHTML = tagList;
        }
        Popup.addEventListener('click',function(){
            this.style = 'display: none';
        })
        
    }
}
window.onload = init;