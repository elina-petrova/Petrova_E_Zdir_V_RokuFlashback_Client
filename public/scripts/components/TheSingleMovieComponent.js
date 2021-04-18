import TheHeaderComponent from './TheHeaderComponent.js';
export default {
    name: "TheSingleMovie",
    props: ["id"],
    template: `
    <div>

    <headernav></headernav>

    <div class="media_wrap">
        <div class="content_info_wrap">
            <div>
        <img :src='"images/" + theMovie.movies_cover' alt="movie poster">
</div>

        <div class="content_info">
        <h1> {{ theMovie.movies_title }} </h1>
        <div style="display:flex;"><a class="twitter-share-button"
  href="https://twitter.com/intent/tweet?text=I%20just%20watched%20a%20movie%20on%20Roku%20Flashback%20!">
Tweet</a>
<div class="fb-like" data-href="https://www.roku.com/en-ca/" data-width="120px" data-layout="standard" data-action="like" data-size="small" data-share="true"></div>
</div>

        <div class="info">
        <div class="labels">
             <p> Year:</p>
        <p> Runtime:</p>
        <p> Genre:</p>
        <p> Cast:</p>
        <p> Director:</p>
        <p> Country:</p>
        <p> Description:</p>
</div>
<div class="inputs">
     <p> {{ theMovie.movies_year }} </p>
        <p>{{ theMovie.movies_runtime}} </p>
        <p> {{ theMovie.genre_name }} </p>
        <p> {{ theMovie.cast_name }} </p>
        <p>  {{ theMovie.director_name }} </p>
        <p>  {{ theMovie.country_name }} </p>
</div>
</div>
    <p> {{ theMovie.movies_storyline }} </p>
    
</div>
</div>

    </div>

    <div class="video_wrap">
        <video :src='"trailers/" + theMovie.movies_trailer' controls alt="trailer"></video>
</div>
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
        this.$root.authenticated = true;
        console.log('get movie');
        fetch(`/api/movies/${this.id}`)
            .then(res => res.json())
            .then(data => {
                this.theMovie = data[0];
            })
            .catch(err => console.error(err))
    },
    components: {
        headernav: TheHeaderComponent
    }

}