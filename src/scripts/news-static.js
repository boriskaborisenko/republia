import {news} from './datanews';



createNews(news.all);
function createNews(item){
    let newsblock = document.querySelector('.all_news');
    item.map( el => {
        let hashes = '';
        el.hashtags.map((tag, i) =>{
            if(i<3)
            hashes += `<li>${tag}</li>`;
        });

        let block = `<div class="one_new">
                  <div class="new_dot"></div>
                  <div class="new_date">${el.date}</div>
                  <div class="new_title_and_hashtags">
                    <div class="new_title">${el.title}</div>
                    <div class="hashtags">
                      <ul>
                        ${hashes}
                      </ul>
                    </div>
                  </div>
                  <a href="${el.url}" target="_blank" class="new_title_link"></a>
                </div>`;
        //console.log(block)        
        newsblock.innerHTML += block;
    });
}
