!function(e){function t(t){for(var s,o,r=t[0],c=t[1],l=t[2],u=0,p=[];u<r.length;u++)o=r[u],i[o]&&p.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);for(d&&d(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},i={1:0},a=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;a.push([218,0,3]),n()}({141:function(e,t,n){},173:function(e,t,n){var s={"./af":18,"./af.js":18,"./ar":19,"./ar-dz":20,"./ar-dz.js":20,"./ar-kw":21,"./ar-kw.js":21,"./ar-ly":22,"./ar-ly.js":22,"./ar-ma":23,"./ar-ma.js":23,"./ar-sa":24,"./ar-sa.js":24,"./ar-tn":25,"./ar-tn.js":25,"./ar.js":19,"./az":26,"./az.js":26,"./be":27,"./be.js":27,"./bg":28,"./bg.js":28,"./bm":29,"./bm.js":29,"./bn":30,"./bn.js":30,"./bo":31,"./bo.js":31,"./br":32,"./br.js":32,"./bs":33,"./bs.js":33,"./ca":34,"./ca.js":34,"./cs":35,"./cs.js":35,"./cv":36,"./cv.js":36,"./cy":37,"./cy.js":37,"./da":38,"./da.js":38,"./de":39,"./de-at":40,"./de-at.js":40,"./de-ch":41,"./de-ch.js":41,"./de.js":39,"./dv":42,"./dv.js":42,"./el":43,"./el.js":43,"./en-au":44,"./en-au.js":44,"./en-ca":45,"./en-ca.js":45,"./en-gb":46,"./en-gb.js":46,"./en-ie":47,"./en-ie.js":47,"./en-il":48,"./en-il.js":48,"./en-nz":49,"./en-nz.js":49,"./eo":50,"./eo.js":50,"./es":51,"./es-do":52,"./es-do.js":52,"./es-us":53,"./es-us.js":53,"./es.js":51,"./et":54,"./et.js":54,"./eu":55,"./eu.js":55,"./fa":56,"./fa.js":56,"./fi":57,"./fi.js":57,"./fo":58,"./fo.js":58,"./fr":59,"./fr-ca":60,"./fr-ca.js":60,"./fr-ch":61,"./fr-ch.js":61,"./fr.js":59,"./fy":62,"./fy.js":62,"./gd":63,"./gd.js":63,"./gl":64,"./gl.js":64,"./gom-latn":65,"./gom-latn.js":65,"./gu":66,"./gu.js":66,"./he":67,"./he.js":67,"./hi":68,"./hi.js":68,"./hr":69,"./hr.js":69,"./hu":70,"./hu.js":70,"./hy-am":71,"./hy-am.js":71,"./id":72,"./id.js":72,"./is":73,"./is.js":73,"./it":74,"./it.js":74,"./ja":75,"./ja.js":75,"./jv":76,"./jv.js":76,"./ka":77,"./ka.js":77,"./kk":78,"./kk.js":78,"./km":79,"./km.js":79,"./kn":80,"./kn.js":80,"./ko":81,"./ko.js":81,"./ky":82,"./ky.js":82,"./lb":83,"./lb.js":83,"./lo":84,"./lo.js":84,"./lt":85,"./lt.js":85,"./lv":86,"./lv.js":86,"./me":87,"./me.js":87,"./mi":88,"./mi.js":88,"./mk":89,"./mk.js":89,"./ml":90,"./ml.js":90,"./mn":91,"./mn.js":91,"./mr":92,"./mr.js":92,"./ms":93,"./ms-my":94,"./ms-my.js":94,"./ms.js":93,"./mt":95,"./mt.js":95,"./my":96,"./my.js":96,"./nb":97,"./nb.js":97,"./ne":98,"./ne.js":98,"./nl":99,"./nl-be":100,"./nl-be.js":100,"./nl.js":99,"./nn":101,"./nn.js":101,"./pa-in":102,"./pa-in.js":102,"./pl":103,"./pl.js":103,"./pt":104,"./pt-br":105,"./pt-br.js":105,"./pt.js":104,"./ro":106,"./ro.js":106,"./ru":107,"./ru.js":107,"./sd":108,"./sd.js":108,"./se":109,"./se.js":109,"./si":110,"./si.js":110,"./sk":111,"./sk.js":111,"./sl":112,"./sl.js":112,"./sq":113,"./sq.js":113,"./sr":114,"./sr-cyrl":115,"./sr-cyrl.js":115,"./sr.js":114,"./ss":116,"./ss.js":116,"./sv":117,"./sv.js":117,"./sw":118,"./sw.js":118,"./ta":119,"./ta.js":119,"./te":120,"./te.js":120,"./tet":121,"./tet.js":121,"./tg":122,"./tg.js":122,"./th":123,"./th.js":123,"./tl-ph":124,"./tl-ph.js":124,"./tlh":125,"./tlh.js":125,"./tr":126,"./tr.js":126,"./tzl":127,"./tzl.js":127,"./tzm":128,"./tzm-latn":129,"./tzm-latn.js":129,"./tzm.js":128,"./ug-cn":130,"./ug-cn.js":130,"./uk":131,"./uk.js":131,"./ur":132,"./ur.js":132,"./uz":133,"./uz-latn":134,"./uz-latn.js":134,"./uz.js":133,"./vi":135,"./vi.js":135,"./x-pseudo":136,"./x-pseudo.js":136,"./yo":137,"./yo.js":137,"./zh-cn":138,"./zh-cn.js":138,"./zh-hk":139,"./zh-hk.js":139,"./zh-tw":140,"./zh-tw.js":140};function i(e){var t=a(e);return n(t)}function a(e){var t=s[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(s)},i.resolve=a,e.exports=i,i.id=173},218:function(e,t,n){"use strict";n.r(t);n(141),n(7);var s=n(3);s.a.collection("videosData").doc("allVideos").get().then(function(e){!function(e){var t=e.playlist;new(n(192))("AIzaSyA_pza_I2tTH3sQ8RVvzJJIJEXc5BFjuG8").getPlaylist("https://www.youtube.com/playlist?list="+t).then(function(e){e.getVideos().then(function(e){var t;document.getElementById("mainvid").innerHTML='<iframe id="vid_frame" src="https://www.youtube.com/embed/'+e[0].id+'?rel=0&showinfo=0&autohide=1" width="560" height="315" frameborder="0" allowfullscreen></iframe>',e.map(function(e){t=e.title.length>60?e.title.substring(0,60)+"...":e.title;var n=e.description.substring(0,60);document.getElementById("videoslist").innerHTML+="<div class=\"list_video\" onClick=\"document.getElementById('vid_frame').src='https://youtube.com/embed/".concat(e.id,'?autoplay=1&rel=0&showinfo=0&autohide=1&autoplay=1\'">\n                                <div class="thumb inl_t" style="background:url(https://img.youtube.com/vi/').concat(e.id,'/0.jpg) center center no-repeat; background-size:cover;"></div>\n                                <div class="vid_desc inl_t">\n                                <div class="vid_title">').concat(t,'</div>\n                                <div class="vid_anno">').concat(n,"...</div>\n                                </div>\n                            </div>")})}).catch(console.log)}).catch(console.log)}({playlist:e.data().playlist})});n(16),n(17),n(0);var i=n(0);s.a.collection("news").orderBy("date","desc").limit(5).get().then(function(e){var t=document.querySelector(".all_news");e.forEach(function(e){var n=e.data(),s="";n.hashtags.length>0&&n.hashtags.map(function(e,t){t<3&&(s+="<li>".concat(e,"</li>"))});var a=i.unix(n.date.seconds).utcOffset("+02:00").format("DD.MM.YYYY"),o='<div class="one_new">\n                  <div class="new_dot"></div>\n                  <div class="new_date">'.concat(a,'</div>\n                  <div class="new_title_and_hashtags">\n                    <div class="new_title">').concat(n.title,'</div>\n                    <div class="hashtags">\n                      <ul>\n                        ').concat(s,'\n                      </ul>\n                    </div>\n                  </div>\n                  <a href="').concat(n.url,'" target="_blank" class="new_title_link"></a>\n                </div>');t.innerHTML+=o})});n(170),n(214);var a=n(219),o={content:{EN:{blocks:{},allTabs:{tab1:{title:"Business",left:"Easy-to-create secure smart contracts help reduce the impact of the human factor and mitigate the risks and losses. Republia ID as a KYC module allows optimizing the costs of the user identification divisions.",right:"empty"},tab2:{title:"Government",left:"Republia ID facilitates the introduction of a simplified citizens identification system. The implementation of blockchain technology is much easier thanks to the template solutions on the Smart Contract Platform.",right:"empty"},tab3:{title:"Developers",left:"It is possible to create and sell smart contracts on the marketplace of the Republia Smart Contract Platform. Formal verification of the smart contract code before compilation ensures the complete control over the script building logic. OCaml also allows developing modular, clear and compact source code and makes it easy to work with recursive structures such as syntax trees.",right:"empty"},tab4:{title:"Users",left:"Users can make quick payments and use the RPB coin as a means of payment that is less volatile. Republia Bank combined mechanisms of world central banks with blockchain technologies, ensuring RPB price stability in a volatile environment. Also, users without technical knowledge can create smart contracts from a template, for example, to pay rent or when lending.",right:"empty"}},products:{product1:{title:"REPUBLIA ID",titleBR:"REPUBLIA<br>ID",content:"Republia ID is a digital-analog of Identity Card, the main feature of which is the advanced security. Republia ID allows community members to influence the life of the ecosystem directly and ensures security through the implementation into all parts of the global ecosystem. Identity Card that minimizes the risk of loss of funds or hacking user accounts.",rel:"2019",q:"Q1",percent:73,image:"id.png",btn:"Try MVP",icon:"pr_1.svg",url:"https://republia.io/mvp?#/"},product2:{title:"REPUBLIA BANK",titleBR:"REPUBLIA<br>BANK",content:"Republia Bank is a component of the economic model of the decentralized Republia ecosystem, which combines the principles of Central Banks and innovative technologies. Republia Bank automatically regulates demand and supply on stock exchanges and smooths volatility of RPB coin through balancing and automated analysis of the market situation.",rel:"2019",q:"Q1",percent:100,image:"bank.png",btn:"Try MVP",icon:"pr_2.svg",url:"https://republia.io/mvp?#/"},product3:{title:"DAPPS PLATFORM",titleBR:"DAPPS<br>PLATFORM",content:"Provides the expansion of the entire Republia ecosystem by interrelated projects, not by the addition of competitive Crowdfunding, thereby avoiding bad investment companies.",rel:"2020",q:"Q2",percent:12,image:"dapps.png",btn:"Get Rebublia ID",icon:"pr_3.svg",url:"https://republia.io/mvp?#/"},product4:{title:"REPUBLIA SC PLATFROM",titleBR:"REPUBLIA SC<br>PLATFROM",content:"Republia Smart Contract Platform is an easy-to-use tool for generating smart contracts, that allows to create, execute and manage smart contracts based on the Republia blockchain by yourself.",rel:"2020",q:"Q3",percent:34,image:"sc.png",btn:"Get Rebublia ID",icon:"pr_4.svg",url:"https://republia.io/mvp?#/"},product5:{title:"CLOUDX",titleBR:"CLOUDX",content:"Republia Cloud X is the secure storage of data and the future of the entire global ecosystem. It is a data cloud storage, where all user information is stored decentrally in an encrypted form.",rel:"2021",q:"Q4",percent:7,image:"cloud.png",btn:"Get Rebublia ID",icon:"pr_5.svg",url:"https://republia.io/mvp?#/"},product6:{title:"REPUBLIA EXCHANGE",titleBR:"REPUBLIA<br>EXCHANGE",content:"Transactions are faster than in such popular payment systems as MasterCard or Visa. Republia Exchange provides quick operations processing, orders opening/ closing, as well as an ability to connect an internal bank card. You can use this card to sell the necessary amount of RPB according to the market order and due to an instantaneous operation of Atomic Swap mechanism.",rel:"2019",q:"Q4",percent:23,image:"exchange.png",btn:"Get Rebublia ID",icon:"pr_6.svg",url:"https://republia.io/mvp?#/"},product7:{title:" REPUBLIA WALLET",titleBR:" REPUBLIA<br>WALLET",content:"Republia Wallet is a uniquely designed integrated technology, that includes both wallets, which solves the problem of bulky wallets with 16-digit addresses, and an instant messenger with the addition of contacts that provides secure exchange of messages and  files between users, (stored in Republia Cloud X) and also provides an opportunity to create smart contracts with contacts.",rel:"2019",q:"Q1",percent:100,image:"wallet.png",btn:"Get Rebublia ID",icon:"pr_7.svg",url:"https://republia.io/mvp?#/"},product8:{title:" REPUBLIA VOTING",titleBR:" REPUBLIA<br>VOTING",content:"Republia follows the principle of “We-ecosystem,” where all users are equally important in the modernization of the network, as Republia consensus operates on the Proof-of-Authority algorithm (PoA) + BFT (Byzantine Fault Tolerance). A unique solution for coordinating changes in ecosystem conditions through direct user voting based on Republia blockchain, which, in turn, is based on “we-government” methodology.",rel:"2019",q:"Q2",percent:57,image:"voting.png",btn:"Get Rebublia ID",icon:"pr_8.svg",url:"https://republia.io/mvp?#/"}},roadmap:{2016:{q1:["q1-2016"],q2:["Project technical specification"],q3:["Wrapping WP, TP"],q4:["q4-2016"]},2017:{q1:["Beginning of the development"],q2:["q2-2017"],q3:["Beginning of the development"],q4:["q4-2017"]},2018:{q1:["MVP Prototype test"],q2:["MVP implementation"],q3:["Project launch","Bounty Campaign launch"],q4:["Pre-sale","Roadshow","End of Bounty Campaign"]},2019:{q1:["Public Sale. Start of the first","Public report on the results of the first round of Public Sale","Development of ERC-20 token","Exchange listing","Republia Wallet"],q2:["Bank Classic","Voting system launch","Distribution of rewards for participation in the bounty campaign"],q3:["Test-net launch","Emporium Exchange MVP Release"],q4:["Emporium Exchange release","CloudX test-version launch"]},2020:{q1:["Public Sale end","Republia Blockchain release","Swap token2coin smart contract"],q2:["Rialto Exchange release","DAPPS Platform launch","Launch of the first project on DAPPS Platform"],q3:["Smart Contract Platform release (Pattern mode)"],q4:["Smart Contract Platform release (Dev mode)","CloudX launch"]}}},RU:{}}};!function(){var e=o.content.EN.products,t=document.querySelector(".all_prods_mob");Object.keys(e).map(function(n,s){var i='<div class="accordion" id="mp'+(s+1)+'"><div class="vis_icon inl_m"><img src="../public/images/svg/prods/'+e[n].icon+'" alt=""></div><div class="vis_title inl_m">'+e[n].title+'</div><div class="vis_opcl inl_m"></div></div><div class="panel"><div class="hided_part"><div class="hided_text"><div class="prod_text">'+e[n].content+'</div><div class="prod_status"><div class="status_block"><div class="status_title">Status</div><div class="status_perc inl_m" id="prodpercent">'+e[n].percent+'%</div><div class="status_line inl_m"><div class="status_bar"><div class="status_complete" id="prodline" style="width:'+e[n].percent+'%;"></div></div></div></div><div class="status_block"><div class="status_title">Release date</div><div class="status_perc inl_m" id="prodq">'+e[n].q+'</div><div class="status_line inl_m" id="proddate">'+e[n].rel+'</div></div></div><div class="prod_btn"><a href="'+e[n].url+'" target="_blank"><div class="solid_b_btn">'+e[n].btn+'</div></a></div></div><div class="hided_pic "><img src="../public/images/mobile_mob/'+e[n].image+'" alt="" class="fluidpic"></div></div></div>';t.innerHTML+=i})}(),function(){var e=o.content.EN.products,t=document.querySelector("#lpx");Object.keys(e).map(function(n,s){var i='<li><div class="one_prod" id="prod_'+(s+1)+'"><div class="prod_icon inl_m"><img src="../public/images/svg/prods/'+e[n].icon+'" alt=""></div><div class="prod_desc inl_m">'+e[n].titleBR+"</div></div></li>";t.innerHTML+=i}),document.querySelector("#prod_1").children[0].classList.add("active_prod_icon"),document.querySelector("#prod_1").children[1].classList.add("active_prod_text")}(),function(){var e=o.content.EN.products.product1,t=document.querySelector("#allprodbox"),n='<div class="prod_pic"><img id="prodpic" src="../public/images/mobile_laptop/'+e.image+'" alt="" class="fluidpic"></div><div class="prod_text" id="prodtext">'+e.content+'</div><div class="prod_status"><div class="status_block"><div class="status_title">Status</div><div class="status_perc inl_m" id="prodpercent">'+e.percent+'%</div><div class="status_line inl_m"><div class="status_bar"><div class="status_complete" id="prodline" style="width:'+e.percent+'%;"></div></div></div></div><div class="status_block"><div class="status_title">Release date</div><div class="status_perc inl_m" id="prodq">'+e.q+'</div><div class="status_line inl_m" id="proddate">'+e.rel+'</div></div></div><div class="prod_btn"><a id="btnurl" href="'+e.url+'" target="_blank"><div id="btntitle" class="solid_b_btn">'+e.btn+"</div></a></div>";t.innerHTML=n}();var r="product1";document.querySelectorAll(".one_prod").forEach(function(e){e.addEventListener("click",function(t){var n=e.id.slice(5,6);r=n;var s=o.content.EN.products["product"+r];(new a.a).to("#allprodbox",.5,{opacity:0,onStart:function(){document.getElementById("prodline").style.width="0%",document.querySelector(".prod_pic").classList.add("animated"),document.querySelector(".prod_pic").classList.add("fadeOutRight"),document.querySelector("#prodtext").classList.add("animated"),document.querySelector("#prodtext").classList.add("fadeOutDown"),document.querySelector(".prod_status").classList.add("animated"),document.querySelector(".prod_status").classList.add("fadeOutDown")},onComplete:function(){document.querySelector(".prod_pic").classList.remove("fadeOutRight"),document.querySelector(".prod_pic").classList.add("fadeInRight"),document.querySelector("#prodtext").classList.remove("fadeOutDown"),document.querySelector("#prodtext").classList.add("fadeInUp"),document.querySelector(".prod_status").classList.remove("fadeOutDown"),document.querySelector(".prod_status").classList.add("fadeInUp"),document.getElementById("prodpic").src=s.image,document.getElementById("prodtext").innerHTML="",document.getElementById("prodtext").innerHTML=s.content,document.getElementById("btnurl").href=s.url,document.getElementById("btntitle").innerHTML=s.btn,setTimeout(function(){document.getElementById("prodline").style.width=s.percent+"%"},800),document.getElementById("prodpic").src="../public/images/mobile_laptop/"+s.image,document.getElementById("prodpercent").innerHTML=s.percent+"%",document.getElementById("prodq").innerHTML=s.q,document.getElementById("proddate").innerHTML=s.rel}}).to("#allprodbox",.9,{opacity:1});var i=document.querySelector(".active_prod_text"),c=document.querySelector(".active_prod_icon");i.classList.remove("active_prod_text"),c.classList.remove("active_prod_icon"),this.children[0].classList.add("active_prod_icon"),this.children[1].classList.add("active_prod_text")})}),document.querySelectorAll(".accordion").forEach(function(e){e.addEventListener("click",function(e){this.nextElementSibling.classList.toggle("opened")})});var c=n(174);n.n(c).a.polyfill();var l=["THE FASTEST","the safest","most scalable"],d=document.querySelector("#fsc1"),u="ABCDEFGHIJKLMONPQRSTUVWXYZ@#$%&+=0987654321";function p(e,t,n){return e.substring(0,t)+n+e.substring(t+1)}function m(e,t){var n=e-.5+Math.random()*(t-e+1);return n=Math.round(n)}var v=0,h=l[v],f=h,b=0,g=0;setInterval(function(){if(b<h.length)for(var e=b;e<f.length;e++){var t=u[m(1,u.length-1)];f=p(f,e,t),d.innerHTML=f}},50),setInterval(function(){g<2?b<h.length?(g=0,f=p(f,b,h[b]),b++,d.innerHTML=f):g++:(g=0,b=0,++v>l.length-1&&(v=0),h=l[v],f=h)},200);window.onload=function(){var e=window.location.href,t=new URL(e).searchParams.get("section");null!==t&&""!==t&&(y("#go"+t,50),window.history.pushState("object or string","Title","/"))};["Prods","Docs","Team","Roadmap","Video"].forEach(function(e){var t="#to"+e,n="#go"+e;document.querySelector(t).addEventListener("click",function(){y(n,70)})});["ProdsMobile","Docs","Team","Roadmap"].forEach(function(e){var t="#m_to"+e,n="#go"+e;document.querySelector(t).addEventListener("click",function(){y(n,40),document.querySelector(".mobmenu_screen").classList.toggle("hide_nav"),document.querySelector(".mobburger").classList.toggle("burgclose")})}),document.querySelector(".mobburger").addEventListener("click",function(e){document.querySelector(".mobmenu_screen").classList.toggle("hide_nav"),document.querySelector(".mobburger").classList.toggle("burgclose")});var y=function(e,t){var n=document.querySelector(e),s=document.querySelector(".allpage"),i=n.offsetTop-s.scrollTop-t;window.scroll({top:i,left:0,behavior:"smooth"})};window.onscroll=function(){window.pageYOffset>j?_.classList.add("sticky"):_.classList.remove("sticky"),w(".all_benefits",120,"fadeInUp"),w(".tabs_block",900,"fadeInUp"),w(".scheme_text",1700,"fadeInLeft"),w(".smart_contr_text",2900,"fadeInLeft"),w(".all_whys",3600,"fadeInUp"),w(".one_doc",6600,"rotateIn"),L("#line1red",4650,100),L("#line1blue",4650,80),L("#line2red",4650,40),L("#line2blue",4650,20),L("#line3red",4650,16),L("#line3blue",4650,10),L("#line4red",4650,6),L("#line4blue",4650,1)};var _=document.getElementById("mainmenu"),j=_.offsetTop;function w(e,t,n){var s=document.querySelectorAll(e);window.pageYOffset>t&&window.innerWidth>720&&[].forEach.call(s,function(e){e.classList.add("animated"),e.classList.add(n)})}function L(e,t,n){var s=document.querySelector(e);window.pageYOffset>t&&(s.style.width=n+"%")}var q="1";document.querySelectorAll(".tab_btn").forEach(function(e){e.addEventListener("click",function(t){var n=e.id.slice(3,4);q=n;var s=o.content.EN.allTabs["tab"+q].left;document.getElementById("tab_content").innerHTML=s,document.querySelector(".active_tab").classList.remove("active_tab"),this.classList.add("active_tab")})}),document.querySelectorAll(".yearBtn").forEach(function(e){e.addEventListener("click",function(e){var t=document.querySelector(".active_y");t.classList.remove("active_y"),this.classList.add("active_y"),t.children[0].classList.remove("active_yt"),this.children[0].classList.add("active_yt"),k=this.children[0].innerHTML,document.querySelector(".r_tab_active").classList.remove("r_tab_active"),document.querySelector(".r_tabs").children[0].classList.add("r_tab_active"),(new a.a).to("#r_date",.25,{opacity:0,onComplete:function(){document.getElementById("r_date").innerHTML=k}}).to("#r_date",.25,{opacity:1}),(new a.a).to("#r_screen",.25,{opacity:0,onComplete:function(){E(o.content.EN.roadmap[k].q1)}}).to("#r_screen",.25,{opacity:1})})}),document.querySelectorAll(".r_tab").forEach(function(e){e.addEventListener("click",function(e){document.querySelector(".r_tab_active").classList.remove("r_tab_active"),this.classList.add("r_tab_active"),S=this.id,(new a.a).to("#r_screen",.25,{opacity:0,onComplete:function(){E(o.content.EN.roadmap[k][S])}}).to("#r_screen",.25,{opacity:1})})});var k="2018",S="q4";function E(e){var t=document.querySelector("#r_screen");t.innerHTML="",e.map(function(e){t.innerHTML+='\n        <div class="onePoint">\n        <div class="roadmap_checkbox inl_m"></div>\n        <div class="roadmap_item inl_m">'.concat(e,"</div>\n        </div>\n        ")})}!function(e,t){document.querySelector("#"+e).classList.add("r_tab_active"),document.querySelector("#r_date").innerHTML=t;var n=document.querySelector("#year"+t);n.classList.add("active_y"),n.children[0].classList.add("active_yt"),E(o.content.EN.roadmap[k][S])}(S,k);var R=navigator.language,I=document.querySelector(".languagepicker").children[0].children[0];I.innerHTML=R,console.log(I)},3:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var s=n(164);n(167),s.initializeApp({apiKey:"AIzaSyASvIZydpFWRQF98N0645Jl-Ag40MTTnjg",authDomain:"republia-222218.firebaseapp.com",databaseURL:"https://republia-222218.firebaseio.com",projectId:"republia-222218",storageBucket:"",messagingSenderId:"750372444315"});var i=s.firestore();i.settings({timestampsInSnapshots:!0})}});
//# sourceMappingURL=index.bde1a76b.js.map