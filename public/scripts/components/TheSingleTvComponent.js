import TheHeaderComponent from './TheHeaderComponent.js';

export default {
    name: "TheSingleTv",
    props: ["id"],
    template: `
    <div>

    <headernav></headernav>

    <div class="media_wrap">
        <div class="content_info_wrap">
            <div>
<img :src='"images/" + theTv.tv_cover' alt="tv poster">
</div>
        <div class="content_info">
        <h1> {{ theTv.tv_title }} </h1>
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

        <p> {{ theTv.tv_years }} </p>
        <p> {{ theTv.tv_runtime}} </p>
        <p> {{ theTv.genre_name }} </p>
        <p> {{ theTv.tv_seasons }} </p>
        <p> {{ theTv.director_name }} </p>
        <p> {{ theTv.country_name }} </p>
</div>

</div>
        <p> {{ theTv.tv_description}} </p>
</div>
</div>
</div>
    <div class="video_wrap">
        <video :src='currentFolder + currentEpisode' controls alt="trailer"></video>
</div>

<div class="episodes_section">
        <div class="season_selection"><p>Seasons:</p><a class="season_btn" v-for="n in theSeasonsQuantity" @click.prevent='filterSeasons(n, $event)' href="">{{ n }}  </a></div>
        <div class="episodes_wrap"> <div class="episode"  v-for="season in theSeasonsFiltered" :tv="season" :key="season.episode_id"> <img src="images/play.svg" alt="play button" @click.prevent='showEpisode(season)'> <p @click.prevent='showEpisode(season)'> {{ season.ep_title }} </p> </div></div>
</div>
</div>

    `,
    data() {
        return {
            theTv: {},
            theSeasons: {},
            theSeasonsFiltered: [],
            theSeasonsQuantity: 1,
            currentEpisode: {},
            currentFolder: "",
        }
    },
    created: function () {
        console.log('get tv');
        fetch(`/api/tvs/${this.id}`)
            .then(res => res.json())
            .then(data => {
                this.theTv = data[0];
                this.theSeasonsQuantity = parseInt(this.theTv.tv_seasons)
            })
            .catch(err => console.error(err))

        fetch(`/api/tvs/seasons/${this.id}`)
            .then(res => res.json())
            .then(data => {
                this.theSeasons = this.theSeasonsFiltered = data;
                this.theSeasonsFiltered = this.theSeasons.filter(tv => tv.ep_season == 1);
                this.currentEpisode = this.theSeasons[0].ep_src;
                this.currentFolder = `trailers/episodes_${this.theSeasons[0].tv_id}/`;
            })
            .catch(err => console.error(err))
    },
    mounted: function () {
        document.querySelectorAll('.season_btn')[0].classList.add("active_season");
    },
    methods: {
        filterSeasons(season, event) {
            this.theSeasonsFiltered = this.theSeasons.filter(tv => tv.ep_season == season);
            document.querySelector('.season_btn.active_season').classList.remove("active_season");
            event.target.classList.add("active_season");
        },
        showEpisode(episode) {
            console.log(episode);
            this.currentEpisode = episode.ep_src;
            this.currentFolder = `trailers/episodes_${episode.tv_id}/`
        }
    },
    components: {
        headernav: TheHeaderComponent
    }

}