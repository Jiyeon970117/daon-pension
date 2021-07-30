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
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        autoplaySpeed:2000,
        slidesToShow: 1,
        responsive: [
            {
            breakpoint: 500,
            settings: {
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1
            }
            },
            {
            breakpoint: 400,
            settings: {
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    });
}

function operate(){
    const elUl = document.querySelector('.con-2 ul');
    console.log(elUl)
    const elDetail = document.querySelector('.con-1 ul li:nth-of-type(2)');
    console.log(elDetail)

    // console.log(elImg)

    let xhr,res,tagList='';
    xhr = new XMLHttpRequest();
    xhr.open('get','../js/data.json');
    xhr.send(null);
    xhr.onload = function(){
        res = JSON.parse(xhr.responseText);
        console.log(res.work2)
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
        console.log(elLi)
        const elCap = document.querySelectorAll('.con-2 ul li figure figcaption');
        console.log(elCap)

        for(let i=0; i<elCap.length; i++){
            elCap[i].addEventListener('click',function(){
                change(i);
            })
        }

        // let img1 = document.querySelector('con-2 ul li:nth-of-type(1) figure img src=""');
        // console.log(img1)

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

    }
}
window.onload = operate;
