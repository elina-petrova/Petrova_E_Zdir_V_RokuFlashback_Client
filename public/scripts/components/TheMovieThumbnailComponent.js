export default {
    name: "TheMovieThumbnail",
    props: ["movie"],
    template: `
    <div class="movie-thumb">
        <div class="img-wrap">
        <img :src='"images/" + movie.movies_cover' alt="movie thumb" @click="goToSingleMoviePage">
</div>
        <p>{{ thismovie.movies_title }}</p>
    </div>
    `,
    data() {
        return {
            allMovies: [],
            thismovie: this.movie
        }
    },
    created: function () {
    },
    methods: {
        goToSingleMoviePage: function () {
            console.log(this.movie.movies_id);
            var routeData = this.$router.resolve({ name: "singlemovie", params: { id: this.movie.movies_id } });
            window.open(routeData.href, '_blank');
        }
    }
}