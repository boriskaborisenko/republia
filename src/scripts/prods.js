import {TweenMax, Power2, TimelineMax} from "gsap/all";
import {data2} from './data2';


fillMobProds();
fillAllProducts();
fillFirstProd();

function fillMobProds() {
    let prods = data2.content.EN.products;
    let div = document.querySelector('.all_prods_mob');
    Object.keys(prods).map(function (key, index) {
        let block = '<div class="accordion" id="mp' + (index + 1) + '">' +
            '<div class="vis_icon inl_m"><img src="../public/images/svg/prods/' + prods[key].icon + '" alt=""></div>' +
            '<div class="vis_title inl_m">' + prods[key].title + '</div>' +
            '<div class="vis_opcl inl_m"></div>' +
            '</div>' +
            '<div class="panel">' +

            '<div class="hided_part">' +
            '<div class="hided_text">' +
            '<div class="prod_text">' +
            prods[key].content +
            '</div>' +
            '<div class="prod_status">' +
            '<div class="status_block">' +
            '<div class="status_title">' +
            'Status' +
            '</div>' +
            '<div class="status_perc inl_m" id="prodpercent">' + prods[key].percent + '%</div>' +
            '<div class="status_line inl_m">' +
            '<div class="status_bar">' +
            '<div class="status_complete" id="prodline" style="width:' + prods[key].percent + '%;"></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="status_block">' +
            '<div class="status_title">' +
            'Release date' +
            '</div>' +
            '<div class="status_perc inl_m" id="prodq">' + prods[key].q + '</div>' +
            '<div class="status_line inl_m" id="proddate">' + prods[key].rel + '</div>' +
            '</div>' +

            '</div>' +
            '<div class="prod_btn">' +
            '<a href="' + prods[key].url + '" target="_blank">' +
            '<div class="solid_b_btn">' + prods[key].btn + '</div>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '<div class="hided_pic "><img src="../public/images/mobile_mob/' + prods[key].image + '" alt="" class="fluidpic"></div>' +
            '</div>' +

            '</div>';
        div.innerHTML += block;
        /*
        const mX = '#mp'+(index+1);
        const mXdiv = document.querySelector(mX);
        const panel = mXdiv.nextElementSibling;
        mXdiv.children[0].children[0].src = '../public/images/svg/prods/' + prods[key].icon;
        mXdiv.children[1].innerHTML = prods[key].title;
        panel.children[0].children[0].children[0].innerHTML = prods[key].content;
        panel.children[0].children[0].children[1].children[0].children[1].innerHTML = prods[key].percent+'%';
        panel.children[0].children[0].children[1].children[0].children[2].children[0].children[0].style.width = prods[key].percent + '%';
        panel.children[0].children[0].children[1].children[1].children[1].innerHTML = prods[key].q;
        panel.children[0].children[0].children[1].children[1].children[2].innerHTML = prods[key].rel;
        panel.children[0].children[1].children[0].src = '../public/images/mobile_mob/'+prods[key].image;

        */
    });
}



function fillAllProducts() {
    let prods = data2.content.EN.products;
    let ul = document.querySelector('#lpx');
    Object.keys(prods).map(function (key, index) {
        let li = '<li>' +
            '<div class="one_prod" id="prod_' + (index + 1) + '">' +
            '<div class="prod_icon inl_m"><img src="../public/images/svg/prods/' + prods[key].icon + '" alt=""></div>' +
            '<div class="prod_desc inl_m">' + prods[key].titleBR + '</div>' +
            '</div>' +
            '</li>';
        ul.innerHTML += li;
    });
    document.querySelector('#prod_1').children[0].classList.add('active_prod_icon');
    document.querySelector('#prod_1').children[1].classList.add('active_prod_text');
}

