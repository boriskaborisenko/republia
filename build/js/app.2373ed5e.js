!function(e){function t(t){for(var n,r,c=t[0],s=t[1],l=t[2],u=0,m=[];u<c.length;u++)r=c[u],a[r]&&m.push(a[r][0]),a[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(d&&d(t);m.length;)m.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,c=1;c<o.length;c++){var s=o[c];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},a={0:0},i=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=s;i.push([88,1]),o()}({41:function(e,t,o){},88:function(e,t,o){"use strict";o.r(t);o(41),o(42);var n=o(49);o(56),n.initializeApp({apiKey:"AIzaSyASvIZydpFWRQF98N0645Jl-Ag40MTTnjg",authDomain:"republia-222218.firebaseapp.com",databaseURL:"https://republia-222218.firebaseio.com",projectId:"republia-222218",storageBucket:"",messagingSenderId:"750372444315"});var a=n.firestore();a.settings({timestampsInSnapshots:!0}),a.collection("videosData").doc("allVideos").get().then(function(e){!function(e){var t=e.playlist;new(o(61))("AIzaSyA_pza_I2tTH3sQ8RVvzJJIJEXc5BFjuG8").getPlaylist("https://www.youtube.com/playlist?list="+t).then(function(e){e.getVideos().then(function(e){var t;document.getElementById("mainvid").innerHTML='<iframe id="vid_frame" src="https://www.youtube.com/embed/'+e[0].id+'?rel=0&showinfo=0&autohide=1" width="560" height="315" frameborder="0" allowfullscreen></iframe>',e.map(function(e){t=e.title.length>60?e.title.substring(0,60)+"...":e.title;var o=e.description.substring(0,60);document.getElementById("videoslist").innerHTML+="<div class=\"list_video\" onClick=\"document.getElementById('vid_frame').src='https://youtube.com/embed/".concat(e.id,'?autoplay=1&rel=0&showinfo=0&autohide=1&autoplay=1\'">\n                                <div class="thumb inl_t" style="background:url(https://img.youtube.com/vi/').concat(e.id,'/0.jpg) center center no-repeat; background-size:cover;"></div>\n                                <div class="vid_desc inl_t">\n                                <div class="vid_title">').concat(t,'</div>\n                                <div class="vid_anno">').concat(o,"...</div>\n                                </div>\n                            </div>")})}).catch(console.log)}).catch(console.log)}({playlist:e.data().playlist})});o(73),o(86);var i=o(90),r={content:{EN:{blocks:{},allTabs:{tab1:{left:"Easy-to-create and secure smart contracts help reduce the impact of the human factor and mitigate the risks and losses. Using Republia ID as a KYC module allows to optimize the costs of the user identification divisions.",right:"empty"},tab2:{left:"Republia ID facilitates the introduction of a simplified citizens identification system. The implementation of blockchain technology is much easier thanks to the template solutions on the Smart Contract Platform.'},",right:"empty"},tab3:{left:"It is possible to create and sell smart contracts on the marketplace of the Republia Smart Contract Platform. Formal verification of the smart contract code before compilation ensures the complete control over the script building logic. OCaml also allows for modular, clear and compact source code and makes it easy to work with recursive structures such as syntax trees.",right:"empty"},tab4:{left:"Users can make quick payments and use the RPB coin as a means of payment that is less volatile. Republia ID allows passing the KYC authentication once to use it further with partner companies. Also, average users without technical knowledge can create smart contracts from a template, for example, to pay rent or when lending.",right:"empty"}},products:{product1:{title:"REPUBLIA ID",content:"RepubliaID is a digital-analog of Identity Card, the main feature of which is advanced security. Republia ID allows community members to influence the life of the ecosystem directly and ensures security through implementation into all parts of the global ecosystem. Identity Card that minimizes the risk of loss of funds or hacking user accounts.",rel:"2019",q:"Q1",percent:73,image:"../public/images/svg/mobile.png"},product2:{title:"DAPPS PLATFORM",content:"Provides the expansion of the entire Republia ecosystem by interrelated projects, not by the addition of competitive Crowdfunding, thereby avoiding unfair investment companies.",rel:"2020",q:"Q2",percent:12,image:"../public/images/svg/mobile.png"},product3:{title:"REPUBLIA BANK",content:"Republia Bank is a component of the economic model of the decentralized Republia ecosystem, which combined the principles of Central Banks and innovative technologies. Republia Bank automatically regulates demand and supply on stock exchanges and smooths volatility of RPB coin through balancing and automated analysis of the market situation.",rel:"2019",q:"Q1",percent:100,image:"../public/images/svg/mobile.png"},product4:{title:"REPUBLIA SC PLATFROM",content:"Republia Smart Contract Platform is an easy-to-use tool for generating smart contracts, that allows to create, execute and manage smart contracts based on Republia blockchain by yourself.",rel:"2020",q:"Q3",percent:34,image:"../public/images/svg/mobile.png"},product5:{title:"CLOUDX",content:"Republia Cloud X is a secure storage of data and the future of the entire global ecosystem. It is a data cloud storage, where all user information is stored decentrally in an encrypted form.",rel:"2021",q:"Q4",percent:7,image:"../public/images/svg/mobile.png"},product6:{title:"REPUBLIA EXCHANGE",content:"Transaction will be made faster, than in such popular payment systems as MasterCard or Visa. Provides speed in processing operations, opening / closing orders, as well as an ability to bind an internal bank card, using this card necessary amount of RPB coins will be sold according to market order and due to instantaneous operation of Atomic Swap mechanism.",rel:"2019",q:"Q4",percent:23,image:"../public/images/svg/mobile.png"},product7:{title:" REPUBLIA WALLET",content:"Republia Wallet is a uniquely designed integrated technology, that includes both wallets, which solves the problem of heavy wallets with 16-digit addresses, and an instant messenger with the addition of contacts that provides secure exchange between users of messages, files (stored in Republia Cloud X) and also provides an opportunity to create smart contracts with contacts.",rel:"2019",q:"Q1",percent:100,image:"../public/images/svg/mobile.png"},product8:{title:" REPUBLIA VOTING",content:"Republia follows the principle of “We-ecosystem”, where all users are of equal importance in the modernization of the network, so consensus Republia operates on algorithm Proof-of-Authority (PoA) + BFT (Byzantine Fault Tolerance). A unique solution for coordinating changes in ecosystem conditions through direct user voting based on Republia blockchain, which, in turn, is based on“ we - government” methodology.",rel:"2019",q:"Q2",percent:57,image:"../public/images/svg/mobile.png"}},roadmap:{2018:{q1:"q1-2018",q2:"q2-2018",q3:"q3-2018",q4:"q4-2018"},2019:{q1:"q1-2019",q2:"q2-2019",q3:"q3-2019",q4:"q4-2019"},2020:{q1:"q1-2020",q2:"q2-2020",q3:"q3-2020",q4:"q4-2020"},2021:{q1:"q1-2021",q2:"q2-2021",q3:"q3-2021",q4:"q4-2021"},2022:{q1:"q1-2022",q2:"q2-2022",q3:"q3-2022",q4:"q4-2022"}}},RU:{}}},c=o(40);o.n(c).a.polyfill();var s=["FASTEST","safest","scalability","awesome","greatest"],l=document.querySelector("#fsc1"),d="ABCDEFGHIJKLMONPQRSTUVWXYZ@#$%&+=";function u(e,t,o){return e.substring(0,t)+o+e.substring(t+1)}function m(e,t){var o=e-.5+Math.random()*(t-e+1);return o=Math.round(o)}var p=0,f=s[p],h=f,g=0,y=0;setInterval(function(){if(g<f.length)for(var e=g;e<h.length;e++){var t=d[m(1,d.length-1)];h=u(h,e,t),l.innerHTML=h}},50),setInterval(function(){if(y<5)if(g<f.length)y=0,h=u(h,g,f[g]),g++,l.innerHTML=h;else{var e=new i.a;e.to(l,.45,{color:"#273be2"}),y++}else{y=0,g=0;var t=new i.a;t.to(l,.25,{color:"#000"}),++p>s.length-1&&(p=0),f=s[p],h=f}},400);["Prods","Docs","Team","Roadmap","Video"].forEach(function(e){var t="#to"+e,o="#go"+e;document.querySelector(t).addEventListener("click",function(){b(o,70)})});["ProdsMobile","Docs","Team","Roadmap"].forEach(function(e){var t="#m_to"+e,o="#go"+e;document.querySelector(t).addEventListener("click",function(){b(o,40),document.querySelector(".mobmenu_screen").classList.toggle("hide_nav"),document.querySelector(".mobburger").classList.toggle("burgclose")})}),document.querySelector(".mobburger").addEventListener("click",function(e){document.querySelector(".mobmenu_screen").classList.toggle("hide_nav"),document.querySelector(".mobburger").classList.toggle("burgclose")});var b=function(e,t){var o=document.querySelector(e),n=document.querySelector(".allpage"),a=o.offsetTop-n.scrollTop-t;window.scroll({top:a,left:0,behavior:"smooth"})};window.onscroll=function(){window.pageYOffset>q?v.classList.add("sticky"):v.classList.remove("sticky"),_(".all_benefits",200,"fadeInUp"),_(".tabs_block",900,"fadeInUp"),_(".videobox",2400,"fadeInUp"),_(".all_whys",3600,"fadeInUp"),_(".doc_icon",6600,"rotateIn"),w("#line1red",4500,100),w("#line1blue",4500,80)};var v=document.getElementById("mainmenu"),q=v.offsetTop;function _(e,t,o){var n=document.querySelectorAll(e);window.pageYOffset>t&&[].forEach.call(n,function(e){e.classList.add("animated"),e.classList.add(o)})}function w(e,t,o){var n=document.querySelector(e);window.pageYOffset>t&&(n.style.width=o+"%")}var L="1";document.querySelectorAll(".tab_btn").forEach(function(e){e.addEventListener("click",function(t){var o=e.id.slice(3,4);L=o;var n=r.content.EN.allTabs["tab"+L].left;(new i.a).to("#tab_content",.55,{opacity:0,onStart:function(){document.querySelector("#tab_content").classList.add("animated"),document.querySelector("#tab_content").classList.add("fadeOut")},onComplete:function(){document.getElementById("tab_content").innerHTML=n,document.querySelector("#tab_content").classList.remove("fadeOut"),document.querySelector("#tab_content").classList.add("fadeIn")}}).to("#tab_content",.55,{opacity:1}),document.querySelector(".active_tab").classList.remove("active_tab"),this.classList.add("active_tab")})});var S="product1";document.querySelectorAll(".one_prod").forEach(function(e){e.addEventListener("click",function(t){var o=e.id.slice(5,6);S=o;var n=r.content.EN.products["product"+S];(new i.a).to("#allprodbox",.5,{opacity:0,onStart:function(){console.log("kkk"),document.querySelector(".prod_pic").classList.add("animated"),document.querySelector(".prod_pic").classList.add("fadeOutRight"),document.querySelector("#prodtext").classList.add("animated"),document.querySelector("#prodtext").classList.add("fadeOutDown"),document.querySelector(".prod_status").classList.add("animated"),document.querySelector(".prod_status").classList.add("fadeOutDown")},onComplete:function(){document.querySelector(".prod_pic").classList.remove("fadeOutRight"),document.querySelector(".prod_pic").classList.add("fadeInRight"),document.querySelector("#prodtext").classList.remove("fadeOutDown"),document.querySelector("#prodtext").classList.add("fadeInUp"),document.querySelector(".prod_status").classList.remove("fadeOutDown"),document.querySelector(".prod_status").classList.add("fadeInUp"),document.getElementById("prodpic").src=n.image,document.getElementById("prodtext").innerHTML="",document.getElementById("prodtext").innerHTML=n.content,document.getElementById("prodline").style.width=n.percent+"%",document.getElementById("prodpercent").innerHTML=n.percent+"%",document.getElementById("prodq").innerHTML=n.q,document.getElementById("proddate").innerHTML=n.rel}}).to("#allprodbox",.9,{opacity:1});var a=document.querySelector(".active_prod_text"),c=document.querySelector(".active_prod_icon");a.classList.remove("active_prod_text"),c.classList.remove("active_prod_icon"),this.children[0].classList.add("active_prod_icon"),this.children[1].classList.add("active_prod_text")})});var I="2019";document.querySelectorAll(".yearBtn").forEach(function(e){e.addEventListener("click",function(e){var t=document.querySelector(".active_y");t.classList.remove("active_y"),this.classList.add("active_y"),t.children[0].classList.remove("active_yt"),this.children[0].classList.add("active_yt"),I=this.children[0].innerHTML,document.querySelector(".r_tab_active").classList.remove("r_tab_active"),document.querySelector(".r_tabs").children[0].classList.add("r_tab_active"),(new i.a).to("#r_date",.25,{opacity:0,onComplete:function(){document.getElementById("r_date").innerHTML=I}}).to("#r_date",.25,{opacity:1}),(new i.a).to("#r_screen",.25,{opacity:0,onComplete:function(){document.getElementById("r_screen").innerHTML=r.content.EN.roadmap[I].q1}}).to("#r_screen",.25,{opacity:1})})});var E="q1";document.querySelectorAll(".r_tab").forEach(function(e){e.addEventListener("click",function(e){document.querySelector(".r_tab_active").classList.remove("r_tab_active"),this.classList.add("r_tab_active"),E=this.id,(new i.a).to("#r_screen",.25,{opacity:0,onComplete:function(){document.getElementById("r_screen").innerHTML=r.content.EN.roadmap[I][E]}}).to("#r_screen",.25,{opacity:1})})}),document.querySelectorAll(".accordion").forEach(function(e){e.addEventListener("click",function(e){this.nextElementSibling.classList.toggle("opened")})});var k=navigator.language,R=document.querySelector(".languagepicker").children[0].children[0];R.innerHTML=k,console.log(R)}});
//# sourceMappingURL=app.2373ed5e.js.map