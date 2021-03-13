export default {
    name: "TheSingleMusic",
    props: ["id"],
    template: `
    <div>
        <h1> {{ theMusic.music_title }} </h1>
        <img :src='"images/" + theMusic.music_cover' alt="music poster">
    </div>
    `,
    data() {
        return {
            theMusic: {},
        }
    },
    created: function () {
        console.log('get movie');
        fetch(`/api/music/${this.id}`)
            .then(res => res.json())
            .then(data => {
                this.theMusic = data[0];
            })
            .catch(err => console.error(err))
    },

}