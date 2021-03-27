import TheMovieThumb from './TheMovieThumbnailComponent.js';
import TheTvthumb from './TheTvThumbnailComponent.js';
import TheMusicThumb from './TheMusicThumbnailComponent.js';

export default {
    name: "TheHomePage",
    props: {
        mediatype: {
            default: 'movies'
        }
    },

    template: `
    <div>

    <div class="nav">
        <div class="nav_left">
            <div class="logo"> <router-link to="/homepage"><img src="images/roku.svg"></router-link></div>
                    <ul>
<li>
            <a class="hover" @click.prevent="showMovies" href="">Movies</a>
                </li>
                <li>
                    <a class="hover"  @click.prevent="showTvs" href="">Tvs</a>
                </li>
                <li>
                    <a class="hover" @click.prevent="showMusic" href="">Music</a>
                </li>
</ul>
             
</div>
<div>
            <router-link class="hover" to="/protected">Profile</router-link>
</div>
        </div>


        <div class="main_content">
                    <div class="promo_section">
            <h1> Explore the rich collection of vintage movies, tvs and music </h1>
            <div class="promo_items_wrap">
                <div class="promo_item">
                    <div class="promo_new"><p>New movie!</p></div>
                    <div class="promo_img">
                         <moviethumb  :movie="allMovies[2]" :key="allMovies[2].movies_id"></moviethumb>
                    </div>
                </div>
                 <div class="promo_item">
                    <div class="promo_new"><p>New episode!</p></div>
                    <div class="promo_img">
                         <tvthumb :tv="allTvs[2]" :key="allTvs[5].tvs_id"></tvthumb>
                    </div>
                </div>
                <div class="promo_item">
                    <div class="promo_new"><p>New song!</p></div>
                    <div class="promo_img">
                        <musicthumb :music="allMusic[1]" :key="allMusic[1].music_id"></musicthumb>
                    </div>
                </div>
</div>
</div>

<div class="filters_wrap">
<ul>

<li>
                    <a class="type filter_active" @click.prevent="showMovies" href="">Movies</a>
                </li>
                <li>
                    <a class="type" @click.prevent="showTvs" href="">Tvs</a>
                </li>
                <li>
                    <a class="type" @click.prevent="showMusic" href="">Music</a>
                </li>
</ul>
</div>
    <div v-if="type === 'movies'|| type==='all'">
        <div class="filters_wrap">
                    <ul class="filterNav">
                            <li>
                    <a class="movie_era filter_active" @click.prevent="filterMoviesEra('all', $event)" href="">All</a>
                </li>
                           <li>
                    <a class="movie_era" @click.prevent="filterMoviesEra(1950, $event)" href="">1950</a>
                </li>
                           <li>
                    <a class="movie_era" @click.prevent="filterMoviesEra(1960, $event)" href="">1960</a>
                </li>
                           <li>
                    <a class="movie_era" @click.prevent="filterMoviesEra(1970, $event)" href="">1970</a>
                </li>
                <li>
                    <a class="movie_era" @click.prevent="filterMoviesEra(1980, $event)" href="">1980</a>
                </li>
                   <li>
                    <a class="movie_era" @click.prevent="filterMoviesEra(1990, $event)" href="">1990</a>
                </li>

            </ul>

            <ul class="filterNav">
                                <li>
                    <a class="movie_genre filter_active" @click.prevent="filterMoviesGenre('all', $event)" href="">All</a>
                </li>
                <li>
                    <a class="movie_genre" @click.prevent="filterMoviesGenre('Animation',  $event)" href="">Animation</a>
                </li>
                <li>
                    <a class="movie_genre" @click.prevent="filterMoviesGenre('Comedy', $event)" href="">Comedy</a>
                </li>
                <li>
                    <a class="movie_genre" @click.prevent="filterMoviesGenre('Family', $event)" href="">Family</a>
                </li>
                <li>
                    <a class="movie_genre" @click.prevent="filterMoviesGenre('Drama', $event)" href="">Drama</a>
                </li>
            </ul>
</div>
</div>

<div v-if="type === 'movies'|| type==='all'">
    <div class="items_wrap">
    <moviethumb v-for="item in filteredMovies" :movie="item" :key="item.movies_id"></moviethumb>
          <h1 v-if="filteredMovies.length === 0">No search results :(</h1>
    </div>
          </div>

  
    <div v-if="type === 'tvs' || type==='all'">
        <div>
          <div class="filters_wrap">
        <ul class="filterNav">
                            <li>
                    <a class="tv_era filter_active" @click.prevent="filterTvsEra('all', $event)" href="">All</a>
                </li>
                           <li>
                    <a class="tv_era" @click.prevent="filterTvsEra(1950, $event)" href="">1950</a>
                </li>
                           <li>
                    <a class="tv_era" @click.prevent="filterTvsEra(1960, $event)" href="">1960</a>
                </li>
                           <li>
                    <a class="tv_era" @click.prevent="filterTvsEra(1970, $event)" href="">1970</a>
                </li>
                <li>
                    <a class="tv_era" @click.prevent="filterTvsEra(1980, $event)" href="">1980</a>
                </li>
                   <li>
                    <a class="tv_era" @click.prevent="filterTvsEra(1990, $event)" href="">1990</a>
                </li>

            </ul>


                  <ul class="filterNav">
                      <li>
                    <a class="tv_genre filter_active" @click.prevent="filterTvsGenre('all', $event)" href="">All</a>
                </li>
                <li>
                    <a class="tv_genre" @click.prevent="filterTvsGenre('Animation', $event)" href="">Animation</a>
                </li>
                <li>
                    <a class="tv_genre" @click.prevent="filterTvsGenre('Comedy', $event)" href="">Comedy</a>
                </li>
                <li>
                    <a class="tv_genre" @click.prevent="filterTvsGenre('Family', $event)" href="">Family</a>
                </li>
                <li>
                    <a class="tv_genre" @click.prevent="filterTvsGenre('Drama', $event)" href="">Drama</a>
                </li>
            </ul>
          </div>
          </div>
<div class="items_wrap">
    <tvthumb v-for="item in filteredTvs" :tv="item" :key="item.tvs_id"></tvthumb>
      <h1 v-if="filteredTvs.length === 0">No search results :(</h1>
      </div>
    </div>

   
    <div v-if="type === 'music' || type === 'all'">
        <div class="filters_wrap">
        <ul class="filterNav">
                            <li>
                    <a class="music_era filter_active" @click.prevent="filterMusicEra('all', $event)" href="">All</a>
                </li>
                           <li>
                    <a class="music_era" @click.prevent="filterMusicEra(1950, $event)" href="">1950</a>
                </li>
                           <li>
                    <a class="music_era" @click.prevent="filterMusicEra(1960, $event)" href="">1960</a>
                </li>
                           <li>
                    <a class="music_era" @click.prevent="filterMusicEra(1970, $event)" href="">1970</a>
                </li>
                <li>
                    <a class="music_era" @click.prevent="filterMusicEra(1980, $event)" href="">1980</a>
                </li>
                   <li>
                    <a class="music_era" @click.prevent="filterMusicEra(1990, $event)" href="">1990</a>
                </li>

            </ul>
      </div>
            
        <div class="items_wrap">
    <musicthumb v-for="item in filteredMusic" :music="item" :key="item.music_id"></musicthumb>
      </div>

    </div>
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
            filteredMusicEra: [],
            filteredMusic: [],
            filteredMoviesGenre: [],
            currentItems: [],
            filteredMoviesEra: [],
            type: this.mediatype
        }
    },
    created: function () {
        this.fetchMovies();
        this.fetchTvs();
        this.fetchMusic();
        this.type = this.mediatype;

    },
    methods: {
        showMovies(event) {
            this.type = 'movies';

            document.querySelectorAll(".type.filter_active").forEach(item => item.classList.remove("filter_active"));
            document.querySelectorAll(".type")[0].classList.add("filter_active");

        },
        showTvs() {
            this.type = 'tvs';

            document.querySelectorAll(".type.filter_active").forEach(item => item.classList.remove("filter_active"));

            document.querySelectorAll(".type")[1].classList.add("filter_active");

        },
        showMusic() {
            this.type = 'music';

            document.querySelectorAll(".type.filter_active").forEach(item => item.classList.remove("filter_active"));


            document.querySelectorAll(".type")[2].classList.add("filter_active");

        },
        fetchMovies() {
            fetch('/api/movies')
                .then(res => res.json())
                .then(data => {
                    this.allMovies = this.filteredMovies = this.filteredMoviesEra = data;
                })
                .catch(err => console.error(err))
        },
        fetchTvs() {
            fetch('/api/tvs')
                .then(res => res.json())
                .then(data => {
                    this.allTvs = this.filteredTvs = this.filteredTvsEra = data;

                })
                .catch(err => console.error(err))
        },
        fetchMusic() {
            fetch('/api/music')
                .then(res => res.json())
                .then(data => {
                    this.allMusic = this.filteredMusic = data;
                })
                .catch(err => console.error(err))
        },
        showAll() {
            this.type = 'all';
        },
        filterMoviesGenre(genre, event) {
            if (genre === 'all') {
                this.filteredMovies = this.filteredMoviesEra;
                document.querySelectorAll(".movie_genre.filter_active").forEach(item => item.classList.remove("filter_active"));
                event.target.classList.add("filter_active");
                return;
            }
            this.filteredMovies = this.filteredMoviesEra.filter(movie => movie.genre_name.includes(genre));

            document.querySelectorAll(".movie_genre.filter_active").forEach(item => item.classList.remove("filter_active"));
            event.target.classList.add("filter_active");
        },
        filterMoviesEra(era, event) {
            if (era === 'all') {
                this.filteredMovies = this.allMovies;
                this.filteredMoviesEra = this.filteredMovies;
                document.querySelectorAll(".movie_era.filter_active").forEach(item => item.classList.remove("filter_active"));
                event.target.classList.add("filter_active");
                return;
            }
            document.querySelectorAll(".movie_genre.filter_active").forEach(item => item.classList.remove("filter_active"));
            document.querySelectorAll(".movie_genre")[0].classList.add("filter_active");

            this.filteredMovies = this.allMovies.filter(movie => movie.movies_year >= era && movie.movies_year < era + 10);
            this.filteredMoviesEra = this.filteredMovies;

            document.querySelectorAll(".movie_era.filter_active").forEach(item => item.classList.remove("filter_active"));
            event.target.classList.add("filter_active");
        },
        filterTvsEra(era) {
            if (era === 'all') {
                this.filteredTvs = this.allTvs;
                this.filteredTvsEra = this.filteredTvs;
                document.querySelectorAll(".tv_era.filter_active").forEach(item => item.classList.remove("filter_active"));
                event.target.classList.add("filter_active");
                return;
            }
            this.filteredTvs = this.allTvs.filter(tv => tv.tv_year >= era && tv.tv_year < era + 10);
            this.filteredTvsEra = this.filteredTvs;
            document.querySelectorAll(".tv_era.filter_active").forEach(item => item.classList.remove("filter_active"));
            event.target.classList.add("filter_active");
        },
        filterTvsGenre(genre) {
            if (genre === 'all') {
                this.filteredTvs = this.filteredTvsEra;
                document.querySelectorAll(".tv_genre.filter_active").forEach(item => item.classList.remove("filter_active"));
                event.target.classList.add("filter_active");
                return;
            }
            this.filteredTvs = this.filteredTvsEra.filter(tv => tv.genre_name.includes(genre));
            document.querySelectorAll(".tv_genre.filter_active").forEach(item => item.classList.remove("filter_active"));
            event.target.classList.add("filter_active");
        },
        filterMusicEra(era) {
            if (era === 'all') {
                this.filteredMusic = this.allMusic;
                this.filteredMusicEra = this.filteredMusic;
                document.querySelectorAll(".music_era.filter_active").forEach(item => item.classList.remove("filter_active"));
                event.target.classList.add("filter_active");
                return;
            }
            this.filteredMusic = this.allMusic.filter(music => music.music_year >= era && music.music_year < era + 10);
            this.filteredMusicEra = this.filteredMusic;
            document.querySelectorAll(".music_era.filter_active").forEach(item => item.classList.remove("filter_active"));
            event.target.classList.add("filter_active");
        },
    },

    components: {
        moviethumb: TheMovieThumb,
        tvthumb: TheTvthumb,
        musicthumb: TheMusicThumb
    }
}