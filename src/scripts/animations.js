//import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
//import smoothscroll from 'smoothscroll-polyfill';


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

