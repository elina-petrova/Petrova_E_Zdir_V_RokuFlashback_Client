import TheMovieThumb from './TheMovieThumbnailComponent.js';

export default {
    name: "TheHomePage",

    template: `
    <div>
    <h1>This is the home page component</h1>
    <moviethumb v-for="item in allMovies" :movie="item" :key="item.movies_id"></moviethumb>
    </div>
    `,
    data() {
        return {
            allMovies: [],
        }
    },
    created: function () {
        console.log('get movie');
        fetch('/api/movies')
            .then(res => res.json())
            .then(data => {
                console.table(data);

                this.allMovies = data;
            })
            .catch(err => console.error(err))
    },


    components: {
        moviethumb: TheMovieThumb
    }
}