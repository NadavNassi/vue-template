import { userService } from '@/services/user.service';

export const userStore = {
    state: {
        loggedInUser: null
    },
    getters: {
        /// synchronous functions that return a piece of state / some computed value based on it
        loggedInUser(state) {
            return state.loggedInUser;
        }
    },
    mutations: {
        /// synchronous functions that changes the state - similar to Redux's reducer functions
        setLoggedInUser(state, { user }) {
            state.loggedInUser = user;
        }
    },
    actions: {
        /// a synchronous functions that fetches some data (usually) and then calls some mutation
        async loadUser(context, { user }) {
            const { username, password } = user;
            const loggedInser = await userService.getLoggedInUser(username, password);
            /// context is like 'this.$store' from any component - it allows to call a mutation
            context.commit({ type: 'setLoggedInUser', user: loggedInser });
        }
    },
}