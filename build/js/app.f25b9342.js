!function(e){function t(t){for(var o,r,c=t[0],s=t[1],l=t[2],d=0,p=[];d<c.length;d++)r=c[d],i[r]&&p.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(u&&u(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},i={0:0},a=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;a.push([93,1]),n()}({67:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);n(44),n(56),n(63),n(67),n(68);var o=n(69);n(76),o.initializeApp({apiKey:"AIzaSyASvIZydpFWRQF98N0645Jl-Ag40MTTnjg",authDomain:"republia-222218.firebaseapp.com",databaseURL:"https://republia-222218.firebaseio.com",projectId:"republia-222218",storageBucket:"",messagingSenderId:"750372444315"});var i=o.firestore();i.settings({timestampsInSnapshots:!0}),i.collection("videosData").doc("allVideos").get().then(function(e){!function(e){var t=e.playlist;new(n(81))("AIzaSyA_pza_I2tTH3sQ8RVvzJJIJEXc5BFjuG8").getPlaylist("https://www.youtube.com/playlist?list="+t).then(function(e){e.getVideos().then(function(e){var t;document.getElementById("mainvid").innerHTML='<iframe id="vid_frame" src="https://www.youtube.com/embed/'+e[0].id+'?rel=0&showinfo=0&autohide=1" width="560" height="315" frameborder="0" allowfullscreen></iframe>',e.map(function(e){t=e.title.length>60?e.title.substring(0,60)+"...":e.title;var n=e.description.substring(0,60);document.getElementById("videoslist").innerHTML+="<div class=\"list_video\" onClick=\"document.getElementById('vid_frame').src='https://youtube.com/embed/".concat(e.id,'?autoplay=1&rel=0&showinfo=0&autohide=1&autoplay=1\'">\n                                <div class="thumb inl_t" style="background:url(https://img.youtube.com/vi/').concat(e.id,'/0.jpg) center center no-repeat; background-size:cover;"></div>\n                                <div class="vid_desc inl_t">\n                                <div class="vid_title">').concat(t,'</div>\n                                <div class="vid_anno">').concat(n,"...</div>\n                                </div>\n                            </div>")})}).catch(console.log)}).catch(console.log)}({playlist:e.data().playlist})});var a={content:[{tabs:[{tab:"Easy-to-create and secure smart contracts help reduce the impact of the human factor and mitigate the risks and losses. Using Republia ID as a KYC module allows to optimize the costs of the user identification divisions."},{tab:"Republia ID facilitates the introduction of a simplified citizens identification system. The implementation of blockchain technology is much easier thanks to the template solutions on the Smart Contract Platform."},{tab:"It is possible to create and sell smart contracts on the marketplace of the Republia Smart Contract Platform. Formal verification of the smart contract code before compilation ensures the complete control over the script building logic. OCaml also allows for modular, clear and compact source code and makes it easy to work with recursive structures such as syntax trees."},{tab:"Users can make quick payments and use the RPB coin as a means of payment that is less volatile. Republia ID allows passing the KYC authentication once to use it further with partner companies. Also, average users without technical knowledge can create smart contracts from a template, for example, to pay rent or when lending."}]},{products:[{1:[{text:"RepubliaID is a digital-analog of Identity Card, the main feature of which is advanced security. Republia ID allows community members to influence the life of the ecosystem directly and ensures security through implementation into all parts of the global ecosystem. Identity Card that minimizes the risk of loss of funds or hacking user accounts."},{rel:"2019"},{q:"Q1"},{percent:73}]},{2:[{text:"Provides the expansion of the entire Republia ecosystem by interrelated projects, not by the addition of competitive Crowdfunding, thereby avoiding unfair investment companies."},{rel:"2020"},{q:"Q2"},{percent:12}]},{3:[{text:"Republia Bank is a component of the economic model of decentralized Republia ecosystem, which combined principles of Central Banks and innovative technologies. Republia Bank automatically regulates demand and supply on stock exchanges and smooths volatility of RPB coin by balancing and automated analysis of the market situation."},{rel:"2019"},{q:"Q1"},{percent:100}]},{4:[{text:"Republia Smart Contract Platform is an easy-to-use tool for generating smart contracts, that allows to create, execute and manage smart contracts based on Republia blockchain by yourself."},{rel:"2020"},{q:"Q3"},{percent:34}]},{5:[{text:"Republia Cloud X is a secure storage of data and the future of the entire global ecosystem. It is a data cloud storage, where all user information is stored decentrally in an encrypted form."},{rel:"2021"},{q:"Q4"},{percent:7}]},{6:[{text:"Transaction will be made faster, than in such popular payment systems as MasterCard or Visa. <br><br>Provides speed in processing operations, opening/closing orders, as well as an ability to bind an internal bank card, using this card necessary amount of RPB coins will be sold according to market order and due to instantaneous operation of Atomic Swap mechanism."},{rel:"2019"},{q:"Q4"},{percent:23}]},{7:[{text:"Republia Wallet is a uniquely designed integrated technology, that includes both wallets, which solves the problem of heavy wallets with 16-digit addresses, and an instant messenger with the addition of contacts that provides secure exchange between users of messages, files (stored in Republia Cloud X) and also provides an opportunity to create smart contracts with contacts."},{rel:"2019"},{q:"Q1"},{percent:100}]},{8:[{text:"Republia follows the principle of “We-ecosystem”, where all users are of equal importance in the modernization of the network, so consensus Republia operates on algorithm Proof-of-Authority (PoA) + BFT (Byzantine Fault Tolerance).<br><br>A unique solution for coordinating changes in ecosystem conditions through direct user voting based on Republia blockchain, which, in turn, is based on “we-government” methodology."},{rel:"2019"},{q:"Q2"},{percent:57}]}]},{roadmap:[{2018:[]},{2019:[]},{2020:[]},{2021:[]},{2022:[]}]},{docs:[{onepager:"https://media.republia.io/republia-one-pager-en.pdf"},{overview:"https://media.republia.io/republia-overview-en.pdf"},{whitepaper:"https://media.republia.io/republia-whitepaper-en.pdf"},{techpaper:"https://media.republia.io/republia-techpaper-en.pdf"},{finmodel:"https://docs.google.com/spreadsheets/d/1fqPKNz3uokD4sCHAZfRC3Gt2MlfqXEVxjoLVx5GWMEw/edit"},{techcompetitive:"https://media.republia.io/republia-tech-comp-en.pdf"},{ecosys:"https://media.republia.io/republia-tech-comp-en.pdf"},{policy:"https://media.republia.io/republia-tech-comp-en.pdf"}]}]};window.onscroll=function(){window.pageYOffset>c?r.classList.add("sticky"):r.classList.remove("sticky")};var r=document.getElementById("mainmenu"),c=r.offsetTop;var s=document.getElementsByClassName("tab_btn"),l=document.getElementsByClassName("one_prod"),u=document.getElementsByClassName("one_prod_mob");function d(e){e.classList.toggle("hide")}function p(e){if(!(this instanceof p))return new p(e);this.el=document.getElementById(e)}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",o=arguments.length>3?arguments[3]:void 0,i={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},a=window.pageYOffset,r="now"in window.performance?performance.now():(new Date).getTime(),c=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),s=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,l="number"==typeof e?e:e.offsetTop,u=Math.round(c-l<s?c-s:l);if("requestAnimationFrame"in window==!1)return window.scroll(0,u),void(o&&o());!function e(){var c="now"in window.performance?performance.now():(new Date).getTime(),s=Math.min(1,(c-r)/t),l=i[n](s);window.scroll(0,Math.ceil(l*(u-a)+a)),window.pageYOffset!==u?requestAnimationFrame(e):o&&o()}()}document.querySelector(".mobburger").addEventListener("click",function(e){document.querySelector(".mobmenu_screen").classList.toggle("hide_nav"),document.querySelector(".mobburger").classList.toggle("burgclose")}),[].forEach.call(u,function(e){e.addEventListener("click",function(e){var t=this;e.preventDefault();var n=document.querySelectorAll(".hided_part");[].forEach.call(n,function(e){e.className=e.className+" hide"});var o=document.querySelectorAll(".hided_pic");[].forEach.call(o,function(e){e.className=e.className+" hide"});var i=document.querySelectorAll(".hided_text");[].forEach.call(i,function(e){e.className=e.className+" hide"}),d(this.children[1]),setTimeout(function(){d(t.children[1].children[0]),d(t.children[1].children[1])},500)})}),[].forEach.call(s,function(e){e.addEventListener("click",function(t){t.preventDefault();var n=Number(e.id.slice(3,4)),o=a.content[0].tabs[n-1].tab;p("tab_content").fade("out",400),setTimeout(function(){document.getElementById("tab_content").innerHTML=o,p("tab_content").fade("in",400)},400),document.querySelector(".active_tab").classList.remove("active_tab"),this.classList.add("active_tab")})}),[].forEach.call(l,function(e){e.addEventListener("click",function(t){t.preventDefault();var n=Number(e.id.slice(5,6)),o=a.content[1].products[n-1][n][0].text,i=a.content[1].products[n-1][n][1].rel,r=a.content[1].products[n-1][n][2].q,c=a.content[1].products[n-1][n][3].percent;p("prodtext").fade("out",400),p("prodpercent").fade("out",400),p("prodline").fade("out",400),setTimeout(function(){document.getElementById("prodtext").innerHTML=o,document.getElementById("prodline").style.width=c+"%",document.getElementById("prodpercent").innerHTML=c+"%",document.getElementById("prodq").innerHTML=r,document.getElementById("proddate").innerHTML=i,p("prodtext").fade("in",400),p("prodpercent").fade("in",400),p("prodline").fade("in",400)},400),console.log("click prod",n),document.querySelector(".active_prod").classList.remove("active_prod"),this.classList.add("active_prod")})}),p.prototype.fade=function(e,t){var n="in"===e,o=n?0:1,i=50/t,a=this;n&&(a.el.style.opacity=o);var r=window.setInterval(function(){o=n?o+i:o-i,a.el.style.opacity=o,(o<=0||o>=1)&&window.clearInterval(r)},50)},document.querySelector("#toProds").addEventListener("click",function(){m(document.querySelector("#goProds"),800,"easeOutQuad",function(){return console.log("Just finished scrolling to ".concat(window.pageYOffset,"px"))})}),document.querySelector("#toDocs").addEventListener("click",function(){m(document.querySelector("#goDocs"),800,"easeOutQuad",function(){return console.log("Just finished scrolling to ".concat(window.pageYOffset,"px"))})}),document.querySelector("#toTeam").addEventListener("click",function(){m(document.querySelector("#goTeam"),800,"easeOutQuad",function(){return console.log("Just finished scrolling to ".concat(window.pageYOffset,"px"))})}),document.querySelector("#toVideo").addEventListener("click",function(){m(document.querySelector("#goVideo"),800,"easeOutQuad",function(){return console.log("Just finished scrolling to ".concat(window.pageYOffset,"px"))})})}});
//# sourceMappingURL=app.f25b9342.js.map