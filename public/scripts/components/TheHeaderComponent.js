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
<div>
            <router-link class="hover" to="/protected">Profile</router-link>
</div>
        </div>


    `,
}

