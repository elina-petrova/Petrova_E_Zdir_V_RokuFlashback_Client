export default {
    name: "TheMovieThumbnail",
    props: ["tv"],
    template: `
    <div class="tv-thumb">
        <div class="img-wrap">
        <img :src='"images/" + tv.tv_cover' alt="tv thumb" @click="goToSingleTvPage">
</div>
<p>{{ thistv.tv_title }}</p>
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