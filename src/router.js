import Vue from 'vue';
import Router from 'vue-router';
import MainGrid from '@/components/MainGrid.vue';
import About from '@/components/About.vue';
import NewSong from '@/components/NewSong.vue';
import LoginView from '@/components/LoginView.vue';
import SongDetails from '@/components/SongDetails.vue';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'MainGrid',
      component: MainGrid,
      props: true

    },
    {
      path: '/about',
      name: 'about',
      component: About,
      props: true

    },
    {
      path: '/newsong',
      name: 'NewSong',
      component: NewSong,
      props: true

    },
    {
      path: '/songdetails/:songId',
      name: 'Songdetails',
      component: SongDetails,
      props: true
    },
    {
      path: '/loginview',
      name: 'LoginView',
      component: LoginView,
      props: true

    }
  ]
})