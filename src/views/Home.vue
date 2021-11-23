<template>
    <div class="home">
        <img alt="Vue logo" :src="logoPath" />
        <!-- Event modifiers! prevent default, stop propagation etc. -->
        <form
            class="login-form"
            @submit.prevent="handleSubmit"
        >
            <label class="login-form-input">
                Username:
                <input
                    type="text"
                    v-model="user.username"
                    v-focus
                />
            </label>
            <label class="login-form-input">
                Password:
                <input type="text" v-model="user.password" />
            </label>
            <label class="login-form-input">
                Hobbies:
                <input type="text" v-model="userHobbies" />
            </label>

            <button>Submit</button>
        </form>
        <!-- For debugging - if you just throw an object and try to render it -->
        <!-- Vue will stringify it for you! no [Object Object] :) -->
        {{ loggedInUser }}

        <ul ref="myList">
            <li
                v-for="(hobbie, idx) in user.hobbies"
                :key="idx"
            >
                {{ hobbie }}
            </li>
        </ul>

        <hr />

        <ul>
            <li
                v-for="product in products"
                :key="product.id"
            >
                <router-link :to="`/product-details/${product.id}`">
                    {{ product.title }}
                </router-link>

                <!-- <book-preview :book="book" @click.native="$emit('selected')" /> -->
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Home',
    bigMapTakesALotOfSpace: {},
    data() {
        return {
            user: {
                username: '',
                password: '',
                hobbies: [
                    'football',
                    'fútbol',
                    '足球'
                ]
            }
        }
    },
    computed: {
        /// these function must return some value - they will run every time the value changes
        /// EXAMPLE: i have a timestamp in my data and want to render it like:
        /// new Date(MY_TIMESTAMP).toLocaleDateString('he-IL')



        logoPath() {
            /// can also be used to return some NOT REACTIVE value just to make the template readable
            return require('@/assets/imgs/logo.png');
        },
        loggedInUser() {
            return this.$store.getters.loggedInUser;
        },
        products() {
            return this.$store.getters.products;
        },
        /// more advanced use of computed is with getter & setter
        userHobbies: {
            get() {
                return this.user.hobbies.join(', ');
            },
            set(val) {
                this.user.hobbies = val.split(', ').map(str => str.trim());
            }
        }
    },
    methods: {
        handleSubmit() {
            this.$store.dispatch({ type: 'loadUser', user: { ...this.user } });
        }
    },
    created() {
        this.$store.dispatch({ type: 'loadProducts' });
        this.$nextTick(() => {
            /// happens after Vue render!
        })
    },
    mounted() {
        console.log(this.$refs.myList)
        console.log(this.$options.bigMapTakesALotOfSpace);
    }
};
</script>
