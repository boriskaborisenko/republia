import '../styles/index.scss';
import {data} from './data';

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

var tabs = document.getElementsByClassName('tab_btn');
var products = document.getElementsByClassName('one_prod'); 
var videos = [
    {id:'6ZIMqjYIFw4', title:'What is Republia?', desc:'Welcome to #Republia community!'},
    {id:'FliKqP0JBfg', title:'Vladyslav Gyrych about Republia project', desc:'Many years of experience in the implementation...'},
    {id:'E2cfGsOGtvc', title:'Daniel Shulyaev about Republia project', desc:'Extensive experience in developing technologies...'},
    {id:'nGxLlvRwhrI', title:'Hayk Khachatryan about Republia project', desc:'Technical Director of Republia'},
    {id:'DHvctzCl52o', title:'Speech by Daniel Shulyaev in the Ukrainian Parliament', desc:'Co-founder of Republia Daniel Shulyaev...'},
    {id:'2NH4hNxIrUg', title:'Speech by Vladyslav Gyrych in the Ukrainian Parliament', desc:'Co-founder of Republia Vladyslav Gyrych...'}
];

document.getElementById('mainvid').innerHTML='<iframe id="vid_frame" src="https://www.youtube.com/embed/'+videos[0].id+'?rel=0&showinfo=0&autohide=1" width="560" height="315" frameborder="0" allowfullscreen></iframe>';
videos.map(item => {
    const vidslist = document.getElementById('videoslist');

     vidslist.innerHTML +=  `<div class="list_video" onClick="document.getElementById('vid_frame').src='https://youtube.com/embed/${item.id}?autoplay=1&rel=0&showinfo=0&autohide=1&autoplay=1'">
                        <div class="thumb inl_t" style="background:url(https://img.youtube.com/vi/${item.id}/0.jpg) center center no-repeat; background-size:cover;"></div>
                        <div class="vid_desc inl_t">
                          <div class="vid_title">${item.title}</div>
                          <div class="vid_anno">${item.desc}</div>
                        </div>
                      </div>`;
});

[].forEach.call(tabs, function(element){
    element.addEventListener('click',function(e){
          e.preventDefault();
          
          console.log('click tab');
          let active = document.querySelector('.active_tab');
          active.classList.remove('active_tab'); //remove class  
          this.classList.add('active_tab'); //add class to current click element
    });
});

[].forEach.call(products, function(element){
    element.addEventListener('click',function(e){
          e.preventDefault();
          
          var id= Number(element.id.slice(5, 6));
          const text = data.content[1].products[id-1][id][0].text;
          const rel = data.content[1].products[id-1][id][1].rel;
          const q = data.content[1].products[id-1][id][2].q;
          const percent = data.content[1].products[id-1][id][3].percent;

        
          _('prodtext').fade('out', 400);
          _('prodpercent').fade('out', 400);
          _('prodline').fade('out', 400);
          setTimeout(()=>{
            document.getElementById('prodtext').innerHTML = text;
            document.getElementById('prodline').style.width = percent+'%';
            document.getElementById('prodpercent').innerHTML = percent+'%';
            document.getElementById('prodq').innerHTML = q;
            document.getElementById('proddate').innerHTML = rel;
            _('prodtext').fade('in', 400);
            _('prodpercent').fade('in', 400);
            _('prodline').fade('in', 400);
          },400);
          

          console.log('click prod', id);
          let active = document.querySelector('.active_prod');
          active.classList.remove('active_prod'); //remove class  
          this.classList.add('active_prod'); //add class to current click element
    });
});

function _(el) {
    if (!(this instanceof _)) {
      return new _(el);
    }
    this.el = document.getElementById(el);
  }
  
  _.prototype.fade = function fade(type, ms) {
    var isIn = type === 'in',
      opacity = isIn ? 0 : 1,
      interval = 50,
      duration = ms,
      gap = interval / duration,
      self = this;
  
    if(isIn) {
      //self.el.style.display = 'inline';
      self.el.style.opacity = opacity;
    }
  
    function func() {
      opacity = isIn ? opacity + gap : opacity - gap;
      self.el.style.opacity = opacity;
  
      //if(opacity <= 0) self.el.style.display = 'none'
      if(opacity <= 0 || opacity >= 1) window.clearInterval(fading);
    }
  
    var fading = window.setInterval(func, interval);
  };


  document.querySelector('#toProds').addEventListener('click', () => {
    scrollIt(
      document.querySelector('#goProds'),
      800,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );
  });

  document.querySelector('#toDocs').addEventListener('click', () => {
    scrollIt(
      document.querySelector('#goDocs'),
      800,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );
  });

  document.querySelector('#toTeam').addEventListener('click', () => {
    scrollIt(
      document.querySelector('#goTeam'),
      800,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );
  });

  document.querySelector('#toVideo').addEventListener('click', () => {
    scrollIt(
      document.querySelector('#goVideo'),
      800,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );
  });

  function scrollIt(destination, duration = 200, easing = 'linear', callback) {

    const easings = {
      linear(t) {
        return t;
      },
      easeInQuad(t) {
        return t * t;
      },
      easeOutQuad(t) {
        return t * (2 - t);
      },
      easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      },
      easeInCubic(t) {
        return t * t * t;
      },
      easeOutCubic(t) {
        return (--t) * t * t + 1;
      },
      easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      },
      easeInQuart(t) {
        return t * t * t * t;
      },
      easeOutQuart(t) {
        return 1 - (--t) * t * t * t;
      },
      easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
      },
      easeInQuint(t) {
        return t * t * t * t * t;
      },
      easeOutQuint(t) {
        return 1 + (--t) * t * t * t * t;
      },
      easeInOutQuint(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
      }
    };
  
    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  
    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);
  
    if ('requestAnimationFrame' in window === false) {
      window.scroll(0, destinationOffsetToScroll);
      if (callback) {
        callback();
      }
      return;
    }
  
    function scroll() {
      const now = 'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, ((now - startTime) / duration));
      const timeFunction = easings[easing](time);
      window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
  
      if (window.pageYOffset === destinationOffsetToScroll) {
        if (callback) {
          callback();
        }
        return;
      }
  
      requestAnimationFrame(scroll);
    }
  
    scroll();
  }