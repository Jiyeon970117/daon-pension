function init(){
    const elUl = document.querySelector('.contents2 .con-2 ul');
    const Popup = document.querySelector('.contents3 .popup');
    let xhr,res,tagList='';
    xhr = new XMLHttpRequest();
    xhr.open('get','../js/data.json');
    xhr.send(null);
    xhr.onload = function(){
        res = JSON.parse(xhr.responseText);
        res.work.forEach(function(v,k){
            tagList += `<li>
                            <figure>
                                <img src = ${v.photo}>
                                <a href ="${v.link}"></a>
                            </figure>
                            <p> ${v.type} ${v.name} </p>
                        </li>`;
        });
        elUl.innerHTML = tagList;

        const elMoreLi = document.querySelector('.contents3 ul li');        
        for(let i=0; i=elMoreLi.length; i++){
            elMoreLi[i].addEventListener('click',function(){
                Popup.style = 'display: flex';
                datachange(i);
            });
        }

        function datachange(i){
            img = res.more.img[i];
            tit = res.more.tit[i];
            info = res.more.info[i];

            tagList = `<figure>
                            <img src = ${img}>
                            <p>
                            <strong>${tit}</strong>
                            ${info}
                            </p>
                        </figure>`;
            Popup.innerHTML = tagList;


        };

    }

}
window.onload = init;