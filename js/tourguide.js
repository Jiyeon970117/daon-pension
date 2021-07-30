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
   
    const All = document.querySelector('.all');
    const elUl = document.querySelector('.infotxt2 ul');

    let xhr, eff,tagList='';
    xhr = new XMLHttpRequest();
    xhr.open('get','../js/data.json');
    xhr.send(null);
    xhr.onload = function(){
        eff = JSON.parse(xhr.responseText);
        // console.log(eff.work)
        eff.work.forEach(function(v,k) {
            tagList += `<li>
                            <figure>
                                <img src = ${v.img}>
                                <figcaption> ${v.tit} </figcaption>
                            </figure>
                        </li>`;
        });
        elUl.innerHTML = tagList;
        // $(".infotxt2 ul").html(tagList);
        slide();

        const elLi = document.querySelectorAll('.infotxt2 ul li');
        let i=0;
        for(let i=0; i<elLi.length; i++){
            elLi[i].addEventListener('click',function(){
                All.style='display: flex';
                details(i-4);
                console.log(i)
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
        console.log(All)
        All.addEventListener('click',function(){
            this.style = 'display: none';
        })
        
    }
}
window.onload = init;