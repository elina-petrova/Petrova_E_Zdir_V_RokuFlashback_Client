import TheMovieThumb from './TheMovieThumbnailComponent.js';
import TheTvthumb from './TheTvThumbnailComponent.js';
import TheMusicThumb from './TheMusicThumbnailComponent.js';

export default {
    name: "TheHomePage",

    template: `
    <div>
    <h1>This is the home page component</h1>
<h2> Media Nav </h2>
<ul>

<li>
                    <a @click.prevent="showMovies" href="">Movies</a>
                </li>
                <li>
                    <a @click.prevent="showTvs" href="">Tvs</a>
                </li>
                <li>
                    <a @click.prevent="showMusic" href="">Music</a>
                </li>
</ul>
    <div v-if="type === 'movies'|| type==='all'">
            <h2>Movies</h2>
                    <ul class="filterNav">
                            <li>
                    <a @click.prevent="filterMoviesEra('all')" href="">All</a>
                </li>
                           <li>
                    <a @click.prevent="filterMoviesEra(1950)" href="">1950</a>
                </li>
                           <li>
                    <a @click.prevent="filterMoviesEra(1960)" href="">1960</a>
                </li>
                           <li>
                    <a @click.prevent="filterMoviesEra(1970)" href="">1970</a>
                </li>
                <li>
                    <a @click.prevent="filterMoviesEra(1980)" href="">1980</a>
                </li>
                   <li>
                    <a @click.prevent="filterMoviesEra(1990)" href="">1990</a>
                </li>

            </ul>

            <ul class="filterNav">
                <li>
                    <a @click.prevent="filterMoviesGenre('Animation')" href="">Animation</a>
                </li>
                <li>
                    <a @click.prevent="filterMoviesGenre('Comedy')" href="">Comedy</a>
                </li>
                <li>
                    <a @click.prevent="filterMoviesGenre('Family')" href="">Family</a>
                </li>
                <li>
                    <a @click.prevent="filterMoviesGenre('Drama')" href="">Drama</a>
                </li>
                <li>
                    <a @click.prevent="filterMoviesGenre('all')" href="">All</a>
                </li>
            </ul>

    <moviethumb v-for="item in filteredMovies" :movie="item" :key="item.movies_id"></moviethumb>
          <h1 v-if="filteredMovies.length === 0">No search results :(</h1>
    </div>

  
    <div v-if="type === 'tvs' || type==='all'">
          <h2>TV shows </h2>
        <ul class="filterNav">
                            <li>
                    <a @click.prevent="filterTvsEra('all')" href="">All</a>
                </li>
                           <li>
                    <a @click.prevent="filterTvsEra(1950)" href="">1950</a>
                </li>
                           <li>
                    <a @click.prevent="filterTvsEra(1960)" href="">1960</a>
                </li>
                           <li>
                    <a @click.prevent="filterTvsEra(1970)" href="">1970</a>
                </li>
                <li>
                    <a @click.prevent="filterTvsEra(1980)" href="">1980</a>
                </li>
                   <li>
                    <a @click.prevent="filterTvsEra(1990)" href="">1990</a>
                </li>

            </ul>


                  <ul class="filterNav">
                <li>
                    <a @click.prevent="filterTvsGenre('Animation')" href="">Animation</a>
                </li>
                <li>
                    <a @click.prevent="filterTvsGenre('Comedy')" href="">Comedy</a>
                </li>
                <li>
                    <a @click.prevent="filterTvsGenre('Family')" href="">Family</a>
                </li>
                <li>
                    <a @click.prevent="filterTvsGenre('Drama')" href="">Drama</a>
                </li>
                <li>
                    <a @click.prevent="filterTvsGenre('all')" href="">All</a>
                </li>
            </ul>

    <tvthumb v-for="item in filteredTvs" :tv="item" :key="item.tvs_id"></tvthumb>
      <h1 v-if="filteredTvs.length === 0">No search results :(</h1>

    </div>

   
    <div v-if="type === 'music' || type === 'all'">
         <h2>Music</h2>
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
            filteredTvsEra: [],
            allMusic: [],
            type: 'all',
            filteredMoviesGenre: [],
            currentItems: []
        }
    },
    created: function () {
        this.fetchMovies();
        this.fetchTvs();
        this.fetchMusic();
        this.type = 'movies';

    },
    methods: {
        showMovies() {
            this.type = 'movies';
        },
        showTvs() {
            this.type = 'tvs';
        },
        showMusic() {
            this.type = 'music';
        },
        fetchMovies() {
            fetch('/api/movies')
                .then(res => res.json())
                .then(data => {
                    this.allMovies = this.filteredMovies = data;
                })
                .catch(err => console.error(err))
        },
        fetchTvs() {
            fetch('/api/tvs')
                .then(res => res.json())
                .then(data => {
                    this.allTvs = this.filteredTvs = data;

                })
                .catch(err => console.error(err))
        },
        fetchMusic() {
            fetch('/api/music')
                .then(res => res.json())
                .then(data => {
                    this.allMusic = data;
                })
                .catch(err => console.error(err))
        },
        showAll() {
            this.type = 'all';
        },
        filterMoviesGenre(genre) {
            if (genre === 'all') {
                this.filteredMovies = this.filteredMoviesEra;
                return;
            }
            this.filteredMovies = this.filteredMoviesEra.filter(movie => movie.genre_name.includes(genre));
        },
        filterMoviesEra(era) {
            if (era === 'all') {
                this.filteredMovies = this.allMovies;
                this.filteredMoviesEra = this.filteredMovies;
                return;
            }
            this.filteredMovies = this.allMovies.filter(movie => movie.movies_year >= era && movie.movies_year < era + 10);
            this.filteredMoviesEra = this.filteredMovies;
        },
        filterTvsEra(era) {
            if (era === 'all') {
                this.filteredTvs = this.allTvs;
                this.filteredTvsEra = this.filteredTvs;
                return;
            }
            this.filteredTvs = this.allTvs.filter(tv => tv.tv_year >= era && tv.tv_year < era + 10);
            this.filteredTvsEra = this.filteredTvs;
        },
        filterTvsGenre(genre) {
            if (genre === 'all') {
                this.filteredTvs = this.filteredTvsEra;
                return;
            }
            this.filteredTvs = this.filteredTvsEra.filter(tv => tv.genre_name.includes(genre));
        },
    },

    components: {
        moviethumb: TheMovieThumb,
        tvthumb: TheTvthumb,
        musicthumb: TheMusicThumb
    }
}