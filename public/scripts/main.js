import HomePage from "./components/TheHomePageComponent.js";
import LoginPage from "./components/TheLoginComponent.js";
import Protected from "./components/TheProtectedComponent.js";
import TheMovieThumb from './components/TheMovieThumbnailComponent.js';
import SingleMovie from './components/TheSingleMovieComponent.js';
import SingleTv from './components/TheSingleTvComponent.js';
import SingleMusic from './components/TheSingleMusicComponent.js';

(() => {
    console.log('fired!');

    const router = new VueRouter({
        // mode: "history",
        routes: [
            { path: "/", redirect: { name: "home" } },
            { path: "/login", name: "login", component: LoginPage },
            { path: "/protected", component: Protected },
            { path: "/movie/:id", name: "singlemovie", component: SingleMovie, props: true },
            { path: "/tv/:id", name: "singletv", component: SingleTv, props: true },
            { path: "/music/:id", name: "singlemusic", component: SingleMusic, props: true },

            {
                path: "/homepage",
                component: HomePage,
                name: "home"
            }
        ]
    })


    const vm = new Vue({
        router,
        data: {
            message: 'Hello!',
            authenticated: false,
            allMovies: [],
            currentMovie: ''
        },
        created: function () {
            if (window.localStorage.getItem("creds")) {
                console.log('logged in');
                this.authenticated = true;
                this.user = JSON.parse(window.localStorage.getItem("creds")).name;
            } else {
                this.$router.push({ name: "login" });
            }
        },
        methods: {

        },
        components: {
            moviethumb: TheMovieThumb
        }
    }).$mount("#app");

    router.beforeResolve((to, from, next) => {
        if (!vm.authenticated) {
            console.log("go login!");
            next("login");
        } else {
            console.log("its okay he is logged in");
            next();
        }
    })

})();