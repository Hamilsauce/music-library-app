import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songs: [],
    filterValue: ''
  },
  getters: {
    getSongs(state) {
      return state.songs
    }
  },
  mutations: {
    setSongs(state, fetchedSongs) {
      state.songs = fetchedSongs
    },
    updateFilter(state, filterVal) {
      state.filterValue = filterVal;
    }
  },
  actions: {
    initializeData(context) {
      let fetchSongs = [];
      const dbRef = firebase.database().ref("songs");
      dbRef.on("value", snap => {
        let songArray = Object.values(snap.val()).sort((a, b) => {
          if (a.id > b.id) {
            return -1;
          } else if (a.id < b.id) {
            return 1;
          } else {
            return 0;
          }
        });
        fetchSongs = songArray;
      });
      // EventBus.$emit("dataLoad", this.songs);
      context.commit('setSongs', fetchSongs)
    },
  },
  modules: {}
});