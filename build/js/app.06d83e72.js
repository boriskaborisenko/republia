!function(e){function t(t){for(var o,a,i=t[0],d=t[1],s=t[2],u=0,m=[];u<i.length;u++)a=i[u],r[a]&&m.push(r[a][0]),r[a]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);for(l&&l(t);m.length;)m.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,i=1;i<n.length;i++){var d=n[i];0!==r[d]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={0:0},c=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=d;c.push([87,1]),n()}({40:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);n(40),n(41);var o=n(48);n(55),o.initializeApp({apiKey:"AIzaSyASvIZydpFWRQF98N0645Jl-Ag40MTTnjg",authDomain:"republia-222218.firebaseapp.com",databaseURL:"https://republia-222218.firebaseio.com",projectId:"republia-222218",storageBucket:"",messagingSenderId:"750372444315"});var r=o.firestore();r.settings({timestampsInSnapshots:!0}),r.collection("videosData").doc("allVideos").get().then(function(e){!function(e){var t=e.playlist;new(n(60))("AIzaSyA_pza_I2tTH3sQ8RVvzJJIJEXc5BFjuG8").getPlaylist("https://www.youtube.com/playlist?list="+t).then(function(e){e.getVideos().then(function(e){var t;document.getElementById("mainvid").innerHTML='<iframe id="vid_frame" src="https://www.youtube.com/embed/'+e[0].id+'?rel=0&showinfo=0&autohide=1" width="560" height="315" frameborder="0" allowfullscreen></iframe>',e.map(function(e){t=e.title.length>60?e.title.substring(0,60)+"...":e.title;var n=e.description.substring(0,60);document.getElementById("videoslist").innerHTML+="<div class=\"list_video\" onClick=\"document.getElementById('vid_frame').src='https://youtube.com/embed/".concat(e.id,'?autoplay=1&rel=0&showinfo=0&autohide=1&autoplay=1\'">\n                                <div class="thumb inl_t" style="background:url(https://img.youtube.com/vi/').concat(e.id,'/0.jpg) center center no-repeat; background-size:cover;"></div>\n                                <div class="vid_desc inl_t">\n                                <div class="vid_title">').concat(t,'</div>\n                                <div class="vid_anno">').concat(n,"...</div>\n                                </div>\n                            </div>")})}).catch(console.log)}).catch(console.log)}({playlist:e.data().playlist})});n(72),n(85);var c=n(89),a=["FASTEST","safest","scalability","awesome","greatest"],i=document.querySelector("#fsc1"),d="ABCDEFGHIJKLMONPQRSTUVWXYZ@#$%&+=";function s(e,t,n){return e.substring(0,t)+n+e.substring(t+1)}function l(e,t){var n=e-.5+Math.random()*(t-e+1);return n=Math.round(n)}var u=0,m=a[u],p=m,f=0,v=0;setInterval(function(){if(f<m.length)for(var e=f;e<p.length;e++){var t=d[l(1,d.length-1)];p=s(p,e,t),i.innerHTML=p}},50),setInterval(function(){if(v<5)if(f<m.length)v=0,p=s(p,f,m[f]),f++,i.innerHTML=p;else{var e=new c.a;e.to(i,.45,{color:"#273be2"}),v++}else{v=0,f=0;var t=new c.a;t.to(i,.25,{color:"#000"}),++u>a.length-1&&(u=0),m=a[u],p=m}},400);["Prods","Docs","Team","Roadmap","Video"].forEach(function(e){var t="#to"+e,n="#go"+e;document.querySelector(t).addEventListener("click",function(){y(n,70)})});["ProdsMobile","Docs","Team","Roadmap"].forEach(function(e){var t="#m_to"+e,n="#go"+e;document.querySelector(t).addEventListener("click",function(){y(n,40),document.querySelector(".mobmenu_screen").classList.toggle("hide_nav"),document.querySelector(".mobburger").classList.toggle("burgclose")})}),document.querySelector(".mobburger").addEventListener("click",function(e){document.querySelector(".mobmenu_screen").classList.toggle("hide_nav"),document.querySelector(".mobburger").classList.toggle("burgclose")});var y=function(e,t){var n=document.querySelector(e),o=document.querySelector(".allpage"),r=n.offsetTop-o.scrollTop-t;window.scroll({top:r,left:0,behavior:"smooth"})};window.onscroll=function(){window.pageYOffset>b?g.classList.add("sticky"):g.classList.remove("sticky"),_(".all_benefits",200,"fadeInUp"),_(".tabs_block",900,"fadeInUp"),_(".videobox",2400,"fadeInUp"),_(".all_whys",3600,"fadeInUp"),_(".doc_icon",6600,"rotateIn"),h("#line1red",4500,100),h("#line1blue",4500,80)};var g=document.getElementById("mainmenu"),b=g.offsetTop;function _(e,t,n){var o=document.querySelectorAll(e);window.pageYOffset>t&&[].forEach.call(o,function(e){e.classList.add("animated"),e.classList.add(n)})}function h(e,t,n){var o=document.querySelector(e);window.pageYOffset>t&&(o.style.width=n+"%")}var L="1";document.querySelectorAll(".tab_btn").forEach(function(e){e.addEventListener("click",function(t){var n=e.id.slice(3,4);L=n;var o=data2.content.EN.allTabs["tab"+L].left;(new c.a).to("#tab_content",.55,{opacity:0,onStart:function(){document.querySelector("#tab_content").classList.add("animated"),document.querySelector("#tab_content").classList.add("fadeOut")},onComplete:function(){document.getElementById("tab_content").innerHTML=o,document.querySelector("#tab_content").classList.remove("fadeOut"),document.querySelector("#tab_content").classList.add("fadeIn")}}).to("#tab_content",.55,{opacity:1}),document.querySelector(".active_tab").classList.remove("active_tab"),this.classList.add("active_tab")})});var S="product1";document.querySelectorAll(".one_prod").forEach(function(e){e.addEventListener("click",function(t){var n=e.id.slice(5,6);S=n;var o=data2.content.EN.products["product"+S];(new c.a).to("#allprodbox",.5,{opacity:0,onStart:function(){console.log("kkk"),document.querySelector(".prod_pic").classList.add("animated"),document.querySelector(".prod_pic").classList.add("fadeOutRight"),document.querySelector("#prodtext").classList.add("animated"),document.querySelector("#prodtext").classList.add("fadeOutDown"),document.querySelector(".prod_status").classList.add("animated"),document.querySelector(".prod_status").classList.add("fadeOutDown")},onComplete:function(){document.querySelector(".prod_pic").classList.remove("fadeOutRight"),document.querySelector(".prod_pic").classList.add("fadeInRight"),document.querySelector("#prodtext").classList.remove("fadeOutDown"),document.querySelector("#prodtext").classList.add("fadeInUp"),document.querySelector(".prod_status").classList.remove("fadeOutDown"),document.querySelector(".prod_status").classList.add("fadeInUp"),document.getElementById("prodpic").src=o.image,document.getElementById("prodtext").innerHTML=o.content,document.getElementById("prodline").style.width=o.percent+"%",document.getElementById("prodpercent").innerHTML=o.percent+"%",document.getElementById("prodq").innerHTML=o.q,document.getElementById("proddate").innerHTML=o.rel}}).to("#allprodbox",.5,{opacity:1}),document.querySelector(".active_prod").classList.remove("active_prod"),this.classList.add("active_prod")})});var q="2019";document.querySelectorAll(".yearBtn").forEach(function(e){e.addEventListener("click",function(e){var t=document.querySelector(".active_y");t.classList.remove("active_y"),this.classList.add("active_y"),t.children[0].classList.remove("active_yt"),this.children[0].classList.add("active_yt"),q=this.children[0].innerHTML,document.querySelector(".r_tab_active").classList.remove("r_tab_active"),document.querySelector(".r_tabs").children[0].classList.add("r_tab_active"),(new c.a).to("#r_date",.25,{opacity:0,onComplete:function(){document.getElementById("r_date").innerHTML=q}}).to("#r_date",.25,{opacity:1}),(new c.a).to("#r_screen",.25,{opacity:0,onComplete:function(){document.getElementById("r_screen").innerHTML=data2.content.EN.roadmap[q].q1}}).to("#r_screen",.25,{opacity:1})})});var w="q1";document.querySelectorAll(".r_tab").forEach(function(e){e.addEventListener("click",function(e){document.querySelector(".r_tab_active").classList.remove("r_tab_active"),this.classList.add("r_tab_active"),w=this.id,(new c.a).to("#r_screen",.25,{opacity:0,onComplete:function(){document.getElementById("r_screen").innerHTML=data2.content.EN.roadmap[q][w]}}).to("#r_screen",.25,{opacity:1})})}),document.querySelectorAll(".accordion").forEach(function(e){e.addEventListener("click",function(e){this.nextElementSibling.classList.toggle("opened")})});var E=navigator.language,I=document.querySelector(".languagepicker").children[0].children[0];I.innerHTML=E,console.log(I)}});
//# sourceMappingURL=app.06d83e72.js.map