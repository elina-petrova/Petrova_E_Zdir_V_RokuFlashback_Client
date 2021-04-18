export default {
    name: "TheHeaderComponent",
    template: `
            <div class="nav">
        <div class="nav_left">
             <div class="logo"> <router-link to="/homepage"><img src="images/roku.svg"></router-link></div>
                    <ul>
<li>
            <router-link class="hover" :to="{name: 'home', params: { mediatype: 'movies' } }" >Movies</router-link>
                </li>
                <li>
                    <router-link class="hover" :to="{name: 'home', params: { mediatype: 'tvs' } }" >Tvs</router-link>
                </li>
                <li>
                    <router-link class="hover" :to="{name: 'home', params: { mediatype: 'music' } }" >Music</router-link>
                </li>
</ul>

</div>
<div class="nav_right">
<div>
            <router-link to="/protected">{{ currentUser.user_fname }} </router-link>
</div>
<div>
    <p @click="this.$root.logout"><i class="fas fa-power-off"></i></p>
</div>
        </div>
        </div>


    `,
    data() {
        return {
            currentUser: '',
        }
    },
    created: function () {
        if (localStorage.getItem('cacheduser')) {
            this.currentUser = JSON.parse(localStorage.getItem('cacheduser'));
        }
    }
}

