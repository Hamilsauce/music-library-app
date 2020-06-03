import Vue from 'vue'
import App from './App.vue'
import router from './router';
import * as firebase from 'firebase';
import vClickOutside from 'v-click-outside'
import store from '@/store'

Vue.use(vClickOutside)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),


  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyC6vTWeKm37XxoqzOyAEbNUs_60XK0xAjI",
      authDomain: "ham-radio-music.firebaseapp.com",
      databaseURL: "https://ham-radio-music.firebaseio.com",
      projectId: "ham-radio-music",
      storageBucket: "ham-radio-music.appspot.com",
      messagingSenderId: "483571930440",
      appId: "1:483571930440:web:08552b24a657eff2fd8f7d"
    })
  }
}).$mount('#app')