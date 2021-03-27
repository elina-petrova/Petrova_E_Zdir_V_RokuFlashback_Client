export default {
    name: "TheMovieThumbnail",
    props: ["music"],
    template: `
    <div class="music-thumb">
        <div class="img-wrap">
        <img :src='"images/" + music.music_cover' alt="music thumb" @click="goToSingleMusicPage">
</div>
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
            var routeData = this.$router.resolve({ name: "singlemusic", params: { id: this.music.music_id } });
            window.open(routeData.href, '_blank');

        }
    }
}