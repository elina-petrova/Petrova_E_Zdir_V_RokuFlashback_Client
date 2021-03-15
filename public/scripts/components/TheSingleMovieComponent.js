export default {
    name: "TheSingleMovie",
    props: ["id"],
    template: `
    <div>
        <h1> {{ theMovie.movies_title }} </h1>
        <img :src='"images/" + theMovie.movies_cover' alt="movie poster">


        <p> Year: {{ theMovie.movies_year }} </p>
        <p> Runtime: {{ theMovie.movies_runtime}} </p>
        <p> Genre: {{ theMovie.genre_name }} </p>
        <p> Cast: {{ theMovie.cast_name }} </p>
        <p> Director: {{ theMovie.director_name }} </p>
        <p> Country:  {{ theMovie.country_name }} </p>
        <p> Description: {{ theMovie.movies_storyline }} </p>


    </div>
    `,
    data() {
        return {
            theMovie: {},
            theGenres: {},
            theDirector: {},
            theCast: {},
            theCountry: {}
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