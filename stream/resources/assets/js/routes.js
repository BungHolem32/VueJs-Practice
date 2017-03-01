/**
 * Created by ilanv on 28/02/2017.
 */
import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./views/Home')
    },
    {
        path: '/about',
        component: require('./views/About')
    },
    {
        path: '/contact',
        component: require('./views/Contact')
    }
]

export default  new VueRouter({
    routes,

    linkActiveClass: 'is-active'

});