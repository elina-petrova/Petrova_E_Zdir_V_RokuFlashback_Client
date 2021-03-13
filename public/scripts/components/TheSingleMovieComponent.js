export default {
    name: "TheSingleMovie",
    props: ["id"],
    template: `
    <div>
        <h1> {{ theMovie.movies_title }} </h1>
        <img :src='"images/" + theMovie.movies_cover' alt="movie poster">
    </div>
    `,
    data() {
        return {
            theMovie: {},
        }
    },
    created: function () {
        console.log('get movie');
        fetch(`/api/movies/${this.id}`)
            .then(res => res.json())
            .then(data => {
                this.theMovie = data[0];
            })
            .catch(err => console.error(err))
    },

}