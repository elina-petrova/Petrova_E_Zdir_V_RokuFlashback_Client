import HomePage from "./components/TheHomePageComponent.js";
import LoginPage from "./components/TheLoginComponent.js";
import Protected from "./components/TheProtectedComponent.js";
import TheMovieThumb from './components/TheMovieThumbnailComponent.js';
import SingleMovie from './components/TheSingleMovieComponent.js';

(() => {
    console.log('fired!');

    const router = new VueRouter({
        // mode: "history",
        routes: [
            { path: "/", component: HomePage },
            { path: "/login", component: LoginPage },
            { path: "/movie/:id", name: "singlemovie", component: SingleMovie, props: true },

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
            allMovies: [],
            currentMovie: ''
        },
        created: function () {
            if (window.localStorage.getItem("creds")) {
                this.authenticated = true;
                this.user = JSON.parse(window.localStorage.getItem("creds")).name;
            }



        },
        methods: {

        },
        components: {
            moviethumb: TheMovieThumb
        },
        router,
    }).$mount("#app");
})();