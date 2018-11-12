import {TweenMax, Power2, TimelineMax} from "gsap/all";
//import smoothscroll from 'smoothscroll-polyfill';

var words = ['FASTEST', 'safest', 'scalability', 'awesome', 'greatest'];
let word = document.querySelector('#fsc1');
let rs = 'ABCDEFGHIJKLMONPQRSTUVWXYZ@#$%&+=';

// replace the 'n'th character of 's' with 't'
function replaceAt(s, n, t) {
    return s.substring(0, n) + t + s.substring(n + 1);
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

let wc = 0;
let yup = words[wc];

let out = yup;
var ind = 0;
var counter = 0;

var myInt1 = setInterval(changeLetter, 50);
var myInt2 = setInterval(buildWord, 400);

function changeLetter() {
    if (ind < yup.length) {
        for (var i = ind; i < out.length; i++) {
            var randletter = rs[randomInteger(1, rs.length - 1)];
            out = replaceAt(out, i, randletter);
            word.innerHTML = out;
            console.log('cL');
        }
    }
}


const tl = new TimelineMax();

function buildWord() {

    if (counter < 5) {
        if (ind < yup.length) {
            counter = 0;
            out = replaceAt(out, ind, yup[ind]);
            ind++;
            word.innerHTML = out;
        } else {

            tl.to(word, 0.45, {
                color: '#273be2',
            });
            console.log('yup');
            counter++;
        }
    } else {
        counter = 0;
        ind = 0;
        //word.classList.remove('colorful');
        tl.to(word, 0.25, {
            color: '#000',
        });

        wc++;
        if (wc > words.length - 1) {
            wc = 0;
        }

        yup = words[wc];
        out = yup;

    }

}


var menu = ['Prods', 'Docs', 'Team', 'Roadmap', 'Video'];
menu.forEach(function (elem) {
    let to = '#to'+elem;
    let go = '#go'+elem;
    document.querySelector(to).addEventListener("click", function () {
        if(elem == 'Video'){
            scrollToDiv(go, 70);
        }else{
            scrollToDiv(go, 70);
        }
    });
});

var mobmenu = ['ProdsMobile', 'Docs', 'Team', 'Roadmap'];
mobmenu.forEach(function (elem) {
    let to = '#m_to' + elem;
    let go = '#go' + elem;
    document.querySelector(to).addEventListener("click", function () {
        scrollToDiv(go, 40);
        document.querySelector('.mobmenu_screen').classList.toggle('hide_nav');
        document.querySelector('.mobburger').classList.toggle('burgclose');
    });
});

document.querySelector('.mobburger').addEventListener('click', function (burger) {
    document.querySelector('.mobmenu_screen').classList.toggle('hide_nav');
    document.querySelector('.mobburger').classList.toggle('burgclose');
});



const scrollToDiv = (selector, distance) => {
    let item = document.querySelector(selector);
    let wrapper = document.querySelector('.allpage');
    let count = item.offsetTop - wrapper.scrollTop - distance;
    window.scroll({
        top: count,
        left: 0,
        behavior: 'smooth'
    });
}


window.onscroll = function () {
    glueMenu();

    animElement('.all_benefits', 200, 'fadeInUp');
    animElement('.tabs_block', 900, 'fadeInUp');
    animElement('.videobox', 2400, 'fadeInUp');
    animElement('.all_whys', 3600, 'fadeInUp');
    animElement('.doc_icon', 6600, 'rotateIn');

    animLine('#line1red', 4500, 100);
    animLine('#line1blue', 4500, 80);
};





var header = document.getElementById("mainmenu");

var sticky = header.offsetTop;


function glueMenu() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function disableLetters(){
    if (window.pageYOffset > 500) {
        clearInterval(myInt1);
        clearInterval(myInt2);
        console.log('disable text')
        
    } else {
        
    }
    
}


function animElement(selector, fromtop, anim) {
    //console.log(window.innerHeight, window.pageYOffset)
    const el = document.querySelectorAll(selector);
    if (window.pageYOffset > fromtop) {
        [].forEach.call(el, function (div) {
            div.classList.add('animated');
            div.classList.add(anim);
        });
    }
}

function animLine(selector, fromtop, percent) {
    //console.log(window.innerHeight, window.pageYOffset)
    const el = document.querySelector(selector);
    if (window.pageYOffset > fromtop) {
        el.style.width = percent + '%';
    }
}


var aTab = '1';
const tabs = document.querySelectorAll('.tab_btn');
tabs.forEach(function (element) {
    element.addEventListener('click', function (e) {
        //e.preventDefault();
        const tab_id = element.id.slice(3, 4);
        aTab = tab_id;
        const tabcont = data2.content.EN.allTabs['tab' + aTab].left;

        const tl = new TimelineMax();
        tl.to("#tab_content", 0.55, {
            opacity: 0,
            onStart: function () {
                document.querySelector('#tab_content').classList.add('animated');
                document.querySelector('#tab_content').classList.add('fadeOut');
            },
            onComplete: function () {
                document.getElementById('tab_content').innerHTML = tabcont;
                document.querySelector('#tab_content').classList.remove('fadeOut');
                document.querySelector('#tab_content').classList.add('fadeIn');
            }
        }).to("#tab_content", 0.55, {
            opacity: 1
        });

        const active = document.querySelector('.active_tab');
        active.classList.remove('active_tab');
        this.classList.add('active_tab');
    });
});

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
                console.log('kkk');
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
                document.getElementById('prodtext').innerHTML = prod.content;
                document.getElementById('prodline').style.width = prod.percent + '%';
                document.getElementById('prodpercent').innerHTML = prod.percent + '%';
                document.getElementById('prodq').innerHTML = prod.q;
                document.getElementById('proddate').innerHTML = prod.rel;
            }
        }).to("#allprodbox", 0.5, {
            opacity: 1
        });

        const active = document.querySelector('.active_prod');
        active.classList.remove('active_prod');
        this.classList.add('active_prod');

    });
});

