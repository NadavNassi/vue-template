import Vue from 'vue';
import Vuex from 'vuex';

import { userStore } from './modules/user.store';
import { productStore } from './modules/product.store';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {

    },
    getters: {

    },
    modules: {
        userStore,
        productStore
    }
});
