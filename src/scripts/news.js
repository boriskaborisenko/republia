import {db} from './firebase';
import 'moment';
const moment = require('moment');

db.collection("news").orderBy("date","desc").limit(5).get().then(function (querySnapshot) {
    let newsblock = document.querySelector('.all_news');
    querySnapshot.forEach(function (doc) {
        const el = doc.data();
        let hashes = '';
        
        if(el.hashtags.length > 0){
            el.hashtags.map((tag, i) => {
                if (i < 3)
                hashes += `<li>${tag}</li>`;
            });
        }
        
        const date = moment.unix(el.date.seconds).utcOffset("+02:00").format('DD.MM.YYYY');
        let block = `<div class="one_new">
                  <div class="new_dot"></div>
                  <div class="new_date">${date}</div>
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

});