function fillFirstProd() {
    let prod = data2.content.EN.products['product1'];
    let div = document.querySelector('#allprodbox');
    let content = '<div class="prod_pic"><img id="prodpic" src="../public/images/mobile_laptop/'+prod.image+'" alt="" class="fluidpic"></div>'+
              '<div class="prod_text" id="prodtext">'+
                prod.content+
              '</div>'+
              '<div class="prod_status">'+
                '<div class="status_block">'+
                  '<div class="status_title">'+
                    'Status'+
                  '</div>'+
                  '<div class="status_perc inl_m" id="prodpercent">' + prod.percent + '%</div>' +
                  '<div class="status_line inl_m">'+
                    '<div class="status_bar">'+
                      '<div class="status_complete" id="prodline" style="width:' + prod.percent + '%;"></div>' +
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="status_block">'+
                  '<div class="status_title">'+
                    'Release date'+
                  '</div>'+
                  '<div class="status_perc inl_m" id="prodq">' + prod.q + '</div>' +
                  '<div class="status_line inl_m" id="proddate">' + prod.rel + '</div>' +
                '</div>'+

              '</div>'+
              '<div class="prod_btn">'+
                '<a id="btnurl" href="' + prod.url + '" target="_blank">' +
                  '<div id="btntitle" class="solid_b_btn">' + prod.btn + '</div>' +
                '</a>'+
              '</div>';
              div.innerHTML = content;
}

var cProd = 'product1';
const products = document.querySelectorAll('.one_prod');
products.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const prod_id = element.id.slice(5, 6);
        cProd = prod_id;
        const prod = data2.content.EN.products['product' + cProd];

        const tl = new TimelineMax();
        tl.to("#allprodbox", 0.5, {
            opacity: 0,
            onStart: function () {
                //console.log('kkk');
                document.getElementById('prodline').style.width = '0%';
                document.querySelector('.prod_pic').classList.add('animated');
                document.querySelector('.prod_pic').classList.add('fadeOutRight');
                document.querySelector('#prodtext').classList.add('animated');
                document.querySelector('#prodtext').classList.add('fadeOutDown');
                document.querySelector('.prod_status').classList.add('animated');
                document.querySelector('.prod_status').classList.add('fadeOutDown');
            },
            onComplete: function () {
                document.querySelector('.prod_pic').classList.remove('fadeOutRight');
                document.querySelector('.prod_pic').classList.add('fadeInRight');
                document.querySelector('#prodtext').classList.remove('fadeOutDown');
                document.querySelector('#prodtext').classList.add('fadeInUp');

                document.querySelector('.prod_status').classList.remove('fadeOutDown');
                document.querySelector('.prod_status').classList.add('fadeInUp');

                document.getElementById('prodpic').src = prod.image;
                document.getElementById('prodtext').innerHTML = '';
                document.getElementById('prodtext').innerHTML = prod.content;
                document.getElementById('btnurl').href = prod.url;
                document.getElementById('btntitle').innerHTML = prod.btn;

                setTimeout(() => {
                    document.getElementById('prodline').style.width = prod.percent + '%';
                }, 800);

                document.getElementById('prodpic').src = '../public/images/mobile_laptop/' + prod.image;

                document.getElementById('prodpercent').innerHTML = prod.percent + '%';
                document.getElementById('prodq').innerHTML = prod.q;
                document.getElementById('proddate').innerHTML = prod.rel;
            }
        }).to("#allprodbox", 0.9, {
            opacity: 1
        });

        const active_t = document.querySelector('.active_prod_text');
        const active_i = document.querySelector('.active_prod_icon');
        active_t.classList.remove('active_prod_text');
        active_i.classList.remove('active_prod_icon');
        this.children[0].classList.add('active_prod_icon');
        this.children[1].classList.add('active_prod_text');

    });
});

const mob_products = document.querySelectorAll('.accordion');
mob_products.forEach(function (element) {
    element.addEventListener('click', function (e) {

        var panel = this.nextElementSibling;
        panel.classList.toggle("opened");
        /*
                if (panel.classList.contains("opened")) {
                  window.scrollBy({
                    top: 150,
                    left: 0,
                    behavior: 'smooth'
                  });
                  

                } */
    });
});