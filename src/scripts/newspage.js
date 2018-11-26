import '../styles/index.scss';
import {db} from './firebase';
import 'moment';
const moment = require('moment');


db.collection("news").orderBy("date", "desc").get().then(function (querySnapshot) {
    let newsblock = document.querySelector('.all_full_news');
    querySnapshot.forEach(function (doc) {
        const el = doc.data();
        let hashes = '';

        if (el.hashtags.length > 0) {
            el.hashtags.map((tag, i) => {
                if (i < 2)
                    hashes += `<li>${tag}</li>`;
            });
        }

        const date = moment.unix(el.date.seconds).utcOffset("+02:00").format('DD.MM.YYYY');
        let block = `<div class="one_full_news inl_t">
                        <div class="full_date_and_tags">
                            <div class="new_date inl_m fix_date">${date}</div>
                            <div class="hashtags inl_m fix_tags">
                                <ul>
                                ${hashes}
                                </ul>
                            </div>
                        </div>
                        <div class="new_title fix_title"><a href="${el.url}" target="_blank">${el.title}</a></div>
                        <div class="full_readmore"><a href="${el.url}" target="_blank">Read more &#8250;</a></div>
                    </div>`;
        newsblock.innerHTML += block;

    });

});


var header = document.getElementById("mainmenu");

var sticky = header.offsetTop;


function glueMenu() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.onscroll = function () {
    glueMenu();
};

document.querySelector('.mobburger').addEventListener('click', function (burger) {
    document.querySelector('.mobmenu_screen').classList.toggle('hide_nav');
    document.querySelector('.mobburger').classList.toggle('burgclose');
});