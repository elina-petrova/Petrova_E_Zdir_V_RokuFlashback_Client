import TheMovieThumb from './TheMovieThumbnailComponent.js';
import TheTvthumb from './TheTvThumbnailComponent.js';
import TheMusicThumb from './TheMusicThumbnailComponent.js';

export default {
    name: "TheHomePage",

    template: `
    <div>
    <h1>This is the home page component</h1>
    <h2>Movies</h2>
    <div>
    <moviethumb v-for="item in allMovies" :movie="item" :key="item.movies_id"></moviethumb>
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
            allTvs: [],
            allMusic: []
        }
    },
    created: function () {
        console.log('get movie');
        fetch('/api/movies')
            .then(res => res.json())
            .then(data => {
                this.allMovies = data;
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


    components: {
        moviethumb: TheMovieThumb,
        tvthumb: TheTvthumb,
        musicthumb: TheMusicThumb
    }
}