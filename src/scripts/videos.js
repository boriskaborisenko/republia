import {db} from './firebase';

db.collection("videosData").doc("allVideos").get().then((doc) => {
    const videosData = {
        //api: doc.data().apikey,
        playlist: doc.data().playlist
    }
    buildVideos(videosData);
});


function buildVideos(videosData){
    const playlist = videosData.playlist;
    const apikey = 'AIzaSyA_pza_I2tTH3sQ8RVvzJJIJEXc5BFjuG8';

    const YouTube = require('simple-youtube-api');
    const youtube = new YouTube(apikey);

    youtube.getPlaylist('https://www.youtube.com/playlist?list='+playlist)
        .then(playlist => {
            playlist.getVideos()
                .then(videos => {
                    document.getElementById('mainvid').innerHTML = '<iframe id="vid_frame" src="https://www.youtube.com/embed/' + videos[0].id+ '?rel=0&showinfo=0&autohide=1" width="560" height="315" frameborder="0" allowfullscreen></iframe>';
                    let trimmedTitle;
                    videos.map(video => {
                        if(video.title.length > 60){
                            trimmedTitle = video.title.substring(0, 60)+'...';
                        }else{
                            trimmedTitle = video.title;
                        }
                        
                        const trimmedDesc = video.description.substring(0, 60);
                        document.getElementById('videoslist').innerHTML += `<div class="list_video" onClick="document.getElementById('vid_frame').src='https://youtube.com/embed/${video.id}?autoplay=1&rel=0&showinfo=0&autohide=1&autoplay=1'">
                                <div class="thumb inl_t" style="background:url(https://img.youtube.com/vi/${video.id}/0.jpg) center center no-repeat; background-size:cover;"></div>
                                <div class="vid_desc inl_t">
                                <div class="vid_title">${trimmedTitle}</div>
                                <div class="vid_anno">${trimmedDesc}...</div>
                                </div>
                            </div>`;
                    })
                })
                .catch(console.log);
        })
        .catch(console.log);
}

