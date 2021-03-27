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
            var routeData = this.$router.resolve({ name: "singletv", params: { id: this.tv.tv_id } });
            window.open(routeData.href, '_blank');
        }
    }
}