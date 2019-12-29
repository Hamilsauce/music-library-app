import Vue from 'vue';
import Router from 'vue-router';
import MainGrid from '@/components/MainGrid.vue';
import About from '@/components/About.vue';
import NewSong from '@/components/NewSong.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'MainGrid',
            component: MainGrid
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/newsong',
            name: 'NewSong',
            component: NewSong
        }
    ]
})