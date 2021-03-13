export default {
    name: "TheMovieThumbnail",
    props: ["tv"],
    template: `
    <div class="tv-thumb">
        <img :src='"images/" + tv.tv_cover' alt="tv thumb" @click="goToSingleTvPage">
    </div>
    `,
    data() {
        return {
            allMovies: [],
            thistv: this.tv
        }
    },
    created: function () {
    },
    methods: {
        goToSingleTvPage: function () {
            // console.log(this.thismovie.movies_id);
            this.$router.push({ name: "singletv", params: { id: this.tv.tv_id } });
        }
    }
}