var roadmapYear = '2019';
const roadmapYearBtn = document.querySelectorAll('.yearBtn');
roadmapYearBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {

        const active = document.querySelector('.active_y');
        active.classList.remove('active_y');
        this.classList.add('active_y');
        active.children[0].classList.remove('active_yt');
        this.children[0].classList.add('active_yt');
        roadmapYear = this.children[0].innerHTML;

        document.querySelector('.r_tab_active').classList.remove('r_tab_active');
        document.querySelector('.r_tabs').children[0].classList.add('r_tab_active');
        //document.querySelector('.r_date').innerHTML = roadmapYear;

        const tlx = new TimelineMax();
        tlx.to("#r_date", 0.25, {
            opacity: 0,
            onComplete: function () {
                document.getElementById('r_date').innerHTML = roadmapYear;
            }
        }).to("#r_date", 0.25, {
            opacity: 1
        });

        const tl = new TimelineMax();
        tl.to("#r_screen", 0.25, {
            opacity: 0,
            onComplete: function () {
                document.getElementById('r_screen').innerHTML = data2.content.EN.roadmap[roadmapYear].q1;
            }
        }).to("#r_screen", 0.25, {
            opacity: 1
        });

    });
});

var qTab = 'q1';
const qYearBtn = document.querySelectorAll('.r_tab');
qYearBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {

        const active = document.querySelector('.r_tab_active');
        active.classList.remove('r_tab_active');
        this.classList.add('r_tab_active');
        qTab = this.id;

        const tl = new TimelineMax();
        tl.to("#r_screen", 0.25, {
            opacity: 0,
            onComplete: function () {
                document.getElementById('r_screen').innerHTML = data2.content.EN.roadmap[roadmapYear][qTab];
            }
        }).to("#r_screen", 0.25, {
            opacity: 1
        });

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


