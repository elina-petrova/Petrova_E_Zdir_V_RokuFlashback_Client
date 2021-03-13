export default {
    name: "TheMovieThumbnail",
    props: ["music"],
    template: `
    <div class="music-thumb">
        <img :src='"images/" + music.music_cover' alt="music thumb" @click="goToSingleMusicPage">
    </div>
    `,
    data() {
        return {
            thismusic: this.music
        }
    },
    created: function () {
    },
    methods: {
        goToSingleMusicPage: function () {
            // console.log(this.thismovie.movies_id);
            this.$router.push({ name: "singlemusic", params: { id: this.music.music_id } });
        }
    }
}