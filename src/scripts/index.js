import '../styles/index.scss';
import 'particles.js';
import './particles-conf';
import './videos';
import './animations';
import {data} from './data';
import {data2} from './data2';
import {TweenMax,Power2,TimelineMax} from "gsap/TweenMax";


const lang = navigator.language;
var o = document.querySelector('.languagepicker').children[0].children[0];
o.innerHTML = lang;
console.log(o)



//console.log(data.content);
/*
var words = ['fastest','safest','scalability'];

var typed = document.getElementById('fsc');
var del = true;
setInterval(()=>{
    del ? clearText(typed) : addText(typed);
}, 1000);

function clearText(text){
    if(text.innerHTML.length >= 0){
        var newtext = text.innerHTML.substring(0, text.innerHTML.length - 1);
        typed.innerHTML = newtext;
    }else{
        del = false;
    }
}

function addText(text){
    console.log(text.innerHTML.length);
}
*/








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
      onStart: function(){
        document.querySelector('#tab_content').classList.add('animated');
        document.querySelector('#tab_content').classList.add('fadeOutRight');
      },
      onComplete: function() {
        document.getElementById('tab_content').innerHTML = tabcont;
        document.querySelector('#tab_content').classList.remove('fadeOutRight');
        document.querySelector('#tab_content').classList.add('fadeInRight');
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
          onStart: function(){
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
roadmapYearBtn.forEach(function(element){
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
qYearBtn.forEach(function(element){
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

        if (panel.classList.contains("opened")) {
          window.scrollBy({
            top: 150,
            left: 0,
            behavior: 'smooth'
          });

        } 
      });
});



