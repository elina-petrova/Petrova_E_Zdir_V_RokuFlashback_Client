import HomePage from "./components/TheHomePageComponent.js";
import LoginPage from "./components/TheLoginComponent.js";
import AllUsers from './components/TheAllUsersComponent.js';
import Protected from "./components/TheProtectedComponent.js";
import TheMovieThumb from './components/TheMovieThumbnailComponent.js';
import SingleMovie from './components/TheSingleMovieComponent.js';
import SingleTv from './components/TheSingleTvComponent.js';
import SingleMusic from './components/TheSingleMusicComponent.js';
import theMoviesHomepage from "./components/theMoviesHomepage.js";

(() => {
    console.log('fired!');

    const router = new VueRouter({
        // mode: "history",
        routes: [
            { path: "/", redirect: { name: "login" } },
            { path: '/users', name: 'users', component: AllUsers },
            { path: "/login", name: "login", component: LoginPage },
            { path: "/protected", component: Protected },
            { path: "/movie/:id", name: "singlemovie", component: SingleMovie, props: true },
            { path: "/tv/:id", name: "singletv", component: SingleTv, props: true },
            { path: "/music/:id", name: "singlemusic", component: SingleMusic, props: true },
            { path: "/movies", name: "movieshomepage", component: theMoviesHomepage, props: true },

            {
                path: "/homepage",
                component: HomePage,
                name: "home",
                props: true
            }
        ]
    })


    const vm = new Vue({
        router,
        data: {
            message: 'Hello!',
            authenticated: false,
            allMovies: [],
            currentMovie: '',
            authenticated: false,
            isAdmin: false,
            // user: '',
        },
        created: function () {
            // if (window.localStorage.getItem('cacheduser')) {
            //     console.log('logged in');
            //     this.authenticated = true;
            //     this.$router.push({ name: "home" });
            // }
            // } else {
            //     this.$router.push({ name: "login" });
            // }
        },
        methods: {
            logout: function () {
                //remove  the cahed user from local storage
                if (localStorage.getItem('cacheduser')) {
                    localStorage.removeItem('cacheduser');
                }


                this.authenticated = false;
                this.$root.isAdmin = false;

                this.$router.push({ name: "login" })
            }

        },
        components: {
            moviethumb: TheMovieThumb
        }
    }).$mount("#app");

    router.beforeResolve((to, from, next) => {
        if (to.name !== 'login' && !vm.authenticated) {
            console.log("go login!");
            next({ name: 'login' });
        } else {
            next();
        }
    })

})();