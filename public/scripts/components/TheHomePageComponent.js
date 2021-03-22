import TheMovieThumb from './TheMovieThumbnailComponent.js';
import TheTvthumb from './TheTvThumbnailComponent.js';
import TheMusicThumb from './TheMusicThumbnailComponent.js';

export default {
    name: "TheHomePage",

    template: `
    <div>
    <h1>This is the home page component</h1>

                <h2>This content could be your nav</h2>
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

    <h2>Movies</h2>
    <div>
    <moviethumb v-for="item in filteredMovies" :movie="item" :key="item.movies_id"></moviethumb>
    </div>

    <h2>TV shows </h2>
    <div>
    <tvthumb v-for="item in allTvs" :tv="item" :key="item.tvs_id"></tvthumb>
    </div>

    <h2>Music</h2>
    <div>
    <musicthumb v-for="item in allMusic" :music="item" :key="item.music_id"></musicthumb>
    </div>
    </div>
    `,
    data() {
        return {
            allMovies: [],
            filteredMovies: [],
            allTvs: [],
            filteredTvs: [],
            allMusic: [],
            filteredTvs: []
        }
    },
    created: function () {
        console.log('get movie');
        fetch('/api/movies')
            .then(res => res.json())
            .then(data => {
                this.allMovies = this.filteredMovies = data;
            })
            .catch(err => console.error(err))

        fetch('/api/tvs')
            .then(res => res.json())
            .then(data => {
                this.allTvs = data;
            })
            .catch(err => console.error(err))

        fetch('/api/music')
            .then(res => res.json())
            .then(data => {
                this.allMusic = data;
            })
            .catch(err => console.error(err))
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
        moviethumb: TheMovieThumb,
        tvthumb: TheTvthumb,
        musicthumb: TheMusicThumb
    }
}