export default {
    name: "TheSingleMovie",
    template: `
    <div>
        <h1> {{ currentMovieTitle }} </h1>
    </div>
    `,
    data() {
        return {
            currentMovie: [],
            currentMovieTitle: '',
        }
    },
    created: function () {
        fetch(`/api/movies/${this.$route.params.movieID}`)
            .then(res => res.json())
            .then(data => {
                console.table(data);
                this.currentMovie = data;
                this.currentMovieTitle = Object.values(this.currentMovie[0])[2];
            })
            .catch(err => console.error(err))


    }

}