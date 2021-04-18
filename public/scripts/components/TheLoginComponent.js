export default {
    name: 'TheLoginComponent',
    template: `
        <div class="container login_wrap">
            <div class="login_card">
                <h1 class="">Welcome to Flashback!</h1>
                <p class="headingSubtext">Before revisiting your favourite movies, tv shows or music from yesteryear, please log in with a valid username and password.</p>
                <hr class="">
                <form>
                    <div class="">
                        <div class="">
                            <label class="" for="inlineFormInputName">Name</label>
                            <input v-model="input.username" type="text" class="form-control" id="inlineFormInputName" placeholder="username" required>
                        </div>

                        <div class="">
                            <label class="" for="inlineFormPassword">Name</label>
                            <input v-model="input.password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
                        </div>

                        <div class="">
                            <button v-on:click.prevent="login()" type="submit" class="btn btn-primary">Go!</button>
                        </div>
                    </div>
                </form>            
            </div>
        </div>
     `,

    data() {
        return {
            input: {
                username: "",
                password: ""
            },

        }
    },

    methods: {
        login() {
            // let's check for valid input

            if (this.input.username != "" && this.input.password != "") {
                //do our login
                let loginData = JSON.stringify({ username: this.input.username, password: this.input.password });
                let url = `/ums/admin/login`;

                fetch(url, {
                    method: 'POST',
                    body: loginData,
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.message) {
                            console.warn("user doesn't exist, or something else broken");
                        } else {
                            data.user_name = this.input.username;
                            this.$root.authenticated = true;
                            this.$router.replace({ name: "users" });

                        }
                    })
                    .catch((err) => console.error(err));
            } else {
                //dont do login
                console.log("empty login and password");
            }
        }
    }
}