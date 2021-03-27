export default {
    name: "TheSingleTv",
    props: ["id"],
    template: `
    <div>
        <h1> {{ theTv.tv_title }} </h1>
        <img :src='"images/" + theTv.tv_cover' alt="tv poster">

        <p> Year: {{ theTv.tv_years }} </p>
        <p> Runtime: {{ theTv.tv_runtime}} </p>
        <p> Genre: {{ theTv.genre_name }} </p>
        <p> Seasons: {{ theTv.tv_seasons }} </p>
        <p> Director: {{ theTv.director_name }} </p>
        <p> Country:  {{ theTv.country_name }} </p>
        <p> Description: {{ theTv.tv_description}} </p>

        <a  v-for="n in theSeasonsQuantity" @click.prevent='filterSeasons(n)' href=""> Season {{ n }}  </a>

        <p> {{ theSeasonsQuantity }} </p>
        <p v-for="season in theSeasonsFiltered" :tv="season" :key="season.episode_id">  {{ season.ep_title }} </p>

    </div>
    `,
    data() {
        return {
            theTv: {},
            theSeasons: {},
            theSeasonsFiltered: [],
            theSeasonsQuantity: 1,
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
            })
            .catch(err => console.error(err))
    },
    methods: {
        filterSeasons(season) {
            this.theSeasonsFiltered = this.theSeasons.filter(tv => tv.ep_season == season);
        },
    }

}