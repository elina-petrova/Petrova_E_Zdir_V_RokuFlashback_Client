import TheMovieThumb from './TheMovieThumbnailComponent.js';


export default {
    name: "TheMovieHomePage",
    props: ['movieList'],
    template: `
    <div>
   <h2>Movie Nav</h2>
            <ul class="filterNav">
                <li>
                    <a @click.prevent="filterMovies('Action')" href="">Action</a>
                </li>
                <li>
                    <a @click.prevent="filterMovies('Comedy')" href="">Comedy</a>
                </li>
                <li>
                    <a @click.prevent="filterMovies('Family')" href="">Family</a>
                </li>
                <li>
                    <a @click.prevent="filterMovies('Drama')" href="">Drama</a>
                </li>
                <li>
                    <a @click.prevent="filterMovies('all')" href="">All</a>
                </li>
            </ul>



    <div>
    <h2>Movies</h2>
    <moviethumb v-for="item in filteredMovies" :movie="item" :key="item.movies_id"></moviethumb>
    </div>

    </div>
    `,
    data() {
        return {
            allMovies: this.movieList,
            filteredMovies: this.movieList
        }
    },
    methods: {
        filterMovies(genre) {
            if (genre === 'all') {
                this.filteredMovies = this.allMovies;
                return;
            }
            this.filteredMovies = this.allMovies.filter(movie => movie.genre_name.includes(genre));
        }
    },

    components: {
        moviethumb: TheMovieThumb
    }
}