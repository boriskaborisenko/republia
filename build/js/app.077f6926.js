!function(e){function t(t){for(var i,r,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)r=s[u],a[r]&&p.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(d&&d(t);p.length;)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(i=!1)}i&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={0:0},o=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;o.push([91,1]),n()}({46:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);n(46),n(6);var i=n(53);n(60),i.initializeApp({apiKey:"AIzaSyASvIZydpFWRQF98N0645Jl-Ag40MTTnjg",authDomain:"republia-222218.firebaseapp.com",databaseURL:"https://republia-222218.firebaseio.com",projectId:"republia-222218",storageBucket:"",messagingSenderId:"750372444315"});var a=i.firestore();a.settings({timestampsInSnapshots:!0}),a.collection("videosData").doc("allVideos").get().then(function(e){!function(e){var t=e.playlist;new(n(65))("AIzaSyA_pza_I2tTH3sQ8RVvzJJIJEXc5BFjuG8").getPlaylist("https://www.youtube.com/playlist?list="+t).then(function(e){e.getVideos().then(function(e){var t;document.getElementById("mainvid").innerHTML='<iframe id="vid_frame" src="https://www.youtube.com/embed/'+e[0].id+'?rel=0&showinfo=0&autohide=1" width="560" height="315" frameborder="0" allowfullscreen></iframe>',e.map(function(e){t=e.title.length>60?e.title.substring(0,60)+"...":e.title;var n=e.description.substring(0,60);document.getElementById("videoslist").innerHTML+="<div class=\"list_video\" onClick=\"document.getElementById('vid_frame').src='https://youtube.com/embed/".concat(e.id,'?autoplay=1&rel=0&showinfo=0&autohide=1&autoplay=1\'">\n                                <div class="thumb inl_t" style="background:url(https://img.youtube.com/vi/').concat(e.id,'/0.jpg) center center no-repeat; background-size:cover;"></div>\n                                <div class="vid_desc inl_t">\n                                <div class="vid_title">').concat(t,'</div>\n                                <div class="vid_anno">').concat(n,"...</div>\n                                </div>\n                            </div>")})}).catch(console.log)}).catch(console.log)}({playlist:e.data().playlist})});n(20),n(25);a.collection("news").orderBy("date","desc").limit(5).get().then(function(e){var t=document.querySelector(".all_news");e.forEach(function(e){var n=e.data(),i="";n.hashtags.length>0&&n.hashtags.map(function(e,t){t<3&&(i+="<li>".concat(e,"</li>"))});var a='<div class="one_new">\n                  <div class="new_dot"></div>\n                  <div class="new_date">'.concat(n.date,'</div>\n                  <div class="new_title_and_hashtags">\n                    <div class="new_title">').concat(n.title,'</div>\n                    <div class="hashtags">\n                      <ul>\n                        ').concat(i,'\n                      </ul>\n                    </div>\n                  </div>\n                  <a href="').concat(n.url,'" target="_blank" class="new_title_link"></a>\n                </div>');t.innerHTML+=a})});n(41),n(88);var o=n(92),r={content:{EN:{blocks:{},allTabs:{tab1:{title:"Business",left:"Easy-to-create secure smart contracts help reduce the impact of the human factor and mitigate the risks and losses. Republia ID as a KYC module allows optimizing the costs of the user identification divisions.",right:"empty"},tab2:{title:"Government",left:"Republia ID facilitates the introduction of a simplified citizens identification system. The implementation of blockchain technology is much easier thanks to the template solutions on the Smart Contract Platform.",right:"empty"},tab3:{title:"Developers",left:"It is possible to create and sell smart contracts on the marketplace of the Republia Smart Contract Platform. Formal verification of the smart contract code before compilation ensures the complete control over the script building logic. OCaml also allows developing modular, clear and compact source code and makes it easy to work with recursive structures such as syntax trees.",right:"empty"},tab4:{title:"Users",left:"Users can make quick payments and use the RPB coin as a means of payment that is less volatile. Republia Bank combined mechanisms of world central banks with blockchain technologies, ensuring RPB price stability in a volatile environment. Also, users without technical knowledge can create smart contracts from a template, for example, to pay rent or when lending.",right:"empty"}},products:{product1:{title:"REPUBLIA ID",titleBR:"REPUBLIA<br>ID",content:"Republia ID is a digital-analog of Identity Card, the main feature of which is the advanced security. Republia ID allows community members to influence the life of the ecosystem directly and ensures security through the implementation into all parts of the global ecosystem. Identity Card that minimizes the risk of loss of funds or hacking user accounts.",rel:"2019",q:"Q1",percent:73,image:"id.png",btn:"Try MVP",icon:"pr_1.svg",url:"https://republia.io/mvp?#/"},product2:{title:"REPUBLIA BANK",titleBR:"REPUBLIA<br>BANK",content:"Republia Bank is a component of the economic model of the decentralized Republia ecosystem, which combines the principles of Central Banks and innovative technologies. Republia Bank automatically regulates demand and supply on stock exchanges and smooths volatility of RPB coin through balancing and automated analysis of the market situation.",rel:"2019",q:"Q1",percent:100,image:"bank.png",btn:"Try MVP",icon:"pr_2.svg",url:"https://republia.io/mvp?#/"},product3:{title:"DAPPS PLATFORM",titleBR:"DAPPS<br>PLATFORM",content:"Provides the expansion of the entire Republia ecosystem by interrelated projects, not by the addition of competitive Crowdfunding, thereby avoiding bad investment companies.",rel:"2020",q:"Q2",percent:12,image:"dapps.png",btn:"Get Rebublia ID",icon:"pr_3.svg",url:"https://republia.io/mvp?#/"},product4:{title:"REPUBLIA SC PLATFROM",titleBR:"REPUBLIA SC<br>PLATFROM",content:"Republia Smart Contract Platform is an easy-to-use tool for generating smart contracts, that allows to create, execute and manage smart contracts based on the Republia blockchain by yourself.",rel:"2020",q:"Q3",percent:34,image:"sc.png",btn:"Get Rebublia ID",icon:"pr_4.svg",url:"https://republia.io/mvp?#/"},product5:{title:"CLOUDX",titleBR:"CLOUDX",content:"Republia Cloud X is the secure storage of data and the future of the entire global ecosystem. It is a data cloud storage, where all user information is stored decentrally in an encrypted form.",rel:"2021",q:"Q4",percent:7,image:"cloud.png",btn:"Get Rebublia ID",icon:"pr_5.svg",url:"https://republia.io/mvp?#/"},product6:{title:"REPUBLIA EXCHANGE",titleBR:"REPUBLIA<br>EXCHANGE",content:"Transactions are faster than in such popular payment systems as MasterCard or Visa. Republia Exchange provides quick operations processing, orders opening/ closing, as well as an ability to connect an internal bank card. You can use this card to sell the necessary amount of RPB according to the market order and due to an instantaneous operation of Atomic Swap mechanism.",rel:"2019",q:"Q4",percent:23,image:"exchange.png",btn:"Get Rebublia ID",icon:"pr_6.svg",url:"https://republia.io/mvp?#/"},product7:{title:" REPUBLIA WALLET",titleBR:" REPUBLIA<br>WALLET",content:"Republia Wallet is a uniquely designed integrated technology, that includes both wallets, which solves the problem of bulky wallets with 16-digit addresses, and an instant messenger with the addition of contacts that provides secure exchange of messages and  files between users, (stored in Republia Cloud X) and also provides an opportunity to create smart contracts with contacts.",rel:"2019",q:"Q1",percent:100,image:"wallet.png",btn:"Get Rebublia ID",icon:"pr_7.svg",url:"https://republia.io/mvp?#/"},product8:{title:" REPUBLIA VOTING",titleBR:" REPUBLIA<br>VOTING",content:"Republia follows the principle of “We-ecosystem,” where all users are equally important in the modernization of the network, as Republia consensus operates on the Proof-of-Authority algorithm (PoA) + BFT (Byzantine Fault Tolerance). A unique solution for coordinating changes in ecosystem conditions through direct user voting based on Republia blockchain, which, in turn, is based on “we-government” methodology.",rel:"2019",q:"Q2",percent:57,image:"voting.png",btn:"Get Rebublia ID",icon:"pr_8.svg",url:"https://republia.io/mvp?#/"}},roadmap:{2016:{q1:["q1-2016"],q2:["Project technical specification"],q3:["Wrapping WP, TP"],q4:["q4-2016"]},2017:{q1:["Beginning of the development"],q2:["q2-2017"],q3:["Beginning of the development"],q4:["q4-2017"]},2018:{q1:["MVP Prototype test"],q2:["MVP implementation"],q3:["Project launch","Bounty Campaign launch"],q4:["Pre-sale","Roadshow","End of Bounty Campaign"]},2019:{q1:["Public Sale. Start of the first","Public report on the results of the first round of Public Sale","Development of ERC-20 token","Exchange listing","Republia Wallet"],q2:["Bank Classic","Voting system launch","Distribution of rewards for participation in the bounty campaign"],q3:["Test-net launch","Emporium Exchange MVP Release"],q4:["Emporium Exchange release","CloudX test-version launch"]},2020:{q1:["Public Sale end","Republia Blockchain release","Swap token2coin smart contract"],q2:["Rialto Exchange release","DAPPS Platform launch","Launch of the first project on DAPPS Platform"],q3:["Smart Contract Platform release (Pattern mode)"],q4:["Smart Contract Platform release (Dev mode)","CloudX launch"]}}},RU:{}}};!function(){var e=r.content.EN.products,t=document.querySelector(".all_prods_mob");Object.keys(e).map(function(n,i){var a='<div class="accordion" id="mp'+(i+1)+'"><div class="vis_icon inl_m"><img src="../public/images/svg/prods/'+e[n].icon+'" alt=""></div><div class="vis_title inl_m">'+e[n].title+'</div><div class="vis_opcl inl_m"></div></div><div class="panel"><div class="hided_part"><div class="hided_text"><div class="prod_text">'+e[n].content+'</div><div class="prod_status"><div class="status_block"><div class="status_title">Status</div><div class="status_perc inl_m" id="prodpercent">'+e[n].percent+'%</div><div class="status_line inl_m"><div class="status_bar"><div class="status_complete" id="prodline" style="width:'+e[n].percent+'%;"></div></div></div></div><div class="status_block"><div class="status_title">Release date</div><div class="status_perc inl_m" id="prodq">'+e[n].q+'</div><div class="status_line inl_m" id="proddate">'+e[n].rel+'</div></div></div><div class="prod_btn"><a href="'+e[n].url+'" target="_blank"><div class="solid_b_btn">'+e[n].btn+'</div></a></div></div><div class="hided_pic "><img src="../public/images/mobile_mob/'+e[n].image+'" alt="" class="fluidpic"></div></div></div>';t.innerHTML+=a})}(),function(){var e=r.content.EN.products,t=document.querySelector("#lpx");Object.keys(e).map(function(n,i){var a='<li><div class="one_prod" id="prod_'+(i+1)+'"><div class="prod_icon inl_m"><img src="../public/images/svg/prods/'+e[n].icon+'" alt=""></div><div class="prod_desc inl_m">'+e[n].titleBR+"</div></div></li>";t.innerHTML+=a}),document.querySelector("#prod_1").children[0].classList.add("active_prod_icon"),document.querySelector("#prod_1").children[1].classList.add("active_prod_text")}(),function(){var e=r.content.EN.products.product1,t=document.querySelector("#allprodbox"),n='<div class="prod_pic"><img id="prodpic" src="../public/images/mobile_laptop/'+e.image+'" alt="" class="fluidpic"></div><div class="prod_text" id="prodtext">'+e.content+'</div><div class="prod_status"><div class="status_block"><div class="status_title">Status</div><div class="status_perc inl_m" id="prodpercent">'+e.percent+'%</div><div class="status_line inl_m"><div class="status_bar"><div class="status_complete" id="prodline" style="width:'+e.percent+'%;"></div></div></div></div><div class="status_block"><div class="status_title">Release date</div><div class="status_perc inl_m" id="prodq">'+e.q+'</div><div class="status_line inl_m" id="proddate">'+e.rel+'</div></div></div><div class="prod_btn"><a id="btnurl" href="'+e.url+'" target="_blank"><div id="btntitle" class="solid_b_btn">'+e.btn+"</div></a></div>";t.innerHTML=n}();var s="product1";document.querySelectorAll(".one_prod").forEach(function(e){e.addEventListener("click",function(t){var n=e.id.slice(5,6);s=n;var i=r.content.EN.products["product"+s];(new o.a).to("#allprodbox",.5,{opacity:0,onStart:function(){document.getElementById("prodline").style.width="0%",document.querySelector(".prod_pic").classList.add("animated"),document.querySelector(".prod_pic").classList.add("fadeOutRight"),document.querySelector("#prodtext").classList.add("animated"),document.querySelector("#prodtext").classList.add("fadeOutDown"),document.querySelector(".prod_status").classList.add("animated"),document.querySelector(".prod_status").classList.add("fadeOutDown")},onComplete:function(){document.querySelector(".prod_pic").classList.remove("fadeOutRight"),document.querySelector(".prod_pic").classList.add("fadeInRight"),document.querySelector("#prodtext").classList.remove("fadeOutDown"),document.querySelector("#prodtext").classList.add("fadeInUp"),document.querySelector(".prod_status").classList.remove("fadeOutDown"),document.querySelector(".prod_status").classList.add("fadeInUp"),document.getElementById("prodpic").src=i.image,document.getElementById("prodtext").innerHTML="",document.getElementById("prodtext").innerHTML=i.content,document.getElementById("btnurl").href=i.url,document.getElementById("btntitle").innerHTML=i.btn,setTimeout(function(){document.getElementById("prodline").style.width=i.percent+"%"},800),document.getElementById("prodpic").src="../public/images/mobile_laptop/"+i.image,document.getElementById("prodpercent").innerHTML=i.percent+"%",document.getElementById("prodq").innerHTML=i.q,document.getElementById("proddate").innerHTML=i.rel}}).to("#allprodbox",.9,{opacity:1});var a=document.querySelector(".active_prod_text"),c=document.querySelector(".active_prod_icon");a.classList.remove("active_prod_text"),c.classList.remove("active_prod_icon"),this.children[0].classList.add("active_prod_icon"),this.children[1].classList.add("active_prod_text")})}),document.querySelectorAll(".accordion").forEach(function(e){e.addEventListener("click",function(e){this.nextElementSibling.classList.toggle("opened")})});var c=n(44);n.n(c).a.polyfill();var l=["THE FASTEST","the safest","most scalable"],d=document.querySelector("#fsc1"),u="ABCDEFGHIJKLMONPQRSTUVWXYZ@#$%&+=0987654321";function p(e,t,n){return e.substring(0,t)+n+e.substring(t+1)}function m(e,t){var n=e-.5+Math.random()*(t-e+1);return n=Math.round(n)}var v=0,h=l[v],f=h,b=0,g=0;setInterval(function(){if(b<h.length)for(var e=b;e<f.length;e++){var t=u[m(1,u.length-1)];f=p(f,e,t),d.innerHTML=f}},50),setInterval(function(){g<2?b<h.length?(g=0,f=p(f,b,h[b]),b++,d.innerHTML=f):g++:(g=0,b=0,++v>l.length-1&&(v=0),h=l[v],f=h)},200);["Prods","Docs","Team","Roadmap","Video"].forEach(function(e){var t="#to"+e,n="#go"+e;document.querySelector(t).addEventListener("click",function(){y(n,70)})});["ProdsMobile","Docs","Team","Roadmap"].forEach(function(e){var t="#m_to"+e,n="#go"+e;document.querySelector(t).addEventListener("click",function(){y(n,40),document.querySelector(".mobmenu_screen").classList.toggle("hide_nav"),document.querySelector(".mobburger").classList.toggle("burgclose")})}),document.querySelector(".mobburger").addEventListener("click",function(e){document.querySelector(".mobmenu_screen").classList.toggle("hide_nav"),document.querySelector(".mobburger").classList.toggle("burgclose")});var y=function(e,t){var n=document.querySelector(e),i=document.querySelector(".allpage"),a=n.offsetTop-i.scrollTop-t;window.scroll({top:a,left:0,behavior:"smooth"})};window.onscroll=function(){window.pageYOffset>L?_.classList.add("sticky"):_.classList.remove("sticky"),q(".all_benefits",120,"fadeInUp"),q(".tabs_block",900,"fadeInUp"),q(".scheme_text",1700,"fadeInLeft"),q(".smart_contr_text",2900,"fadeInLeft"),q(".all_whys",3600,"fadeInUp"),q(".one_doc",6600,"rotateIn"),w("#line1red",4650,100),w("#line1blue",4650,80),w("#line2red",4650,40),w("#line2blue",4650,20),w("#line3red",4650,16),w("#line3blue",4650,10),w("#line4red",4650,6),w("#line4blue",4650,1)};var _=document.getElementById("mainmenu"),L=_.offsetTop;function q(e,t,n){var i=document.querySelectorAll(e);window.pageYOffset>t&&window.innerWidth>720&&[].forEach.call(i,function(e){e.classList.add("animated"),e.classList.add(n)})}function w(e,t,n){var i=document.querySelector(e);window.pageYOffset>t&&(i.style.width=n+"%")}var S="1";document.querySelectorAll(".tab_btn").forEach(function(e){e.addEventListener("click",function(t){var n=e.id.slice(3,4);S=n;var i=r.content.EN.allTabs["tab"+S].left;document.getElementById("tab_content").innerHTML=i,document.querySelector(".active_tab").classList.remove("active_tab"),this.classList.add("active_tab")})}),document.querySelectorAll(".yearBtn").forEach(function(e){e.addEventListener("click",function(e){var t=document.querySelector(".active_y");t.classList.remove("active_y"),this.classList.add("active_y"),t.children[0].classList.remove("active_yt"),this.children[0].classList.add("active_yt"),E=this.children[0].innerHTML,document.querySelector(".r_tab_active").classList.remove("r_tab_active"),document.querySelector(".r_tabs").children[0].classList.add("r_tab_active"),(new o.a).to("#r_date",.25,{opacity:0,onComplete:function(){document.getElementById("r_date").innerHTML=E}}).to("#r_date",.25,{opacity:1}),(new o.a).to("#r_screen",.25,{opacity:0,onComplete:function(){I(r.content.EN.roadmap[E].q1)}}).to("#r_screen",.25,{opacity:1})})}),document.querySelectorAll(".r_tab").forEach(function(e){e.addEventListener("click",function(e){document.querySelector(".r_tab_active").classList.remove("r_tab_active"),this.classList.add("r_tab_active"),R=this.id,(new o.a).to("#r_screen",.25,{opacity:0,onComplete:function(){I(r.content.EN.roadmap[E][R])}}).to("#r_screen",.25,{opacity:1})})});var E="2018",R="q4";function I(e){var t=document.querySelector("#r_screen");t.innerHTML="",e.map(function(e){t.innerHTML+='\n        <div class="onePoint">\n        <div class="roadmap_checkbox inl_m"></div>\n        <div class="roadmap_item inl_m">'.concat(e,"</div>\n        </div>\n        ")})}!function(e,t){document.querySelector("#"+e).classList.add("r_tab_active"),document.querySelector("#r_date").innerHTML=t;var n=document.querySelector("#year"+t);n.classList.add("active_y"),n.children[0].classList.add("active_yt"),I(r.content.EN.roadmap[E][R])}(R,E);var P=navigator.language,B=document.querySelector(".languagepicker").children[0].children[0];B.innerHTML=P,console.log(B)}});
//# sourceMappingURL=app.077f6926.js.map