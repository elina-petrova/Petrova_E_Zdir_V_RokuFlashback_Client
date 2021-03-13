export default {
    name: "TheSingleTv",
    props: ["id"],
    template: `
    <div>
        <h1> {{ theTv.tv_title }} </h1>
        <img :src='"images/" + theTv.tv_cover' alt="tv poster">
    </div>
    `,
    data() {
        return {
            theTv: {},
        }
    },
    created: function () {
        console.log('get tv');
        fetch(`/api/tvs/${this.id}`)
            .then(res => res.json())
            .then(data => {
                this.theTv = data[0];
            })
            .catch(err => console.error(err))
    },

}