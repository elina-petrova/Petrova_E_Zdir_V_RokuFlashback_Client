export default {
    name: "TheMovieThumbnail",
    props: ["movie"],
    template: `
    <div class="movie-thumb">
        <img :src='"images/" + movie.movies_cover' alt="movie thumb" @click="goToSingleMoviePage">
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
            console.log(this.thismovie.movies_id);
            this.$router.push({ name: "singlemovie", params: { movieID: this.thismovie.movies_id } });
        }
    }
}