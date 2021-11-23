import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from '../store';

import Home from '../views/Home';
import UserDetails from '../views/UserDetails';
import ProductDetails from '../views/ProductDetails';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            
        ]
    },
    {
        path: '/user-details',
        name: 'UserDetails',
        component: UserDetails,
        meta: { requiresAuth: true }
    },
    {
        path: '/product-details/:id',
        name: 'ProductDetails',
        component: ProductDetails,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: 'about' */ '../views/About.vue'),
        /// Yeah! is that easy...
    },
];

const router = new VueRouter({
    routes,
    linkExactActiveClass: 'exact-active',
});

router.beforeEach((to, from, next) => {
    // this func will run before each route mount and is a good place
    // to implement a 'route guard', to enable routing to a page we'll
    // need to call next() (like middlewares in Node)
    if (to.meta.requiresAuth) {
        if (Store.getters.loggedInUser) next();
        else next({ name: 'About' });
    } else {
        next();
    }
})

export default router;
