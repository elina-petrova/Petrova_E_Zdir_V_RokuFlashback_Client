import HomePage from "./components/TheHomePageComponent.js";
import LoginPage from "./components/TheLoginComponent.js";
import Protected from "./components/TheProtectedComponent.js";
import TheMovieThumb from './components/TheMovieThumbnailComponent.js';
import SingleMovie from './components/TheSingleMovieComponent.js';

(() => {
    console.log('fired!');

    const router = new VueRouter({
        routes: [
            { path: "/", component: HomePage },
            { path: "/login", component: LoginPage },
            { path: "/singlemovie", name: "singlemovie", component: SingleMovie },

            //show only if logged in / authenticated
            {
                path: "/admin",
                component: Protected,

                beforeEnter: (to, from, next) => {
                    // if you are NOT authenticated, then og to the login page
                    if (!vm.authenticated) {
                        next("/login");
                    } else {
                        // you are logegd in, you can go to the protected section
                        next();
                    }
                }
            }
        ]
    })

    const vm = new Vue({
        data: {
            message: 'Hello!',
            authenticated: false,
            user: "Elina",
            allMovies: [],
        },
        created: function () {
            if (window.localStorage.getItem("creds")) {
                this.authenticated = true;
                this.user = JSON.parse(window.localStorage.getItem("creds")).name;
            }

            fetch('/api/movies')
                .then(res => res.json())
                .then(data => {
                    console.table(data);
                    this.allMovies = data;
                })
                .catch(err => console.error(err))

        },
        methods: {

        },
        components: {
            moviethumb: TheMovieThumb
        },
        router,
    }).$mount("#app");
})();