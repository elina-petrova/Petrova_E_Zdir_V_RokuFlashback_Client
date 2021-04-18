import TheHeaderComponent from './TheHeaderComponent.js';
export default {
    name: "TheSingleMusic",
    props: ["id"],
    template: `
   <div>
    <headernav></headernav>

    <div class="media_wrap">
        <div class="content_info_wrap music_wrap">
            <div>
        <img :src='"images/" + theMusic.music_cover' alt="music cover">
</div>
        <div class="music_content content_info">
        <h1> {{ theMusic.music_title }} </h1>

        <div style="display:flex;"><a class="twitter-share-button"
  href="https://twitter.com/intent/tweet?text=I%20just%20listened%20a%20song%20on%20Roku%20Flashback%20!">
Tweet</a>
<div class="fb-like" data-href="https://www.roku.com/en-ca/" data-width="120px" data-layout="standard" data-action="like" data-size="small" data-share="true"></div>
</div>
        <div class="info">
        <div class="labels">
             <p> Singer:</p>
        <p> Album:</p>
        <p> Genre:</p>
        <p> Released:</p>
        <p> Legth:</p>
        <!-- <p class="lyrics-btn" @click.prevent='showLyrics()'> Lyrics</p> -->
</div>
<div class="inputs">
     <p> {{ theMusic.music_singer }} </p>
        <p>{{ theMusic.music_album}} </p>
        <p> {{ theMusic.genre_name }} </p>
        <p> {{ theMusic.music_released }} </p>
        <p>  {{ theMusic.music_legth }} </p>
</div>
</div>

 <!-- <p class="lyrics"> {{ theMusic.music_lyrics}} </p> -->
<div class="audio_wrap">
        <audio controls>
  <source :src='"audio/" + theMusic.music_src' type="audio/mpeg">
  <source :src='"audio/" + theMusic.music_src' type="audio/mpeg">
</audio>
    </div>

</div>
</div>
    
</div>
</div>
    `,
    data() {
        return {
            theMusic: {},
        }
    },
    created: function () {
        this.$root.authenticated = true;
        console.log('get movie');
        fetch(`/api/music/${this.id}`)
            .then(res => res.json())
            .then(data => {
                this.theMusic = data[0];
            })
            .catch(err => console.error(err))
    },
    components: {
        headernav: TheHeaderComponent
    },
    methods: {
        showLyrics: function () {
            document.querySelector('.lyrics').classList.toggle('show-lyrics');
        }
    }

}